var movie0 = {
  title: 'In Bruges',
  rating: 5,
  watched: true
}

var movie1 = {
  title: 'Frozen',
  rating: 4.5,
  watched: false
}

var movie2 = {
  title: 'Mad Max Fury Road',
  rating: 5,
  watched: true
}

var movie3 = {
  title: 'Les Miserables',
  rating: 3.5,
  watched: false
}

var movieDB = [movie0, movie1, movie2, movie3]

// var templateTrue = 'you have watched '
// var templateFalse = 'You have not watched '

// for (var i = 0; i < movieDB.length; i++) {
//   var output = ''
//   if (movieDB[i].watched) {
//     output += templateTrue
//   } else {
//     output += templateFalse
//   }
//   output += '"' + movieDB[i].title + '"' + ' - ' + movieDB[i].rating + ' stars'
//   console.log(output)
// }

movieDB.forEach(function (movie) {
  var result = 'you have '
  if (movie.watched) {
    result += 'watched '
  } else {
    result += 'not watched '
  }
  result += '"' + movie.title + '""' + ' - '
  result += movie.rating + ' stars'
  console.log(result)
})
