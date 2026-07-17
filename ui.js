// =====================
// FUNCTION UI
// =====================

function updateUI() {
  document.getElementById("calories").innerText =
    Math.round(data[today].cal);

  document.getElementById("protein").innerText =
    data[today].protein.toFixed(1);

  const logDiv = document.getElementById("log");
  logDiv.innerHTML = "";

  data[today].log.forEach(item => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML =
      `<b>${item.name}</b><br>${item.cal.toFixed(0)} kcal • ${item.protein.toFixed(1)}g`;
    logDiv.appendChild(div);
  });
}

// =====================
// AUTOCOMPLETE (FIXED)
// =====================

document.getElementById("input")
.addEventListener("input", function () {

  const val = this.value.toLowerCase().trim();
  const box = document.getElementById("suggestions");
  box.innerHTML = "";

  if (!val) return;

  Object.keys(foods)
  .filter(f => f.includes(val))
  .sort((a, b) => {

    const freqA = data[today].freq?.[a] || 0;
    const freqB = data[today].freq?.[b] || 0;

    return freqB - freqA;
  })
    .slice(0, 5)


    .forEach(food => {

      const div = document.createElement("div");
      div.className = "suggestion";
      div.innerText = food;

    div.onclick = () => {
      document.getElementById("input").value = food;
      addFood(food);
      document.getElementById("suggestions").innerHTML = "";
};

      box.appendChild(div);
    });
});


// =====================
// ENTER KEY
// =====================

document.getElementById("input")
.addEventListener("keydown", function (e) {

  if (e.key === "Enter") {
    e.preventDefault();
    addFood();
    document.getElementById("suggestions").innerHTML = "";
  }

});

// =====================
// FOOD LIBRARY
// =====================

function renderFoodLibrary() {

  const box = document.getElementById("foodLibrary");
  box.innerHTML = "<h3>Food Library</h3>";

  Object.entries(foods).forEach(([name, val]) => {

    const div = document.createElement("div");

    div.className = "item";

    div.innerHTML = `
      <b>${name}</b><br>
      ${getCalories(val)} kcal • ${getProtein(val)}g protein
      <br>
      <button onclick="deleteFood('${name}')">Delete</button>
    `;

    box.appendChild(div);
  });
}

function showTracker() {
  document.getElementById("trackerScreen").style.display = "block";
  document.getElementById("libraryScreen").style.display = "none";
}

function showLibrary() {
  document.getElementById("trackerScreen").style.display = "none";
  document.getElementById("libraryScreen").style.display = "block";
}

function renderFavorites() {
  const container = document.getElementById("favoritesBar");

  container.innerHTML = "";

  favoriteFoods.forEach(food => {
    const button = document.createElement("button");

    button.textContent = food;

    button.onclick = () => addFood(food);

    container.appendChild(button);
  });
}