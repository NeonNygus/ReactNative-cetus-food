import { create } from "zustand";
import dishesData from "../../constants/dishesData";

type Order = {
  orders: {
    orderId: number;
    dishId: number;
  }[];
  totalPrice: 0;
  addOrder: (id: number) => void;
  removeOrder: (id: number) => void;
  clearOrders: () => void;
};
export const useOrder = create<Order>()((set) => ({
  orders: [],
  totalPrice: 0,
  addOrder: (id) =>
    set((state) => ({
      orders: [...state.orders, { orderId: Date.now(), dishId: id }],
      totalPrice: (state.totalPrice += dishesData[id - 1].price),
    })),
  removeOrder: (id) =>
    set((state) => ({
      orders: state.orders.filter((item) => item.orderId != id),
    })),
  clearOrders: () => set(() => ({ orders: [] })),
}));
