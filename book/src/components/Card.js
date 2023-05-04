import { useState } from "react"
import Details from "./Details"

function Card ({books}){

    const [display, setDisplay] = useState(false)
    const [item, setItem] = useState({})

    console.log(books)

    return (
        <> 
           {
            books.map((book) => {
                let thumbnail = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail
        
                return(
                    <>
                    <div className="card" onClick={() => {setDisplay(true);setItem(book)}}>
                        <img src={thumbnail} alt="" />
                        <div className="bottom">
                            <h3 className="title">{book.volumeInfo.title}</h3>
                        </div>
                    </div>
                    </>
                )   
            })
           }
        
        <Details details={display} item={item} onClose={() => setDisplay(false)}/>
        </>
    )
}

export default Card; 