import './App.css';
import React, {useState, useEffect} from 'react';
import Table from './component/table';
import From from './component/form';

function App() {
  const [item, setItem] = useState([]);
  const [form, setForm] = useState([]);
  const [col, setCol] = useState(12);
  const [oneItem, setOneItem] = useState(null);
  const [showform, setShowform] = useState('none');

  const getItem = () => {
    fetch('data/items.json', 
      {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
    ).then(
      response => {
      return response.json();
    }).then(
      res => {
        setItem(res.collection.items)
      }
    ).catch (
      err => {
        console.log(err);
      }
    )
  }

  const getForm = () => {
    fetch('data/form.json', 
      {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
    ).then(
      response => {
      return response.json();
    }).then(
      res => {
        setForm(res.forms[0].fieldsets[0].fields);
      }
    ).catch (
      err => {
        console.log(err);
      }
    )
  }

  useEffect(() => {
    getItem();
    getForm();
  })

  const handelShow = () => {
    setCol(6);
    setShowform('block');
    
  }

  const handelUnShow = () => {
    setCol(12);
    setShowform('none');
  }

  const handleChange = elm => {
    setOneItem({
      KnownErrorTypeId: elm.type.id,
      Status: elm.status.id,
      IsPrivate: elm.isPrivate,
      Summary: elm.summary
    });
    handelShow();
  }

  return (
    <div className='content'>
      <div className='row'>
        <div className={'col-md-'+ col}>
          <Table data={item} handelShow={handelShow} handleChange={handleChange} />
        </div>
        <div id='form' className={'col-md-'+ col} style={{display: showform}}>
          <button className='btn btn-light' onClick={handelUnShow} title="close" style={{marginLeft: '20%'}}>
            <img src="failed.png" className="mx-2" width={'18px'}/>
          </button>
          {oneItem == null? "": 
            <From handelUnShow={handelUnShow} formulaire={form} selected={oneItem} />
          }
        </div>
      </div>
    </div>
  );
}

export default App;
