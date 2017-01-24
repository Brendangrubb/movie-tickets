//BACK-END

var movies = function Movie(name, rating, run) {
  this.name = name;
  this.rating = rating;
  this.run = run;
};

// var manCalledOve = new Movie("A Man Called Ove", "PG-13", "1st run");
// var rogueOne = new Movie("Rogue One: A Star Wars Story", "PG-13", "1st run");
// var drStrange = new Movie("Moonlight", "R", "1st run");
// var arrival = new Movie("Arrival", "PG-13", "2nd run");
// var bladeRunner = new Movie("Blade Runner", "R", "2nd run");
// var selectMovie = [manCalledOve, rogueOne, drStrange, arrival, bladeRunner];

// selectMovie.forEach(movie) {
//
// }


//FRONT-END

$(function() {
  $("#movie-selection").change(function() {
    $("#movie-times").empty();

    var movieList = ["ove", "rogue", "strange", "arrival", "bladerunner"];

    for (var i = 0; i < movieList.length; i++) {
      if ($(this).val() === movieList[i]) {
        $("#movie-times").append("<li>3:30</li>" + "<li>6:00</li>" + "<li>9:00</li>");
      };
    };
  });

  $(".all-user-input").submit(function(event) {
    event.preventDefault();
  });
});
