import React, { Component } from 'react';
import {AiTwotoneLike, AiTwotoneDislike } from 'react-icons/ai'
import '../Styles/Movies.css';
import items from './Items';


class Movies extends Component {
    constructor (props) {
        super(props);
        this.state = {
            data : items
        }
    }
    movieIsLikeBtn = (key) => {
        // console.log(key);
        let movie = this.state.data;

        let index = movie.findIndex(item => item.id === key);
        movie[index].isLike = this.state.data[index].isLike ? false : true;
    
        // console.log(movie[index])
        this.setState({data : movie})
    }
    deleteHandler = (id) => {
        console.log(id);
        let data = this.state.data.filter((movie) => movie.id !== id);
        this.setState({data})
    }
    render() {
        const {data} = this.state;
        return (
            <div className='movies'>
                {data.length ? (
                    <div className='movies__inner'>
                        <h2>Showing {data.length} movies list </h2>
                        <table className='movies__table'>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Genre</th>
                                    <th>Stock</th>
                                    <th>Rate</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(item => (
                                    <tr key={item.id} className='movies__item'>
                                        <td>{item.title}</td>
                                        <td>{item.genre}</td>
                                        <td>{item.stock}</td>
                                        <td>{item.rate}</td>
                                        <td className='movies__like'>
                                            <button onClick={() => this.movieIsLikeBtn(item.id)} >
                                                {item.isLike ? <AiTwotoneLike /> : <AiTwotoneDislike />}
                                            </button>
                                        </td>
                                        <td><button onClick={()=> this.deleteHandler(item.id)} className='movie__btn'>DELETE</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) 
                
            
                : (<h2>There is nothing here</h2>)
            }
                
            </div>
        );
    }
}

export default Movies;