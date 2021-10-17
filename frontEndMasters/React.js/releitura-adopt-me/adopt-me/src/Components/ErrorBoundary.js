import { Component } from 'react';
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
    
    constructor() {
        super()
        this.state = { hasError : false };
    }

    componentDidCatch (error, info) {        
        Object.assign(this.state, {hasError:true})
    }

    render() {
        if (this.state.hasError){
            return(
                <h2>
                    There was an error with this listing. <Link to="/">Click here</Link>{" "}
                    to back to the home page or wait five seconds.
                </h2>
            )
        } else {
            return this.props.children;
        
        }
    }



}

export default ErrorBoundary