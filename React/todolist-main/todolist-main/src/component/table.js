function Table({ data, dataSelectValue, Delete, handleEdit, handleFilter, filterValue }) {
    return (
        <div className="div">
            <table className='table'>
                <tbody>
                <tr className='tr'>
                    <th className='th th_1'>STT</th>
                    <th className='th th_2'>Công Việc</th>
                    <th className='th th_3'>Trạng Thái</th>
                    <th className='th th_4'>Hành Động</th>
                </tr>
                </tbody>
                <tbody>
                <tr className='tr'>
                    <th className='th th_1'></th>
                    <th className='th th_2'></th>
                    <th className='th th_3'>
                        <select
                            className="select"
                            value={filterValue}
                            onChange={handleFilter}
                        >
                            <option>All</option>
                            <option>completed</option>
                            <option>active</option>
                        </select></th>
                    <th className='th '></th>
                </tr>
                </tbody>

                {data.filter((item) => {
                    if (filterValue === 'All') {
                        return true;
                    } else if (filterValue === 'active') {
                        return item.status === 'active';
                    } else if (filterValue === 'completed') {
                        return item.status === 'completed';
                    }
                }).map((item, index) => (
                    <tr className='tr'>
                        <th className='th th_1'> {index + 1} </th>
                        <th className='th th_2'>{item.title}</th>
                        <th className='th th_3'>
                            <div className={`status ${item.status === 'active' ? 'active' : 'completed'}`}>{item.status}</div>
                        </th>
                        <th className='th th_4'>
                            <button
                                className="btn edit"
                                onClick={() => handleEdit(index)}
                            >
                                <i className="btn_icon fas fa-pen-to-square"></i>
                                edit</button>
                            <button
                                className="btn delete"
                                onClick={() => Delete(index)}
                            >
                            <i className="btn_icon fas fa-trash"></i>
                                delete
                            </button>
                        </th>
                    </tr>
                ))}
            </table>
        </div >
    )
}
export default Table
