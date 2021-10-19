// A music player allows a user to choose songs to play, but only in pairs and only pairs of songs with duration that add up to 
// multiple of 60 seconds (e.g, 60, 120, 180). Given a list of song durations, calculate the total number of different songs pairs that can be chosen

// example 
// n = 3
// songs = [40, 20, 60]

// One pair of songs can be chosen whose combined duration is multiple of whole minute ( 40 + 20 = 60) and the return value would be 1. While
// the third song is single minute long, songs must be chosen in pairs


function playlist(songs) {

}

console.log(playist([30,20,150,100,40])) ;// 3
console.log(playlist([60, 60, 60]));// 3