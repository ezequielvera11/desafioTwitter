let URL = "https://my-json-server.typicode.com/ezequielvera11/Json/posts";
let URLImg = "https://xsgames.co/randomusers/assets/avatars/pixel/"
let contenedortweets = document.getElementById("tweets");
let avatar = document.getElementById("avatar")
let tweetDatos;

document.addEventListener("DOMContentLoaded", () => {

  avatar.innerHTML += `
      <img width="40px "src="${URLImg + 30}.jpg" />
      `

  fetch(URL)
        .then(response => response.json())
        .then(data => { 
          let tweetDatos = data
          mostrarTweets (tweetDatos)
        })

  function mostrarTweets (todosLosTweets) {
    todosLosTweets.forEach((tweet, i) => {
      const nombreUsuarioCorreccion = tweet.name.toLowerCase().replace(/\s+/g, "");
      contenedortweets.innerHTML += `
          <div class="profile-pic">
          <img width="40px" src="${URLImg + i}.jpg" />
          </div>
          <div class="content">
            <div class="names">
              <p class="full-name">${tweet.name}</p>
              <p class="user-name">@${nombreUsuarioCorreccion}</p>
              <p class="time"> 27mins</p>
            </div>
          </div>
          <div class="tweet-content">
            <p>${tweet.text}</p>
          </div>
          <div class="tweet-icons">
            <i class="fa fa-comment" aria-hidden="true"></i>
            <i class="fa fa-heart" aria-hidden="true"></i>
            <i class="fa fa-retweet" aria-hidden="true"></i>
          </div>
          `
    });
  }
});