var express = require('express');
var router = express.Router();

router.get('/movies', (req,res) => {
    fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US', {
        method:'GET',
        headers:{
            accept:'application/json',
            Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MmQxYmM5MzcwMDI1NmUwMjk3ODY0MmE4OTE0Y2ViOCIsInN1YiI6IjY1MTNkOTliOWI4NjE2MDEzYTIyZmVkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qNYtD1U5eSVBFBiQ4Y9bbPYe_kWjs5Ddu30-CSBwarQ'}
})
    .then(response=>response.json())
    .then(data => {
        res.json({movies:data})
    })
})

module.exports = router;
