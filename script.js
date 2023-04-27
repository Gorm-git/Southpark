"use strict";

//========= Start =========//

window.addEventListener("load", initApp);

async function initApp() {
  const characterSheet = await getPosts(
    "https://cederdorff.github.io/dat-js/05-data/southpark.json"
  );
  characterSheet.forEach(showPost);
}

//========= posts section =========//

async function getPosts(url) {
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

function showPosts(listOfPosts) {
  document.querySelector("#posts").innerHTML = "";
  for (const post of listOfPosts) {
    showPost(post);
  }
}

function showPost(urlData) {
  const html =
    /*html*/
    `
    <article class="grid-item">
    <h2>${urlData.name}</h2>
    <img src ="${urlData.image}" alt="${urlData.name}">
    </article> 
  `;
  document.querySelector("#posts").insertAdjacentHTML("beforeend", html);
}
