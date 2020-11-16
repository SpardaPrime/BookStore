import React ,{useEffect}from 'react';
import './shopping-card-table.css';
import {connect} from 'react-redux';
import {orderTotalCalculate,addBtn,reduceBtn,delBtn,delList,succes} from '../../actions/index';
import {Redirect} from 'react-router-dom';

const ShoppingCartTable =({items,total,onIncrease,onDecrease,onDelete,orderTotalCalculate,delList,succes,suc})=>{
    useEffect(()=>{
    orderTotalCalculate()
   },[items])



    const renderRow =items.map((item,idx) =>{
        const {id,name,count,total,book} = item;

        return(
            
            <tr key={id}>
            <td><p>{idx+1}</p></td>
            <td><p>{name}</p></td>
            <td><img className="img-card-size" src={book} alt="img"/></td>
            <td><p>{count}</p></td>
            <td><p>{total}</p></td>
            <td>
            <button className="btn btn-dark" onClick={()=>onDelete(id)}>
                <i className="fa fa-trash-o"/>
            </button>
            <button className="btn btn-dark" onClick={()=>onIncrease(id)}>
                <i className="fa fa-plus-circle"/>
            </button>
            <button className="btn btn-dark" onClick={()=>onDecrease(id)}>
                <i className="fa fa-minus-circle"/>
            </button>
            </td>
          
        </tr>
        
         )
    });

    if(suc){
        return <Redirect to="/reg"/>

        // return(
        //     <Redirect>
        //   
        //     </Redirect>
        // )
    }

    return(
        <div className="shopping-cart-table">
            <h2>Ваш заказ</h2>

            <table className="table">
                <thead>
                   <tr>
                   <th><p>#</p></th>
                    <th><p>Именование</p></th>
                    <th><p>Обложка</p></th>
                    <th><p>Количество</p></th>
                    <th><p>Цена</p></th>
                    <th><p>Действия</p></th>
                   </tr>
                </thead>
                <tbody>
                 {
                    renderRow
                 }
                </tbody>
            </table>
            <div className="total ">
                <h2 className="total-cart">Общая сумма:  {total}  ₴</h2>
            </div>
            <button type="button" onClick={delList} className="btn btn-dark btn-lg btn-block">Очистить заказ</button>
            <button type="button" onClick={succes} className="btn btn-dark btn-lg btn-block">Подтвердить заказ</button>

            
        </div>
    );
};

const mapStateToPtops = ({initialState:{cartItems,orderTotal,succes}}) =>{
    return{
        items:cartItems,
        total:orderTotal,
        suc:succes
    };
};

const mapDispatchToProps=(dispatch)=>{
    return{
        onIncrease:(id)=>dispatch(addBtn(id)),
        onDecrease:(id)=>dispatch(reduceBtn(id)),
        onDelete:(id)=>dispatch(delBtn(id)),
        orderTotalCalculate:()=>dispatch(orderTotalCalculate()),
        delList:()=>dispatch(delList()),
        succes:()=>dispatch(succes())
    }
}

export default connect(mapStateToPtops,mapDispatchToProps)(ShoppingCartTable);

