var homebut = document.getElementById('homebut');
var blogbut = document.getElementById('blogbut');
var auth = document.getElementById('auth');
var menu = document.getElementById('menu');
var homes = document.getElementById("home");
var blog = document.getElementById("blog");
var Title = document.getElementById("Title");
var els = document.getElementById("els");
var blogging = document.getElementById("blogging");
document.addEventListener("DOMContentLoaded", function() {
    homebut.addEventListener('click', function() {
        blog.style.display = "none";
        menu.classList.toggle('slide-in');
        homes.style.display = homes.style.display == "block" ? "none" : "block";
    });
    blogbut.addEventListener('click', function() {
        homes.style.display = "none";
        menu.classList.toggle('slide-in');
        blog.style.display = blog.style.display == "block" ? "none" : "block";
    });
    auth.addEventListener('click', function() {
        blog.style.display = "none";
        homes.style.display = "none";
        menu.classList.toggle('slide-in');
    });
});

function writeText(title, elss, urls, cl) {
    Title.textContent = title;
    els.textContent = elss;
    blogging.style.backgroundImage = "url('" + urls + "')"
    blogging.style.backgroundSize = "cover"
    blogging.style.backgroundPosition = "center"
    blogging.style.color = cl
}



