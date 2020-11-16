import React  from 'react';
import './book-list.css';
import BookListItem from '../book-list-item/';
import {connect} from 'react-redux';
import withBookstoreService from '../hoc/';
import {fetchBooks, bookAddedToCart} from '../../actions/';
import compose from '../../utils/';
import ProgressBar from '../progres-bar/index';
import ErrorIndicator from '../error-indicator/';
import {NavLink } from 'react-router-dom';

const BookList=({books, onAddedToCart,n})=>{

    const navVal  = n==='classic'?'Художественная литература':
                    n==='it'?'Нон - фикшен':'Публицистика и периодика';
    
    const fistNav = navVal==='Художественная литература'?
                    <NavLink className="nav-link " to="/non-fiction">Нон - фикшен</NavLink>:
                    navVal==='Нон - фикшен'?
                    <NavLink className="nav-link " to="/fiction">Художественная литература</NavLink>:
                    <NavLink className="nav-link " to="/fiction">Художественная литература</NavLink>;

  
    const secondNav = navVal==='Художественная литература'?
                    <NavLink className="nav-link " to="/publicism">Публицистика и периодика</NavLink>:
                    navVal==='Нон - фикшен'?
                    <NavLink className="nav-link " to="/publicism">Публицистика и периодика</NavLink>:
                    <NavLink className="nav-link " to="/non-fiction">Нон - фикшен</NavLink>;

    return(
        <>
        <ul className="nav bl">
                <li className="nav-item">
                   <NavLink className="nav-link " to="/">Главная</NavLink>
                </li>
                <li className="nav-item">
                    {fistNav}
                </li>
                <li className="nav-item">
                    {secondNav}
                </li>
                <li className="nav-item">
                    <p className="nav-link disabled" aria-disabled="true">{navVal}</p>
                </li>
        </ul>
        <div className="row row-cols-1 row-cols-md-5 book-list ">
       
            {
                books[n].map((book)=>{
                    return(
                        <div  key={book.id} className='blc-mrg' >
                            <BookListItem 
                            book={book}
                            onAddedToCart={()=>onAddedToCart(book.id,n)}
                            />
                            </div>
                    )
                })
            }
        
        </div>
        </>
    )
}

 class BookListContainer extends React.Component{

    componentDidMount(){
      this.props.fetchBooks();
    }

    render(){
        const {books,loading,error, onAddedToCart,n} = this.props;

        if(loading){
            return <ProgressBar/>
        }
        if(error){
            return <ErrorIndicator/>
        }
        return <BookList books={books} onAddedToCart={onAddedToCart} n={n}/>
     
    }
}

const mapStateToProps=({initialState:{books,loading,error}})=>{
    return{
        books,loading,error
    };
}

const mapDispatchToProps =(dispatch,{bookstoreService})=>{
    
    return{
        fetchBooks:fetchBooks(bookstoreService,dispatch),
        onAddedToCart:(id,n)=>dispatch(bookAddedToCart(id,n)),
    }
};



export default compose(
    withBookstoreService(),
    connect(mapStateToProps,mapDispatchToProps)
    )(BookListContainer);