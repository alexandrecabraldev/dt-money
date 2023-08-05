import { TableContainer, Trow } from "./style";

export function Table(){
    return(
        <TableContainer>
            <tbody>
                <Trow>
                    <td>
                        Desenvolvimento de site
                    </td>
                    <td>
                        R$ 12.000,00
                    </td>
                    <td>
                        Venda
                    </td>
                    <td>
                        13/04/2022
                    </td>
                </Trow>

                <Trow>
                    <td>
                        Hamburguer
                    </td>
                    <td>
                        - R$ 59,00
                    </td>
                    <td>
                        Alimentação
                    </td>
                    <td>
                        10/04/2022
                    </td>
                </Trow>
            </tbody>
        </TableContainer>
    );
}