import React from 'react';

    const home = ({homes}) => {
        const Homepage =homes.map(homeOne =>{
            return homeOne.age > 24 ? (
                 <div className="home" key={homeOne.id}>
                 <div> Name: {homeOne.name}</div>
                 <div> Age: {homeOne.age}</div>
                 <div> Belt: {homeOne.belt}</div>
                </div>
            ) : null
        }) 
        return (
            <div className="home">
                {Homepage}
            </div>
        );
    }
export default home