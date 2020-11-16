

const booksRequested = () =>{
    return{
        type:'FETCH_BOOKS_REQUEST'
    }
};

const booksLoaded = (newBooks)=>{
    return{
        type:'FETCH_BOOKS_SUCCESS',
        payload:newBooks
    };
};



const booksError = (error) =>{
    return{
        type:'FETCH_BOOKS_FAILURE',
        payload:error
    };
};


export const bookAddedToCart =(bookId,n)=>{
    return{
        type:'BOOK_ADDED_TO_CART',
        payload:bookId,
        block:n
    };
};

export const orderTotalCalculate=()=>{
    return{
        type:'ORDER_TOTAL_CALCULATE'
    }
}

export const addBtn =(bookId)=>{
    return{
        type:'COUNT_ADDED_TO_CART',
        payload:bookId
    }
}

export const reduceBtn =(bookId)=>{
    return{
        type:'COUNT_REDUCE_TO_CART',
        payload:bookId
    }
}

export const delBtn = (id)=>{
    return{
        type:'DELETE_TO_CART',
        payload:id
    }
}

export const delList=()=>{
    return{
        type:'DELETE_LIST'
    }
}

export const succes=()=>{
    return{
        type:'SUCCES_ORDER'
    }
}

const fetchBooks=(bookstoreService,dispatch)=>()=>{
    dispatch(booksRequested());
    bookstoreService.getBooks()
    .then((res)=>dispatch(booksLoaded(res)))
    .catch((err)=> dispatch(booksError(err)));
}

export const addPersonData=( name,surname,number,mail,city,take,pay)=>{
 return{
     type:'ADD_DATA_PERSON',
     name,
     surname,
     number,
     mail,
     city,
     take,
     pay
 }
}

export const clearDataPerson=()=>{
    return{
        type:'CLEAR_DATA_PERSON'
    }
}

export {
    fetchBooks
}



