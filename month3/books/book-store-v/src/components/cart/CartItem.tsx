import styled from "styled-components"
import type { Cart } from "../../models/cart.model";
import Title from "../common/title";
import { formatNumber } from "../../utils/format";
import Button from "../common/Button";
import CheckIconButton from "./CheckIconButton";
import { useAlert } from "@/hooks/useAlert";

interface Props {
    cart: Cart;
    checkedItems: number[];
    onCheck: (id: number) => void;
    onDelete: (id: number) => void;
}

export default function CartItem({ cart, checkedItems, onCheck, onDelete }: Props) {
    const { showConfirm } = useAlert();
    const isChecked = useMemo(() => {
        return checkedItems.includes(cart.id);
    }, [checkedItems, cart.id]);

    const handleCheck = () => {
        onCheck(cart.id);
    }

    const handleDelete = () => {
        showConfirm("정말 삭제하시겠습니까?", () => {
            onDelete(cart.id);
        });
        onDelete(cart.id);
    }

    return (
        <CartItemStyle>
            <div className="info">
                <div className="check">
                    <CheckIconButton isChecked={isChecked} onCheck={handleCheck}/>
                </div>
                <div>
                    <Title size="medium">{cart.title}</Title>
                    <p className="summary">{cart.summary}</p>
                    <p className="price">{formatNumber(cart.price)} 원</p>
                    <p className="quantity">{cart.quantity} 원</p>
                </div>
            </div>
            <Button
                size="medium"
                scheme="normal"
                onClick={handleDelete}
            >
                장바구니 삭제
            </Button>
        </CartItemStyle>
    )
}

const CartItemStyle = styled.div``;