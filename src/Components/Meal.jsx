import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import MealItem from "./MealItem";
import RecipeIndex from "./RecipeIndex";
const Meal = () => {
  const [url, setUrl] = useState(
    "https:/www.themealdb.com/api/json/v1/1/search.php?f=a"
  );
  const [item, setItem] = useState();
  const [show, setShow] = useState(false);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setItem(data.Meals);
        setShow(true);
      });
  }, [url]);
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
          {show ? <MealItem data={item} /> : "Not Found"}
        </div>
        <div className="indexContainer">
          <RecipeIndex />
        </div>
      </div>
    </>
  );
};

export default Meal;
