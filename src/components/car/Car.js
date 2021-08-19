export default function Car({item, setFormState, waste}) {

    const chose = (e) => {
        e.preventDefault();
    }

    const edit = () => {
        setFormState(item)
    }

    return (
        <div className="Car">
            <form onSubmit={chose}>
                <h3> {item.model} - {item.price} - {item.year} </h3>
                <button onClick={edit}>Edit</button>
                <button onClick={() => waste(item.id)} >Delete</button>
            </form>
        </div>
    );
}
