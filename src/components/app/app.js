import { Component } from "react"

import AppInfo from "../app-info/app-info"
import SearchPanel from "../search-panel/search-panel"
import EmployeesList from "../employees-list/employees-list"
import EmployeesAddForm from "../employees-add-form/employees-add-form"

import "./app.css"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'Акимов Е.А.', stipa: 1200, increase: false, id: 1 },
                { name: ' Варичев Г.А.', stipa: 1800, increase: true, id: 2 },
                { name: 'Гайед М.', stipa: 0, increase: false, id: 3 }
            ],
            term: ``

        }
        this.maxId = Math.max(...this.state.data.map((item) => item.id))
    }

    deleteItem = (id) => {
        return {
            data: this.state.data.filter(item => item.id !== id)
        }
    }

    addItem = (name, stipa) => {
        const newItem = {
            name,
            stipa,
            icrease: false,
            id: ++this.maxId
        }

        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })

    };


    onToggleIncrease = (id) => this.setState(({ data }) => {
        return {
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, increase: !item.increase }
                }
                return item
            })
        }
    })

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items
        }
        return items.filter(items => {
            return items.name.indexOf(term) > -1
        })

    }

    onUpdateSearch = (term) => {
        this.setState({ term })

    }

    onChangeFilter = (e) => {
        // console.log(e.target)
        this.setState({ filter })

    }

    render() {
        const employees = this.state.data.length
        const increased = this.state.data.filter(item => item.increase).length
        const { term, data } = this.state
        const visibleData = this.searchEmp(data, term)
        return <div className="app">
            <AppInfo employees={employees}
                increased={increased}
            />

            <SearchPanel onUpdateSearch={this.onUpdateSearch} onChangeFilter={this.onChangeFilter} />
            <EmployeesList data={visibleData} onDelete={(id) => this.setState(() => this.deleteItem(id))} onToggleIncrease={this.onToggleIncrease} />
            <EmployeesAddForm onAdd={this.addItem} />
        </div >

    }
}

export default App
