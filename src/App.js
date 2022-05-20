import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [item, setItem] = useState([]);
  const [form, setForm] = useState([]);

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
        setForm(res.forms[0].fieldsets)
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

  return (
    <div className='container'>
      App
    </div>
  );
}

export default App;
