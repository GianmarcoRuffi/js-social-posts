// Descrizione**
// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
// **Milestone 1** - Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// - id del post, numero progressivo da 1 a n
// - nome autore,
// - foto autore,
// - data in formato americano (mm-gg-yyyy),
// - testo del post,
// - immagine (non tutti i post devono avere una immagine),
// - numero di likes.
// *Non è necessario creare date casuali*
// *Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)*
// **Milestone 2** - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
// **Milestone 3** - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
// Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
// ****BONUS**
// >
// > 1. Formattare le date in formato italiano (gg/mm/aaaa)
// > 2. Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).
// > 3. Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.

const posts = [
  {
    id: 1,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/300?image=171",
    author: {
      name: "Phil Mangione",
      image: "https://unsplash.it/300/300?image=15",
    },
    likes: 80,
    created: "2021-06-25",
  },
  {
    id: 2,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=112",
    author: {
      name: "Sofia Perlari",
      image: "https://unsplash.it/300/300?image=10",
    },
    likes: 120,
    created: "2021-09-03",
  },
  {
    id: 3,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=234",
    author: {
      name: "Chiara Passaro",
      image: "https://unsplash.it/300/300?image=20",
    },
    likes: 78,
    created: "2021-05-15",
  },
  {
    id: 4,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=24",
    author: {
      name: "Luca Formicola",
      image: null,
    },
    likes: 56,
    created: "2021-04-03",
  },
  {
    id: 5,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=534",
    author: {
      name: "Alessandro Sainato",
      image: "https://unsplash.it/300/300?image=29",
    },
    likes: 95,
    created: "2021-03-05",
  },

  {
    id: 6,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=24",
    author: {
      name: "Riker Maloney",
      image: null,
    },
    likes: 13,
    created: "2021-01-08",
  },
];

// Get container

document.getElementById("container").innerHTML;

// Creazione funzione per renderizzare le cards

function renderPosts(cards) {
  posts.forEach((element, index) => {
    document.getElementById("container").innerHTML += ` <div id="${
      element.id
    }" class="post">
    <div class="post__header">
      <div class="post-meta">
        <div class="post-meta__icon">
          <img
            class="profile-pic"
            src="${
              element.author.image != null
                ? element.author.image
                : "https://robohash.org/" +
                  element.author.name.replace(" ", "_") +
                  "?set=set4"
            }"
            alt="${element.author.name}"
          />
        </div>
        <div class="post-meta__data">
          <div class="post-meta__author">${element.author.name}</div>
          <div class="post-meta__time">${element.created}</div>
        </div>
      </div>
    </div>
    <div class="post__text">
     ${element.content}
    </div>
    <div class="post__image">
      <img src="${element.media}" alt="" />
    </div>
    <div class="post__footer">
      <div class="likes js-likes">
        <div class="likes__cta">
          <a class="like-button js-like-button" href="#${
            element.id
          } " data-postid="${element.id}">
            <i
              class="like-button__icon fas fa-thumbs-up"
              aria-hidden="true"
            ></i>
            <span class="like-button__label">Mi Piace</span>
          </a>
        </div>
        <div class="likes__counter">
          Piace a
          <b id="like-counter-1" class="js-likes-counter">${
            element.likes
          }</b> persone
        </div>
      </div>
    </div>
  </div>
      `;
  });
}

// Chiamata della funzione

renderPosts();

// Seleziono i bottoni "Like" nelle cards

const likes = document.querySelectorAll(".like-button");

console.log(likes);

const likesArray = [];

function addLike(postId) {
  let targetLikeCounter = document.getElementById("like-counter-" + postId);
  let currentLikes = parseInt(targetLikeCounter.innerHTML);

  targetLikeCounter.innerHTML = currentLikes + 1;
}

function removeLike(postId) {
  let targetLikeCounter = document.getElementById("like-counter-" + postId);
  let currentLikes = parseInt(targetLikeCounter.innerHTML);

  targetLikeCounter.innerHTML = currentLikes - 1;
}

// Funzione per aggiungere i Mi Piace

function thumbsUp() {
  likes.forEach((like) => {
    like.addEventListener("click", function (e) {
      if (like.classList.contains("like-button--liked")) {
        like.classList.remove("like-button--liked");
        removeLike(like.dataset.postid);
      } else {
        like.classList.add("like-button--liked");
        addLike(like.dataset.postid);
      }
    });
  });
}

thumbsUp();
