document.addEventListener("DOMContentLoaded", function () {
    const dateElement = document.getElementById("dynamic-date");
    const greetingElement = document.getElementById("dynamic-greeting");
    const currentDate = new Date();

    // Display the current date
    dateElement.textContent = `Today's Date: ${currentDate.toDateString()}`;

    // Display a dynamic greeting based on time of day
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

    // Load recent searches from local storage
    const recentSearches = JSON.parse(localStorage.getItem("recentSearches")) || [];
    updateRecentSearches(recentSearches);
});

// Function to search perfumes
function searchPerfume() {
    const searchInput = document.getElementById("search");
    const searchValue = searchInput.value.trim();

    if (searchValue) {
        alert(`Searching for: ${searchValue}`);

        // Save the search term in local storage
        let recentSearches = JSON.parse(localStorage.getItem("recentSearches")) || [];
        recentSearches.unshift(searchValue);
        if (recentSearches.length > 5) {
            recentSearches.pop(); // Keep only the last 5 searches
        }
        localStorage.setItem("recentSearches", JSON.stringify(recentSearches));

        updateRecentSearches(recentSearches);
        searchInput.value = ""; // Clear the input field
    } else {
        alert("Please enter a search term.");
    }
}

// Function to handle "Enter" key press
document.getElementById("search").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        searchPerfume();
    }
});

// Function to update the list of recent searches
function updateRecentSearches(searches) {
    const recentSearchesContainer = document.getElementById("recent-searches");
    if (recentSearchesContainer) {
        recentSearchesContainer.innerHTML = ""; // Clear existing content
        searches.forEach((search) => {
            const searchItem = document.createElement("li");
            searchItem.textContent = search;
            recentSearchesContainer.appendChild(searchItem);
        });
    }
}

// Add a keyboard shortcut (Ctrl+F to focus on search input)
document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.key === "f") {
        event.preventDefault();
        const searchInput = document.getElementById("search");
        searchInput.focus();
    }
});
