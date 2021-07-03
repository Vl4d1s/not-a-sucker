var request = require("request");

const requestLoop = setInterval(function () {
  request(
    {
      url: "http://localhost:3000/api/search/deletecache",
      method: "DELETE",
      timeout: 10000,
      followRedirect: true,
      maxRedirects: 10,
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log("Sucess!");
      } else {
        console.log("error" + response.statusCode);
      }
    }
  );
}, 180000); // 1000ms (1s) * 60 * 30

// If we ever want to stop it...  clearInterval(requestLoop)
