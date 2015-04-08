$(document).ready(function() {
  // hide all elemants to begin with ===REFACTOR LATER===
$('.circleOPR').hide()
$('.circleOPL').hide()
$('.squareOPC').hide()

clickCircle();
clickSquare();
clickClearHistory();
hideAll();
});


// click on a circle and remove last output, 
// add to history and show new output

var clickCircle = function() {
  $('.circle').on('click', function(event){
  event.preventDefault()
  console.log($(this).attr('id'))
  hideAll()
  $('.circleOPR').show();
  $(".target").append($(this).attr('id'))
  $(".histarget").append(" <a href=" + $(this).attr('href') + ">" + $(this).attr('id') + "</a>")
  })

};


// click on a square and remove last output, 
// add to history and show new output

var clickSquare = function() {
   $('.square').on('click', function(event){
  event.preventDefault()
  hideAll()
  $('.squareOPC').show();
  $(".target").append($(this).attr('id'))
  $(".histarget").append(" <a href=" + $(this).attr('href') + ">" + $(this).attr('id') + "</a>")
  })
};


// clear history with out refeshing the page
var clickClearHistory = function() {
  $('.clearhistory').on('click', function(event){
    event.preventDefault()
    $(".histarget").empty()
  })
};


var hideAll = function() {
  $(".target").empty()
  $('.circleOPR').hide()
  $('.circleOPL').hide()
  $('.squareOPC').hide()
};
