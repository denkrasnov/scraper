import { useState } from "react";

import { Filter, UseFilterReturn } from "./types";

const useFilter = <T extends object>(items: T[]): UseFilterReturn<T> => {
  const [filters, setFilters] = useState<Filter[]>([]);

  const filter = (checked: boolean, value: string, filterByKey: string) => {
    const indexFilter = filters.findIndex((filter) => filter.value === value);

    if (indexFilter === -1) {
      if (checked) {
        // add the filter
        setFilters([...filters, { key: filterByKey, value }]);
      }
    }

    if (!checked) {
      // remove the filter
      const filtersCopy = [...filters];
      filtersCopy.splice(indexFilter, 1);
      setFilters(filtersCopy);
    }
  };
  const filtered = filters.length
    ? items.filter((item) => {
        let match: boolean = false;
        filters.forEach((filter) => {
          if (item[filter?.key] === filter?.value) {
            match = true;
          }
        });
        return match;
      })
    : items;

  return [filtered, filter];
};

export default useFilter;
