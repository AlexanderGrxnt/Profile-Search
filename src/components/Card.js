import React from 'react';

const Card = ({id, name, email}) => {
    // const {id, name, email} = props;
    return(
       
        <div className="bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5">
            {/* <img alt ="robots" src = {`https://robohash.org/${id}?set=set3 `} /> */}
            <img className="profilePics" alt ="people" src = {`https://i.pravatar.cc/150?img=${id}`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
               
            </div>
        </div>
    )

    
}

export default Card;