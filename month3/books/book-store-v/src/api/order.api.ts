import { type Order, type OrderDetailItem, type OrderSheet } from "../models/order.model";
import { requestHandler } from "./http";

// export const order = async (orderData: OrderSheet) => {
//   const response = await httpClient.post("/orders", orderData);
//   return response.data;
// };

export const order = async (orderData: OrderSheet) => {
  return await requestHandler<OrderSheet>("post", "/orders", orderData);
};

export const fetchOrders = async () => {
  return await requestHandler<Order[]>("post", "/orders");
};

export const fetchOrder = async (orderId: number) => {
  return await requestHandler<OrderDetailItem[]>("post", `/orders/${orderId}`);
};