const playDate = require('/Users/ryoji/lesson/lesson01/5-3/playdata.json');
const songsDate = require('/Users/ryoji/lesson/lesson01/5-3/songs.json');

const play_date = {};
const song_date = {};

playDate.data.forEach(function(pd) {
  play_date[pd.id] = pd.count;
});
const count = Object.keys(play_date).map((k) => ({key:k, value:play_date[k]}));
count.sort((a, b) => b.value - a.value);

songsDate.songs.forEach(function(song) {
  song_date[song.id] = song.title;
});
const title = Object.keys(song_date).map((j) => ({key:j, value:song_date[j]}));

const result = Array.from(
  JSON.parse(JSON.stringify(count)), 
  c => (c.title = title.filter(tit => tit.key == c.key).map(tit => tit.value), c));

// console.log(result);

for (let i = 1; i < result.length; i++) {
  let date = result[i];
  for (let count in date) {
    console.log(i + ":" + `${count}\t${date[count]}`)
  }
}