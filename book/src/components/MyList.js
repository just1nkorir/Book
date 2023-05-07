import { useState, useEffect } from "react"

function MyList(){

    const [bookList, setBookList] = useState({})
    const [bookId,setBookId] = useState([])

    useEffect(() => {
        fetch('http://localhost:3500/bookList')
        .then((res) => res.json())
        .then(res => setBookList(res))
        .catch((err) => console.log(err))
    },[]) 

    console.log(bookList)

   /* useEffect(() => {
        fetch(`http://localhost:3500/bookList/${bookId}`,{
            method : "DELETE",
            headers : {
                "Content-Type" : "application/json"
            }
        })
    })*/
    
    return (
        
        <>
        {/*
            bookList.map((book) => {
                let thumbnail = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail
        
                return(
                    <>
                    <div className="card">
                        <img src={thumbnail} alt="" />
                        <div className="bottom">
                            <h3 className="title">{book.volumeInfo.title}</h3>
                            <h4>{book.volumeInfo.authors}</h4>
                        </div>
                        <button onClick={() => setBookId(book.id)}>Delete</button>
                    </div>
                    </>
                )   
            })
        */}
        </>
    )
}

export default MyList;