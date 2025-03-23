function playVideo(videoUrl) {
    let videoPlayer = document.getElementById("videoPlayer");
    let videoFrame = document.getElementById("videoFrame");

    videoFrame.src = videoUrl;
    videoPlayer.style.display = "flex";  
}

function closeVideo() {
    let videoPlayer = document.getElementById("videoPlayer");
    let videoFrame = document.getElementById("videoFrame");

    videoFrame.src = "";  
    videoPlayer.style.display = "none";  
}

function searchContent() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    let items = document.querySelectorAll(".item"); // Selects all content items

    items.forEach(item => {
        let title = item.getAttribute("data-title").toLowerCase();
        if (title.includes(input)) {
            item.style.display = "block"; // Show matched items
        } else {
            item.style.display = "none"; // Hide unmatched items
        }
    });
}

function toggleSeasons() {
    let hiddenSeasons = document.querySelectorAll(".item.hidden");
    let button = document.getElementById("viewMoreBtn");

    hiddenSeasons.forEach(season => {
        if (season.style.display === "none" || season.style.display === "") {
            season.style.display = "block"; // Show items
            button.innerText = "View Less";
        } else {
            season.style.display = "none"; // Hide items again
            button.innerText = "View More";
        }
    });
}

function toggleMovies() {
    let hiddenMovies = document.querySelectorAll("#movieGrid .item.hidden");
    let button = document.getElementById("viewMoreMoviesBtn");

    hiddenMovies.forEach(movie => {
        if (movie.style.display === "none" || movie.style.display === "") {
            movie.style.display = "block"; // Show items
            button.innerText = "View Less";
        } else {
            movie.style.display = "none"; // Hide items again
            button.innerText = "View More";
        }
    });
}
function searchContent() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    let items = document.querySelectorAll(".item");
    let results = document.getElementById("searchResults");
    results.innerHTML = "";
    results.style.display = input ? "block" : "none";
    items.forEach(item => {
        let title = item.getAttribute("data-title").toLowerCase();
        if (title.includes(input)) {
            let resultItem = document.createElement("p");
            resultItem.textContent = item.getAttribute("data-title");
            resultItem.onclick = function() {
                let wasHidden = item.classList.contains("hidden");
                if (wasHidden) {
                    item.classList.remove("hidden");
                }
                item.scrollIntoView({ behavior: "smooth", block: "center" });
                item.style.border = "2px solid yellow";
                setTimeout(function() {
                    item.style.border = "none";
                    let viewMoreBtn = document.getElementById("viewMoreBtn");
                    if (wasHidden && viewMoreBtn && viewMoreBtn.innerText === "View More") {
                        item.classList.add("hidden");
                    }
                }, 2000);
            };
            results.appendChild(resultItem);
        }
    });
                           }
