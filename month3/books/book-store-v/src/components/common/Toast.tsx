import { useToastStore, type ToastItem } from "@/store/toastStore";
import styled from "styled-components";
import { FaPlus, FaBan, FaInfoCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import useTimeout from "@/hooks/useTimeout";

function Toast({ id, message, type }: ToastItem) {
  const removeToast = useToastStore((state) => state.removeToast);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleRemoveToast = () => {
    setIsFadingOut(true);
  };

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     handleRemoveToast();
  //   }, /*TOAST_REMOVE_DELAY*/ 2000);

  //   return () => clearTimeout(timer);
  // }, []);

  useTimeout(() => {
    setIsFadingOut(true);
  }, 2000);

  useEffect(() => {
    if (isFadingOut) {
      const timeout = setTimeout(() => {
        removeToast(id);
      }, 300); // 애니메이션 지속 시간 후 삭제
      return () => clearTimeout(timeout);
    }
  }, [isFadingOut, id, removeToast]);

  const handleAnimationEnd = () => {
    if (isFadingOut) {
      removeToast(id);
    }
  };

  return (
    <ToastStyle
      className={isFadingOut ? "fade-out" : "fade-in"}
      onAnimationEnd={handleAnimationEnd}
    >
      <p>
        {type === "info" && <FaInfoCircle />}
        {type === "error" && <FaBan />}
        {message}
      </p>
      <button onClick={handleRemoveToast}>
        <FaPlus />
      </button>
    </ToastStyle>
  );
}

const ToastStyle = styled.div`
@keyframe fade-in {
from { opacity: 0; }
to { opacity: 1; }
}

@keyframe fade-out {
from { opacity: 1; }
to { opacity: 0; }
}

&.fade-in {
    animation: fade-in 0.3s ease-in-out forwards;
}
`;

export default Toast;
