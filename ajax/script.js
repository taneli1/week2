'use strict';

const form = document.getElementById('search-form');
const input = document.getElementById('search');

const doFetch = async (searchKey) => {
  const response = await fetch(
      `http://api.tvmaze.com/search/shows?q=${searchKey}`);
  const data = await response.json();
  console.log(data);
  createResult(data);
};

const createResult = (data) => {

  let body = document.querySelector('body');

  for (let i = 0; i < data.length; i++) {

    let newDiv = document.createElement('div');
    let name = document.createElement('h1');
    name.innerText = data[i].show.name;

    let link = document.createElement('p');
    if (data[i].show.officialSite) {
      link.innerHTML = `<a href="${data[i].show.officialSite}">Link to website</a>`;
    }

    let summary = document.createElement('p');
    summary.innerHTML = data[i].show.summary;

    let genres = document.createElement('p');
    genres.innerText = data[i].show.genres;

    let fig = document.createElement('figure');
    if (data[i].show.image) {
      fig.innerHTML = `
      <img src="${data[i].show.image.medium}">`;
    }

    newDiv.appendChild(name);
    newDiv.appendChild(genres);
    newDiv.appendChild(fig);
    newDiv.appendChild(summary);
    newDiv.appendChild(link);

    body.appendChild(newDiv);
  }
};

form.addEventListener('submit', evt => {
  evt.preventDefault();
  doFetch(input.value);
});

