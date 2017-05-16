$(document).ready(function(){
  $("button").on("click", function(){
$.getJSON("https://jsonp.afeld.me/?url=http://quotes.stormconsultancy.co.uk/random.json?callback=",function(a) {
  $(".quote").html("<h3>" + a.quote + "</h3>" + "<h5>" + a.author + "</h5>");
});
  });
  

  });