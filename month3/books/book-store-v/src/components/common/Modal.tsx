import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa";
import { createPortal } from "react-dom";

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

function Modal({ children, isOpen, onClose }: Props) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  

  const handleClose = () => {
    onClose();
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      handleClose();
    }
  };

  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      handleClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeydown);
    } else {
      window.removeEventListener("keydown", handleKeydown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [isOpen]);

  if (!isOpen) return null;
  
  return createPortal(
    <ModalStyle onClick={handleOverlayClick}>
      <div className="modal-body" ref={modalRef}>
        <div className="modal-contents">{children}</div>
        <button className="modal-close" onClick={handleClose}>
          <FaPlus />
        </button>
      </div>
      <div className="modal-overlay" onClick={handleClose} />
    </ModalStyle>,
    document.body
  );
}

// 키프레임 생략
const ModalStyle = styled.div``;

export default Modal;