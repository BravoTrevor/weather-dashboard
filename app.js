// List of cities (you can expand this list later)
const cities = ["Nairobi", "New York", "Nantes", "Nagoya", "Naples", "Nice"];

const input = document.getElementById("cityInput");

input.addEventListener("input", function () {
    const val = this.value;
    let suggestions = "";
    if (val.length > 0) {
        const filteredCities = cities.filter(city => city.toLowerCase().startsWith(val.toLowerCase()));
        filteredCities.forEach(city => {
            suggestions += `<div onclick="selectCity('${city}')">${city}</div>`;
        });
    }
    const dropdown = document.querySelector(".autocomplete-items");
    if (dropdown) dropdown.remove(); // Remove previous suggestions
    if (suggestions) {
        const div = document.createElement("div");
        div.setAttribute("class", "autocomplete-items");
        div.innerHTML = suggestions;
        this.parentNode.appendChild(div);
    }
});

function selectCity(city) {
    input.value = city;
    document.querySelector(".autocomplete-items").remove();
}
