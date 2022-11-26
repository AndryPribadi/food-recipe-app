import React from "react";
import MealItem from "./MealItem";
import RecipeIndex from "./RecipeIndex";
const Meal = () => {
  return (
    <>
      <div className="main">
        <div className="heading">
          <h1>Search Food Recipe</h1>
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            assumenda officiis rem tempore minus pariatur, nostrum
            exercitationem possimus corporis sunt asperiores repellendus
            repudiandae voluptas debitis consectetur odio iure delectus iste.
          </h4>
        </div>
        <div className="searchBox">
          <input type="search" className="search-bar" />
        </div>
        <div className="container">
          <MealItem />
          <MealItem />
          <MealItem />
          <MealItem />
          <MealItem />
          <MealItem />
        </div>
        <div className="indexContainer">
          <RecipeIndex />
        </div>
      </div>
    </>
  );
};

export default Meal;
