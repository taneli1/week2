const body = document.getElementById('body');
const arr = [];

for (let i = 0; i < 49; i++) {
  let newDiv = document.createElement('div');
  newDiv.innerHTML = `
      <div class="trail">
      </div>`;
  body.appendChild(newDiv);
  arr.push(newDiv);
}

document.addEventListener('mousemove', (ev) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i].style.marginLeft = ev.clientX + 'px';
    arr[i].style.marginTop = ev.clientY + 'px';
  }
});

