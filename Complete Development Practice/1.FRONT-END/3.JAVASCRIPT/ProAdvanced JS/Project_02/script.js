

let btnEmojis = document.getElementById("btn");
let unicodeName = document.getElementById("unicodeName");
let result;
async function fetchEmojis(){
    let res = await fetch('https://emoji-api.com/emojis?access_key=cf6e4a5b9e7fba0ddd3614a2176fdd50e8fd6c3c');
     result = await res.json();
    // console.log(result);
}

fetchEmojis();

btnEmojis.addEventListener('click',() => {
    let data = Math.floor(Math.random() * result.length)
      btnEmojis.innerHTML = result[data].character;
      unicodeName.innerHTML = result[data].unicodeName;
      unicodeName.innerHTML = result[data].subGroup;
})
