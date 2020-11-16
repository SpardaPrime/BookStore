import React ,{useState} from 'react';
import './form.css';
import {addPersonData} from '../../actions/index';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';


const bad  = (event,text)=>{
    event.target.nextElementSibling.classList.remove('none','valid')
    event.target.nextElementSibling.classList.add('no-valid')
    event.target.style.borderColor='red';
    event.target.nextElementSibling .textContent=text;
}
const good =(event,text='хорошо')=>{
    event.target.nextElementSibling.classList.remove('none','no-valid')
    event.target.nextElementSibling.classList.add('valid')
    event.target.style.borderColor='green';
    event.target.nextElementSibling .textContent=text;
}

const Form =({personState,addPersonData})=>{


const [name,setName] = useState('');
const [surname,setSurname] = useState('');
const [mail,setMail] = useState('');
const [city,setCity] = useState('');
const [number,setNumber] = useState('')
const [receiving,setReceiving] = useState('');
const [payment ,setPayment ] = useState('');

const inputNameSurname =(event,state)=>{
    let data=event.target.value.replace(/\d/g,'');
    let regExp = /\w/g;
    if(regExp.test(data)){
        bad(event,'введите кирилицу');
    }else{
        good(event);
        state(data);
    }
}

const inputNumb=(event)=>{
    let num =event.target.value.replace(/\D/g,'');
    setNumber(num);
    if(num.length>9){
        bad(event,'Превышение количества знаков');
    }else{
        good(event);
    }
} 
const subMit=(event)=>{
    event.preventDefault();

    addPersonData(name,surname,number,mail,city,receiving,payment);
}


if(personState.name!==''){
  return(
    <>
    <div className="alert alert-success" role="alert">
          <h3>Спасибо за оформленный заказ {personState.name}.</h3>
          <h4>На вашу электронную почту {personState.mail} будет отправлено письмо c квитанцией.</h4>
          <h4>По вашему номеру {personState.number} свяжется наш менеджер в ближайшее время</h4>
     </div>
     <NavLink className="nav" to="/"><button type="button" class="btn btn-secondary btn-lg btn-block"><h4>На главную</h4></button></NavLink>
     </>
  )
}


    return (
        <>
        <h2 className='reg'>Регистрация</h2>
        <form onSubmit={subMit} >
  <div className="form-row">
    <div className="col-md-4 mb-3">
      <label htmlFor="validationDefault01">Имя</label>
      <input onChange={(event)=>inputNameSurname(event,setName)} value={name} type="text" className="form-control" id="validationDefault01" placeholder="Имя"  required/>
      <div className="none">
       none 
      </div>
    </div>
    <div className="col-md-4 mb-3">
      <label htmlFor="validationDefault02">Фамилия</label>
      <input onChange={(event)=>inputNameSurname(event,setSurname)} value={surname} type="text" className="form-control" id="validationDefault02" placeholder="Фамилия"  required/>
      <div className="none">
       none 
      </div>
    </div>
    <div className="col-md-4 mb-3">
      <label  htmlFor="validationDefaultUsername">Электронная почта</label>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroupPrepend2">@</span>
        </div>
        <input onChange={(event)=>setMail(event.target.value)} type="text" className="form-control" id="validationDefaultUsername" placeholder="почта" aria-describedby="inputGroupPrepend2" required/>
      </div>
    </div>
  </div>
  <div className="form-row">
    <div className="col-md-6 mb-3">
      <label htmlFor="validationDefault03">Город</label>
      <input onChange={(event)=>inputNameSurname(event,setCity)} value={city} type="text" className="form-control" id="validationDefault03" placeholder="Город" required/>
      <div className="none">
       none 
      </div>
    </div>
    <div className="col-md-6 mb-3">
      <label htmlFor="validationDefault04">Номер телефона</label>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroupPrepend2">+380</span>
        </div>
        <input value={number} onChange={inputNumb} type="text" className="form-control" id="validationDefaultUsername" placeholder="номер телефона" aria-describedby="inputGroupPrepend2" required/>
        <div className="qwe none">
       none 
      </div>
      </div>
      
    </div>
    <div className="col-md-6 mb-3">
      <label htmlFor="validationDefault05">Способ получения</label>
      <select onChange={(event)=>setReceiving(event.target.value)} className="custom-select mr-sm-2" id="inlineFormCustomSelect" >
        <option  >Выбирите способ...</option>
        <option value={'Самовывоз'} >Самовывоз</option>
        <option value={'NOVA POCHTA'} >Курьерская служба НОВАЯ ПОЧТА</option>
        <option value={'MIST EXPRESS'} >Курьерская служба MIST EXPRESS</option>

      </select>
    </div>
    <div className="col-md-6 mb-3">
      <label htmlFor="validationDefault05">Способ оплаты</label>
      <select onChange={(event)=>setPayment(event.target.value)} className="custom-select mr-sm-2" id="inlineFormCustomSelect" >
        <option >Выбирите способ...</option>
        <option value={'nal'}>Наличный расчет</option>
        <option value={'card'}>Оплата на карточку</option>
      </select>
    </div>
  </div>
  
  <button className="btn btn-dark" type="submit">Подтвердить</button>
</form>
        </>
    )
}

const mapDispatchToProps=(dispatch)=>{
    return{
        addPersonData:(name,surname,number,mail,city,take,pay)=>dispatch(addPersonData(name,surname,number,mail,city,take,pay))
    }
}

const mapStateToProps=({personState})=>{
    return{
        personState
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Form);