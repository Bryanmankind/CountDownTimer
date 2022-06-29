"use strict";
const noon = 12;
const evening = 18;

// Show current time
const ShowCurrentTime = function () {
  // Get element from Dom for Clock
  var Clock = document.getElementById("CurrentTime");

  // Curent time
  const currentTime = new Date();

  // Getting the Hours, Minutes, Seconds
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  let medridian = "AM";

  // setting the hours
  if (hours >= noon) {
    medridian = "PM";
  }

  if (hours > noon) {
    hours -= 12;
  }

  // putting the string together
  const DisplayTime = `${hours}:${minutes}:${seconds} ${medridian}+`;

  // Replace Text With Time
  Clock.innerText = DisplayTime;
};

// Calling the Time Function
ShowCurrentTime();

// Increament Second
setInterval(ShowCurrentTime, 1000);

// Getting DOM Element
const DateOfBirth = document.querySelector(".DateOfBirth");
const AgeEntrybtn = document.querySelector(".btnEnter");

// CountDown Calculator

AgeEntrybtn.addEventListener("click", function () {
  const IncTime = setInterval(function () {
    const NewCountTime = document.getElementById("InputCountTime");

    // Input Data from user
    const InputDateOfBirth = new Date(DateOfBirth.value);

    // Get Month
    const Getmonth = InputDateOfBirth.getMonth() + 1;

    // GetDay
    const GetDay = InputDateOfBirth.getDate() + 1;

    // GetYear
    const year = new Date().getFullYear();

    // InputDayAndMonth
    const InputDayAndMonth = new Date(`${Getmonth} ${GetDay} ${year}`);

    // Present Time
    const PresentTime = new Date().getTime();

    const PresentMonth = new Date().getMonth();

    if (Getmonth > PresentMonth) {
      // Time Difference
      const NewTimeLeft = InputDayAndMonth - PresentTime;

      // Get Day, Hours, Minutes, Second
      const NewDay = Math.floor(NewTimeLeft / (1000 * 60 * 60 * 24));
      const Newhours = Math.floor(
        (NewTimeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let Newminutes = Math.floor(
        (NewTimeLeft % (1000 * 60 * 60)) / (1000 * 60)
      );
      let Newseconds = Math.floor((NewTimeLeft % (1000 * 60)) / 1000);

      // Display CountDown
      const DisplayNewCountDown = `${NewDay}day : ${Newhours}hr : ${Newminutes}min : ${Newseconds}s`;
      NewCountTime.innerText = DisplayNewCountDown;
    } else {
      NewCountTime.innerText = "Put In Your Date of Birth";
    }

    if (NewTimeLeft < 0) {
      clearInterval(IncTime);
      NewCountTime.innerText = "Happy Birthday To You";
    }
  }, 1000);
});

// BRYAN increment countdown time
const Bryan = setInterval(function () {
  const BirthdayDATE = document.getElementById("CountDown");

  //  The count down date
  let CountDownTime = new Date("Aug 22, 2022").getTime();

  //  current time
  let TimeNow = new Date().getTime();

  // subtract Counddowntime from current time
  var TimeLeft = CountDownTime - TimeNow;

  // convert TimeLeft to millseconds
  let days = Math.floor(TimeLeft / (1000 * 60 * 60 * 24));
  let hours = Math.floor((TimeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((TimeLeft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((TimeLeft % (1000 * 60)) / 1000);

  // display countdown in string form.
  const DisplayCountDown = `${days}days : ${hours}hr : ${minutes}min : ${seconds}s`;

  // display count down time on web pag.
  BirthdayDATE.innerText = DisplayCountDown;

  //when countdown is over

  if (TimeLeft < 0) {
    clearInterval(Bryan);
    BirthdayDATE.innerText = "Happy Birthday To You";
  }
}, 1000);

//  BriTech BriTech BriTech BriTech BriTech BriTech BriTech BriTech BriTech BriTech
