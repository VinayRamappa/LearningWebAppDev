var main = function () {
  "use strict";
  //var order;
  var stylefetch;
  //var value=$('sample1').val();
  function addactors(){
  $.getJSON(" http://localhost:3000/actors", function(loadHtml){
    loadHtml.forEach(function(click1){
    if (click1.starred === true){
      stylefetch =  "<li class ='mdl-list__item'>"+"<span class ='mdl-list__item-primary-content'>" + "<i class='material-icons mdl-list__item-avatar'>person</i>" +
                        "<span>" + click1.name + "</span>" + "</span>" + "<a class='mdl-list__item-secondary-action'><i id =" + click1.id + " class='material-icons' >star</i></a>" + "</li>";
                         $(stylefetch).appendTo('li.mdl-list-item');

    }
    else if (click1.starred === false){
      stylefetch = "<li class ='mdl-list__item'>" + "<span class ='mdl-list__item-primary-content'>" + "<i class='material-icons mdl-list__item-avatar'>person</i>" +
                        "<span>" + click1.name + "</span>" + "</span>" + "<a class='mdl-list__item-secondary-action'><i id =" + click1.id + " class='material-icons'>star_border</i></a>" + "</li>";
                         $(stylefetch).appendTo('li.mdl-list-item');
     }
     //order=click1.value[last];
     });
  });
}



$("button").on("click", function callback(event) {
       $.post("http://localhost:3000/actors",
       {

           name: $("#sample1").val(),
           starred: false
       });
       $("li").empty();
       addactors();
   });
addactors();
}
$(document).ready(main);
