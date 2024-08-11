
import './Item.css'

function Item(props) {
    const ItemName =props.name;

    return(<p className="nir">{ItemName}</p>);
}
export default Item;