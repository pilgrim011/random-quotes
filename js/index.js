$(document).ready(function(){
  $("#new").on("click", function(){
$.getJSON("https://jsonp.afeld.me/?url=http://quotes.stormconsultancy.co.uk/random.json?callback=",function(a) {
  $(".quote").html("<h3>" + a.quote + "</h3>" + "<h5>" + a.author + "</h5>");
});
  });
  $("#tweet").click(function() {
  var phrase = document.getElementById("quote").innerText;
  var tweetUrl = "https://twitter.com/intent/tweet?text=" +
   phrase;
    
  window.open(tweetUrl);
});

  });
