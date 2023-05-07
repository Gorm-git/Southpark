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
      <img class="grid-image" src="${urlData.image}" alt="${urlData.name}">
      <button onclick="showDetails('${urlData.name}', '${urlData.nickname}', '${urlData.image}', '${urlData.occupation}', '${urlData.age}', '${urlData.voicedBy}', '${urlData.gender}', '${urlData.religion}', '${urlData.catchPhrase}', '${urlData.hairColor}', '${urlData.schoolGrade}', '${urlData.episodes}', '${urlData.appearances}', '${urlData.firstAppearance}')">Details</button>
    </article>
  `;
  document.querySelector("#posts").insertAdjacentHTML("beforeend", html);
}

function showDetails(urlData) {
  const modal = document.createElement("dialog");
  modal.setAttribute("class", "modal");

  const form = document.createElement("form");

  const nameLabel = document.createElement("label");
  nameLabel.textContent = "Name: ";
  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("value", urlData.name);
  nameInput.setAttribute("readonly", true);
  nameLabel.appendChild(nameInput);
  form.appendChild(nameLabel);

  const nicknameLabel = document.createElement("label");
  nicknameLabel.textContent = "Nickname: ";
  const nicknameInput = document.createElement("input");
  nicknameInput.setAttribute("type", "text");
  nicknameInput.setAttribute("value", urlData.nickname);
  nicknameInput.setAttribute("readonly", true);
  nicknameLabel.appendChild(nicknameInput);
  form.appendChild(nicknameLabel);

  const imageLabel = document.createElement("label");
  imageLabel.textContent = "Image: ";
  const imageInput = document.createElement("input");
  imageInput.setAttribute("type", "text");
  imageInput.setAttribute("value", urlData.image);
  imageInput.setAttribute("readonly", true);
  imageLabel.appendChild(imageInput);
  form.appendChild(imageLabel);

  const occupationLabel = document.createElement("label");
  occupationLabel.textContent = "Occupation: ";
  const occupationInput = document.createElement("input");
  occupationInput.setAttribute("type", "text");
  occupationInput.setAttribute("value", urlData.occupation);
  occupationInput.setAttribute("readonly", true);
  occupationLabel.appendChild(occupationInput);
  form.appendChild(occupationLabel);

  const ageLabel = document.createElement("label");
  ageLabel.textContent = "Age: ";
  const ageInput = document.createElement("input");
  ageInput.setAttribute("type", "text");
  ageInput.setAttribute("value", urlData.age);
  ageInput.setAttribute("readonly", true);
  ageLabel.appendChild(ageInput);
  form.appendChild(ageLabel);

  const voicedByLabel = document.createElement("label");
  voicedByLabel.textContent = "Voiced By: ";
  const voicedByInput = document.createElement("input");
  voicedByInput.setAttribute("type", "text");
  voicedByInput.setAttribute("value", urlData.voicedBy);
  voicedByInput.setAttribute("readonly", true);
  voicedByLabel.appendChild(voicedByInput);
  form.appendChild(voicedByLabel);

  const genderLabel = document.createElement("label");
  genderLabel.textContent = "Gender: ";
  const genderInput = document.createElement("input");
  genderInput.setAttribute("type", "text");
  genderInput.setAttribute("value", urlData.gender);
  genderInput.setAttribute("readonly", true);
  genderLabel.appendChild(genderInput);
  form.appendChild(genderLabel);

  const religionLabel = document.createElement("label");
  religionLabel.textContent = "Religion: ";
  const religionInput = document.createElement("input");
  religionInput.setAttribute("type", "text");
  religionInput.setAttribute("value", urlData.religion);
  religionInput.setAttribute("readonly", true);
  religionLabel.appendChild(religionInput);
  form.appendChild(religionLabel);

  const catchPhraseLabel = document.createElement("label");
  catchPhraseLabel.textContent = "Catch Phrase: ";
  const catchPhraseInput = document.createElement("input");
  catchPhraseInput.setAttribute("type", "text");
  catchPhraseInput.setAttribute("value", urlData.catchPhrase);
  catchPhraseInput.setAttribute("readonly", true);
  catchPhraseLabel.appendChild(catchPhraseInput);
  form.appendChild(catchPhraseLabel);

  const hairColorLabel = document.createElement("label");
  hairColorLabel.textContent = "Hair Color: ";
}

function closeDialog() {
  const dialog = document.querySelector("dialog");
  dialog.removeAttribute("open");
  dialog.remove();
}
