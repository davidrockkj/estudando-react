import React from 'react'

export default props => {
    const sobrenome = props.sobrenome;

    return (
        <div>
            {
                React.Children.map(props.children, child => {
                    return React.cloneElement(child, { sobrenome });
                })
            }
        </div>
    )
}
