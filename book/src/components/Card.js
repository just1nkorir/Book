import { useState, useEffect } from "react"
import Details from "./Details"
import "../css/Card.css";

function Card ({books}){
    const [list, setList] = useState([])
    const [display, setDisplay] = useState(false)
    const [item, setItem] = useState([])

    console.log(list)

    useEffect(() => {
        if (list === []){
            return;
        } else {
            fetch('http://localhost:3500/booklist',{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(list)
        })
        }  
    })

    return (
        <> 
           {
            books.map((book) => {
                let thumbnail = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail
        
                return(
                    <>
                    <div className="card" >
                        <img src={thumbnail} alt="" />
                        <div className="bottom">
                            <h3 className="title">{book.volumeInfo.title}</h3>
                        </div>
                        <div className="btn">
                        <button onClick={() => {setDisplay(true);setItem(book)}}>View details</button><br/>
                        <button onClick={() => setList(book)}>Add to list</button>
                        </div>
                    </div>
                    </>
                )   
            })
           }
        
        <Details display={display} item={item} onClose={() => setDisplay(false)}/>
        </>
    )
}


export default Card; 