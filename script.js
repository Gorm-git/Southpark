"use strict";

//========= Global =========//
const endpoint = "https://cederdorff.github.io/dat-js/05-data/";
let posts;

window.addEventListener("load", initapp);

async function initapp() {
  const posts = await getPosts(`${endpoint}southpark.json`);
  updatePosts();
}

//========= posts section =========//

async function updatePosts() {
  const posts = await getPosts(`${endpoint}southpark.json`);
  showPosts(posts);
}

async function getPosts(url) {
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

function showPosts(listOfPosts) {
  document.querySelector("#posts").innerHTML = "";
  getPosts.forEach(showPost);
  for (const post of listOfPosts) {
    showPost(post);
  }
}

function showPost(urlData) {
  const html = /*html*/ `
    <article class="grid-item">
    <img src ="${urlData.image}">
    </article> 
    `;
  document.querySelector("#posts").insertAdjacentHTML("beforeend", html);
}

//========= Data =========//
function prepareData(dataObject) {
  const array = []; // define empty array
  // loop through every key in dataObject
  // the value of every key is an object
  for (const key in dataObject) {
    const object = dataObject[key]; // define object
    object.id = key; // add the key in the prop id
    array.push(object); // add the object to array
  }
  return array;
}
