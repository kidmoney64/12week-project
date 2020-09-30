function getdata() {


    var inputValue = $("#searchtext").val();

    var xhr = $.get(`https://api.giphy.com/v1/gifs/search?q=${ inputValue }&api_key=T4Qmn41LExNQ1yz9ItjjQtB8RZ64AyVp&limit=20`);
    xhr.done(function(response) { 
      console.log("success got data", response);
      var jiffs = response.data
      $('.jiffs').empty();
      for (let jiff of jiffs){
        $('.jiffs').append(`<img src="${jiff.images.original.url}" alt="giphy" class="giphy-image" />`)
      };

    });

  }

  var input = document.getElementById("searchtext");
  input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("searchgifs").click();
    }
  });  
