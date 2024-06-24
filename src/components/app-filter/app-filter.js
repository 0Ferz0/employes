

const AppFilter = (props) => {


    return <div>
        <div className="btn-group">
            <button className="btn btn-light" type='button' onClick={() => props.onChange(`all`)}>
                Все студенты
            </button>

            <button className="btn btn-outline-light" type='button' onClick={() => props.onChange(`increase`)}>
                Студенты на отчисление
            </button>

            <button className="btn btn-outline-light" type='button' onClick={() => props.onChange(`stipa`)}>
                Студенты на стипендии
            </button>
        </div >
    </div>
}
export default AppFilter
