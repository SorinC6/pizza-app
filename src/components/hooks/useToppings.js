import { useState } from "react";
const toppingsList = [
  "Extra Cheese",
  "Pepperoni",
  "Ham",
  "Mushrooms",
  "Bacon",
  "Onions",
  "Pinapple",
  "Sausage",
  "Spinach"
];

const getDefaultToppings = () => {
  return toppingsList.map(topping => {
    return {
      name: topping,
      checked: false
    };
  });
};

export function useToppings(defaultToppings) {
  const [toppings, setToppings] = useState(
    defaultToppings || getDefaultToppings()
  );

  function checkTopping(index) {
    const newToppings = [...toppings];
    newToppings[index].checked = !newToppings[index].checked;
    setToppings(newToppings);
  }

  return {
    checkTopping,
    toppings
  };
}
