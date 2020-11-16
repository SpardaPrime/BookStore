import React from 'react';
import MyContext from '../bookstore-service-context/';

const withBookstoreService=()=>(Wrapped)=>{
    return (props) =>{
        return(
            <MyContext.Consumer>
                {
                    (bookstoreService)=>{
                       return <Wrapped {...props} bookstoreService={bookstoreService} />
                    }
                }
            </MyContext.Consumer>
        );
    };
};

export default withBookstoreService;