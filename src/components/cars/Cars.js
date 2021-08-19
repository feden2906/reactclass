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

    let save = async (e) => {
        e.preventDefault();
        let newArr = [...cars];
        let car;

        if (formState.id) {
            newArr = cars.filter(car => car.id !== formState.id);
            car = await changeCars(formState);
        } else {
            car = await saveCars(formState);
        }

        newArr.push(car);
        newArr.sort((a,b) => a.id - b.id);

        setCars(newArr);
        setFormState({model: '', price: '', year: ''});
    }

    const waste = async (id) => {
        const newArr = cars.filter(car => car.id !== id);
        setCars(newArr);
        await dellCars(id);
    }

    return (
        <div className="Cars">
            <form onSubmit={save}>
                <input type="text" name={'model'} value={formState.model} onChange={onFormInputChange} maxLength={20}/>
                <input type="number" name={'price'} value={formState.price} onChange={onFormInputChange} min={0}/>
                <input type="number" name={'year'} value={formState.year} onChange={onFormInputChange} min={1990} max={2021}/>
                <button>Save</button>
            </form>
            <hr/>
            {
                cars.map(value => <Car key={value.id} setFormState={setFormState} item={value} waste={waste}/>)
            }
        </div>
    );
}


