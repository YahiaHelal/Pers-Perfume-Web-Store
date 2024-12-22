document.addEventListener("DOMContentLoaded", function() {
    const dateElement = document.getElementById("dynamic-date");
    const currentDate = new Date();
    dateElement.textContent = `Today's Date: ${currentDate.toDateString()}`;
});

function searchPerfume() {
    const searchValue = document.getElementById("search").value;
    if (searchValue) {
        alert(`Searching for: ${searchValue}`);
    } else {
        alert("Please enter a search term.");
    }
}
