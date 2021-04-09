let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  displayToys()
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

function displayToys(){
  const collection = document.getElementById('toy-collection')

  fetch("http://localhost:3000/toys").then(resp => resp.json())
  .then( data => {
    data.forEach( toy => {
      let wrapper = Object.assign(document.createElement('div'),{ className: 'card' })
      let title = Object.assign(document.createElement('h2'),{ textContent: toy["name"] })
      let image = Object.assign(document.createElement('img'),{className: 'toy-avatar', src: toy["image"] })
      let likes = Object.assign(document.createElement('p'),{ textContent: `Likes: ${toy["likes"]}` })
      let likeButton = Object.assign(document.createElement('button'),{ className: "like-btn", textContent: "Like" })

      collection.append(wrapper)
      wrapper.append(title, image, likes, likeButton)
    })
  })
}
