import React from 'react'
import Card from './Card'
export default props => {    
    return(
        <Card title="Soma de números" purple>
            <div>
                <span>Resultado: 
                    <strong>{10} </strong>                    
                </span>
            </div>
        </Card>
    )
}