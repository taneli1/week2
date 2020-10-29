const balloon = document.getElementById('balloon');

// Cant remove this eventListener?
document.addEventListener('keydown', ev => changeSize(ev));

function changeSize(ev) {

  let fontSize = parseFloat(
      window.getComputedStyle(balloon).getPropertyValue('font-size'));

  if (fontSize >= 300) {
    balloon.innerText = '💥';
    // For some reason does not work? Cant have ev as parameter to function maybe?
    document.removeEventListener('keydown', ev => changeSize(ev));
  }

  if (ev.code === 'ArrowUp') {
    let newSize = (fontSize * 1.1).toString();
    balloon.style.setProperty('font-size', `${newSize}px`);
  }
  else if (ev.code === 'ArrowDown') {
    let newSize = (fontSize * 0.9).toString();
    balloon.style.setProperty('font-size', `${newSize}px`);
  }

}
