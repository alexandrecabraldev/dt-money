import { ContainerSummary, Container,TextValue } from "./style";
import ArrowUp from "../../assets/arrowUp.svg";
import ArrowDown from "../../assets/arrowDown.svg";
import Dollar from "../../assets/dollar.svg";


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
                <div>
                    <span>Entradas</span>
                    <img src={ArrowDown} alt="" />
                </div>
                <TextValue>R$ 1.259,00</TextValue>
            </Container>
                
            <Container colorBackground>
                <div>
                    <span>Entradas</span>
                    <img src={Dollar} alt="" />
                </div>
                <TextValue>R$ 16.141,00</TextValue>
            </Container>
        </ContainerSummary>
        
    );
}