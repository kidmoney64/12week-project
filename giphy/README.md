# 12week-project
giphy
<!doctype html>
<html lang="en">
  <head>
    <title>giphy</title>
  
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="css/stylesheet.css">
    <link rel="stylesheet" href="css/style.scss">
  </head>
  <body>
    <header>
      <nav>
          <ul class="sidenav">
              <li><a class="active" href="home.html">home</a></li>
              <li><a href="aboutme.html">About Us</a></li>
          </ul>
       </nav>
    </div>
    </header>
    <div class="header">
      <header>WELCOME TO THE GIPHY JUNGLE</header>
    </div>
    <p>enter anything you would like to search</p>
    <div class="searchbar">
    <input id="searchtext" type="text" placeholder="Search"></input>
    <input id="searchgifs" type="submit" onclick="getdata()"></input>
    </div>
    <div class="jiffs"></div>

    <footer>
      <p>copyright 2020</i></p>
    </footer>

      <script src="Scripts/jquery-3.4.1.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
      <script src="js/giphy.js"></script>
</body>
</html>









$('.jiffs').append("<img src='"+jiffs[i].images.original.url+"' styles='height:100px; width:100px; padding: 50px;'/>")



 
function getdata() {

    var inputValue = $("#searchtext").val();

    var xhr = $.get(`http://api.giphy.com/v1/gifs/search?q=${ inputValue }&api_key=T4Qmn41LExNQ1yz9ItjjQtB8RZ64AyVp&limit=20`);
    xhr.done(function(response) { 
        console.log("success got data", response);
        var jiffs = response.data
        $('.jiffs').empty();
        for (i in jiffs){
        $('.jiffs').append("<img src='"+jiffs[i].images.original.url+"' styles='height:100px; width:100px; padding: 100px;'/>")
        };
    var input = document.getElementById("searchtext");
        input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("searchgifs").click();
  }
});
    });

}
