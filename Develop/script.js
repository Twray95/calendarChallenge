var today = dayjs();
var nineAMEl = document.querySelector("#hour-9");
var tenAMEl = document.querySelector("#hour-10");
var elevenAMEl = document.querySelector("#hour-11");
var twelvePMEl = document.querySelector("#hour-12");
var onePMEl = document.querySelector("#hour-13");
var twoPMEl = document.querySelector("#hour-14");
var threePMEl = document.querySelector("#hour-15");
var fourPMEl = document.querySelector("#hour-16");
var fivePMEl = document.querySelector("#hour-17");
var timeSlots = [
  nineAMEl,
  tenAMEl,
  elevenAMEl,
  twelvePMEl,
  onePMEl,
  twoPMEl,
  threePMEl,
  fourPMEl,
  fivePMEl,
];
var timeSlotNotes = [];

$(function () {
  //Puts the date information in the header.
  $("#currentDay").text(today.format("dddd MMMM DD, h:00"));

  //compares index of each div to current time to assign past, present, and future classes.
  $(timeSlots).each(function () {
    if ($(timeSlots).index(this) + 9 < +today.format("HH")) {
      $(this).addClass("past");
    } else if ($(timeSlots).index(this) + 9 == +today.format("HH")) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });

  //adds event listener to all save buttons that saves the id of the textarea and the textarea val() to local storage.
  $(".saveBtn").on("click", function () {
    var textNotes = {
      slotSelect: $(this).siblings(".description").attr("id"),
      slotText: $(this).siblings(".description").val(),
    };
    timeSlotNotes.push(textNotes);
    localStorage.setItem("notesLS", JSON.stringify(timeSlotNotes));
  });

  //parses the local storage into a new variable.
  var displayNotes = JSON.parse(localStorage.getItem("notesLS"));

  //displays the text from most recent saves to local storage into the relevant text boxes.
  $(displayNotes).each(function () {
    console.log("#" + this.slotSelect);
    $("#" + this.slotSelect).text(this.slotText);
  });
});
