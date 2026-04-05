import { generatePath } from "react-router-dom";
import type { Cart } from "../models/cart.model";
import { httpClient } from "./http";

interface AddCartParams {
    book_id: number;
    quantity: number;
}

export const addCart = async (params: AddCartParams) => {
    const response = await httpClient.post("/carts", params);
    return response.data;
}

export const fetchCart = async () => {
    const response = await httpClient.get<Cart[]>("/carts");
    return response.data;
}

export const deleteCart = async (cartId: string) => {
    const url = generatePath('/carts/:cartId', {cartId});
    const response = await httpClient.delete(url);
    return response.data;
}