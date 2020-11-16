import React from 'react';
import './shop-header.css';
 import {NavLink} from 'react-router-dom';
 import {connect} from 'react-redux';

const ShopHeader = ({orderTotal,items})=>{

return (
    <header className="shop-header row header-marg">
        <NavLink className="header" to="/">
            <h1>Book Store</h1>
        </NavLink>
        <NavLink className="corz" to="/cart">
        <div className="shopping-cart ">
            <i className="cart-icon fa fa-shopping-cart"/>
            <span className="material-icons">book</span>{ ` ${items} /  ${orderTotal} ₴`}
        </div>
        </NavLink>
        
    </header>
)
};

const mapStateToProps=({initialState:{orderTotal,items}})=>{
    return{
        orderTotal,
        items
    }
}

export default connect(mapStateToProps)(ShopHeader);