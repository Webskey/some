console.log("siemka");

function playVid(videoId) {
  document.body.innerHTML = `<div id="player"></div>`;

  const player = new YT.Player("player", {
    height: "360",
    width: "640",
    videoId: videoId,
    events: {
      onReady: () => player.playVideo()
    }
  });

  const play = document.getElementById("player");
  //play.style.display = "none";
}

function displayVids(items) {
  items.forEach(item => {
    const container = document.createElement("div");
    const image = document.createElement("img");
    image.src = item.snippet.thumbnails.high.url;
    container.appendChild(image);
    const title = document.createElement("p");
    title.innerHTML = item.snippet.title;
    container.appendChild(title);
    container.addEventListener("click", () => playVid(item.id.videoId));
    document.body.appendChild(container);
  });
}

function apiSearch(search) {
  fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${search.split(" ").join()}&key=AIzaSyBqFnd9RMee7nkMTaB5obHflnz-IDx3ubs`
  )
    .then(resp => resp.json())
    .then(resp => displayVids(resp.items));
}
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search");
searchButton.addEventListener("submit", (event) => {
  event.preventDefault();
  apiSearch(searchInput.value)
});

