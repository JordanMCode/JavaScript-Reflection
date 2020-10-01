// require(['isomorphic-fetch']);
// Variables

// API //
const unSplash = "https://source.unsplash.com/random";
const genImage = document.querySelector(".img-btn");
const imgCon = document.querySelector(".random-img");
const aGallery = document.querySelector(".assigned-gallery");
let responseURL = "";

// Email Validation //

const invalid = document.querySelector(".invalid-warning");
const email = document.querySelector(".email-input");
const submit = document.querySelector(".submit-btn");
let emailValue = "";


// Functions // 

// Fetches a random image from unsplash and appends it to the image container div.

function getImg() {
    fetch(unSplash)
        .then((response) => {
            responseURL = response.url;
            imgCon.innerHTML = `<img src="${responseURL}">`;
        })
}



// Hides the 'invalid email' warning message.
function invalidEmailHide() {
    invalid.style.display = "none";
}




// Email Validation

submit.addEventListener("click", () => {
    if (responseURL == "") {
        alert("Get a new image first to attach to your email");
    } else {
        emailValue = email.value;
        if (emailValue.match(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/)) {
            let linkNew = document.createElement("a");
            linkNew.innerHTML = `<img src="${responseURL}" <br> <p>${emailValue}</p>`;
            aGallery.appendChild(linkNew);
        } else {
            invalid.style.display = "block";
            setTimeout(invalidEmailHide, 5000)
        }
    }
})


// Image Gen // 

genImage.addEventListener("click", () => {
    getImg();

})