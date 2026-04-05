import styled from "styled-components";
import Button from "../common/Button";
import { useEffect } from "react";

interface Props {
  onCompleted: (address: string) => void;
}

const SCRIPT_URL = "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";

function FindAddressButton({ onCompleted }: Props) {
  const handleOpen = () => {
    new window.daum.Postcode({
      oncomplete: (data: any) => {
        onCompleted(data.address as string);
      },
    }).open();
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = SCRIPT_URL;
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // button은 기본적으로 submit이기 때문에 폼 제출이 된다.
  // 단순 기능 버튼이면 type="button"을 명시해 줘야 한다.
  return (
    <Button type="button" size="medium" scheme="normal">
      주소 찾기
    </Button>
  );
}

const FindAddressButtonStyle = styled.div``;

export default FindAddressButton;