import Apify from "apify";
// /^https:\/\/maximum\.md\/ro\/search\/[0-9]\?query=frigider/
export const runTest = () => {
  Apify.main(async () => {
    const requestQueue = await Apify.openRequestQueue();

    await requestQueue.addRequest({
      url: "https://maximum.md/ro/televizoare/televizoare/televizoare/1"
    });

    const pseudoUrls = [
      new Apify.PseudoUrl(
        /^https:\/\/maximum\.md\/ro\/televizoare\/televizoare\/televizoare\/[0-9]$/
      )
    ];
    const dataset = await Apify.openDataset("links");
    const crawler = new Apify.PuppeteerCrawler({
      requestQueue,
      handlePageFunction: async ({ request, page }) => {
        const rawExtraLinks = await page.evaluate(() => {
          const products = document.querySelectorAll("div.product__item");

          if (products.length > 0) {
            return Array.from(products).map((product) => {
              const titleLinkElement: HTMLLinkElement | null = product.querySelector(
                "div.product__item__title a"
              );

              const productUrl = titleLinkElement && titleLinkElement.href;

              return productUrl;
            });
          }
          return [];
        });

        await dataset.pushData({
          url: request.url,
          productsLinks: rawExtraLinks
        });

        await Apify.utils.enqueueLinks({
          page,
          selector: "a",
          pseudoUrls,
          requestQueue
        });
      },
      maxConcurrency: 10,
      maxRequestRetries: 1,
      launchPuppeteerOptions: {
        stealth: true,
        // @ts-ignore
        headless: true
      }
    });

    await crawler.run();

    const productsLinksArrays = await dataset.map(async (item: any) => {
      return item.productsLinks;
    });
    const keyValueStore = await Apify.openKeyValueStore();
    await dataset.drop();
    await requestQueue.delete();
    await keyValueStore.delete();

    // const productsLinks: string[] = (productsLinksArrays.flat() as unknown) as string[];

    const requestList = await Apify.openRequestList(
      "product-list",
      productsLinksArrays[0] as string[]
    );

    const datasetProducts = await Apify.openDataset("products");
    const productCrawler = new Apify.PuppeteerCrawler({
      requestList,
      handlePageFunction: async ({ request, page }) => {
        const product = await page.evaluate(() => {
          const productPage = document.querySelector(
            "div.wrapper div.product_page"
          );

          let productData: any = {};
          if (productPage) {
            /* PRODUCT - START */
            const titleElement = productPage.querySelector(
              "div.product-view__title h1"
            );
            const priceNewElement = productPage.querySelector(
              "div.product-view-info div.current-price"
            );
            const imageElement: HTMLImageElement | null = productPage.querySelector(
              "div.product-view-gallery div.product-slider__main__item img"
            );

            productData = {
              title: titleElement?.textContent?.trim(),
              price: priceNewElement?.textContent?.trim(),
              imageUrl: imageElement?.src
            };

            /* SPECIFICATIONS - START */
            const specsBlock = productPage.querySelector(
              "div.wrap-full-overview"
            );

            if (specsBlock) {
              const colSm6 = specsBlock.querySelectorAll(
                "div.row div.col-md-12 div.tab_content div.tabs_item div.col-sm-6"
              );

              const featureBlockList = colSm6[0].children;

              let screenSize: string | undefined | null;
              Array.from(featureBlockList).forEach((featureBlock) => {
                if (
                  featureBlock.className === "feature-title" &&
                  featureBlock.textContent === "Imagine"
                ) {
                  const featureList = featureBlock.nextElementSibling?.querySelectorAll(
                    "li"
                  );

                  if (featureList) {
                    Array.from(featureList).forEach((feature) => {
                      const isInch = feature.firstElementChild?.textContent?.includes(
                        "inch"
                      );

                      if (isInch && !screenSize) {
                        screenSize = feature
                          ?.querySelector("span.feature-list-item_right")
                          ?.textContent?.trim();
                      }
                    });
                  }
                }
              });

              productData.specs = { screenSize: screenSize || "alte" };
            }
          }

          return productData;
        });

        await datasetProducts.pushData({
          url: request.url,
          product
        });
      },
      maxConcurrency: 10,
      maxRequestRetries: 1,
      launchPuppeteerOptions: {
        stealth: true,
        // @ts-ignore
        headless: true
      }
    });

    await productCrawler.run();

    const data = await datasetProducts.getData();
    console.log(data);

    const keyValueStoreProduct = await Apify.openKeyValueStore();
    await datasetProducts.delete();
    await keyValueStoreProduct.delete();
  });
};
