const express = require("express");
const app = express();
const https = require("https");
// app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

//Test branch integration

//HTTP REQUEST
// app.post("/", (req, res) => {
//     console.log(req.body.getJoke);
//   const url =
//     "https://api.openweathermap.org/data/3.0/onecall?lat=51.0447&long=114.0719&appid=be0d64d5a9419abd6269ff44961bb328&units=metric";
//   https.get(url, (response) => {
//     console.log(response); //logs to server console, not browser console
//     response.on("data", (data) => {
//       const weather = JSON.parse(data);
//       console.log(weather.message);
//       res.write("<h1>You got an error:</h1>");
//       res.write("<p>" + weather.message + "</p>");
//       res.send();
//     });
//   });
// });

//USING AXIOS
const axios = require("axios");
const options = {
  method: "GET",
  url: "https://dad-jokes.p.rapidapi.com/random/joke",
  headers: {
    "X-RapidAPI-Key": "a814a553bfmshb3a000118589c9ep16ae72jsn8e9b66840345",
    "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
  },
};

app.post("/", (req, res) => {
  axios
    .request(options)
    .then(function (response) {
      console.log(response.status);
      dadJoke = response.data.body[0].punchline;
      res.write("The best random dad joke is.... " + dadJoke);
      res.send();
    })
    .catch(function (error) {
      console.error(error);
    });
});

app.listen(3000);