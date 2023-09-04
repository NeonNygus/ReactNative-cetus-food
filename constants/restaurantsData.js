export const restaurantsNames = {
  1: "Majeranek Catering",
  2: "Proza",
};

export default [
  {
    id: 1,
    name: restaurantsNames[1],
    description:
      "Nie zaliczamy się do grupy tzw. „fast-food”. Zastawy dnia są wstępnie przygotowywane, co skraca czas ich wydania, ale posiłki są „dokańczane” po otrzymania zamówienia. Zupę możemy ugotować rano, przygotować sos, farsz, mięso upiec wcześniej, ale nie trzymamy usmażonych kotletów czy frytek, pokrojonych ogórków na mizerię, czy pomidorów do sałatki wiosennej itp.",
    address: "Zawiszy Czarnego 16, 35-082 Rzeszów",
    ordersHour: "12:00",
    pricesRange: [9, 23],
    rating: 2,
    image: require("../assets/img/Restaurants/Majeranek.png"),
    menuImage: require("../assets/img/Restaurants/Majeranek_menu.png"),
  },
  {
    id: 2,
    name: restaurantsNames[2],
    description:
      "Proza to regionalna restauracja słynąca w Rzeszowie ze swoich pysznych, domowych “placków na prozie” czyli proziaków. Serwuje dania wyłącznie z własnego pieca - żadnych gotowców, mrożonek, skrótów. Dlatego jest to jedna z najsłynniejszych restauracji w Rzeszowie. Proziaki serwowane w wielu odsłonach zarówno na słodko jak i wytrawnie, domowa nutella czy zupy krem z każdego możliwego warzywa - tylko w Prozie.",
    address: "Jana Karola Chodkiewicza 7, 35-020 Rzeszów",
    ordersHour: "13:00",
    pricesRange: [20, 33],
    rating: 4,
    image: require("../assets/img/Restaurants/Proza.png"),
    menuImage: require("../assets/img/Restaurants/Proza_menu.png"),
  },
];
