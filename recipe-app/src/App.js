import React, {useEffect, useState} from "react";
import Recipe from "./Recipe"
import './App.css';

const App = () => {
    const APP_ID = '20a2e689';
    const APP_KEY = '459b4e395326595a60fae98334567886';

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getRecipes();
    },[]);

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);

        const data = await response.json();
        console.log(data.hits);
        setRecipes(data.hits);
    }

    return(
        <div className="App">
            <form className="search-form">
                <input className="search-bar" type="text"></input>
                <button className="search-button" type="submit">Submit</button>
            </form>
            {recipes.map(recipe => (
                <Recipe 
                title={recipe.recipe.label} 
                calories={recipe.recipe.calories} 
                image={recipe.reecipe.image}
                />

            ))}
        </div>
    )
}

export default App;
