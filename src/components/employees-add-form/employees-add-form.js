
import { Component } from "react"
import "./employees-add-form.css"

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ``,
            stipa: 0
        }
    }

    onValueChange = (e) => {
        console.log(e.target.name, e.target.value)
        return this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { name, stipa } = this.state
        const { onAdd } = this.props
        return (
            <div className="employees-add-form">
                <h3>Добавьте нового студента</h3>

                <form className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="ФИО"
                        onChange={this.onValueChange}
                        value={name}
                        name="name" />

                    <input type="number"
                        className="form-control form-control new-post-label "
                        placeholder="Стипендия в руб?"
                        onChange={this.onValueChange}
                        value={stipa}
                        name="stipa" />
                    <button type="submit"
                        className="btn btn-outline-light" onClick={(e) => { e.preventDefault(); onAdd(name, stipa) }}
                        disabled={!(name && stipa >= 0)}
                    >Добавить</button>
                </form>
            </div>

        )
    }
}


export default EmployeesAddForm
