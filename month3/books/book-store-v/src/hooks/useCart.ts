import { useEffect, useState } from "react"
import { type Cart } from "../models/cart.model"
import { deleteCart, fetchCart } from "../api/carts.api";

export const useCart: () => {
    carts: Cart[],
    isEmpty: boolean,
    deleteCartItem: (id: number) => void
} = () => {
    const [carts, setCarts] = useState<Cart[]>([]);
    const [isEmpty, setIsEmpty] = useState(true);

    const deleteCartItem = (id: number) => {
        deleteCart(id.toString()).then(() => {
            setCarts(carts.filter((cart) => cart.id !== id));
        })
    }

    useEffect(() => {
        fetchCart().then((carts) => {
            setCarts(carts);
            setIsEmpty(carts.length === 0);
        })
    }, []);
    return { carts, isEmpty, deleteCartItem };
}