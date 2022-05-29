let titre = document.querySelector("#titleMovie");
let duration = document.querySelector("#duration");

let episodeTitle = "Breaking Bad";
let episodeDuration = 45;
let hasBeenWatchedd = true;
titre.innerHTML = `le nom de la serie ${episodeTitle} les minutes de l'episode ${episodeDuration} ${
  hasBeenWatchedd ? "l'episodea a été vue" : "l' episode a pas etait vue"
}`;

let episode = {
  title: episodeTitle,
  duration: episodeDuration,
  hasBeenWatched: hasBeenWatchedd,
};

class Episodes {
  constructor(title, duree, hasBeen) {
    this.title = title;
    this.duration = duree;
    this.hasBeen = hasBeen;
  }
}

let firstEpisode = new Episodes("Pokemon", 45, true);
let secondeEpisode = new Episodes("One piece", 24, false);
let endEpisode = new Episodes("Naruto", 30, true);

document.querySelector("#first-episode-info").innerHTML = `${
  firstEpisode.title
} ${firstEpisode.duration}min ${
  firstEpisode.hasBeen ? "tres bien " : "pas bien"
}`;
document.querySelector("#two-episode-info").innerHTML = `${
  secondeEpisode.title
} ${secondeEpisode.duration}min ${
  secondeEpisode.hasBeen ? "tres bien " : "pas bien"
}`;
document.querySelector("#three-episode-info").innerHTML = `${
  endEpisode.title
} ${endEpisode.duration}min ${endEpisode.hasBeen ? "tres bien " : "pas bien"}`;
