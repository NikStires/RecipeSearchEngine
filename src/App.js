import React, {useEffect, useState} from 'react';
import Recipe from './recipe';
import './App.css';

const App = () => {

  const APP_ID = "24a9a691";
  const APP_KEY = "f112539d35c89738f575f0b69abd50d3";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect( () =>{
    getRecipes();
  }, [query]);

  const getRecipes = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return(
    <div className='app'>
      <h1>Search For A Recipe!</h1>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-btn" type="submit">Search</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe =>(
          <Recipe 
            key= {recipe.recipe.label}
            title={recipe.recipe.label} 
            calories={Math.floor(recipe.recipe.calories)} 
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;