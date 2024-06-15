import Box from "../../Box";
import Image from "../Image";

export default {
  title: "Components/Image"
};

export const Default = {
  render: () => (
    <Box height="150px" width="350px">
      <Image
        alt="Storybook example"
        objectFit="fill"
        src="https://via.placeholder.com/350x150"
      />
    </Box>
  ),

  name: "Image"
};
