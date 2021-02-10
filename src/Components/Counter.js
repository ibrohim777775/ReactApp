import React, { Component } from 'react';
import '../Styles/Counter.css';

class Counter extends Component {
    constructor (props) {
        super(props);
        this.state ={
            numberOne : props.counts.one,
            numberTwo : props.counts.two,
            numberThree : props.counts.three,
            numberFour : props.counts.four
        };
    }
    counterHandler = (number, math) => {
        (math === '-') ? this.setState({[number] : this.state[number] -1}) : this.setState({[number] : this.state[number] +1}) ;
        
    }
    countReset = () =>{
    
        this.setState({
            numberOne : 0,
            numberTwo : 0,
            numberThree : 0,
            numberFour : 0
        });

    }
    render() {
        const {numberOne, numberTwo, numberThree, numberFour} = this.state;
        return (
            <div className='counter'>
                <h1>Counter</h1>
                <div className='counter__inners'>
                    <div className='counter__body'>
                        <div className='counter__items'>
                            <button onClick={() => this.counterHandler('numberOne', '-')} className='counterBtn counterBtn__p'>-</button>
                            <p>{numberOne}</p>
                            <button onClick={() => this.counterHandler('numberOne', '+')} className='counterBtn'>+</button>
                        </div>
                         <div className='counter__items'>
                            <button onClick={() => this.counterHandler('numberTwo', '-')}  className='counterBtn counterBtn__p'>-</button>
                            <p>{numberTwo}</p>
                            <button onClick={() => this.counterHandler('numberTwo', '+')}  className='counterBtn'>+</button>
                        </div>
                         <div className='counter__items'>
                            <button onClick={() => this.counterHandler('numberThree', '-')}  className='counterBtn counterBtn__p'>-</button>
                            <p>{numberThree}</p>
                            <button onClick={() => this.counterHandler('numberThree', '+')}  className='counterBtn'>+</button>
                        </div>
                         <div className='counter__items'>
                            <button onClick={() => this.counterHandler('numberFour', '-')}  className='counterBtn counterBtn__p'>-</button>
                            <p>{numberFour}</p>
                            <button onClick={() => this.counterHandler('numberFour', '+')}  className='counterBtn'>+</button>
                        </div>
                    </div>
                    <div className='counter__reset'>
                        <button onClick={this.countReset} className='counter__resetBtn'>Reset Counter</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Counter;