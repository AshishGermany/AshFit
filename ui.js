let activeCategory = "All";
let foodSearchTerm = "";
let logExpanded = false;

//GREETING FUNC
function updateGreeting() {
  const hour = new Date().getHours();

  let greeting;

  let message;

  if (hour < 12) {
    greeting = "Good Morning,";

    message = "Let's build a great day.";
  } else if (hour < 18) {
    greeting = "Good Afternoon,";

    message = "Keep the momentum going.";
  } else {
    greeting = "Good Evening,";

    message = "Let's finish today strong.";
  }

  document.getElementById("greetingText").textContent = greeting;

  document.getElementById("dailyMessage").textContent = message;
}

// =====================
// FUNCTION UI
// =====================

function updateUI() {
  //document.getElementById("calories").innerText = Math.round(data[today].cal);

  //document.getElementById("protein").innerText = data[today].protein.toFixed(1);
  const proteinElement = document.getElementById("protein");

  if (proteinElement) {
    proteinElement.innerText = data[today].protein.toFixed(1);
  }
  const logDiv = document.getElementById("log");
  logDiv.innerHTML = "";

  data[today].log.forEach((item) => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `<b>${item.name}</b><br>${item.cal.toFixed(0)} kcal • ${item.protein.toFixed(1)}g`;
    logDiv.appendChild(div);
  });
}

// =====================
// AUTOCOMPLETE
// =====================

const foodInput = document.getElementById("input");

if (foodInput) {
  foodInput.addEventListener("input", function () {
    const val = this.value.toLowerCase().trim();

    const box = document.getElementById("suggestions");

    if (!box) return;

    box.innerHTML = "";

    if (!val) return;

    Object.keys(foods)

      .filter((f) => f.includes(val))

      .sort((a, b) => {
        const freqA = data[today].freq?.[a] || 0;

        const freqB = data[today].freq?.[b] || 0;

        return freqB - freqA;
      })

      .slice(0, 5)

      .forEach((food) => {
        const div = document.createElement("div");

        div.className = "suggestion";

        div.innerText = food;

        div.onclick = () => {
          document.getElementById("input").value = food;

          addFood(food);

          box.innerHTML = "";
        };

        box.appendChild(div);
      });
  });

  foodInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();

      addFood();

      document.getElementById("suggestions").innerHTML = "";
    }
  });
}

// =====================
// FOOD LIBRARY
// =====================

function renderFoodLibrary() {
  const box = document.getElementById("foodLibrary");

  box.innerHTML = "<h3>Food Library</h3>";

  //Object.entries(foods).forEach(([name, val]) => {
  Object.entries(foods)

    .filter(([name, food]) => {
      const matchesSearch = food.name.toLowerCase().includes(foodSearchTerm);

      const matchesCategory =
        activeCategory === "All" || food.category === activeCategory;

      return matchesSearch && matchesCategory;
    })

    .forEach(([name, val]) => {
      const div = document.createElement("div");

      div.className = "food-card";

      div.innerHTML = `

      <div class="food-header">

        ${getFoodIcon(val)}

        <b>${val.name}</b>

      </div>


      <div class="food-category">

        ${val.category || "Other"}

      </div>


      <div class="food-info">

        ${getCalories(val)} kcal
        •
        ${getProtein(val)}g protein

      </div>


      <div class="food-actions">

        <button onclick="editFood('${name}')">
          Edit
        </button>

        <button onclick="deleteFood('${name}')">
          Delete
        </button>

      </div>

    `;

      box.appendChild(div);
    });

  lucide.createIcons();
}

function showLibrary() {
  document.getElementById("trackerScreen").style.display = "none";

  document.getElementById("libraryScreen").style.display = "block";

  setActiveTab("foods");

  renderFoodLibrary();

  if (window.lucide) {
    lucide.createIcons();
  }
}

function hideScreens() {
  document.getElementById("trackerScreen").style.display = "none";

  document.getElementById("libraryScreen").style.display = "none";

  document.getElementById("addScreen").style.display = "none";
}

function showTracker() {
  hideScreens();

  document.getElementById("trackerScreen").style.display = "block";

  setActiveTab("home");
}

function showLibrary() {
  hideScreens();

  document.getElementById("libraryScreen").style.display = "block";

  setActiveTab("foods");
}

function showFoodSearch() {
  hideScreens();

  document.getElementById("addScreen").style.display = "block";
}
//
// //function renderFavorites() {
// //  const container = document.getElementById("favoritesBar");

// //  container.innerHTML = "";

//   Object.values(foods)

