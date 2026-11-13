
const menuBtn = document.getElementById("menuBtn");
const navigation = document.getElementById("navigation");

menuBtn.addEventListener("click", function () {
    navigation.classList.toggle("open");
});

navigation.querySelectorAll("a").forEach(function(link) {
    link.addEventListener("click", function() {
        navigation.classList.remove("open");
    });
});

document.getElementById("year").textContent =
    new Date().getFullYear();
