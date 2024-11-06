// Toggles

let isTimerDone = false;
let isBreadInToaster = false;
let isToast = false;

// Bread Variable
const sliceOfBread = {
  size: [60, 40, 5],
  burnPoint: 600,
  toastPoint: 300,
  currentTempt: 20,
};

const toaster = {
  slots: 4,
  button: (e) => {
    if (e) {
      return true;
    }
    return false;
  },
};

// FUNCTIONS

// cageDown
function cageDown(push) {
  if (push) {
    timer();
  }
}

// TODO:  merge cageUp with cageDown
function cageDown(e) {}

function timer(e, time = 120) {
  if (time > 1) {
    time--;
    activateHeat();
  }

  // time done, signal cageUp// toggle cage && disable heat element.
}

function activateHeat() {
  // turn on heat element
  // increase bread temp
}
