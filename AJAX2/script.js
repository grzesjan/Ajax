var tweetLink = "https://twitter.com/intent/tweet?text=";
var quoteUrl = "http://api.forismatic.com/api/1.0/?method=getQuote&key=867576&format=jsonp&lang=en&jsonp=?";

function getQuote() {
	$.getJSON(quoteUrl, createTweet);
}

function createTweet(input) {
    if (!input.quoteAuthor) {
        input.quoteAuthor = "Grzegorz Janusz";
    } 
   
    var tweetText = "Cytat dnia:" + input.quoteText + "Autor:" + input.quoteAuthor;
    
    if(tweetText.lenght > 140) {
        getQuote();
    } else {
        var tweet = tweetLink + encodeURIComponent(tweetText);
        $(".quote").text("' " + input.quoteText + " '");
        $(".author").text("Autor: " + input.quoteAuthor);
        $(".tweet").attr('href', tweet);
    }
}

$(document).ready(function(){
    getQuote();
    $(".trigger").click(function(){
        getQuote();
    });
});