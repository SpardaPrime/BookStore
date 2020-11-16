import React ,{useState}  from 'react';
import './book-list-item.css';
import {connect} from 'react-redux';
import {orderTotalCalculate,clearDataPerson} from '../../actions/index';

const BookListItem = ({book,onAddedToCart,orderTotalCalculate,clearDataPerson}) =>{
    const [hover,setHover]=useState(false)

   

    const bigElem=(event)=>{
        let targ=event.target.closest('.card');
        if(!targ) return
        setHover(true)
    }
    const minElem=(event)=>{
        let targ=event.target.closest('.card');
        if(!targ) return
        setHover(false)
    }
    const {title,autor,price,coverImage} = book;

    if(hover){
        return(
            <div className="card card-marg-full btn-show animate__animated animate__fadeIn animate__delay-0.2s" onMouseEnter={bigElem} onMouseLeave={minElem}>
            <img className='card-img-top img-btn' src={coverImage} alt='cover'></img>
        <div className="card-body card-body-size">
                <h4 className="card-title text-center" >{title}</h4>
                <h5 className="card-title text-center autor">{autor}</h5>
                
        </div>
        <div className="price-block">
        <h4 className="text-center">{`${price} ₴`}</h4>            </div>
        <div className="card-footer btn-block">
        <button onClick={()=>{onAddedToCart();orderTotalCalculate();clearDataPerson()}} className={`btn btn-dark add-to-cart btn-sz `}>Купить</button>
        </div>

    </div>  
        )
    }

    return(
        <div className="card card-marg" onMouseEnter={bigElem} onMouseLeave={minElem}>
            <div className="block-h5">
            <h5 className="card-title text-center" >{title}</h5>
            </div>
            <img className='card-img-top img-pos' src={coverImage} alt='cover'></img>
            <div className="card-body card-body-size-1">
                    <p className="card-title text-center">{autor}</p>
            </div>
           
        </div>
    )
}

const mapDispatchToProps=(dispatch)=>{
    return{
        orderTotalCalculate:()=>dispatch(orderTotalCalculate()),
        clearDataPerson:()=>dispatch(clearDataPerson())

    }

}

export default connect(undefined,mapDispatchToProps)(BookListItem);