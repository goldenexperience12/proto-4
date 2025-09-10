// Example anime dataset
const animeData = [
  {
    title: "Attack on Titan",
    image: "aot.jpg",
    genre: "Action, Drama, Fantasy",
    rating: "8.9/10",
    synopsis: "Humanity fights for survival against giant creatures called Titans.",
    episodes: [
      "Ep 1: To You, in 2000 Years",
      "Ep 2: That Day",
      "Ep 3: A Dim Light Amid Despair"
    ],
    reviews: [
      "One of the most intense anime ever made. – AnimeFan123",
      "Dark story but amazing world-building. – ReviewerX"
    ]
  },
  {
    title: "Death Note",
    image: "deathnote.jpg",
    genre: "Mystery, Thriller, Supernatural",
    rating: "9.0/10",
    synopsis: "A student discovers a notebook that allows him to kill anyone by writing their name.",
    episodes: [
      "Ep 1: Rebirth",
      "Ep 2: Confrontation",
      "Ep 3: Dealings"
    ],
    reviews: [
      "Mind games at their finest. – Critic01",
      "A masterpiece of suspense. – Viewer007"
    ]
  }
];

// Function to render anime list
function renderAnimeList(animes) {
  const list = document.getElementById("anime-list");
  list.innerHTML = "";

  animes.forEach(anime => {
    const card = document.createElement("div");
    card.className = "anime-card";

    card.innerHTML = `
      <img src="${anime.image}" alt="${anime.title}">
      <h2>${anime.title}</h2>
      <div class="anime-details">
        <p><strong>Genre:</strong> ${anime.genre}</p>
        <p><strong>Rating:</strong> ${anime.rating}</p>
        <p><strong>Synopsis:</strong> ${anime.synopsis}</p>
        <details>
          <summary>Episodes</summary>
          <ul>${anime.episodes.map(ep => `<li>${ep}</li>`).join("")}</ul>
        </details>
        <details>
          <summary>Reviews</summary>
          ${anime.reviews.map(r => `<p>${r}</p>`).join("")}
        </details>
      </div>
    `;

    card.addEventListener("click", () => {
      const details = card.querySelector(".anime-details");
      details.style.display = (details.style.display === "block") ? "none" : "block";
    });

    list.appendChild(card);
  });
}

// Search functionality
document.getElementById("searchBtn").addEventListener("click", () => {
  const query = document.getElementById("search").value.toLowerCase();
  const filtered = animeData.filter(a => a.title.toLowerCase().includes(query));
  renderAnimeList(filtered);
});

// Initial render
renderAnimeList(animeData);
