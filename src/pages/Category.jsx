import { useParams, useNavigate } from "react-router-dom";
import { getFilteredCategory } from "../api";
import { useState, useEffect } from "react";
import { Preloader } from "../components/Preloader";
import { MealList } from "../components/MealList";

function Category() {

    const {
        name
    } = useParams();

    const navigate = useNavigate();
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        getFilteredCategory(name).then(data => setMeals(data.meals))
    }, [name]);

    return <>
        {!meals.length
            ?
            <Preloader/>
            :
            <>
            <button className='btn orange darken-2' onClick={() => navigate(-1)}>Go Back</button>
            <MealList meals={meals}/>
            </>
        }
    </>
}

export {Category};