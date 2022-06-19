import React from "react";

export default class ClassComponents extends React.Component {
// דרך שניה לייצר קומפוננטה: מייצאים קלאס שיורש מ-
// React.Component
// שמכילה את פונקציית 
// render()
    render() { // שממנה אפשר להחזיר אלמנט HTML
        return <p>I'm a component in a class</p>
    }
}