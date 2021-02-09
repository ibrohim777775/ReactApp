import React, { Component } from 'react';
import items from './Items'
import './showingItems.css';

class ShowingItems extends Component {
    constructor (props){
        super(props);
        this.state = {
            data : items,
        }
    }
    clickHandler = (event) =>{
        // console.dir(event.target)
        const key = event.target.dataset['id'];
        console.log(key);
        this.setState(prevState =>{
            //  data: this.state.data.filter((_, i) => i !== key)
             let newData = prevState.data.slice() //copy array from prevState
      newData.splice(key, 1) // remove element
      return {data: newData} // update state
        })
    }
    render() {
        return (
            <div>
                <div className='page'>
                   <div className='main'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Genre</th>
                                    <th>Stock</th>
                                    <th>Rate</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.data.map((item, index) => (
                                    <tr className='movies' key={index}>
                                        <td>{item.title}</td>
                                        <td>{item.genre}</td>
                                        <td>{item.stock}</td>
                                        <td>{item.rate}</td>
                                        <td><button data-id = {index} onClick={this.clickHandler} className='deleteBtn'>Delete</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                   </div>
                    
               </div>
            </div>
        );
    }
}

export default ShowingItems;