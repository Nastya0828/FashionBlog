import React, {useState} from 'react';



import './App.css';
import Modal from './Components/modal';
import Header from './Components/Header';
import StartBanner from './Components/StartBanner'
import ContentCenter from './Components/ContentCenter'
import CaruselPhoto from './Components/CaruselPhoto'
import Footer from './Components/Footer'



function App() {
  
  const [modal, setModel] = useState(false)  
  const openModal = () => {setModel(true)}
  const closeModal = () => {
    setModel(false)
    setTitle('')
    setBody('')}

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  function getToDoFetch(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => {setTitle(`userId: ${json.userId}`); setBody(json.title)})    
  }

  function getToDoXHR(){
    // 1. Создаём новый XMLHttpRequest-объект
    let xhr = new XMLHttpRequest();

    xhr.responseType = 'json';

    // 2. Настраиваем его: GET-запрос по URL /article/.../load
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/15');

    // 3. Отсылаем запрос
    xhr.send();

    // 4. Этот код сработает после того, как мы получим ответ сервера
    xhr.onload = function() {
    if (xhr.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
        alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
    } else { // если всё прошло гладко, выводим результат
      setTitle(`userId: ${xhr.response.userId}`) // response -- это ответ сервера
      setBody(xhr.response.title) 
    }
    };

    xhr.onerror = function() {
        alert("Запрос не удался");
    };  
}

const clickHome = () => {
  openModal()
  getToDoFetch()
}

const clickRecipes = () => {
  getToDoXHR()
  openModal()
} 

  return (
    <div className='no-scroll'>
      <Header clickHome={clickHome} clickRecipes={clickRecipes}/>
      <StartBanner/>
      <ContentCenter/>
      <CaruselPhoto/>
      <Footer/>    

      {
        modal && title && body && <Modal title = {title} body = {body} closeModal = {closeModal}/>
      }
    </div>
  );
}

export default App;
