import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <p>{calories} Calories</p>
            <br></br>
            <h3>Ingredients:</h3>
            <ul className={style.ingredients}>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <img className={style.image} src={image} alt=""/>
        </div>    
    );
}

export default Recipe;