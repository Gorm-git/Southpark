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

function showDetails(
  name,
  nickname,
  image,
  occupation,
  age,
  voicedBy,
  gender,
  religion,
  catchPhrase,
  hairColor,
  schoolGrade,
  episodes,
  appearances,
  firstAppearance
) {
  const dialog = document.createElement("dialog");
  const html = `
    
      <h2>${name}</h2>
      <ul>
        <li><strong>Nickname:</strong> ${nickname}</li>
        <li><strong>Image:</strong> <img src="${image}" alt="${name}"></li>
        <li><strong>Occupation:</strong> ${occupation}</li>
        <li><strong>Age:</strong> ${age}</li>
        <li><strong>Voiced By:</strong> ${voicedBy}</li>
        <li><strong>Gender:</strong> ${gender}</li>
        <li><strong>Religion:</strong> ${religion}</li>
        <li><strong>Catchphrase:</strong> ${catchPhrase}</li>
        <li><strong>Hair Color:</strong> ${hairColor}</li>
        <li><strong>School Grade:</strong> ${schoolGrade}</li>
        <li><strong>Episodes:</strong> ${episodes}</li>
        <li><strong>Appearances:</strong> ${appearances}</li>
        <li><strong>First Appearance:</strong> ${firstAppearance}</li>
      </ul>
      <button id ="close-dialog">Close</button>
  `;
  dialog.innerHTML = html;
  document.getElementById("dialog").appendChild(dialog);
  dialog.showModal();

  const closeBtn = dialog.querySelector("#close-dialog");
  closeBtn.addEventListener("click", function () {
    dialog.close();
  });
}

function closeModal() {
  document.querySelector(".modal").remove();
}
