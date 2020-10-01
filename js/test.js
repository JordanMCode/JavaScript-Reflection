// require(['isomorphic-fetch']);

// Variables

// API //
var unSplash = "https://source.unsplash.com/random";
var genImage = document.querySelector(".img-btn");
var imgCon = document.querySelector(".random-img");
var aGallery = document.querySelector(".assigned-gallery");
var responseURL = "";

// Email Validation //

var invalid = document.querySelector(".invalid-warning");
var email = document.querySelector(".email-input");
var submit = document.querySelector(".submit-btn");
var emailValue = "";

// Functions // 

//Fetches a random image from unsplash and appends it to the image container div.

// function getImg() {
//     fetch(unSplash).then(function (response) {
//         responseURL = response.url;
//         imgCon.innerHTML = "<img src=\"" + responseURL + "\">";
//     });
// }

// window.onload = function () {

//     var http = new XMLHttpRequest();

//     http.onreadystatechange = function () {
//         if (http.readyState == 4 && http.status == 200) {
//             console.log(http.response);
//         }
//     };

//     http.open("GET", "https://source.unsplash.com/random", true);
//     http.send();

// }


window.onload = function () {
    $.getJSON(unSplash, {
        format: "json"
    })
        .done(function (data) {
            JSON.parse(data);
            var JSON1 = JSON.parse(data);
            console.log(JSON1);
            $.each(data.items, function (i, item) {
                $("<img>").attr("src", item.media.m).appendTo("#images");
                if (i === 3) {
                    return false;
                }
            });
        });
}





// Hides the 'invalid email' warning message.
function invalidEmailHide() {
    invalid.style.display = "none";
}

// Email Validation

submit.addEventListener("click", function () {
    if (responseURL == "") {
        alert("Get a new image first to attach to your email");
    } else {
        emailValue = email.value;
        if (emailValue.match(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/)) {
            var linkNew = document.createElement("a");
            linkNew.innerHTML = "<img src=\"" + responseURL + "\" <br> <p>" + emailValue + "</p>";
            aGallery.appendChild(linkNew);
        } else {
            invalid.style.display = "block";
            setTimeout(invalidEmailHide, 5000);
        }
    }
});

// Image Gen // 

genImage.addEventListener("click", function () {
    getImg();
});
