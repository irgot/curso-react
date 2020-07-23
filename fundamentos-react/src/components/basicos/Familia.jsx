import React, { cloneElement } from 'react'

export default props =>{
    console.log(typeof props.children)
    return(
        <div>
            {/* {React.cloneElement(props.children,{...props})} 1 Elemento apenas */}
            {
                React.Children.map(props.children,(el)=>{
                    return cloneElement(el,{...props})
                })
            }
        </div>
    )
}
