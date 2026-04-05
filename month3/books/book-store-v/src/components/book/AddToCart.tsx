import styled from "styled-components";
import type { BookDetail } from "../../models/book.model";
import InputText from "../common/InputText";
import Button from "../common/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
//import { useAlert } from "../../hooks/useAlert";

interface Props {
    book: BookDetail;
}

export default function AddToCart({ book }: Props) {
    const [quantity, setQuantity] = useState<number>(1);
    //const showAlert = useAlert();
    //const { addToCart, cartAdded } = useBook(book.id.toString());

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuantity(Number(e.target.value));
    }

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    }

    const handleDecrease = () => {
        if (quantity === 1) return;
        setQuantity(quantity - 1);
    }

    // const addToCart = () => {
    //     addCart({
    //         book_id: book.id,
    //         quantity
    //     }).then(() => {
    //         //showAlert("장바구니에 추가되었습니다.")
    //         setCartAdded(true);
    //         setTimeout(() => {
    //             setCartAdded(false);
    //         }, 3000);
    //     })
    // }

    return (
        <AddToCartStyle $added={cartAdded}>
            <div>
                <InputText inputType="number" value={quantity} onChange={handleChange}/>
                <Button size="medium" scheme="normal" onClick={handleIncrease}>
                    +
                </Button>
                <Button size="medium" scheme="normal" onClick={handleDecrease}>
                    -
                </Button>
            </div>
            <Button size="medium" scheme="normal" onClick={() => {} /*addToCart(quantiry)*/}>
                장바구니 담기
            </Button>
            {/*cartAdded && */(
                <div className="added">
                    <p>장바구니에 추가되었습니다.</p>
                    <Link to="/cart">장바구니로 이동</Link>
                </div>
            )}
            
        </AddToCartStyle>
    );
}

interface AddToCartStyleProps {
    $added: boolean;
}

const AddToCartStyle = styled.div<AddToCartStyleProps>`
.added {
    opacity: ${({ $added }) => $added ? "1" : "0"};
}
`;