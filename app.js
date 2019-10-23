// console.log($)

$(() => {
    
  // setting objects
    const $openBtn = $('#openModal')
    const $modal = $('#modal')
    const $closeBtn = $('#close')
  // functions for objects and click functions
    const openModal = () => {
      $modal.css('display', 'block')
    }
    $openBtn.on('click', openModal)
    
    const closeModal = () => {
      $modal.css('display', 'none')
    }
    $closeBtn.on('click', closeModal)


  // OMDB api input user input
  $('form').on('submit', (event) => {
    event.preventDefault()

    const userInput = $('input[type="text"]'). val()

    $.ajax({
      url: "https://www.omdbapi.com/?apikey=c6a3e6b0&t=" + userInput,
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
   
    // OMDB api input Random input BROKEN!!!!!! ugh
    $('button').on('click', (event) => {
      event.preventDefault()
      const randNum = Math.floor(Math.random() * 9000000);
        console.log(randNum)
      $.ajax({
        url: "https://www.omdbapi.com/?apikey=c6a3e6b0&i=tt" + randNum,
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
    })



})
