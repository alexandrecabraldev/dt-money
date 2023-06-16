import { Container } from "./styles";
import { ContentImageTitle } from "./styles";

export function Header(){
    return(
        <Container>
            <header>
                <ContentImageTitle>
                    <img src="../../../public/igniteSimbol.svg" alt="" />
                    <h1>DT Money</h1>
                </ContentImageTitle>

                <button type="button">Nova Transação</button>
            </header>
        </Container>
    );
}