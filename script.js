var typed = new Typed(".auto-type", {
    strings: ["Frontend", "Backend", "Developer", "Designer"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
});

// Footer Year "auto"
const footerYear = document.getElementById("footerYear");
footerYear.textContent = new Date().getFullYear();
console.log(footerYear);

