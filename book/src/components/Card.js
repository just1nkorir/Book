import { useState } from "react"
import Details from "./Details"
import MyList from "./MyList"

function Card ({books}){
    const [list, setList] = useState([])
    const [display, setDisplay] = useState(false)
    const [item, setItem] = useState([])

    console.log(books)

    function handleAddToList(book){
       if (list.find(b => b.id === book.id)) {
            return;
          }
          setList(prevbooks => [...prevbooks, book]);
    }

    function handleRemoveFromList(id) {
        setList(prevbooks => prevbooks.filter(b => b.id === id))
    }


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
                        <button onClick={() => handleAddToList(book)}>add to my list</button>
                    </div>
                    </>
                )   
            })
           }
        <Details display={display} item={item} onClose={() => setDisplay(false)}/>
        <MyList list={list} handleRemove={handleRemoveFromList}/>
        </>
    )
}

export default Card; 