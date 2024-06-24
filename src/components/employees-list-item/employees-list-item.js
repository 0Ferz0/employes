import Death from "../../assets/death"
import SadFace from "../../assets/sad-face"
import "./employees-list-item.css"

const EmployeesListItem = (props) => {

    const { name, stipa, onDelete, onToggleIncrease, increase } = props;
    return (<li className={`list-item ${increase ? "list-orange" : ""}`}>
        <p>{name}</p>


        <div className="svgImages">
            <p>{+stipa + "руб"}</p>
            <div className="iconsWrapper">
                <button className="icon" onClick={onToggleIncrease}><SadFace /> </button>
                <button className="icon" onClick={onDelete}><Death color="" /></button>
            </div>

        </div>
    </li>)
}





export default EmployeesListItem
