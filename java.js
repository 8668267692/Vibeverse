const songData=[
    {
        name:"Tum Hi Ho",
        singer:"Arjit Singh",
        image:song1.jpg,
        audio:"song1.mp3"
    },
    {
        name:"Kesariya",
        singer:"Arjit Singh",
        image:song2.jpg,
        audio:"song2.mp3"
    },
    {
        name:"Kalyani",
        singer:"Shreya Ghoshal",
        image:song3.jpg,
        audio:"song3.mp3"
    },
    {
        name:"Ishq de fnniyar",
        singer:"Jyotica Tangri",
        image:song4.jpg,
        audio:"song4.mp3"
    },
    {
        name:"Radhimaa",
        singer:"Sai Abhayankr",
        image:song5.jpg,
        audio:"song5.mp3",
    },
    {
        name:"Gehra Hua",
        singer:""        ,
        image:song6.jpg,
        audio:"song6.mp3"
    },
    {
        name:"Bairan",
        singer:""    ,
        image:song7.jpg,
        audio:"song7.mp3"
    },
    {
        name:"Tere Liye",
        singer:""       ,
        image:song8.jpg,
        audio:"song8.mp3"
    },
    {
        name:"Gulabi Sadi",
        singer:""         ,
        image:song9.jpg,
        audio:"songs9.mp3"
    },
    {
        name:"Zingaat",
        singer:""        ,
        image:song10.jpg,
        audio:"song10.mp3"
    },
    {
        name:"Shiba", 
        singer:""     ,
        image:song11.jpg,
        audio:"song11.mp3"
    },
    {
        name:"Finding her",
        singer:"" ,
        image:song12.jpg,
        audio:"song12.mp3"
    },
    {
        name:"Shaky",
        singer:""     ,
         image:song13.jpg,
        audio:"song13.mp3"

    },
    {
        name:"Meri Zindagi H TU",
        singer:""              ,
         image:song14.jpg,
        audio:"song14.mp3"
    },
    {
        name:"Kashmir Main tu Kanyakumari",
        singer:""            ,
          image:song15.jpg,
        audio:"song15.mp3"
    },
    {
        name:"Bahara",
        singer:"Shreya Ghoshal,Sonu Mahapatra",
        image:song16.jpg,
        audio:"song16.mp3"
    },
    {
        name:"Jugraafiya",
        singer:""        ,
          image:song17.jpg,
        audio:"song17.mp3"
    },
    {
        name:"Tum se hi",
        singer:""        ,
         image:song18.jpg,
        audio:"song18.mp3"
    },
    {
        name:"Toota jo kabhi tara",
        singer:""        ,
         image:song19.jpg,
        audio:"song19.mp3"
    },
    {
        name:"Sooraj dooba hai",
        singer:""         ,
          image:song20.jpg,
        audio:"song20.mp3"
    },
    {
        name:"white brown black",
        singer:""         ,
           image:song21.jpg,
        audio:"song21.mp3" 
    },
    {
        name:"Kala Chashma",
        singer:"",
         image:song22.jpg,
        audio:"song22.mp3"
    },
    {
        name:"Sirat",
        singer:"",
         image:song23.jpg,
        audio:"song23.mp3"
    },
    {
        name:"Natin maarli mithi",
        singer:"",
          image:song24.jpg,
        audio:"song24.mp3"
    },
    {
        name:"Nakhrewali",
        singer:"",
          image:song25.jpg,
        audio:"song25.mp3"
    },
    {
        name:"Chandra",
        singer:"",
        image:song26.jpg,
        audio:"song26.mp3"
    },
];




const audio = document.getElementById("audioPlayer");

let playlist = [];


/* DISPLAY SONGS */

function displaySongs(list) {

    const songList = document.getElementById("playListItems").style.playListItems.innerHTML="Explore All Songs";

    if (list.length === 0) {
        document.getElementById("noResult").innerText =
            "No songs found!";
        return;
    }

    document.getElementById("noResult").innerText = "";

    list.forEach(function(song) {

        songList.innerHTML += `

            <div class="song-card">

                <img src="${song.image}" alt="Song Cover">

                <h3>${song.name}</h3>

                <p>${song.singer}</p>

                <button onclick="playSong('${song.name}')">
                    ▶ Play
                </button>

                <button onclick="addToPlaylist('${song.name}')">
                    💜 Add
                </button>

            </div>

        `;

    });

}


/* SEARCH SONGS */

function searchSongs() {

    const value = document.getElementById("search")
        .value.toLowerCase();

    const filteredSongs = songData.filter(function(song) {

        return song.name.toLowerCase().includes(value) ||
               song.singer.toLowerCase().includes(value);

    });

    displaySongs(filteredSongs);

}


/* PLAY SONG */

function playSong(songName) {

    const selectedSong = songData.find(function(song) {
        return song.name === songName;
    });

    if (!selectedSong) return;

    audio.src = selectedSong.audio;

    audio.play();

    document.getElementById("nowPlaying").innerText =
        "Now Playing: " + selectedSong.name;
}


/* ADD TO PLAYLIST */

function addToPlaylist(songName) {

    if (!playlist.includes(songName)) {
        playlist.push(songName);
    }

    displayPlaylist();

}


/* DISPLAY PLAYLIST */

function displayPlaylist() {

    const area = document.getElementById("playlistItems");

    area.innerHTML = "";

    if (playlist.length === 0) {
        area.innerText = "Your playlist is empty.";
        return;
    }

    playlist.forEach(function(name) {

        area.innerHTML += `<p>🎵 ${name}</p>`;

    });

}


/* EXPLORE BUTTON */

function goToSongs() {

    document.getElementById("songs").scrollIntoView({
        behavior: "smooth"
    });

}


/* ARTIST BUTTON */

function showArtist(name) {

    alert("You selected: " + name);

}


/* CONTACT FORM */

function sendMessage(event) {

    event.preventDefault();

    document.getElementById("contactMessage").innerText =
        "Thank you! Your message has been received.";

}


/* SEARCH EVENT */

document.getElementById("search").addEventListener(
    "input",
    searchSongs
);


/* INITIAL DISPLAY */

displaySongs(songData);
displayPlaylist();
