import { useState } from "react";

export function useOpenFood() {
  const [openFood, setOpenFood] = useState(null);
  return {
    openFood,
    setOpenFood
  };
}
