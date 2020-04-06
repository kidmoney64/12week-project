var xhr =  $.get(("http://api.giphy.com/v1/gifs/search?q=+input+&api_key=mHWTM2zQ75bsA37jtTPoHVrd3Bf0JXdy&limit=30"));
xhr.done(function(data) { console.log("success got data", data); 
});