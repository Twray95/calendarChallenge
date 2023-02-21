// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
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
  $("#currentDay").text(today.format("dddd MMMM DD, h:00"));

  $(timeSlots).each(function () {
    if ($(timeSlots).index(this) + 9 < +today.format("HH")) {
      $(this).addClass("past");
    } else if ($(timeSlots).index(this) + 9 == +today.format("HH")) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });

  $(".saveBtn").on("click", function () {
    console.log($(this).siblings(".description").val());
    console.log($(this).siblings(".description").attr("id"));
    var textNotes = {
      slotSelect: $(this).siblings(".description").attr("id"),
      slotText: $(this).siblings(".description").val(),
    };
    timeSlotNotes.push(textNotes);
    JSON.stringify(timeSlotNotes);
    localStorage.setItem("timeSlotNotes", timeSlotNotes);
  });

  function displayNotes() {
    console.log("test");
    var notesForSlot = JSON.parse(localStorage.getItem("timeSlotNotes"));
    $(notesForSlot).slotSelect.each(function () {
      console.log($(this));
    });
  }

  displayNotes();

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
