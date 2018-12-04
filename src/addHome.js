import React, {Component} from 'react'

class AddHome extends Component {
    state = {
        name:null,
        age:null,
        belt:null
    }
    handalOnchange = (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handalSubmit = (e) =>{
        e.preventDefault();
        this.props.addHome(this.state);

    }
    render(){
        return (
            <div>
                <form onSubmit={this.handalSubmit}>
                    <label htmlFor="name">NAME:</label>
                    <input type="text" id="name" onChange={this.handalOnchange} ></input>
                    <label htmlFor="age">AGE:</label>
                    <input type="text" onChange={this.handalOnchange} id="age"></input>
                    <label htmlFor="belt">BELT:</label>
                    <input type="text" onChange={this.handalOnchange} id="belt"></input>
                    <button> submit</button>

                </form>
            </div>
        )
    }
}

export default AddHome