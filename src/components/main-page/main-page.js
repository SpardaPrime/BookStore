import React from 'react';
import {Link} from 'react-router-dom';
import './main-page.css';

const MainPage=()=>{

    return (
        <>
        
    <div className="card-deck main-page-marg">
    <div className="card main-block">
    <Link to='/fiction'><img src="https://img2.goodfon.ru/wallpaper/nbig/d/f0/uyut-podnos-kniga-ochki-chay.jpg" className="card-img-top" alt="Classic"/></Link>
        <div className="card-body">
            <h5 className="card-title">Художественная литература</h5>
            <p className="card-text">Фэнтези / Фантастика / Детективы / Триллеры / Приключения / Проза / Поэзия</p>
        </div>
    </div>
        
    
    <div className="card main-block">
    <Link to='/non-fiction'><img src="https://pixnio.com/free-images/2017/08/16/2017-08-16-07-54-00.jpg" className="card-img-top" alt="..."/></Link>
        <div className="card-body">
            <h5 className="card-title">Нон - фикшен</h5>
            <p className="card-text">Бизнес - литература / Компьютерная литература / Психология / Общество / Научная литература / Хобби и досуг</p>
        </div>
    </div>
  
  
    <div className="card main-block">
    <Link to='/publicism'><img src="https://image.freepik.com/free-photo/open-book-and-a-pencil-on-wooden-table_260672-809.jpg" className="card-img-top" alt="..."/></Link>
        <div className="card-body">
            <h5 className="card-title">Публицистика и периодика</h5>
        </div>
    </div>
    </div>

</>
        
    )
}

export default MainPage;