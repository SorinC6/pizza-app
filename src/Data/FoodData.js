export function formatPrice(price) {
  return price.toLocaleString("de-DE", {
    style: "currency",
    currency: "EUR"
  });
}

export const foodItems = [
  {
    name: "Cheese Pizza",
    img: "/img/pizza1.jpg",
    section: "Pizza",
    price: 2
  },
  {
    name: "Peperonii Pizza",
    img: "/img/pizza2.jpg",
    section: "Pizza",
    price: 1.5
  },
  {
    name: "Spice Pizza",
    img: "/img/pizza3.jpg",
    section: "Pizza",
    price: 1.6
  },
  {
    name: "Crampy Burger",
    img: "/img/pizza4.jpg",
    section: "Sandwitch",
    price: 1.3
  },
  {
    name: "King Burger",
    img: "/img/pizza5.jpg",
    section: "Sandwitch",
    price: 2.5
  },
  {
    name: "Arthur Sandwitch",
    img: "/img/pizza6.jpg",
    section: "Sandwitch",
    price: 1.9
  },
  {
    name: "Solomon Hamburger",
    img: "/img/pizza7.jpg",
    section: "Sandwitch",
    price: 2.2
  },
  {
    name: "Prosciuto Pizza",
    img: "/img/pizza8.jpg",
    section: "Pizza",
    price: 2.7
  },
  {
    name: "Nuggets",
    img: "/img/nuggets.jpg",
    section: "Sandwitch",
    price: 1.2
  },
  {
    name: "Fries",
    img: "/img/fries.jpg",
    section: "Fries",
    price: 0.5
  },
  {
    price: 1,
    name: "Soda",
    section: "Drinks",
    choices: ["Coke", "Sprite", "Beer"]
  }
];

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});
