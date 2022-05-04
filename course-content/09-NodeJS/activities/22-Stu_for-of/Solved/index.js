const songs = document.querySelectorAll("ul > li");
console.log(songs);
// const songsDiv = document.querySelectorAll("#songs");
// console.log(songsDiv);
// const songsDiv = document.querySelector("#songs");
//for..of is a method, introduced in ES2015, for iterating over "iterable collections".
//Finally, another really useful case for for..of is in iterating of NodeLists. 
//When we query the document for a group of elements, what we get returned is a NodeList, 
//not an Array. 

for (const song of songs) { // map obj
  song.classList.add("green");
}
// songsDiv.classList.add("green");
// for (const song of songsDiv) { // map obj
//   song.classList.add("green");
// }
// console.log("songsDiv", songsDiv)
// console.log("Song li", songs);

// for(var i = 0; i < songs.length; i ++){
// 	songs[i].classList.add("green");
// }

// songs.forEach(function(song){
// 	song.classList.add("green");
// })


// for (const key in songs) { //does not work as expected 
//   console.log(songs[key]);
//   songs[key].classList.add("green");
// }
