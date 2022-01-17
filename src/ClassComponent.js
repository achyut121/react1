import React, { Component } from 'react'

export class ClassComponent extends Component {
    render() {
        return (
            <div className='cls'>
                <h3>This is created using Class Component</h3>
                <p class="external-css">This is done using external css</p>
                <p style={{color: "red"}}>This is done using inline css</p>
            </div>
        )
    }
}

export default ClassComponent
