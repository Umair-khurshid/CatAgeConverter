// Reusable Constants for Age Mapping
const catToHumanAgeMapping = [
  0, 15, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96,
];

// Function to update age from the slider
function updateCatAge() {
  const slider = document.getElementById("catAgeSlider");
  const tooltip = document.getElementById("sliderTooltip");
  const catAge = slider.value;

  // Sync with manual input and update tooltip
  document.getElementById("catAgeInput").value = catAge;
  tooltip.innerText = catAge;
  tooltip.style.left = `${(catAge / slider.max) * 100}%`;

  calculateHumanAge(catAge);
}

// Function to update age from the manual input
function updateCatAgeFromInput() {
  const input = document.getElementById("catAgeInput");
  const slider = document.getElementById("catAgeSlider");
  const catAge = input.value;

  // Sync with slider
  slider.value = catAge;
  updateCatAge(); // Reuse existing function
}

// Function to calculate and display human age
function calculateHumanAge(catAge) {
  const humanAgeDisplay = document.getElementById("humanAgeDisplay");
  const humanAge = catToHumanAgeMapping[catAge] || 0; // Get human age from mapping
  humanAgeDisplay.innerText = humanAge;
}
