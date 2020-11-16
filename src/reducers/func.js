
export const delCart=(ID,state)=>{
    return{
        ...state,
        cartItems:[...state.cartItems.filter(item=>item.id!==ID)]
    }
}


export const bookReduce=(ID,state)=>{
    const newArr = state.cartItems.map(({id,name,count,total,price,book})=>{
    if(ID===id){
        if(count<2){
            return {id,name,count,total,price,book}
        }
        return{
            id,
            name,
            count:count-1,
            total:total-price,
            price,
            book
        }
    }
    return {id,name,count,total,price,book}
    });
    return{
        ...state,
        cartItems:[...newArr]
    }
}

export const bookAdd=(ID,state)=>{
    const newArr = state.cartItems.map(({id,name,count,total,price,book})=>{
    if(ID===id){
       
        return{
            id,
            name,
            count:count+1,
            total:total+price,
            price,
            book
        }
    }
    return {id,name,count,total,price,book}
    });
    return{
        ...state,
        cartItems:[...newArr]
    }
}


export const bookAded=(book,state)=>{
    const newItem = {
        id:book.id,
        name:book.title,
        count:1,
        total:book.price,
        price:book.price,
        book:book.coverImage
    };
    let answ=true;
    state.cartItems.forEach(item=>item.id===newItem.id? answ=false:null);
    if(answ){
    return{
        ...state,
        succes:false,
        cartItems:[
            ...state.cartItems,
            newItem
        ]
    };
    }else{
    return{
        ...state,
        succes:false,
        cartItems:[...state.cartItems.map(({id,name,count,total,price,book})=>{
        if(id===newItem.id){
            return{
                id,
                name,
                count:count+1,
                total:price+total,
                price,book
            }
        }
        return  {id,name,count,total,price,book}
    })],
    };
    }
}

export const orderToCalculate=(state)=>{
    let val=0
    let item=0;
    state.cartItems.forEach(({total,count})=>{
        val+=total;
        item+=count;
    });
    return{
        ...state,
        orderTotal:val,
        items:item
    }
}