

const personState=(state,action)=>{
    if(state===undefined){
        return{
            name:'',
            surname:'',
            number:'',
            mail:'',
            city:'',
            take:'',
            pay:''
        }
    }

    switch(action.type){

        case 'ADD_DATA_PERSON':
            return{
                name:action.name,
                surname:action.surname,
                number:action.number,
                mail:action.mail,
                city:action.city,
                take:action.take,
                pay:action.pay
            }
        
        case 'CLEAR_DATA_PERSON':
            return{
                name:'',
                surname:'',
                number:'',
                mail:'',
                city:'',
                take:'',
                pay:''
            }

        default:
            return state
    }
}

export default personState;
