function saveToWatchList(imdbID) {
  const movieDataString = JSON.stringify(movieData);
  localStorage.setItem('movieData', movieDataString)
  let data = (localStorage.getItem('movieData'))
  let movie = movieData.find((currentMovie) => {
    return currentMovie.imdbID == imdbID})
  let watchList = JSON.parse(data)
    if(watchList === null) {
      watchList = []
    }
    watchList.push(movie);  
}

function renderMovies(movieArray) {
  const movieHTMLArray = movieArray.map(function(currentMovie) {
    return `
      <div class="card-body">
    <img src="${currentMovie.Poster}" class="card-img-top" alt="movieposter">
        <h5 class="title">${currentMovie.Title}</h5>
        <button class="release_date_button">${currentMovie.Year}</button>
        <div class="card-footer">
        <a href="#" onclick="saveToWatchList('${currentMovie.imdID}')" class="btn btn-primary">Add</a>
        </div>
        </div>`
  });
  return movieHTMLArray.join('');
}


const movieContainer = document.querySelector('.movie-container')
const myForm = document.getElementById('search-form')
  myForm.addEventListener('submit', function (e) {
  const searchString = document.querySelector('.search-bar').value
  let urlEncodeSearchString = encodeURIComponent(searchString)
    e.preventDefault()
    axios.get(`http://www.omdbapi.com/?apikey=b43843a0&s=${urlEncodeSearchString}`)
    .then((response) => {
      movieContainer.innerHTML = renderMovies(response.data.Search)
      movieData = response.data.Search
      console.log(response.data)
    })
  })



