function Form({ isActive, inputValue, handleInputChange, handleAdd, handleSelect, selectValue, unActive, btnEdit,
  handleSave, editIndex, isAdd, handleCancle }) {
  const formClass = `form ${isActive}`;
  const btnActive = `btn cancle esc ${btnEdit}`
  const btnAdd = `btn add ${isAdd}`

  return (
    <div className="form_container">
      <div className={formClass}>
      <div className='form_header'>
        <p className="form_title">thêm công việc </p>
        <i
          className="form_icon fas fa-circle-xmark"
          onClick={unActive}
        ></i>
      </div>
      <div className="form_content">
        <p className="form_title">Tên</p>
        <input
          type="text"
          className="form_input input"
          value={inputValue}
          onChange={handleInputChange}
        >

        </input>
        <p className="form_title">Trạng thái</p>
        <select
          className="form_select select"
          value={selectValue}
          onChange={handleSelect}
        >
          <option>completed</option>
          <option>active</option>
        </select>
      </div>
      <div className="form_active">
        <button
          className={btnAdd}
          onClick={handleAdd}
        >
          ADD
        </button>
        <button
          className={btnActive}
          onClick={(event) => handleSave(event, editIndex)}
        >
          Save
        </button>
        <button
          className={btnActive}
          onClick={handleCancle}
        >
          Cancle
        </button>
      </div>
    </div>
    </div>
  )
}
export default Form
