import { useState, useEffect } from 'react';
import Pet from './Pet';
import useBreedList from './useBreedList';
import Results from './Results'


const SearchParams = () => {
    const ANIMALS = ["","cat", "dog", "bird", "reptile", "rabbit"];
    
    let [location, setLocation] = useState('')
    let [animal, setAnimal] = useState('')
    let [breed, setBreed] = useState('')
    let [pets, setPets] = useState([])
    
    const BREEDS = useBreedList(animal)[0] || [];
    
    
    useEffect(() => {
        requestPets();
    } , []);

    async function requestPets(){
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
            );
        const json = await res.json()
        setPets(json.pets);
    }
    
    
    
    return(
        <div className="search-params">
            <form onSubmit={e => {
                e.preventDefault()
                requestPets();
            }}>
                <label htmlFor="location">
                    Location
                    <input 
                        id="location" 
                        value={location} 
                        onChange={e => (setLocation(e.target.value))}
                        placeholder="Location"/>
                </label>

                <label htmlFor="animal">
                    Animal
                    <select 
                        id="animal"
                        value={animal}
                        placeholder="Animal"
                        onChange={ e => setAnimal(e.target.value) }
                        onBlur={ e => setAnimal(e.target.value) }
                    >
                    {
                        ANIMALS.map( animalIter => {
                            return(
                            <option key={animalIter} value={animalIter}>{animalIter}</option>
                                )
                        })
                    }
                    </select>
                </label>

                <label htmlFor="breed">
                    Breed
                    <select
                        id="breed"
                        value={breed}
                        placeholder="Breed"
                        onChange={e => (setBreed(e.target.value))}
                        onBlur={e => (setBreed(e.target.value))}
                    >
                        {
                            BREEDS.map( breedIter => (
                                <option key={breedIter} value={breedIter}>{breedIter}</option>
                            ))
                        }

                    </select>


                </label>
                <button>Submit</button>
            </form>
            {
            <Results pets={pets}/>
            
            /* {
                pets.map(pet => (
                   <Pet name={pet.name} animal={pet.animal} breed={pet.breed} key={pet.id}/> 
                ))
            } */}
        </div>
    );
};

export default SearchParams;