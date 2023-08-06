import { useState } from "react";
import { ButtonDialog, Container, ContainerIncomeOutcome, Dialog, DialogBackground, ImageClose, Income, InputsDialog, Outcome } from "./styles";
import { ContentImageTitle } from "./styles";
import closeIcon from "../../assets/close.svg"
import arrowUp  from "../../assets/arrowUp.svg"
import arrowDown from "../../assets/arrowDown.svg"

export function Header(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isIncomeActive, setIsIncomeActive] = useState(false);
    const [isOutcomeActive, setIsOutcomeActive] = useState(false);

    function handleClick(){
        setIsModalOpen(state=>!state);
    }

    function handleClickIncome(){
        setIsIncomeActive(state=>!state)

    }

    function handleCickOutcome(){
        setIsOutcomeActive(state=>!state)

    }
    
    return(
        <>
            {
                (isModalOpen) && 
                <>
                    <DialogBackground/>
                    <Dialog open={isModalOpen}>
                        <ImageClose src={closeIcon} alt="" onClick={handleClick}/>
                        <h1>Nova transação</h1>
                        <InputsDialog>
                            <input type="text" placeholder="Descrição"/>
                            <input type="text" placeholder="Preço"/>
                            <input type="text" placeholder="Categoria"/>
                        </InputsDialog>
                        <ContainerIncomeOutcome>
                            <Income onClick={handleClickIncome}
                            isIncomeActive={isIncomeActive}>
                                <img src={arrowUp} alt="" />
                                Entrada
                            </Income>
    
                            <Outcome onClick={handleCickOutcome} 
                            isOutcomeActive={isOutcomeActive}>
                                <img src={arrowDown} alt="" />
                                Saída
                            </Outcome>
                        </ContainerIncomeOutcome>
    
                        <ButtonDialog>Cadastrar</ButtonDialog>
                    </Dialog>
                </>    
            }
            <Container>
                <header>
                    <ContentImageTitle>
                        <img src="../../../src/assets/igniteSimbol.svg" alt="" />
                        <h1>DT Money</h1>
                    </ContentImageTitle>
    
                    <button type="button" onClick={handleClick}>Nova Transação</button>
                </header>
    
            </Container>
        </>

    );
}