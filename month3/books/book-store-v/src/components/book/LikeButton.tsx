import { FaHeart } from "react-icons/fa";
import type { BookDetail } from "../../models/book.model";
import styled from "styled-components";
import Button from "../common/Button";
import "@/cart/CartItem";

interface Props {
    book: BookDetail;
    onClick: () => void;
}

export default function LikeButton({ book, onClick }: Props) {
    return (
        <LikeButtonStyle
            size="medium"
            scheme={book.liked ? "like" : "normal"}
            onClick={onClick}
        >
            <FaHeart />
            {book.likes}
        </LikeButtonStyle>
    )
}

const LikeButtonStyle = styled(Button)``;
