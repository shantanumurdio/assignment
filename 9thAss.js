const styledDiv = document.getElementById('styledDiv');
const colorDropdown = document.getElementById('colorDropdown');
const bgColorDropdown = document.getElementById('bgColorDropdown');
const paddingDropdown = document.getElementById('paddingDropdown');
const fontSizeDropdown = document.getElementById('fontSizeDropdown');
const fontWeightDropdown = document.getElementById('fontWeightDropdown');

colorDropdown.addEventListener('change', () => {
  styledDiv.style.color = colorDropdown.value;
});

bgColorDropdown.addEventListener('change', () => {
  styledDiv.style.backgroundColor = bgColorDropdown.value;
});

paddingDropdown.addEventListener('change', () => {
  styledDiv.style.padding = paddingDropdown.value;
});

fontSizeDropdown.addEventListener('change', () => {
  styledDiv.style.fontSize = fontSizeDropdown.value;
});

fontWeightDropdown.addEventListener('change', () => {
  styledDiv.style.fontWeight = fontWeightDropdown.value;
});