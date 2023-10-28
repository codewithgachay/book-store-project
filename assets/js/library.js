

//Variables
let swiperWrapper = document.querySelector(".swiper-wrapper");
let allBookH2 = document.querySelector(".all-books-click-me")

// Functions
//Set all books Live from the library
export function setAllBooks(snapshot) {
    const arr = snapshot.val();
    for (let index in arr) {
      let bookObj = arr[index];
      console.log(bookObj);
  
      const div = document.createElement("div");
      div.classList.add("swiper-slide");
      div.innerHTML = `<div class="card" style="width: 18rem">
     <img
       class="card-img-top"
       src="${bookObj.imgUrl}"
       alt="Card image cap"
     />
     <div class="card-body">
       <h5 class="card-title">${bookObj.name}</h5>
       <p class="card-text">${bookObj.author}</p>
       <a href="#" class="btn btn-primary" id ="${index}">READ MORE</a>
     </div>`;
    swiperWrapper.append(div);
    }

};

//Set all books when you click the h2 element of the document
export function clickAndSetAllbooks(snapshot){
setAllBooks(snapshot);
};


