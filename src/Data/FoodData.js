export const foodItems = [
  {
    name: "Cheese Pizza",
    img: "/img/pizza1.jpg",
    section: "Pizza"
  },
  {
    name: "Peperonii Pizza",
    img: "/img/pizza2.jpg",
    section: "Pizza"
  },
  {
    name: "Spice Pizza",
    img: "/img/pizza3.jpg",
    section: "Pizza"
  },
  {
    name: "Crampy Burger",
    img: "/img/pizza4.jpg",
    section: "Sandwitch"
  },
  {
    name: "King Burger",
    img: "/img/pizza5.jpg",
    section: "Sandwitch"
  },
  {
    name: "Arthur Sandwitch",
    img: "/img/pizza6.jpg",
    section: "Sandwitch"
  },
  {
    name: "Solomon Hamburger",
    img: "/img/pizza7.jpg",
    section: "Sandwitch"
  },
  {
    name: "Prosciuto Pizza",
    img: "/img/pizza8.jpg",
    section: "Pizza"
  },
  {
    name: "Nuggets",
    img: "/img/nuggets.jpg",
    section: "Sandwitch"
  },
  {
    name: "Fries",
    img: "/img/fries.jpg",
    section: "Fries"
  }
];

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});
