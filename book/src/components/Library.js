import {useState, useEffect}from "react";
import Card from "./Card";

function Library() {
    const [search, setSearch] = useState("");
    const [bookData, setData] = useState([]);
    const [book, setBook] = useState([])

    /*useEffect(() => {
        fetch('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyDw6XOwwaMTGwjSTsSLO6ixnq8RFH7E9zU' + '&maxResults=40')
        .then(res => res.json())
        .then(res => setBook(res.data.items))
        .catch(err => console.log(err));
    })*/
    
    const searchBook = (evt) => {
        if (evt.key === "Enter") {
                fetch('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyDw6XOwwaMTGwjSTsSLO6ixnq8RFH7E9zU' + '&maxResults=40')
                .then(res => res.json())
                .then(res => setData(res.data.items))
                .catch(err => console.log(err));
        }
    };
    return (
        <>
            <div className="header">
                <div className="row1">
                    <h1>A room without books is like<br /> a body without a soul.</h1>
                </div>
                <div className="row2">
                    <h2>Find Your Book</h2>
                    <div className="search">
                        <form onSubmit={searchBook}>
                        <input type="text" placeholder="Enter Your Book Name"
                            value={search} onChange={e => setSearch(e.target.value)}
                            onKeyDown = {searchBook} />
                        <button><i className="fas fa-search"></i></button>
                        </form>
                    </div>
                    <img src="./images/bg2.png" alt="" />
                </div>
            </div>

            <div className="container">
                {<Card book={bookData} />}
            </div>
        </>
    );
}

export default Library;