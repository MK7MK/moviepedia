const btn = document.getElementById("searchButton")
// const title= document.getElementById("Title")
// const year= document.getElementById("Year")



btn.addEventListener("click",()=>{
    btn.onclick = fetchData()
})
async function fetchData(){
  var movie = document.getElementById("searchTerm").value
  console.log(movie)
  console.log(movie)
  console.log("working")
  var response = await fetch("https://imdb8.p.rapidapi.com/auto-complete?q="+movie, {
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    "x-rapidapi-key": "20b3d8703emshadd6a30bf7bc64fp1b3b2fjsn5c7c71ac266a"
  }
})

     
     
  
    let data  = await response.json()
    console.log(data)
    var response2 = await fetch('http://www.omdbapi.com/?apikey=c62e2938&t='+movie)
    let data2  = await response2.json()
     console.log(data2)
   
     document.getElementById("Title").innerHTML = "<b>Title: </b>"+data2.Title
     document.getElementById("Year").innerHTML = "<b>Releases Year: </b>"+data2.Year
     document.getElementById("Rated").innerHTML = "<b>Rated :</b>"+data2.Rated
     document.getElementById("Runtime").innerHTML = "<b>Rumtime: </b>"+data2.Runtime
     document.getElementById("Genre").innerHTML = "<b>Genre :</b>"+data2.Genre
     document.getElementById("Director").innerHTML = "<b>Director :</b>"+data2.Director
     document.getElementById("Writer").innerHTML = "<b>Writer :</b>"+data2.Writer
     document.getElementById("Actors").innerHTML = "<b>Actors :</b>"+data2.Actors
     document.getElementById("Plot").innerHTML = "<b>Plot :</b>"+data2.Plot
     document.getElementById("Awards").innerHTML = "<b>Awards :</b>"+data2.Awards
     document.getElementById("imdbRating").innerHTML = "<b>imdbRating :</b>"+data2.imdbRating
     document.getElementById("BoxOffice").innerHTML = "<b>Boxoffice :</b>"+data2.BoxOffice
     
     
    var a= data.d[0].i.imageUrl
    document.getElementById("i").innerHTML ="<center><img src="+a+ "width=200px height=150px></center>"
     document.getElementById("l").innerHTML = "<b>Film name :</b>"+data.d[0].l
    document.getElementById("q").innerHTML = "<b>Type :</b>"+data.q
    document.getElementById("s").innerHTML = "<b>Cast :</b>"+data.d[0].s
    document.getElementById("yr").innerHTML = "<b>Year :</b>"+data.d[0].y
    
  
   
    }

