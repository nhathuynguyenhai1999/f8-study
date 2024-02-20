function Actice({handleActive,unActive,isActive }) {
    const btnEsc=`btn cancle esc ${isActive}` 
    return (
        <div className="btn_active">
            <button className="btn wide"
            onClick={handleActive}
            >
                Thêm công việc
            </button>
            <button className={btnEsc}
            onClick={unActive}
            >esc
            </button>
        </div>
    )
}
export default Actice