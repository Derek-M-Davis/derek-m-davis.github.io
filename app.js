// console.log($)




$(() => {
  // Grabbing About the Game button
const $openBtn = $('#openModal');

// Grabbing modal element
const $modal = $('#modal');

// Grabbing close button
const $closeBtn = $('#close');

$openBtn.on('click', openModal);
$closeBtn.on('click', closeModal);

const openModal = () => {
  $modal.css('display', 'block');
}

const closeModal = () => {
  $modal.css('display', 'none');
}




  $('form').on('submit', (event) => {
    event.preventDefault()

  const userInput = $('input[type="text"]'). val()

  $.ajax({
    url: "http://www.omdbapi.com/?apikey=c6a3e6b0&t=" + userInput,
  }).then(
    (data) => {
      $('#title').html(data.Title)
      $('#year').html(data.Year)
      $('#rated').html(data.Rated)
      $('#poster').attr('src', data.Poster)
      $('#releaseDate').html(data.Released)
      $('#awards').html(data.Awards)
      $('#boxOffice').html(data.BoxOffice)
      $('#plot').html(data.Plot)
      $('#actors').html(data.Actors)


      console.log(data)
    },
    (error) => {
      console.log(error)
    }
  )
    $('form').trigger('reset');
})
})