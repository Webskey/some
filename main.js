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
  console.log(items);
  const foundContainer = document.createElement("div");
  //foundContainer.classList.add("found-countainer");
  foundContainer.id = "found-container";
  document.body.appendChild(foundContainer);
  items.forEach(item => {
    // found element
    const foundElement = document.createElement("div");
    foundElement.classList.add("found-element");
    // title
    const title = document.createElement("p");
    title.classList.add("found-element-title")
    title.innerHTML = item.snippet.title;
    foundElement.appendChild(title);
    // image
    const image = document.createElement("img");
    image.classList.add("found-element-image")
    image.src = item.snippet.thumbnails.high.url;
    foundElement.appendChild(image);
    
    foundElement.addEventListener("click", () => playVid(item.id.videoId));
    foundContainer.appendChild(foundElement);
  });
}

function apiSearch(search) {
  fetch(
    //`https://www.googleapis.com/youtube/v3/search?part=contentDetails&q=${search.split(" ").join()}&key=AIzaSyBqFnd9RMee7nkMTaB5obHflnz-IDx3ubs`
     `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBqFnd9RMee7nkMTaB5obHflnz-IDx3ubs&channelId=UC6Wej54Yh6uCABltYSWKDNw&part=snippet,id&order=date&maxResults=40`
  )
    .then(resp => resp.json())
    // Another API req to get video duration timers
    // .then(resp => fetch(`https://www.googleapis.com/youtube/v3/videos?id=${resp.items.map(item => item.id.videoId).join(',')}&part=snippet,contentDetails&key=AIzaSyBqFnd9RMee7nkMTaB5obHflnz-IDx3ubs`))
    // .then(resp => resp.json())
    .then(resp => displayVids(resp.items));
}



const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search");
searchButton.addEventListener("submit", (event) => {
  event.preventDefault();
  apiSearch(searchInput.value)
});

