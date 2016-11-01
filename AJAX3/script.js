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
    
function showCountriesList(resp) { //obiekty
    self = this;
    this.resp = resp;

    countriesList.empty();
    
    resp.forEach(function(item) { // atrybuty obiektow
        self = this;
        this.item = item;
        
        $("<li>").text("Państwo: " + item.name).appendTo(countriesList);

        $('li').each(function(country) {
            $(this).attr('id', (resp[country].name));
        });
        choiceCountry();
     });  
        
        //$("li").eq(0).css("display", "block");

        //if ($("li").attr("id") == self.item.name){
        //    choiceCountry();
        //}       
}

function choiceCountry(){
    $("li").click(function() {
       countriesList.empty();

       $("<li>").text("Państwo : " + self.item.name).appendTo(countriesList);
       $("<li>").text("Stolica : " + self.item.capital).appendTo(countriesList);
       $("<li>").text("Waluta : " + self.item.currencies).appendTo(countriesList);
       $("<li>").text("Kontynent : " + self.item.region).appendTo(countriesList);
       $("<li>").text("Nazwa kraju po niemiecku : " + self.item.translations.de).appendTo(countriesList);
    });
}
  
function showError(info) {
    if(info.status == 404) {
        countriesList.empty();
        $("<li>").text("Tego wyszukac nie dam rady").appendTo(countriesList);
    }   
}
    
  




