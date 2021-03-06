import React, {useState} from 'react';
import PropTypes from 'prop-types';
const Search = ({searchUsers, showClear, clearUsers, setAlert}) => {
    const[text, setText] = useState('');
    
    const onChange = (e) => setText(e.target.value);
    const onSubmit = (e) => {
        e.preventDefault();
        if(text === '') {
            setAlert('Please enter something', 'light');
        } else {
            searchUsers(text);
            setText('');
        }
        
    }
        
    return (
            <div>
                <form className="form" onSubmit={onSubmit}>
                    <input 
                        type="text"  
                        //specify name here is to make a unique key in case there are several buttons.
                        //in the onChange method, we can use e.target.name to tell which button   
                        name="text" 
                        placeholder="Search User..." 
                        value={text}
                        onChange={onChange}
                         />
                    <input type="submit" value="Search" className="btn btn-dark btn-block"></input>
                </form>
                {showClear && <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>}
                
            </div>
        )
    
}
Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
};

export default Search;