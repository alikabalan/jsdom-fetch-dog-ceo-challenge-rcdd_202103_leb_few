// console.log('%c HI', 'color: firebrick')
//
// //Challenge 1
//
// const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
//
//   fetch(imgUrl)
//   .then(response => response.json())
//   .then(result => {
//     ceoDogImg(result.message)
//   })
//
//   function ceoDogImg(dogs){
//     console.log(dogs)
//     dogs.forEach(dog => {
//       console.log(dog)
//       const goodBoyContainer = document.querySelector('#dog-image-container')
//       const goodBoy = document.createElement('img').src = dog
//       goodBoy.src = dog
//       goodBoyContainer.appendChild(goodBoy)
//     });
//   }

//Challenge 2
//
// const breedUrl = 'https://dog.ceo/api/breeds/list/all'



console.log('%c HI', 'color: firebrick')
 let imagesDiv;
 let ul;
document.addEventListener('DOMContentLoaded', (event) => {
  imagesDiv =document.getElementById("dog-image-container");
  ul=document.getElementById("dog-breeds");
  chal1();
  chal2();
})
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
