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
      <h2 class="name">${urlData.name}</h2>
      <img class="grid-image" src ="${urlData.image}" alt="${urlData.name}">
    </article> 
  `;
  document.querySelector("#posts").insertAdjacentHTML("beforeend", html);
}

function showDetails(urlData) {
  const detailsDialog = document.getElementById("details-dialog");
  detailsDialog.style.display = "block";

  const name = document.getElementById("name");
  name.value = urlData.name;

  const nickname = document.getElementById("nickname");
  nickname.value = urlData.nickname;

  const image = document.getElementById("image");
  image.src = urlData.image;

  const occupation = document.getElementById("occupation");
  occupation.value = urlData.occupation;

  const age = document.getElementById("age");
  age.value = urlData.age;

  const voicedBy = document.getElementById("voicedBy");
  voicedBy.value = urlData.voicedBy;

  const gender = document.getElementById("gender");
  gender.value = urlData.gender;

  const religion = document.getElementById("religion");
  religion.value = urlData.religion;

  const catchPhrase = document.getElementById("catchPhrase");
  catchPhrase.value = urlData.catchPhrase;

  const hairColor = document.getElementById("hairColor");
  hairColor.value = urlData.hairColor;

  const schoolGrade = document.getElementById("schoolGrade");
  schoolGrade.value = urlData.schoolGrade;

  const episodes = document.getElementById("episodes");
  episodes.value = urlData.episodes;

  const appearances = document.getElementById("appearances");
  appearances.value = urlData.appearances;

  const firstAppearance = document.getElementById("firstAppearance");
  firstAppearance.value = urlData.firstAppearance;
}
