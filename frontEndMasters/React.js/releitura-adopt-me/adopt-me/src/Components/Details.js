import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Carousel from "./Carousel";
import ErrorBoundary from './ErrorBoundary';
import { withRouter } from 'react-router-dom';

const Details = () => {

    let [loading, setLoading] = useState(true);
    let [pets, setPets] = useState({});
    let { id } = useParams();
   

    useEffect (() => { 
        
        fetchPets()
    
        async function fetchPets() {
            const res = await fetch(
                `http://pets-v2.dev-apis.com/pets?id=${id}`
            );
            const json = await res.json();
        
            setPets(json.pets)
            setLoading(false)
        }

    }, []);
        
    if (loading) {
        return(
            <h2>Loading...</h2>
        )
    } else if (!pets[0]){
        console.log("Não tem pet")
        return(
            <h2>Opa, não tem pet!</h2>
        )

    } else {

        const { animal, breed, city, state, description, name, images } = pets[0];

        return(
            <div className="details">
                <Carousel images={images}/>
                <div>
                    <h1>{name}</h1>
                    <h2>{animal} - {breed} - {city}, {state}</h2>
                </div>
                <button>Adopt {name}</button>
                <p>{description}</p>
            </div>
        )
    }
    
}

const DetailsWithRouter = withRouter(Details);

export default function DetailsErrorsBoundary(props) {
    return (
        <ErrorBoundary>
            <DetailsWithRouter {...props}/>
        </ErrorBoundary>
    )
}
