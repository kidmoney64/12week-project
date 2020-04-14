 
function getdata() {

    var inputValue = $("#searchtext").val();

    var xhr = $.get(`http://api.giphy.com/v1/gifs/search?q=${ inputValue }&api_key=mHWTM2zQ75bsA37jtTPoHVrd3Bf0JXdy&limit=30`);
    xhr.done(function(response) { 
        console.log("success got data", response);
        var jiffs = response.data
        $('.jiffs').empty();
        for (i in jiffs){
        $('.jiffs').append("<img src='"+jiffs[i].images.original.url+"' styles='height:100px; width:100px;'/>")
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

