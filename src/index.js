console.log('%c HI', 'color: firebrick')



 let imagesDiv;
 let ul;
document.addEventListener('DOMContentLoaded', (event) => {
  imagesDiv =document.getElementById("dog-image-container");
  ul=document.getElementById("dog-breeds");
  chal1();
  chal2();
})


// Challenge 1
function chal1(){
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
 fetch(imgUrl)
    .then(function (res) {
      return res.json();
    })
    .then(function (json) {
      console.log(json);
      renderImage(json);
    });
}
function renderImage(json) {
  console.log(json.message.length);
  for (let i = 0; i < json.message.length; i++) {
    imagesDiv.innerHTML += `
    <img src=${json.message[i]}/>
    `;
  }
}


//Challenge 2
function chal2(){
const breedUrl ='https://dog.ceo/api/breeds/list/all'
 fetch(breedUrl)
    .then(function (res) {
      return res.json();
    })
    .then(function (json) {
      console.log(json);
      renderUl(json);
    });
}
function renderUl(json) {
  let li = document.createElement('li');
  console.log(json.message.length);
  for (let i = 0; i < json.message.length; i++) {
    li.innerHTML += `
    <br>
    ${json.message[i]}
    <br>
    `;
    ul.appendChild(li);
  }
}

//Challenge 3
