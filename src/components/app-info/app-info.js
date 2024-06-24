import "./app-info.css"

const AppInfo = ({ increased, employees }) => {
    return <div className="app-info">
        <h1 className="app-info_title">Учет студентов группы 1231</h1>
        <h2>Общее число студентов: {employees}</h2>
        <h2>Студенты на отчисление: {increased}</h2>
    </div>
}

export default AppInfo
