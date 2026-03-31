import { Button } from "../components/common/Button";
import InputText from "../components/common/InputText";
import Title from "../components/common/title";

function Home() {
    return (
        <>
            <Title size="large" color="secondary">제목 테스트</Title>
            <Button size="large" scheme="normal">버튼 테스트</Button>
            <div>home body</div>
            <InputText placeholder="여기에 입력하세요" />
        </>
    );
}

export default Home;