import { restaurantsNames } from "./restaurantsData";

export const dishTypes = {
  1: "Zestaw",
  2: "Zupa",
  3: "Drugie danie",
};

export default [
  {
    id: 1,
    name: "Zestaw #1",
    restaurant: restaurantsNames[1],
    description: "Zupa krem brokułowy + Placki ziemniaczne z gulaszem",
    price: 29.5,
    type: dishTypes[1],
  },
  {
    id: 2,
    name: "Zestaw #2",
    restaurant: restaurantsNames[1],
    description: "Zupa amerykańska + Ryż po wietnamsku",
    price: 31.5,
    type: dishTypes[1],
  },
  {
    id: 3,
    name: "Żarcie",
    restaurant: restaurantsNames[1],
    description: "Kurczak z frytkami",
    price: 12.7,
    type: dishTypes[3],
  },
  {
    id: 4,
    name: "Prosiak",
    restaurant: restaurantsNames[2],
    description: "Proziak z wieprzowiną",
    price: 31.6,
    type: dishTypes[3],
  },
  {
    id: 5,
    name: "Zupa",
    restaurant: restaurantsNames[1],
    description: "Zupa krem brokułowy",
    price: 9,
    type: dishTypes[2],
  },
];
