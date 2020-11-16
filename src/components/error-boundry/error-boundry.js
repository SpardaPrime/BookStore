import React from 'react';
import ErrorIndicators from '../error-indicator/';


export default class ErrorBoundry extends React.Component{
    state={
        hasError:false
    }
    componentDidCatch(){
        this.setState({hasError:true})
    }


    render(){
       const show = this.state.hasError ? <ErrorIndicators/> : this.props.children;
       return (
           show
       );
    }
}