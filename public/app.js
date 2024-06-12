"use strict";
const users = [];
const userForm = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const yoshInput = document.getElementById("yosh");
const jobInput = document.getElementById("myInput");
const cardContainer = document.getElementById("cardContainer");
userForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const newUser = {
        name: nameInput.value,
        familiya: emailInput.value,
        yosh: yoshInput.value,
        job: jobInput.value,
    };
    users.push(newUser);
    nameInput.value = "";
    emailInput.value = "";
    yoshInput.value = "";
    jobInput.value = "";
    displayUsers();
});
function displayUsers() {
    cardContainer.innerHTML = "";
    users.forEach((user) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<h2>${user.name}</h2><h2>${user.familiya}</h2><h2>${user.yosh}</h2>
    <h2>${user.job}</h2>`;
        cardContainer.appendChild(card);
    });
}
