import React  from 'react';
import './app.css';
import {Route, Switch} from 'react-router-dom';
import ShopHeader from '../shop-header/';
import BookList from '../book-list/';
import ShoppingCartTable from '../shopping-cart-table/';
import MainPage from'../main-page/';
import Form from '../form/';




const App=()=>{
   
        
    
return(
    <>
        <main role="main" className="container">
        <ShopHeader/>
        <Switch>
            <Route path='/'exact component={MainPage}/>
            <Route path="/non-fiction"  render={()=><BookList n={'it'} />}/>
            <Route path="/fiction"  render={()=><BookList n={'classic'} />}/>
            <Route path="/publicism"  render={()=><BookList n={'publicistic'} />}/>
            <Route path="/reg" component={Form}/>
        </Switch>
            <Route path ="/cart" render={()=><ShoppingCartTable/>}/>

        </main>
    </>
     )
}




export default App;