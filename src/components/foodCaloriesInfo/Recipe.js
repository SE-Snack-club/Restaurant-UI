import React from "react";
import style from './Recipe.module.css';


const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <img src={image}></img>
            <ol>
                {ingredients.map(ingredient => (
                    <li>
                        {ingredient.text};
                    </li>
                ))}
            </ol>
            <h1>Total Calories</h1><p>{calories}</p>
        </div>
    );
}

export default Recipe;