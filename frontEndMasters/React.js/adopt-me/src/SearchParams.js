import { useState } from 'react';

const SearchParams = (props) => {

    const [location, setLocation] = useState("Seatle, WA");
    const [animal] = useState("dog");


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
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams