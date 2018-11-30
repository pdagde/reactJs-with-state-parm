import React ,{Component} from 'react';

class home extends Component{
    render() {
        const { homes } = this.props;
        const Homepage =homes.map(homeOne =>{
            return (
                <div className="home" key={homeOne.id}>
                 <div> Name: {homeOne.name}</div>
                 <div> Age: {homeOne.age}</div>
                 <div> Belt: {homeOne.belt}</div>
                </div>
            )
        }) 
        return (
            <div className="home">
                {Homepage}
            </div>
        );
    }
}
export default home