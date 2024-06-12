// app.ts
interface User {
  name: string;
  familiya: string;
  yosh: string;
  job: string;
}

const users: User[] = [];

const userForm = document.getElementById("userForm") as HTMLFormElement;
const nameInput = document.getElementById("name") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const yoshInput = document.getElementById("yosh") as HTMLInputElement;
const jobInput = document.getElementById("myInput") as HTMLInputElement;
const cardContainer = document.getElementById(
  "cardContainer"
) as HTMLDivElement;

userForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const newUser: User = {
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
