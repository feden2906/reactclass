import {changeCars, dellCars, getCars, saveCars} from "../../services/Save.cars";
import {useEffect, useState} from "react";
import Car from "../car/Car";

export default function Cars() {

    let [formState, setFormState] = useState({model: '', price: '', year: ''})
    let [cars, setCars] = useState([]);


        useEffect(() => {
        getCars().then(value => setCars(value))

    }, [])

    let onFormInputChange = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value})
    }

    let save = (e) => {
        e.preventDefault();

        saveCars(formState);
    }

    const mas = ()=>{
        console.log(formState);
        dellCars(formState.id)
    changeCars(formState.id);
    console.log(formState.id)
    }


    return (
        <div className="Cars">
            <form onSubmit={save}>
                <input type="text" name={'model'} value={formState.model} onChange={onFormInputChange}/>
                <input type="number" name={'price'} value={formState.price} onChange={onFormInputChange}/>
                <input type="number" name={'year'} value={formState.year} onChange={onFormInputChange}/>
                <button>Save</button>
                <button onClick={mas}>Change</button>
            </form>
            <hr/>
            {
                cars.map(value => <Car key={value.id} setFormState={setFormState} item={value}/>)
            }
        </div>
    );
}


