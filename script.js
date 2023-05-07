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
  const html = `
    <article class="grid-item">
      <h2 class="name">${urlData.name}</h2>
      <img class="grid-image" src ="${urlData.image}" alt="${urlData.name}">
      <button class="details-button" data-character='${JSON.stringify(
        urlData
      )}'>Details</button>
    </article> 
  `;
  document.querySelector("#posts").insertAdjacentHTML("beforeend", html);

  const button = document.querySelector(".details-button:last-of-type");
  button.addEventListener("click", openModal);
}
