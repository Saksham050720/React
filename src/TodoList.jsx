import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import ListCom from './ListCom'
import './index.css'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const TodoList = () => {
  const [item, update] = useState('')
  const [newitem, setNewItem] = useState([]) //empty array to store the value user enters

  const inputchange = event => {
    update(event.target.value)
  }

  const listOfItems = () => {
    /*this is called when we click to button the user will enter the thing that will store in prevalue and if he enter a new value then it will store in item lopp continue and the value will be returned*/
    setNewItem(preValue => {
      return [...preValue, item] /*the item will store in empty array*/
    })
    // setItem("");
  }

  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <br />
          <h1 className='h1'> ToDo List App </h1>
          <div className='cat'>
            <p>Categories :</p>
            <div className='btn-grp'>
              <button className='cat-btn'>Work</button>
              <button className='cat-btn'>Personal</button>
            </div>
          </div>
          <br />
          <input
            type='text'
            value={item} //if user enter value it will show but the input text will not be reset to enter a new value so we use value
            placeholder='Enter Your Task'
            onChange={inputchange}
          />

          <Button className='newBtn' onClick={listOfItems}>
            <AddIcon />
          </Button>

          <br />
          <ol>
            {/* in map function we habe to given each elemnt a unique key that is index adn key*/}
            {newitem.map((val, index) => {
              return <ListCom key={index} text={val} /> //here we using the ListCom component and key to identify each indiv.
            })}
          </ol>
          <br />
        </div>
      </div>
      <div class='alert alert-warning alert-dismissible fade show' role='alert'>
        <strong>Well Done!</strong> You should check if some of those are yet to
        be completed.
        <button
          type='button'
          class='btn-close'
          data-bs-dismiss='alert'
          aria-label='Close'
        ></button>
      </div>
    </>
  )
}

export default TodoList
