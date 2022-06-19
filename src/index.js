import React from 'react';
import ReactDOM from 'react-dom/client';
import ClassComponent from './ClassComponent';
import Country from './Country';
import './index.css';


function MyComponent() {
  // דרך ראשונה לייצר קומפוננטה: פונקציה, צריכה להתחיל באות גדולה
  // ולהחזיר אלמנט HTML

  const countries = ["Israel", "USA", "England", "France"];


  return (
    <React.Fragment>  {/* פקודה זו מאפשרת לכתוב כמה תגיות ולהחזיר 
                        את כולם בקומפוננטה מבלי לעטוף אותם ב-div */}
      <h1>I'm a component in a function</h1>
      <ClassComponent></ClassComponent>

      <ul>
        { // כשרוצים לכתוב קוד JS
          // באמצע קוד HTML
          // משתמשים ב- {}

          countries.map((country) => <li>{country}</li>) // פונקציית map
          // עוברת על מערך "מדינות" ויוצרת עבור כל איבר במערך תגית <li>
          // שמכילה את אותו איבר
        }
      </ul>
    </React.Fragment>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  // זו הפונקציה שלתוכה כותבים את הקומפוננטות
// they're "going" to the div, with id: "root" in index.html
  <React.Fragment>
    <MyComponent></MyComponent>
    <ClassComponent></ClassComponent>
    <br/>
    <br/>
    <br/>
    <Country></Country>
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
