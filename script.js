"use strict";

//========= Start =========//

window.addEventListener("load", initApp);

async function initApp() {
  const characterSheet = await getPosts(
    "https://cederdorff.github.io/dat-js/05-data/southpark.json"
  );
  characterSheet.forEach(showPost);
  addInfoButtonClickHandlers();
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
      <button class="info" 
              data-nickname="${urlData.nickname}" 
              data-occupation="${urlData.occupation}" 
              data-age="${urlData.age}" 
              data-voiced_by="${urlData.voiced_by}" 
              data-gender="${urlData.gender}" 
              data-religion="${urlData.religion}" 
              data-catch_phrase="${urlData.catch_phrase}" 
              data-hair_color="${urlData.hair_color}" 
              data-school_grade="${urlData.school_grade}" 
              data-episodes="${urlData.episodes}" 
              data-appearances="${urlData.appearances}" 
              data-first_appearance="${urlData.first_appearance}">Details
      </button>
    </article> 
  `;
  document.querySelector("#posts").insertAdjacentHTML("beforeend", html);
}

function addInfoButtonClickHandlers() {
  const posts = document.querySelector("#posts");
  posts.addEventListener("click", (event) => {
    if (event.target.classList.contains("info")) {
      const postElement = event.target.closest(".grid-item");
      const urlData = {
        name: postElement.querySelector(".name").textContent,
        nickname: postElement.querySelector.textContent,
        image: postElement.querySelector(".grid-image").src,
        occupation: postElement.dataset.occupation,
        age: postElement.dataset.age,
        voiced_by: postElement.dataset.voiced_by,
        gender: postElement.dataset.gender,
        religion: postElement.dataset.religion,
        catch_phrase: postElement.dataset.catch_phrase,
        hair_color: postElement.dataset.hair_color,
        school_grade: postElement.dataset.school_grade,
        episodes: postElement.dataset.episodes,
        appearances: postElement.dataset.appearances,
        first_appearance: postElement.dataset.first_appearance,
      };
      displayCharacterInfo(urlData);
    }
  });
}

function displayCharacterInfo(urlData) {
  const characterInfo = {
    name: urlData.name,
    nickname: urlData.nickname,
    image: urlData.image,
    occupation: urlData.occupation,
    age: urlData.age,
    voicedBy: urlData.voiced_by,
    gender: urlData.gender,
    religion: urlData.religion,
    catchPhrase: urlData.catch_phrase,
    hairColor: urlData.hair_color,
    schoolGrade: urlData.school_grade,
    episodes: urlData.episodes,
    appearances: urlData.appearances,
    firstAppearance: urlData.first_appearance,
  };
  const dialog = document.querySelector("#dialog-info");
  const form = dialog.querySelector(".form-body");
  const image = form.querySelector("#image");
  // Populate form fields with character information
  form.name.value = characterInfo.name;
  form.nickname.value = characterInfo.nickname;
  image.src = characterInfo.image;
  form.occupation.value = characterInfo.occupation;
  form.age.value = characterInfo.age;
  form.voicedBy.value = characterInfo.voicedBy;
  form.gender.value = characterInfo.gender;
  form.religion.value = characterInfo.religion;
  form.catchPhrase.value = characterInfo.catchPhrase;
  form.hairColor.value = characterInfo.hairColor;
  form.schoolGrade.value = characterInfo.schoolGrade;
  form.episodes.value = characterInfo.episodes;
  form.appearances.value = characterInfo.appearances;
  form.firstAppearance.value = characterInfo.firstAppearance;

  // Show the dialog
  dialog.showModal();
}
