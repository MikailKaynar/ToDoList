import React, { useState } from "react";
import classes from "./App.module.css";
import ItemList from "./components/ItemList";

function App() {
  const [enteredText, setEnteredText] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [toDoList, setToDoList] = useState([]);


  const onChangeHandler = (event) =>{
    setEnteredText(event.target.value)
    if(enteredText.length > 0){
      setIsValid(true)
    }
  }
  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredText.trim().length === 0) {
      setIsValid(false);
      console.log(enteredText, isValid);
      return;
    }
    setIsValid(true);
    //listeye ekleyen kod
    setToDoList(liste => {
      const guncelListe = [...liste];
      guncelListe.unshift({ text: enteredText, id: Math.random().toString() });
      setEnteredText("")
      return guncelListe;
    });

  };

  const deleteHandler = id => {
    setToDoList( liste => {
      const guncelListe = liste.filter(item =>item.id !== id);
      console.log("deleted", guncelListe)
      return guncelListe;
    })
  }

  let list = (
    <p style={{textAlign: "center"}}>YAPMANIZ GEREKEN HER ŞEYİ YAPTINIZ, YAPILACAKLAR LİSTESİ BOŞ</p>
  )

  if(toDoList.length > 0) {
    list = (<ItemList items={toDoList} onDeleteItem={deleteHandler}/>);
  }
  
  return (
    <div>
      <div className={classes.App}>
        <div className={`${classes.up} ${!isValid && classes.invalid}`}>
          <form onSubmit={submitHandler}>
            <label>NOT EKLE</label>
            <input value={enteredText} type="text" onChange={onChangeHandler}></input>
            <button type="submit">EKLE</button>
          </form>
        </div>
        {list}
      </div>
    </div>
  );
}

export default App;
