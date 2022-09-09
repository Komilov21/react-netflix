const listOfMovies =()=>{
    fetch(" https://striveschool-api.herokuapp.com/api/movies/romantic", {
        headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzA3NzQ5OTFlYjc2ZDAwMTUxNTAxODkiLCJpYXQiOjE2NjE1MTgyNzksImV4cCI6MTY2MjcyNzg3OX0.3KZ8pb2WHrOUkElJr5DcIOjkDR0jUMWb3BjpawhpCuc"
        }
        })
    .then(response => response.json())
    // .then(list => console.log(list))
    .then( lists=> {

        for(i=0;i<lists.length;i++){
            // console.log(lists)
            const list=lists[i]
            console.log(list)
        }
    })

    const images = document.querySelectorAll("img")
}
listOfMovies()