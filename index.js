let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 480) {
    navLinks.classList.remove("show");
  }
});

function toggleComments() {
  let commentsSection = document.getElementById("comments-section");
  commentsSection.classList.toggle("hidden");
}

function postComment() {
  let commentInput = document.getElementById("comment-input");
  let commentText = commentInput.value.trim();

  if (commentText !== "") {
    let commentsContainer = document.querySelector(".comments-container");
    let newComment = document.createElement("p");
    newComment.textContent = commentText;
    commentsContainer.appendChild(newComment);
    commentInput.value = "Portfolio";
  }
}
