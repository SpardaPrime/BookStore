import React from 'react';
import './bottom.css';
import {connect} from 'react-redux';

const Bottom =({book})=>{

    return(
        <div>
            <p>{book.loading?'Loading...ZZzz':book.books[0].title}</p>
            <p>{book.loading?'Loading...ZZzz':book.books[1].title}</p>
        </div>
    )
}

const myMapToProps=(state)=>{
    return{
        book:state
    }
}

export default connect(myMapToProps)(Bottom);