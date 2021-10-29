function visitLink(path) {
  let timesVisited = window.localStorage.getItem(path) || 0;
  window.localStorage.setItem(path, +timesVisited + 1);
}

function viewResults() {
  const UL_ID = 'list-visited',
    DIV_ID = 'content';
  let ul = document.getElementById(UL_ID) || document.createElement('ul');
  ul.innerHTML = '';
  ul.id = UL_ID;

  for (const key in window.localStorage) {
    if (Object.hasOwnProperty.call(window.localStorage, key)) {
      const val = window.localStorage.getItem(key);
      let li = document.createElement('li'),
        text = document.createTextNode(`You visited ${key} ${val} time(s)`);
      li.appendChild(text);
      ul.appendChild(li);
    }
  }

  let div = document.getElementById(DIV_ID);
  if (!document.getElementById(UL_ID)) {
    div.appendChild(ul);
  }
}
