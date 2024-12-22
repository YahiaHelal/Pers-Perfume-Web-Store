document.addEventListener("DOMContentLoaded", function () {
    const dateElement = document.getElementById("dynamic-date");
    const greetingElement = document.getElementById("dynamic-greeting");
    const currentDate = new Date();

    dateElement.textContent = `Today's Date: ${currentDate.toDateString()}`;

    const hours = currentDate.getHours();
    let greeting = "Hello!";
    if (hours < 12) {
        greeting = "Good Morning!";
    } else if (hours < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }
    if (greetingElement) {
        greetingElement.textContent = greeting;
    }

    const recentSearches = JSON.parse(localStorage.getItem("recentSearches")) || [];
    updateRecentSearches(recentSearches);
});

function searchPerfume() {
    const searchInput = document.getElementById("search");
    const searchValue = searchInput.value.trim();

    if (searchValue) {
        alert(`Searching for: ${searchValue}`);

        let recentSearches = JSON.parse(localStorage.getItem("recentSearches")) || [];
        recentSearches.unshift(searchValue);
        if (recentSearches.length > 5) {
            recentSearches.pop(); 
        }
        localStorage.setItem("recentSearches", JSON.stringify(recentSearches));

        updateRecentSearches(recentSearches);
        searchInput.value = "";
    } else {
        alert("Please enter a search term.");
    }
}

document.getElementById("search").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        searchPerfume();
    }
});

function updateRecentSearches(searches) {
    const recentSearchesContainer = document.getElementById("recent-searches");
    if (recentSearchesContainer) {
        recentSearchesContainer.innerHTML = "";
        searches.forEach((search) => {
            const searchItem = document.createElement("li");
            searchItem.textContent = search;
            recentSearchesContainer.appendChild(searchItem);
        });
    }
}

// 
// document.addEventListener("keydown", function (event) {
//     if (event.ctrlKey && event.key === "f") {
//         event.preventDefault();
//         const searchInput = document.getElementById("search");
//         searchInput.focus();
//     }
// });
