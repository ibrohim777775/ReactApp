import React, { Component } from 'react';
import { AiTwotoneLike, AiTwotoneDislike } from 'react-icons/ai';
import { BiSortAZ, BiSortZA, BiSort, BiNoEntry } from 'react-icons/bi';
import { FaSortNumericDown, FaSortNumericUpAlt } from 'react-icons/fa';
import _, { filter } from 'lodash';
import items from '../Components/Items';
import Pagination from '../Components/Pagination';
import paginate from '../Components/PaginateNumbers';
import NavMovies from '../Components/NavMovies';
import MoviesTableHead from '../Components/MoviesTableHead';
import NewItem from '../Components/NewItem';
import { Redirect, Route } from 'react-router';
import Clock from '../Components/Clock';
import { Link } from 'react-router-dom';
import CircleClock from '../Components/CircleClock';
import '../Styles/Movies.css';
import MovieInfo from '../Components/MovieInfo';
import Users from '../Components/Users';


class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            sort: [1, 1, 1, 1],
            paginationSize: 5,
            pageRealNumber: 1,
            result: [],
            sortColum: { path: 'title', order: 'asc' },
            newItem: {
                id: '',
                title: '',
                genre: '',
                stock: '',
                rate: '',
                isLike: false
            },
            optionDisplay: 'none'
        }
        this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount() {
        this.setState({ data: items })
    }

    movieIsLikeBtn = (key) => {
        // console.log(key);
        let movie = this.state.data;

        let index = movie.findIndex(item => item.id === key);
        movie[index].isLike = !movie[index].isLike;

        // console.log(movie[index])
        this.setState({ data: movie })
    }
    sortIcon = (index) => {
        let iconItem = this.state.sort[index];
        // console.log(index);
        if (iconItem === 1) {
            return <BiSortAZ />
        };
        if (iconItem === 2) {
            return <BiSortZA />
        };
        if (iconItem === 3) {
            return <BiSort />
        }
    }
    sortIconForNumber = (index) => {
        let iconItem = this.state.sort[index];
        if (iconItem === 1) {
            return <FaSortNumericDown />
        };
        if (iconItem === 2) {
            return <FaSortNumericUpAlt />
        };
        if (iconItem === 3) {
            return <BiSort />
        }
    }
    sortAtoZ = (item, index) => {

        const { sortColum, sort } = this.state;

        if (sortColum.path === item) {
            sortColum.order = sortColum.order === 'asc' ? 'desc' : 'asc';
            this.setState((prevState) => { prevState.sort[index] = +1 });

            // this.setState({ sort[index]: +1 });
        } else {
            sortColum.path = item;
            sortColum.order = 'asc';
            this.setState((prevState) => { prevState.sort[index] = +2 });
        }
        this.setState({ sortColum })
    }
    deleteHandler = (id) => {
        console.log(id);
        let data = this.state.data.filter((movie) => movie.id !== id);
        this.setState({ data })
    }
    onPageChange = (pageRealNumber) => {
        this.setState({ pageRealNumber })
    };
    filtrHandler = (genre) => {
        if (genre === 'all') this.setState({ data: items, pageRealNumber: 1 })
        else {
            const data = items.filter((i) => i.genre === genre.title)
            this.setState({ data, pageRealNumber: 1 })
        }
    }
    onChangeHandler = (e) => {
        this.setState({ paginationSize: e.target.value, pageRealNumber: 1 });

    }
    filterItems = (obj, key) => {
        for (key of obj) {

        }
    }
    onClickTheadHandler = (item) => {

        console.log(item)
        let data = [];
        // items.map((i, index) => data[index][item] = i[item]);
        // let { data } = this.state;
        items.map((i, index) => data.push({ id: i.id, [item]: i[item] }))
        console.log(data)
        this.setState({ data })
    }
    handleChange(e, item) {
        console.log(e.target.name);
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState((prevState) => { prevState.newItem[name] = value });
        console.log(this.state.newItem)
        // this.setState((prevState) => { prevState.newItem[item] = e.target.value });
    }
    addItemHandler = (e) => {
        e.preventDefault();
        console.log(e);
        // let data = this.state.data.push(this.state.newItem);
        const { data: dataFake, newItem } = this.state;
        let data = [...dataFake, { ...newItem, id: dataFake.length + 1 }];

        this.setState({ data })
        // this.setState((prevState) => { prevState.data.push(prevState.newItem) });
    }
    clickRadioHandler = () => {
        let isLike = !this.state.newItem.isLike;
        this.setState((prevState) => { prevState.newItem.isLike = isLike });
        console.log(this.state.newItem.isLike)
    }
    showOptions = () => {
        this.setState({ optionDisplay: 'block' })
    }
    updateMovie = (e, id) => {
        e.preventDefault();
        // console.log(id, 'iddd');
        let data = this.state.data.filter((i) => i.id === +id)[0];
        let newItem = this.state.newItem;
        let item = [];
        newItem.id = +id;
        for (let key in data) {
            if (newItem[key] === data[key]) {
                item[key] = data[key]
                console.log(item[key]);
            }
            if (newItem[key].length === 0) {
                item[key] = data[key]
            } else {
                item[key] = newItem[key]
            }
        };
        let secondData = [];
        // secondData[0] = item;
        secondData = [...this.state.data.filter((i) => i.id !== +id)];
        secondData.unshift(item);
        console.log(secondData, 'ohirgi')
        this.setState({ data: secondData });
        // console.log(newItem, 'yangi');
        // console.log(item, 'ohirgi')
        // setTimeout(console.log(data), 2000);
    }
    render() {
        const { data, fakeData, paginationSize, pageRealNumber, sortColum, optionDisplay, newItem } = this.state;
        const { title, stock, rate, islike } = this.state.newItem;
        const page = data.length;
        const { sortAtoZ, sortIcon, sortIconForNumber, onClickTheadHandler, addItemHandler, handleChange, clickRadioHandler, showOptions, updateMovie } = this;

        const result = paginate(data, pageRealNumber, paginationSize);
        let updatedData = _.orderBy(result, [sortColum.path], [sortColum.order]);
        let option = 'none';
        return (
            <div>
                <div className='navbar'>
                    <Link to='/movies'>Home</Link>
                    <Link to='/clock'>show clock</Link>
                    {/* <Link to='/movies'>Movies table</Link> */}
                    {/* <Link to='/movies/filter'>Filter Movies</Link> */}
                    {/* <Link to='/movies/add'>Add movies</Link> */}
                    <Link to='/circle_clock'>Circle clock</Link>
                    <Link to='/users'>Users</Link>
                </div>
                <div className='movies'>
                    <Route exact path='/users' component={Users} />
                    <Route path='/circle_clock'>
                        <CircleClock />
                    </Route>

                    <Route exact path='/'>
                    </Route>

                    <Route exact path='/clock'>
                        <Clock />
                    </Route>
                    <Route path='/movies/filter'>
                    </Route>
                    <Route exact path='/movies/add'>
                        <NewItem clickRadioHandler={clickRadioHandler} handleChange={handleChange} addItemHandler={addItemHandler} stock={stock} rate={rate} isLike={islike} title={title} />

                    </Route>

                    <Route
                        exact
                        path='/movies/update/:id'
                        render={(props) => (
                            <MovieInfo
                                item={updatedData}
                                {...props}
                                updateMovie={updateMovie}
                                handleChange={handleChange}
                                newItem={newItem}
                            />
                        )}
                    />

                    <Route exact path='/movies'>
                        <NavMovies filtrHandler={this.filtrHandler} />
                        <div className='movies__inner'>

                            <h2>Showing {data.length} movies list </h2>
                            <table className='movies__table'>
                                <MoviesTableHead onClickTheadHandler={onClickTheadHandler} sortAtoZ={sortAtoZ} sortIcon={sortIcon} sortIconForNumber={sortIconForNumber} />
                                {data.length ? (

                                    <tbody>
                                        {updatedData.map(item => (
                                            <tr key={item.id} className='movies__item'>
                                                <td>{item.id}</td>
                                                <td>
                                                    <Link to={'/movies/update/' + item.id} >
                                                        {item.title}
                                                    </Link>
                                                </td>
                                                <td>{item.genre}</td>
                                                <td>{item.stock}</td>
                                                <td>{item.rate}</td>
                                                <td className='movies__like'>
                                                    <button onClick={() => this.movieIsLikeBtn(item.id)} >
                                                        {item.isLike ? <AiTwotoneLike /> : <AiTwotoneDislike />}
                                                    </button>
                                                </td>
                                                <td><button onClick={() => this.deleteHandler(item.id)} className='movie__btn'>DELETE</button></td>
                                                <td className='test'>
                                                    <ul className='option__items'>
                                                        <li className='option__list '>
                                                            <p className='options__title'>Options</p>
                                                            <ul className='options'>
                                                                <li className='option__list test__items'>
                                                                    <Link to={'/movies/update/' + item.id} >
                                                                        update movie

                                                                    </Link>
                                                                </li>
                                                                <li className='option__list'>
                                                                    <Link to='/movies/add'>
                                                                        add movie

                                                                    </Link>
                                                                </li>
                                                                <li onClick={() => this.deleteHandler(item.id)} className='option__list'>delete</li>
                                                            </ul>
                                                        </li>
                                                        <li className='option__list'>

                                                        </li>
                                                    </ul>

                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                )


                                    : <tbody><tr><td> There is nothing here</td></tr></tbody>
                                }
                            </table>
                            <Pagination onPageChange={this.onPageChange} page={page} data={data} size={paginationSize} fakeData={fakeData} pageRealNumber={pageRealNumber} />
                            <select onChange={(e) => this.onChangeHandler(e)} defaultValue={paginationSize}>
                                <option value='3'>3</option>
                                <option value='5'>5</option>
                                <option value='7'>7</option>
                                <option value='10'>10</option>

                            </select>

                        </div>

                    </Route>
                    <Redirect to='/movies' />







                </div >

            </div >

        );
    }
}

export default Movies;