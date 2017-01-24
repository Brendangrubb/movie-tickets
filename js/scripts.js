//BACK-END

var movieSelector = function() {

};

function Movie(name, rating, run, time) {
  this.movieName = name;
  this.rating = rating;
  this.run = run;
  this.time = [];
};

var manCalledOve = new Movie("A Man Called Ove", "PG-13", "1st run", ["3:00pm", "5:00pm", "7:30pm"]);
var rogueOne = new Movie("Rogue One: A Star Wars Story", "PG-13", "1st run", ["11:00am", "2:30pm", "4:30pm", "9:00pm"]);
var moonlight = new Movie("Moonlight", "R", "1st run", ["5:00pm", "8:30pm"]);
var arrival = new Movie("Arrival", "PG-13", "2nd run", ["11:30am", "3:30pm", "6:00pm"]);
var bladeRunner = new Movie("Blade Runner", "R", "2nd run", ["8:00pm", "10:00pm"]);


// selectMovie.forEach(movie) {
//
// }


//FRONT-END

$(function() {
  $("#movie-selection").change(function() {
    $("#movie-times").empty();

    var movieList = ["ove", "rogue", "moonlight", "arrival", "bladerunner"];

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
