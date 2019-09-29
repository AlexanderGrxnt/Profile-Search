import React from 'react';

const Scroll = (props) => {
    return (
        <div className="bt bb b--white" style={{overflowY: 'auto',  height: '800px'}}>
            {props.children}
        </div>
    )
};

export default Scroll;