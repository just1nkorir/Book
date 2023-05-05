function MyList({list, handleRemove}){

    console.log(list)

    return(
        /*
        <>
        {
            list.map((list) => {
                let thumbnail = list.volumeInfo.imageLinks && list.volumeInfo.imageLinks.smallThumbnail
        
                return(
                    <>
                    <div className="card" onClick={handleRemove}>
                        <img src={thumbnail} alt="" />
                        <div className="bottom">
                            <h3 className="title">{list.volumeInfo.title}</h3>
                            <h4>{list.volumeInfo.authors}</h4>
                        </div>
                    </div>
                    </>
                )   
            })
        }
        </>
        */
       <>
       </>
    )
}

export default MyList