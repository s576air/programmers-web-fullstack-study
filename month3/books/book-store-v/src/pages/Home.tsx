import Title from "@/components/common/Title";
import MainReview from "@/components/main/MainReview";
import { useMain } from "@/hooks/useMain";
import styled from "styled-components";

function Home() {
    const { reviews } = useMain();
  return (
    <HomeStyle>
      {/* 배너 */}
      {/* 베스트셀러 */}
      {/* 신간 */}
      {/* 리뷰 */}
      <section className="section">
        <Title size="large">리뷰</Title>
        <MainReview reviews={reviews} />
      </section>
    </HomeStyle>
  );
}

const HomeStyle = styled.div``;

export default Home;

/*
<Title size="large" color="secondary">제목 테스트</Title>
<Button size="large" scheme="normal">버튼 테스트</Button>
<InputText placeholder="여기에 입력하세요" />

_comp가 안됩니다..
*/