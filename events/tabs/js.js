const tabs = document.querySelector('tab-panel');

function asTabs(node) {

  let tabs = [];
  for (let i = 0; i < node.childElementCount; i++) {
    tabs.push(node.children[i]);
  }

  console.log(tabs);

  let buttonContainer = document.createElement('div');

  tabs.forEach(function(tab, index) {

    let button = document.createElement('button');
    let buttonText = document.createTextNode(tab.dataset.tabname);

    button.appendChild(buttonText);
    buttonContainer.appendChild(button);

    button.addEventListener('click', function() {
      changeTab(index);
    });

  });
  node.insertBefore(buttonContainer, node.firstChild);

  function changeTab(index) {
    tabs.forEach(function(tab, i) {
      if (index === i) tab.style.display = '';
      else tab.style.display = 'none';
    });
  }
  changeTab(0);
}

asTabs(tabs);