//     .filter((food) => food.favourite)

//     .forEach((food) => {
//       const button = document.createElement("button");

//       button.textContent = food.name;

//       button.onclick = () => addFood(food.name);

//       container.appendChild(button);
//     });
// }

// function renderFrequentFoods() {
//   const container = document.getElementById("frequentBar");

//   container.innerHTML = "";

//   const freq = data[today].freq || {};

//   Object.entries(freq)

//     .sort((a, b) => b[1] - a[1])

//     .slice(0, 5)

//     .forEach(([name, count]) => {
//       const button = document.createElement("button");

//       button.textContent = foods[name]?.name || name;

//       button.onclick = () => addFood(name);

//       container.appendChild(button);
//     });
// }

function getFoodIcon(food) {
  if (food.type === "drink") {
    return `<i data-lucide="cup-soda"></i>`;
  }
  return `<i data-lucide="utensils"></i>`;
}

function renderQuickAdd() {
  const container = document.getElementById("quickAddBar");

  container.innerHTML = "";

  const quickFoods = [
    "daily breakfast",
    "Home Cappuccino",
    ...Object.entries(data[today].freq || {})
      .sort((a, b) => b[1] - a[1])
      .map(([name]) => name),
  ];

  const unique = [...new Set(quickFoods)];

  unique.slice(0, 8).forEach((name) => {
    const button = document.createElement("button");

    button.className = "quickAddPill";

    button.textContent = foods[name]?.name || name;

    button.onclick = () => addFood(name);

    container.appendChild(button);
  });
}

// =====================
// MODE SELECTOR
// =====================

const modeSelect = document.getElementById("foodMode");

modeSelect.addEventListener("change", function () {
  const edible = document.getElementById("foodEdible");

  const label = document.getElementById("edibleLabel");

  if (this.value === "grams") {
    edible.style.display = "block";
    label.style.display = "block";
  } else {
    edible.style.display = "none";
    label.style.display = "none";
  }
});

document.getElementById("foodSearch").addEventListener("input", function () {
  foodSearchTerm = this.value.toLowerCase().trim();

  renderFoodLibrary();
});

function filterFoods(category) {
  activeCategory = category;

  renderFoodLibrary();
}

//ORBS
function updateOrb(current, goal, progressId, remainingId) {
  const remaining = Math.max(0, goal - current);

  document.getElementById(remainingId).textContent = Math.round(remaining);

  const progress = Math.min(current / goal, 1);

  const circumference = 2 * Math.PI * 90;

  const offset = circumference * (1 - progress);

  document.getElementById(progressId).style.strokeDashoffset = offset;
}

//TOGGLE TODAYS LOG

function toggleLog() {
  logExpanded = !logExpanded;

  const log = document.getElementById("log");

  const button = document.getElementById("logToggle");

  if (logExpanded) {
    log.style.display = "block";

    button.textContent = "Today's Log ▲";
  } else {
    log.style.display = "none";

    button.textContent = "Today's Log ▼";
  }
}

//+ BUTTON to access Food Search
function showFoodSearch() {
  hideScreens();

  document.getElementById("addScreen").style.display = "block";
}

//BOTTOM NAV ACTIVE ICON
function setActiveTab(tab) {
  document
    .querySelectorAll(".navItem")
    .forEach((item) => item.classList.remove("active"));

  if (tab === "home") {
    document.getElementById("navHome").classList.add("active");
  }

  if (tab === "foods") {
    document.getElementById("navFoods").classList.add("active");
  }
}

//LAST ENTRY PILL
function updateLastEntry() {
  const container = document.getElementById("lastEntry");

  if (!container) return;

  const entries = data[today].log;

  if (entries.length === 0) {
    container.innerHTML = `

            <div class="emptyState">

                Nothing logged yet.

            </div>

        `;

    return;
  }

  const last = entries[entries.length - 1];

  container.innerHTML = `

        <div class="lastFood">

            <strong>${last.name}</strong>

            <br>

            ${Math.round(last.cal)} kcal •
            ${last.protein.toFixed(1)} g protein

        </div>

    `;
}

function refreshUI() {
  updateUI();

  updateLastEntry();

  renderFoodLibrary();

  //renderFavorites();

  //renderFrequentFoods();

  renderQuickAdd();

  lucide.createIcons();

  updateGreeting();

  updateOrb(
    data[today].cal,
    profile.targetCalories,
    "calorieProgress",
    "calorieRemaining",
  );

  updateOrb(
    data[today].protein,
    profile.targetProtein,
    "proteinProgress",
    "proteinRemaining",
  );
}
