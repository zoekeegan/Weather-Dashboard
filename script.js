
var APIKey = "033d6061e30fc30a6f768f307c745e4f";
var city;
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

fetch(queryURL);

localStorage