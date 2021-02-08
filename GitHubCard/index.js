import axios from "axios";

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

console.log(axios);

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios
  .get("https://api.github.com/users/mhuckstepp")
  .then((res) => {
    document.querySelector(".cards").appendChild(compMaker(res));
  })
  .catch((error) => {
    console.log(error);
  });

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  "MichelleCCodes",
  "AnhtuanTran-11",
  "bigknell",
  "dustinmyers",
  "luishrd",
];

followersArray.forEach((elem) => {
  axios
    .get(`https://api.github.com/users/${elem}`)
    .then((res) => {
      document.querySelector(".cards").appendChild(compMaker(res));
    })
    .catch((error) => {
      console.log(error);
    });
});

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function compMaker(res) {
  const newDivCard = document.createElement("div");
  newDivCard.classList.add("card");
  document.body.append(newDivCard);
  const newImg = document.createElement("img");
  newImg.src = res.data.avatar_url;
  newDivCard.prepend(newImg);
  const newDivInfo = document.createElement("div");
  newDivInfo.classList.add("card-info");
  newDivCard.append(newDivInfo);
  const newHead = document.createElement("h3");
  newHead.classList.add = "name";
  newHead.textContent = res.data.name;
  newDivInfo.append(newHead);
  const newPOne = document.createElement("p");
  newPOne.classList.add = "username";
  newPOne.textContent = res.data.login;
  newDivInfo.append(newPOne);
  const newPTwo = document.createElement("p");
  newPTwo.textContent = `Location: ${res.data.location}`;
  newDivInfo.append(newPTwo);
  const newPThr = document.createElement("p");
  newPThr.textContent = `Profile: `;
  const newA = document.createElement("a");
  newA.textContent = res.data.html_url;
  newA.href = res.data.html_url;
  newPThr.append(newA);
  newDivInfo.append(newPThr);
  const newPFo = document.createElement("p");
  newPFo.textContent = `Followers: ${res.data.followers}`;
  newDivInfo.append(newPFo);
  const newPFi = document.createElement("p");
  newPFi.textContent = `Following: ${res.data.following}`;
  newDivInfo.append(newPFi);
  const newPSi = document.createElement("p");
  newPSi.textContent = `Bio: ${res.data.bio}`;
  newDivInfo.append(newPSi);
  const newSpa = document.createElement("span");
  newSpa.textContent = "Expand";
  newSpa.addEventListener("click", (e) => {
    console.log(e.target.parentNode.style);
    if (e.target.parentNode.style.width == "") {
      e.target.parentNode.style.width = "100%";
      console.log("hgit");
    } else if (e.target.parentNode.style.width == "100%") {
      e.target.parentNode.style.width = "30%";
      console.log("hgit");
    } else {
      e.target.parentNode.style.width = "100%";
      console.log("hgit");
    }
  });
  newSpa.addEventListener("mouseover", (e) => {
    if (e.target.parentNode.style.width == "") {
      e.target.style.cursor = "cell";
    } else if (e.target.parentNode.style.width == "100%") {
      e.target.style.cursor = "w-resize";
    } else {
      e.target.style.cursor = "cell";
    }
  });
  newDivCard.prepend(newSpa);
  return newDivCard;
}
