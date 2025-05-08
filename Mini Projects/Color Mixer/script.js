
let color1 = document.getElementById('color1')
let color2 = document.getElementById('color2')
let colormixed = document.getElementById('colormixed')
let button = document.getElementById('mix')

function componentToHex(c) {
  var hex = c.toString(16);
  console.log(c + " " + hex);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex([r, g, b]) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

// the regex is separating the value into groups of 2 characters, these characters being letters from 'a' to 'f' and digits, that is to say hexadecimal numbers. 
function convert(color) {
  return /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color.value).map(x=>parseInt('0x'+x)).slice(1, 4)
}

button.addEventListener("click", function() {

  let [c1,c2]= [color1,color2].map(x=>convert(x))
  let cm = []
  c1.forEach((c,i) => cm.push(parseInt((c1[i]+c2[i])/2)))
  colormixed.value = rgbToHex(cm)
});