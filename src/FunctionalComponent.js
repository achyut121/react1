import React from 'react';

function FunctionalComponent() {
    return (
        <div className='func'>
            <h3>This is created using Functional Component</h3>
            <p class="external-css">This is done using external css</p>
            <p style= {{color: "blue"}}>This is done using inline css</p>
        </div>
    )
}

export default FunctionalComponent;
