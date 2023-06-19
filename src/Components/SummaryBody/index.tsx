import { Button, Form, Search } from "./style";
import searchIcon from "../../assets/searchIcon.svg"

export function SummarySearch(){
    return(
        <Form>
            <Search placeholder="Busque uma transação"/>
            <Button type="button">
                <img src={searchIcon} alt=""/>
                Buscar
            </Button>
        </Form>
    );
}