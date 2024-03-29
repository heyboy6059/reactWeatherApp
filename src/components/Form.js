import React from 'react';

class Form extends React.Component{
    render(){
        return (
            <div>
                <form onSubmit={this.props.getWeather}>
                    <input type="text" name="city" placeholder="City..."></input>
                    <input type="text" name="country" placeholder="Country..."></input>
                    <button>Get Weather!</button>
                </form>
            </div>
        );
    }
};

export default Form;

// no state? then, stateless functional component

// const Form = props => (
//     <div>
//         <form onSubmit={props.getWeather}>
//             <input type="text" name="city" placeholder="City..."></input>
//             <input type="text" name="country" placeholder="Country..."></input>
//             <button>Get Weather!</button>
//         </form>
//     </div>
// );