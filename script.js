"use strict";

//========= Start =========//

window.addEventListener("load", initApp);

async function initApp() {
  const characterSheet = await getPosts(
    "https://cederdorff.github.io/dat-js/05-data/southpark.json"
  );
  showPosts(characterSheet);
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

function showPost(urlData, index) {
  const html = /*html*/ `
    <article id="post-${index}" class="grid-item">
      <h2 class="name">${urlData.name}</h2>
      <img class="grid-image" src ="${urlData.image}" alt="${urlData.name}">
      <button class="info">Details</button>
    </article> 
  `;
  document.querySelector("#posts").insertAdjacentHTML("beforeend", html);

  const button = document.querySelector(`#post-${index} .info`);
  const dialog = document.querySelector("#details-dialog");
  const form = dialog.querySelector("form");

  button.addEventListener("click", () => {
    // find the post that matches the clicked button
    const postId = button.parentNode.id;
    const postIndex = parseInt(postId.substring(postId.indexOf("-") + 1));
    const post = characterSheet[postIndex];

    // set the values of the form inputs
    form.querySelector("#name").value = post.name;
    form.querySelector("#nickname").value = post.nickname;
    form.querySelector("#image").src = post.image;
    form.querySelector("#occupation").value = post.occupation.join(", ");
    form.querySelector("#age").value = post.age;
    form.querySelector("#voicedBy").value = post.voiced_by.join(", ");
    form.querySelector("#gender").value = post.gender;
    form.querySelector("#religion").value = post.religion;
    form.querySelector("#catchPhrase").value = post.catchphrase;
    form.querySelector("#hairColor").value = post.hair_color;
    form.querySelector("#schoolGrade").value = post.school_grade;
    form.querySelector("#episodes").value = post.episodes.join(", ");
    form.querySelector("#appearances").value = post.appearances.join(", ");
    form.querySelector("#firstAppearance").value = post.first_appearance;

    // show the dialog
    dialog.showModal();
  });
}

function showDetails(character) {
  const dialog = document.querySelector("#details-dialog");
  const nameInput = dialog.querySelector("#name");
  const nicknameInput = dialog.querySelector("#nickname");
  const imageInput = dialog.querySelector("#image");
  const occupationInput = dialog.querySelector("#occupation");
  const ageInput = dialog.querySelector("#age");
  const voicedByInput = dialog.querySelector("#voicedBy");
  const genderInput = dialog.querySelector("#gender");
  const religionInput = dialog.querySelector("#religion");
  const catchPhraseInput = dialog.querySelector("#catchPhrase");
  const hairColorInput = dialog.querySelector("#hairColor");
  const schoolGradeInput = dialog.querySelector("#schoolGrade");
  const episodesInput = dialog.querySelector("#episodes");
  const appearancesInput = dialog.querySelector("#appearances");
  const firstAppearanceInput = dialog.querySelector("#firstAppearance");

  nameInput.value = character.name;
  nicknameInput.value = character.nickname;
  imageInput.src = character.image;
  occupationInput.value = character.occupation;
  ageInput.value = character.age;
  voicedByInput.value = character.voiced_by;
  genderInput.value = character.gender;
  religionInput.value = character.religion;
  catchPhraseInput.value = character.catchphrase;
  hairColorInput.value = character.hair_color;
  schoolGradeInput.value = character.school_grade;
  episodesInput.value = character.episodes.join(", ");
  appearancesInput.value = character.appearances.join(", ");
  firstAppearanceInput.value = character.first_appearance;

  dialog.showModal();
}
