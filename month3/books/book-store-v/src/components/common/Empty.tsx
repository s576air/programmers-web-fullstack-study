import styled from "styled-components"
import Title from "./title";

interface Props {
    icon?: React.ReactNode;
    title: string;
    description?: React.ReactNode;
}

export default function Empty({
    icon, title, description
}: Props) {
    return (
        <EmptyStyle>
            {icon && <div className="icon">{icon}</div>}
            <Title size="large" color="secondary">
                {title}
            </Title>
            {description && <p>{description}</p>}
        </EmptyStyle>
    )
}

const EmptyStyle = styled.div``;