import { useState } from 'react';

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = (props) => {

    const [location, setLocation] = useState("Seatle, WA");
    const [animal, setAnimal] = useState("");

    function updateLocation(e) {
        setLocation(e.target.value);
    }

    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input 
                        id="location" 
                        onChange={updateLocation} 
                        value={location} 
                        placeholder="Location"/>
                </label>

                <label htmlFor="animal">
                    Animal
                    <select
                        id="animal"
                        value={animal}
                        onChange={e => setAnimal(e.target.value)}
                        onBlur={e => setAnimal(e.target.value)}
                    >
                        <option/>
                        {
                            ANIMALS.map(animal => (
                                <option value={animal} key={animal}>
                                    {animal}
                                </option>
                            ))
                        }    
                    </select>
                </label>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams