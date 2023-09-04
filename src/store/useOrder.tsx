import { create } from "zustand";
import dishesData from "../../constants/dishesData";

type Order = {
  orders: {
    orderId: number;
    dishId: number;
  }[];
  addOrder: (id: number) => void;
  removeOrder: (id: number) => void;
  clearOrders: () => void;
};
export const useOrder = create<Order>()((set) => ({
  orders: [],
  addOrder: (id) =>
    set((state) => ({
      orders: [...state.orders, { orderId: Date.now(), dishId: id }],
    })),
  removeOrder: (id) =>
    set((state) => ({
      orders: state.orders.filter((item) => item.orderId != id),
    })),
  clearOrders: () => set(() => ({ orders: [] })),
}));
