import {useState}from "react";
import Card from "./Card";
import axios from 'axios'

function Library() {
    const [search, setSearch] = useState("");
    const [books, setBooks] = useState([]);
    
    function searchBook (evt){
        if(evt.key === 'Enter'){
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+ search +'&key=AIzaSyDqjK5SERQ_VDJvUDjXvn-GI7yVtAMRjBs'+'&maxResults=30')
            .then(res =>  setBooks(res.data.items))
            .catch(err => console.log(err))
        }
    }

    console.log(books)

    return (
        <>
            <div className="header">
                <div className="row1">
                    <h1>A room without books is like<br /> a body without a soul.</h1>
                </div>
                <div className="row2">
                    <h2>Find Your Book</h2>
                    <div className="search">
                        <input 
                            type="text" 
                            placeholder="Enter Your Book Name"
                            value={search} 
                            onChange={e => setSearch(e.target.value)}
                            onKeyDown = {searchBook} />
                    </div>
                    <img src="./images/bg2.png" alt="" />
                </div>
            </div>

            <div className="container">
                <Card books ={books}/>
            </div>
        </>
    );
}

export default Library;