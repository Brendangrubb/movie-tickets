//*****BACK-END*****

function Movie(name, rating, run, times) { // Create Movie constructor
  this.movieName = name;
  this.rating = rating;
  this.run = run; // Returns as true or false; 1st run is true, 2nd run is false
  this.times = times;
};

//*****Movie list*****

var manCalledOve = new Movie("A Man Called Ove", "PG-13", true, ["3:00PM", "5:30PM", "8:00PM"]);
var rogueOne = new Movie("Rogue One: A Star Wars Story", "PG-13", true, ["11:00AM", "2:30PM", "4:30PM", "9:00PM"]);
var moonlight = new Movie("Moonlight", "R", true, ["5:00PM", "8:30PM", "11:00PM"]);
var arrival = new Movie("Arrival", "PG-13", false, ["11:30AM", "2:00PM", "4:30PM", "7:15PM"]);
var bladerunner = new Movie("Blade Runner", "R", false, ["5:00PM", "7:30PM", "10:00PM"]);

//*****End Movie list*****

var movieSelection = function() { // Returns times of each movie
  $("#movie-times").empty();

  var movieInput = $("#movie-selection").val();
  var movieValues = ["ove", "rogue", "moonlight", "arrival", "bladerunner"];
  var nowShowing = [manCalledOve, rogueOne, moonlight, arrival, bladerunner];

  for (var i = 0; i < movieValues.length; i++) { // Cycles through each movie to get showtimes
    if ($("#movie-selection").val() === movieValues[i]) {
      var timeCount = 0;
      nowShowing[i].times.forEach(function(time) { // Cycles through each time and displays it individually in a list
        timeCount += 1; // Sets unique ID to every LI element
        $("#movie-times").append("<li id=\"" + timeCount + "\">" + time + "</li>");
      });
    };
  };
};

//*****FRONT-END*****

$(function() {
  $("#movie-selection").change(function() {
    movieSelection();
  });
});
