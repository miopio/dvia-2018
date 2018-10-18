// data sets

// music data

const audio = document.querySelectorAll(".audio");
let songs = [];

const music = d3.csv("data/music.csv", d => {
  songs.push({
    decade: d["decade"],
    artist: d["artist"],
    song: d["song"],
    path: d["path"]
  });
});

function playSong(e) {
  const audio = document.querySelector(`audio[data-key="${e}"]`);

  audio.classList.toggle("playing");
  audio.currentTime = 0;
  audio.play();
}

document.addEventListener(
  "play",
  function(e) {
    var audios = document.getElementsByTagName("audio");
    for (var i = 0, len = audios.length; i < len; i++) {
      if (audios[i] != e.target) {
        audios[i].currentTime = 0;
        audios[i].pause();
      }
    }
  },
  true
);

// us data
const usaData = d3
  .csv("data/decades/usa_decade.csv", d => {
    return {
      tests: +d["tests"],
      decade: d["decade"]
    };
  })
  .then(data => {
    console.log(data);
    usaChart(data);
  });

// russia data
const russiaData = d3
  .csv("data/decades/russia_decade.csv", d => {
    return {
      tests: +d["tests"],
      decade: d["decade"]
    };
  })
  .then(data => {
    console.log(data);
    russiaChart(data);
  });

// all other country data
const othersData = d3
  .csv("data/decades/others_decade.csv", d => {
    return {
      tests: +d["tests"],
      decade: d["decade"]
    };
  })
  .then(data => {
    console.log(data);
    othersChart(data);
  });

// define globals
const usa = document.querySelector(".usa");
const russia = document.querySelector(".russia");
const others = document.querySelector(".others");

// usa blocks
let usaChart = data => {
  // waffle chart code
  const normalize = d3.range(100);
  const numbers = d3.range(data[8]["tests"]);
  const fourties = d3.range(data[0]["tests"]);
  const fifties = d3.range(data[1]["tests"]);
  const sixties = d3.range(data[2]["tests"]);
  const seventies = d3.range(data[3]["tests"]);
  const eighties = d3.range(data[4]["tests"]);
  const nineties = d3.range(data[5]["tests"]);
  const twenty = d3.range(data[6]["tests"]);
  const twentyTen = d3.range(data[7]["tests"]);

  // console.log(twentyTen);
  // console.log(twenty);
  // console.log(nineties);
  // console.log(eighties);
  // console.log(seventies);
  // console.log(sixties);
  // console.log(fifties);
  // console.log(fourties);

  twentyTen.forEach(d => {
    let div = document.createElement("div");
    usa.appendChild(div);
    div.classList.add("twentyTen");
  });

  twenty.forEach(d => {
    let div = document.createElement("div");
    usa.appendChild(div);
    div.classList.add("twenty");
  });

  nineties.forEach(d => {
    let div = document.createElement("div");
    usa.appendChild(div);
    div.classList.add("nine");
  });

  eighties.forEach(d => {
    let div = document.createElement("div");
    usa.appendChild(div);
    div.classList.add("eight");
  });

  seventies.forEach(d => {
    let div = document.createElement("div");
    usa.appendChild(div);
    div.classList.add("seven");
  });

  sixties.forEach(d => {
    let div = document.createElement("div");
    usa.appendChild(div);
    div.classList.add("six");
  });

  fifties.forEach(d => {
    let div = document.createElement("div");
    usa.appendChild(div);
    div.classList.add("five");
  });

  fourties.forEach(d => {
    let div = document.createElement("div");
    usa.appendChild(div);
    div.classList.add("four");
  });

  // let div = document.createElement("div");
  // content.appendChild(div);
  // div.classList.add("item");

  // usa
  //   .selectAll("div")
  //   .data(twentyTen)
  //   .enter()
  //   .append("div")
  //   .attr("class", "twentyTen");
};

// ruussia blocks
let russiaChart = data => {
  // waffle chart code
  const normalize = d3.range(100);
  const numbers = d3.range(data[8]["tests"]);
  const fourties = d3.range(data[0]["tests"]);
  const fifties = d3.range(data[1]["tests"]);
  const sixties = d3.range(data[2]["tests"]);
  const seventies = d3.range(data[3]["tests"]);
  const eighties = d3.range(data[4]["tests"]);
  const nineties = d3.range(data[5]["tests"]);
  const twenty = d3.range(data[6]["tests"]);
  const twentyTen = d3.range(data[7]["tests"]);

  // console.log(twentyTen);
  // console.log(twenty);
  // console.log(nineties);
  // console.log(eighties);
  // console.log(seventies);
  // console.log(sixties);
  // console.log(fifties);
  // console.log(fourties);

  twentyTen.forEach(d => {
    let div = document.createElement("div");
    russia.appendChild(div);
    div.classList.add("twentyTen");
  });

  twenty.forEach(d => {
    let div = document.createElement("div");
    russia.appendChild(div);
    div.classList.add("twenty");
  });

  nineties.forEach(d => {
    let div = document.createElement("div");
    russia.appendChild(div);
    div.classList.add("nine");
  });

  eighties.forEach(d => {
    let div = document.createElement("div");
    russia.appendChild(div);
    div.classList.add("eight");
  });

  seventies.forEach(d => {
    let div = document.createElement("div");
    russia.appendChild(div);
    div.classList.add("seven");
  });

  sixties.forEach(d => {
    let div = document.createElement("div");
    russia.appendChild(div);
    div.classList.add("six");
  });

  fifties.forEach(d => {
    let div = document.createElement("div");
    russia.appendChild(div);
    div.classList.add("five");
  });

  fourties.forEach(d => {
    let div = document.createElement("div");
    russia.appendChild(div);
    div.classList.add("four");
  });
};

// others blocks
let othersChart = data => {
  // waffle chart code
  const normalize = d3.range(100);
  const numbers = d3.range(data[8]["tests"]);
  const fourties = d3.range(data[0]["tests"]);
  const fifties = d3.range(data[1]["tests"]);
  const sixties = d3.range(data[2]["tests"]);
  const seventies = d3.range(data[3]["tests"]);
  const eighties = d3.range(data[4]["tests"]);
  const nineties = d3.range(data[5]["tests"]);
  const twenty = d3.range(data[6]["tests"]);
  const twentyTen = d3.range(data[7]["tests"]);

  twentyTen.forEach(d => {
    let div = document.createElement("div");
    others.appendChild(div);
    div.classList.add("twentyTen");
  });

  twenty.forEach(d => {
    let div = document.createElement("div");
    others.appendChild(div);
    div.classList.add("twenty");
  });

  nineties.forEach(d => {
    let div = document.createElement("div");
    others.appendChild(div);
    div.classList.add("nine");
  });

  eighties.forEach(d => {
    let div = document.createElement("div");
    others.appendChild(div);
    div.classList.add("eight");
  });

  seventies.forEach(d => {
    let div = document.createElement("div");
    others.appendChild(div);
    div.classList.add("seven");
  });

  sixties.forEach(d => {
    let div = document.createElement("div");
    others.appendChild(div);
    div.classList.add("six");
  });

  fifties.forEach(d => {
    let div = document.createElement("div");
    others.appendChild(div);
    div.classList.add("five");
  });

  fourties.forEach(d => {
    let div = document.createElement("div");
    others.appendChild(div);
    div.classList.add("four");
  });
};
