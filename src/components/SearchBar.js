import React, {useState} from "react";

const SearchBar = ({onFormSubmit}) => {
    const[searchTerm, setSearchTerm] = useState('');



    const onSearchSubmit = (event) => {
        event.preventDefault();

        onFormSubmit(searchTerm);
    };

    return(
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onSearchSubmit}>
                <div className="field">
                    <label>Search Videos</label>
                    <input 
                        type='text' 
                        value={searchTerm}
                        onChange = {(event) => setSearchTerm(event.target.value)}
                    />
                </div>
            </form>
        </div>
    );
};

export default SearchBar;