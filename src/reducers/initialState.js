import {delCart,bookReduce,bookAded,bookAdd,orderToCalculate} from './func';

const initialState=(state,action)=>{
    if(state===undefined){
        return{
            books:[],
            loading:true,
            error:null,
            cartItems:[],
            orderTotal:0,
            items:0,
            succes:false
        }
    }

    switch(action.type){
            case 'FETCH_BOOKS_REQUEST':
                return {
                   ...state,
                    books:[],
                    loading:true,
                    error:null
                };
            case 'FETCH_BOOKS_SUCCESS':
                return {
                    ...state,
                    books:action.payload,
                    loading:false,
                    error:null
                };
    
            case 'FETCH_BOOKS_FAILURE':
                return{
                    ...state,
                    books:[],
                    loading:false,
                    error:action.payload
                };

                case 'BOOK_ADDED_TO_CART':
                        return bookAded(state.books[action.block].find((book)=>book.id===action.payload),state);

                case 'COUNT_ADDED_TO_CART':
                    return bookAdd(action.payload,state)

                case 'ORDER_TOTAL_CALCULATE':
                    return orderToCalculate(state);

                case 'COUNT_REDUCE_TO_CART':
                        return bookReduce(action.payload,state)
            
                case 'DELETE_TO_CART':
                        return delCart(action.payload,state)

                case 'DELETE_LIST':
                        return {
                            books:[],
                            loading:true,
                            error:null,
                            cartItems:[],
                            orderTotal:0,
                            items:0,
                            succes:false
                        }
                case 'SUCCES_ORDER':
                    return {
                        books:[],
                        loading:true,
                        error:null,
                        cartItems:[],
                        orderTotal:0,
                        items:0,
                        succes:true
                    }

            default:
                return state
    }

}

export default initialState;

