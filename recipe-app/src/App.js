import React, {useEffect, useState} from "react";
import './App.css';

const App = () => {
    const APP_ID = 'b0d54b4a';
    const APP_KEY = '702918875c69e606e385d51247820f57';

    useEffect(() => {
        getRecipes();
    },[]);

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = response.json();
        console.log(data);
    }

    return(
        <div className="App">
            <form className="search-form">
                <input className="search-bar" type="text"></input>
                <button className="search-button" type="submit">Submit for recipe</button>
            </form>
        </div>
    )
}

export default App;
