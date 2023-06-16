import { ContainerSummary, Container,TextValue } from "./style";
import ArrowUp from "../../assets/arrowUp.svg"

export function Summary(){
    return (
        <ContainerSummary>
            <Container>
                <div>
                    <span>Entradas</span>
                    <img src={ArrowUp} alt="" />
                </div>
                <TextValue>R$ 17.400,00</TextValue>
            </Container>

            <Container>

            </Container>

            <Container colorBackground>

            </Container>
        </ContainerSummary>
        
    );
}