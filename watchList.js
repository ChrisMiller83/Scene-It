
function renderMovies(movieArray) {
  const movieHTMLArray = movieArray.map(function (currentMovie) {
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
movieContainer.innerHTML = renderMovies(JSON.parse(localStorage.getItem('movieData')));