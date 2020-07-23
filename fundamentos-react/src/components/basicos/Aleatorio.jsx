import React from 'react'

export default (props)=>{
    const aleatorio=parseInt(Math.random()*(props.max-props.min)+props.min)
    return(<div>{aleatorio}</div>)
}
