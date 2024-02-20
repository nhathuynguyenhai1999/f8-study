import { useState } from 'react';
import './App.css';
import Table from './component/table.js';
import Header from './component/header.js';
import Form from './component/form.js';
import Actice from './component/btn_active';
import storage from './storage';

function App() {
  const datas = storage.get()

  const [active, setActive] = useState('');
  const [inputValue, setInputValue] = useState();
  const [data, setData] = useState(datas);
  const [selectValue, setSelectValue] = useState('active');
  const [dataSelectValue, setDataSelectValue] = useState([])
  const [editIndex, setEditIndex] = useState(null);
  const [btnEdit, setBtnEdit] = useState('')
  const [filterValue, setFilterValue] = useState('All')
  const [isAdd, setIsAdd] = useState('')



  function handleActive() {
    setActive('active');
    setIsAdd('')
    setBtnEdit('')

  }
  function unActive(event) {
    event.preventDefault();
    setActive('');
    setInputValue('');
  }

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }
  function handleSelect(event) {
    setSelectValue(event.target.value);

  }
  function handleAdd(event) {
    event.preventDefault();

    if (inputValue) {
     const newData =[...data, {
        title: inputValue,
        status: selectValue,
      }
      ]
      setData(newData);
      setInputValue('');
      storage.set(newData)
    }
  }
  function handleDelete(index) {
  if(editIndex === index) {
      const newData = data.filter((_, i) => i !== index)
    setData(newData);
    handleCancle()
    storage.set(newData)
  } else{
    const newData =  data.filter((_, i) => i !== index)
    setData(newData);
    storage.set(newData)
  }
  }
  function handleEdit(index) {
    setEditIndex(index);
    const item = data[index];
    setBtnEdit('active');
    setActive('active');
    setInputValue(item.title);
    setSelectValue(item.status);
    setIsAdd('esc')
  }
  function handleSave(event, index) {
    event.preventDefault();
    const newData = [...data]
    newData[index].title = inputValue;
    newData[index].status = selectValue;
    setData(newData)
    setEditIndex(null);
    setBtnEdit('');
    setInputValue('');
    setIsAdd('')
    storage.set(newData)
  }
  
  function handleCancle(){
    setBtnEdit('');
    setInputValue('');
    setIsAdd('')
  }

  function handleFilter(event) {
    setFilterValue(event.target.value)
  }



  return (
    <div className="App">
      <div className="container">
        <Header />
        <Form
          isActive={active}
          inputValue={inputValue}
          handleInputChange={handleInputChange}
          selectValue={selectValue}
          handleSave={handleSave}
          handleSelect={handleSelect}
          handleAdd={handleAdd}
          unActive={unActive}
          btnEdit={btnEdit}
          editIndex={editIndex}
          isAdd={isAdd}
          handleCancle={handleCancle}
        />
        <Actice
          isActive={active}
          handleActive={handleActive}
          unActive={unActive}
        />
        <Table
          data={data}
          dataSelectValue={dataSelectValue}
          Delete={handleDelete}
          handleEdit={handleEdit}
          editIndex={editIndex}
          handleSave={handleSave}
          handleFilter={handleFilter}
          filterValue={filterValue}
        />
      </div>
    </div>


  )
}

export default App;

