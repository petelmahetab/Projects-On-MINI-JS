let intervalID; // Declare intervalID globally

const selectpara = document.querySelector('.but1').addEventListener('click', () => {
  // SETTIMEOUT:----->
  // setTimeout(() => {
  //   console.log("Repeat and repeat.");
  // }, 1000);
  // clearInterval();

  function interval(mes) {
    if (!intervalID) {
      const date = new Date();
      date.toLocaleDateString;
      console.log(`${mes} is running: ${date}`);
      intervalID = setInterval(interval, 1000, "Look Time"); // Assign interval ID
    }
  }

  // SETINTERVAL:-->
  // const set = setInterval(interval, 1000, "Look Time");
  // clearInterval(set);
});

const stopButton = document.querySelector('.but2');

stopButton.addEventListener('click', () => {
  if (intervalID) {
    clearInterval(intervalID);
    intervalID = null;
    console.log("Your Interval will be Stopped..");
  }
});