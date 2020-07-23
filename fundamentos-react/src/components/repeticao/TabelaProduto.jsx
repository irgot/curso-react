import React from 'react'
import produtos from '../../data/produtos'
import {Table} from 'react-bootstrap'

export default props => {
    const tabelaProdutos=produtos.map((produto,i)=>{
        const {id,name,price} = produto
        return(
            <tr key={id}>
                <td>
                    {id}
                </td>
                <td>
                    {name}
                </td>
                <td>
                    {price}
                </td>
            </tr>
        )
    })
    return(
        <div>
            <Table striped bordered hover>
                <thead>
                    <th>
                        #
                    </th>
                    <th>
                        Nome
                    </th>
                    <th>
                        Preço
                    </th>
                </thead>
                <tbody>
                    {tabelaProdutos}
                </tbody>
            </Table>
        </div>
    )
}