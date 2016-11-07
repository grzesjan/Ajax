var url = "https://restcountries.eu/rest/v1/name/";
var countriesList = $("#countries");

$("#search").click(searchCountries);

function searchCountries() {
    var countryName = $("#country-name").val();
    
    if(!countryName) {
        countryName = "POland";
    }
    
    $.ajax({
        url: url + countryName,
        method: "GET",
        error: showError,
        success: showCountriesList  
    });   
}
    
function showCountriesList(resp) {
    countriesList.empty();
    this.item = this;
    resp.forEach(function(item) {
        $("<li id='"+ item.name +"'>").text("Państwo: " + item.name).appendTo(countriesList);            
    });
    choiceCountry();
}

function choiceCountry(){
    $("li").click(function() {
       var countryName = $(this).attr('id');
       
       $.ajax({
        url: url + countryName,
        method: "GET",
        error: showError,
        success: showCountryDetails  
        });  
    });
}

function showCountryDetails(response){
    countriesList.empty();
    var choosenCountry = response[0];
    $("<li>").text("Państwo : " + choosenCountry.name).appendTo(countriesList);
    $("<li>").text("Stolica : " + choosenCountry.capital).appendTo(countriesList);
    $("<li>").text("Waluta : " + choosenCountry.currencies).appendTo(countriesList);
    $("<li>").text("Kontynent : " + choosenCountry.region).appendTo(countriesList);
    $("<li>").text("Nazwa kraju po niemiecku : " + choosenCountry.translations.de).appendTo(countriesList);
}
  
function showError(info) {
    if(info.status == 404) {
        countriesList.empty();
        $("<li>").text("Tego wyszukac nie dam rady").appendTo(countriesList);
    }   
}
    
  




