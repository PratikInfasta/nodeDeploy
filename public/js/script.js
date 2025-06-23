// Dark Mode Toggle
const toggleBtn = document.getElementById("toggleTheme");
const body = document.body;

// Load saved theme from localStorage
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
}

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

// Popup Logic
// const popup = document.getElementById("popup");
// const openBtn = document.getElementById("openPopupBtn");
// const closeBtn = document.getElementById("closePopupBtn");

// openBtn.onclick = () => popup.style.display = "block";
// closeBtn.onclick = () => popup.style.display = "none";
// window.onclick = (event) => {
//     if (event.target == popup) {
//         popup.style.display = "none";
//     }
// };
const popup = document.getElementById("popup");
const openBtn = document.getElementById("openPopupBtn");
const closeBtn = document.getElementById("closePopupBtn");

// Open popup
openBtn.onclick = () => {
  popup.style.display = "block";
};

// Close popup with 'X' button
closeBtn.onclick = () => {
  popup.style.display = "none";
};

// Close popup when clicking outside the popup content
popup.onclick = (event) => {
  if (event.target === popup) {
    popup.style.display = "none";
  }
};