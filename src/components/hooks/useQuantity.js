import { useState } from "react";

export function useQuantity(defaultQuanitity) {
  const [value, setValue] = useState(defaultQuanitity || 1);

  function onChange(e) {
    if (!(+e.target.value > 1)) {
      setValue(1);
      return;
    }
    setValue(+e.target.value);
  }

  return {
    value,
    setValue,
    onChange
  };
}
