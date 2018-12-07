const request = require('request');
const Lyricist = require('lyricist/node6');
const accessToken = 'Wv5GEVqpDZqz-OoPmWMcM6IQ2E4meivxx5HL-05as2cVsD1nRz0rQbEIPuXiQeCr'
const lyricist = new Lyricist(accessToken);
const fs = require('fs');

const artistID = 45824;
const resultsPerPage = 50;

function lookupSongsPage1(title, callback) {
    return new Promise(function(resolve, reject) {
      request(`http://api.genius.com/artists/${artistID}/songs?per_page=${resultsPerPage}&page=1`, {'auth': {'bearer': accessToken}},
        function(error, response, body) {
          console.log('error:', error);
          console.log('statusCode:', response && response.statusCode);
          for(i = 0;i<resultsPerPage;i++) {
            const title = JSON.parse(body).response.songs[i].title
            const id = JSON.parse(body).response.songs[i].id
            console.log(title)
            console.log(id)
            lyricist.song(id, { fetchLyrics: true }).then(song => {
                lyrics = song.lyrics
                console.log(lyrics)
                var stream = fs.createWriteStream(`./songs/${title.replace("/"," ").replace("/"," ")}.txt`);
                stream.write(lyrics)
                resolve(lyrics)
            });
          }
        })
    })
}

function lookupSongsPage2(title, callback) {
    return new Promise(function(resolve, reject) {
      request(`http://api.genius.com/artists/${artistID}/songs?per_page=${resultsPerPage}&page=2`, {'auth': {'bearer': accessToken}},
        function(error, response, body) {
          console.log('error:', error);
          console.log('statusCode:', response && response.statusCode);
          for(i = 0;i<resultsPerPage;i++) {
            const title = JSON.parse(body).response.songs[i].title
            const id = JSON.parse(body).response.songs[i].id
            console.log(title)
            console.log(id)
            lyricist.song(id, { fetchLyrics: true }).then(song => {
                lyrics = song.lyrics
                console.log(lyrics)
                var stream = fs.createWriteStream(`./songs/${title.replace("/"," ").replace("/"," ")}.txt`);
                stream.write(lyrics)
                resolve(lyrics)
            });
          }
        })
    })
}

function lookupSongsPage3(title, callback) {
    return new Promise(function(resolve, reject) {
      request(`http://api.genius.com/artists/${artistID}/songs?per_page=${resultsPerPage}&page=3`, {'auth': {'bearer': accessToken}},
        function(error, response, body) {
          console.log('error:', error);
          console.log('statusCode:', response && response.statusCode);
          for(i = 0;i<resultsPerPage;i++) {
            const title = JSON.parse(body).response.songs[i].title
            const id = JSON.parse(body).response.songs[i].id
            console.log(title)
            console.log(id)
            lyricist.song(id, { fetchLyrics: true }).then(song => {
                lyrics = song.lyrics
                console.log(lyrics)
                var stream = fs.createWriteStream(`./songs/${title.replace("/"," ").replace("/"," ")}.txt`);
                stream.write(lyrics)
                resolve(lyrics)
            });
          }
        })
    })
}

lookupSongsPage1()
lookupSongsPage2()
lookupSongsPage3()
