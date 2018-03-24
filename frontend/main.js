function addNumber(x) {
  /*if(x == '.' && document.querySelector('.screen').innerHTML.indexOf('.') != -1) {
    x = '';
  }
  if(document.querySelector('.screen').innerHTML == '0' && x != '.') {
    x = '';
  }*/
  document.querySelector('.screen').innerHTML += x;
}

document.querySelector('#button-1').onclick = function() {
  addNumber(1);
}
document.querySelector('#button-2').onclick = function() {
  addNumber(2);
}
document.querySelector('#button-3').onclick = function() {
  addNumber(3);
}
document.querySelector('#button-4').onclick = function() {
  addNumber(4);
}
document.querySelector('#button-5').onclick = function() {
  addNumber(5);
}
document.querySelector('#button-6').onclick = function() {
  addNumber(6);
}
document.querySelector('#button-7').onclick = function() {
  addNumber(7);
}
document.querySelector('#button-8').onclick = function() {
  addNumber(8);
}
document.querySelector('#button-9').onclick = function() {
  addNumber(9);
}
document.querySelector('#button-0').onclick = function() {
  addNumber(0);
}
document.querySelector('#dot').onclick = function() {
  addNumber('.');
}
document.querySelector('#plus').onclick = function() {
  addNumber('+');
}
document.querySelector('#minus').onclick = function() {
  addNumber('-');
}
document.querySelector('#multiply').onclick = function() {
  addNumber('*');
}
document.querySelector('#devide').onclick = function() {
  addNumber('/');
}

document.querySelector('#equal').onclick = function() {
  document.querySelector('.screen').innerHTML = math.eval(document.querySelector('.screen').innerHTML);
}