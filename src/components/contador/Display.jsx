import React from 'react'

// O display representa apenas o <h3> no contador

export default props => {
    return (
        // <h3>{this.state.numero}</h3>
        <h3>{props.numero}</h3>
    )
}