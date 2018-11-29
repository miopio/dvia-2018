function preload(){
  song = loadStrings("./songs/102.txt")
}

function setup(){
  createCanvas(windowWidth, 2000)

  console.log(song[0])
  textSize(20)
  fill("black")
  y=100
  for(i=0;i<song.length;i++){
    text(song[i],100,y)
    y=y+30
  }

}