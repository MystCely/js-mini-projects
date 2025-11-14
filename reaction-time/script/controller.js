makeCircles();
function makeCircles() {
  const lamps = document.getElementById('myLamps');

  for (let i = 0; i < 25; i++) {
    // creates a new div
    const newDiv = document.createElement('div');
    // addds class .circle to newDiv
    newDiv.classList.add('circle');
    // put newDiv in lamps element
    lamps.appendChild(newDiv);

    lampDivs.push(newDiv);

    // removes lightOn class when clicked
    newDiv.addEventListener('click', function () {
      newDiv.classList.remove('lightOn');

      // makes sure to only measure time when clicked on turned on light
      if (i === selectedLampIndex) {
        // stops timer when clicked
        finishTime = new Date().getTime();
        // calculate the difference between start to when clciked
        spentMs = finishTime - startTime;
        spentSec = spentMs / 1000;
        // shows reaction time = time you spent in sec in result element
        document.getElementById('reactionTime').textContent = spentSec;
        // picks a random light again
        turnLightOn();
      }
    });
  }
}

turnLightOn();
function turnLightOn() {
  // picks a random lamp
  selectedLampIndex = Math.floor(Math.random() * lampDivs.length);
  // adds the class to chosen random lamp
  lampDivs[selectedLampIndex].classList.add('lightOn');
  // start timer
  startTime = new Date().getTime();
}
