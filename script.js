var timeDisplayEl = $('#time-display');
var projectDisplayEl = $('#project-display');
var currentDayEl = $('#currentDay');
var currentHour = moment().hour();
var btn = $('.btn');

function displayTime() {
    var rightNow = moment().format('dddd, MMMM Do');
    currentDayEl.text(rightNow);
}
displayTime();


function checkTimeBlock() {
for (var i=6; i<19; i++){
  var text = localStorage.getItem(i)
  $("#"+i).val(text);
  if (currentHour>i){
    $('#'+i).addClass("past");
  }
  if (currentHour === i){
    $('#'+i).addClass("present");
  }
  if (currentHour<i){
    $('#'+i).addClass("future");
  }
}
}
checkTimeBlock();

function saveNotes(){
var id = $(this).attr("data-id");
var text = $("#"+id);
localStorage.setItem(id, text.val());
}
btn.on("click", saveNotes);



