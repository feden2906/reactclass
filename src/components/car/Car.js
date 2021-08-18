
import {dellCars} from "../../services/Save.cars";

export default function Car({item, setFormState}) {

    const chose = (e) => {
        e.preventDefault();
    }

    const edit = () => {
        setFormState(item)
    }

    const waste = () => {
    dellCars(item.id);

    }

    return (
        <div className="Car">
            <form onSubmit={chose}>
                <h3> {item.model} - {item.price} - {item.year} </h3>
                <button onClick={edit}>Edit</button>
                <button onClick={waste} >Delete</button>

            </form>
        </div>
    );
}