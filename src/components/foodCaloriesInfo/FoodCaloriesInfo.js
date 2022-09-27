import React,{useEffect, useState} from "react";
import Recipe from "./Recipe";
import "./CaloriesInfo.css";

const FoodCaloriesInfo=()=>{

const Application_ID="6ff2aff0";
const Application_Key="c8a03fd418f769e7ef350d756a3774b7";

const [recipes, setRecipes] = useState([]); 
const [search, setSearch] = useState("");
const [query, setQuery] = useState("Chicken");

// const [counter, setCounter]=useState(0); 

useEffect(() =>{
    getRecipies();
}, [query])

const getRecipies = async ()=>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${Application_ID}&app_key=${Application_Key}`);
    const data =await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
}

    const updateSearch = e => {
        setSearch(e.target.value);
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch("");
    }
    return(
        <div className="FoodCaloriesInfo"> 

        <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Search</button>
        </form>
        {/* <h1 onClick={() => setCounter(counter+1)}>{counter}</h1> */}
        <div className="recipes">
        {recipes.map(recipe => (
            <Recipe 
                    key={recipe.recipe.label}
                    title={recipe.recipe.label}
                    image={recipe.recipe.image} 
                    calories={recipe.recipe.calories} 
                    ingredients={recipe.recipe.ingredients}
                    />
        ))}
        </div>
        </div>
        )
}

export default FoodCaloriesInfo;