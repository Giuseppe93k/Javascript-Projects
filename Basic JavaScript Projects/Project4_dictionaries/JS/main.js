// This is my dictionary
function my_function() {
    var Anime = {
        name:"MHD",
        genre:"shonen",
        status:"ongoing",
        episodes: 24
    };
    delete Anime.genre;// Deleting the genre KVP from dictionary before is is displayed
    document.getElementById("Dictionary").innerHTML = Anime.genre;
}