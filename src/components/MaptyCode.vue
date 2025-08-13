<script setup></script>

<template>
  <section class="section">
    <div class="container">
      <div class="code-item" id="project-architecture">
        <h1>Project Architecture: Classes</h1>
        <div class="container">
          <pre><code>class Workout {
  date = new Date();
  id = (Date.now() + "").slice(-10);
  clicks = 0;

  constructor(coords, distance, duration) {
    this.coords = coords; // [lat, lng]
    this.distance = distance; // in km
    this.duration = duration; // in min
  }

  _setDescription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }

  click() {
    this.clicks++;
  }
}</code></pre>
        </div>
        <div class="container">
          <pre><code>class Running extends Workout {
  type = "running";

  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    // min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}</code></pre>
        </div>

        <div class="container">
          <pre><code>class Cycling extends Workout {
  type = "cycling";

  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.type = "cycling";
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    // km/h
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}</code></pre>
        </div>
      </div>
      <div class="code-item" id="leaflet-function">
        <h1>Leaflet Library Integration</h1>
        <div class="container">
          <pre><code>_loadMap(position) {
  const { latitude } = position.coords;
  const { longitude } = position.coords;
  const coords = [latitude, longitude];

  // Display a map using third party library Leaflet
  this.#map = L.map("map").setView(coords, this.#mapZoomLevel);

  L.tileLayer("https://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(this.#map);

  // Handling clicks on map
  this.#map.on("click", this._showForm.bind(this));

  // Only show markers when map is loaded
  this.#workouts.forEach(work => {
    this._renderWorkoutMarker(work);
  });
}</code></pre>
        </div>
      </div>
      <div class="code-item" id="renderworkout-function">
        <h1>Rendering Workouts</h1>
        <div class="container">
          <pre><code>_newWorkout(e) {
  // !Number.isFinite(distance) ||
  // !Number.isFinite(duration) ||
  // !Number.isFinite(cadence)
  const validInputs = (...inputs) =>
    inputs.every(input => Number.isFinite(input));

  const allPositive = (...inputs) => inputs.every(input => input > 0);

  e.preventDefault();

  // Get data from form
  const type = inputType.value;
  const distance = +inputDistance.value;
  const duration = +inputDuration.value;
  const { lat, lng } = this.#mapEvent.latlng;
  let workout;
}</code></pre>
        </div>
        <div class="container">
          <pre><code>// If workout Running > create running object
if (type === "running") {
  const cadence = +inputCadence.value;

  // Check if data is valid
  if (
    !validInputs(distance, duration, cadence) ||
    !allPositive(distance, duration, cadence)
  )
    return alert("Inputs have to be postive numbers");

  workout = new Running([lat, lng], distance, duration, cadence);
}</code></pre>
        </div>
        <div class="container">
          <pre><code>// If workout Cycling > create cycling object
if (type === "cycling") {
  const elevation = +inputElevation.value;

  if (
    !validInputs(distance, duration, elevation) ||
    !allPositive(distance, duration)
  )
    return alert("Inputs have to be postive numbers");

  workout = new Cycling([lat, lng], distance, duration, elevation);
}</code></pre>
        </div>
        <div class="container">
          <pre><code>// Add new object to workout array
this.#workouts.push(workout);

// Render workout on map as marker
this._renderWorkoutMarker(workout);

// Render workout on list
this._renderWorkout(workout);

// Clear input fields
this._hideForm();

// Set localstorage to all workouts
this._setLocalStorage();</code></pre>
        </div>
        <div class="container">
          <pre><code>_renderWorkoutMarker(workout) {
  // Display marker
  L.marker(workout.coords)
    .addTo(this.#map)
    .bindPopup(
      L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: `${workout.type}-popup`,
      })
    )
    .setPopupContent(
      `${workout.type === "running" ? "🏃" : "🚴‍♀️"} ${workout.description}`
    )
    .openPopup();
}</code></pre>
        </div>
      </div>
      <div class="code-item" id="localstorage-function">
        <h1>Localstorage Integration</h1>
        <div class="container">
          <pre><code>_setLocalStorage() {
  localStorage.setItem("workouts", JSON.stringify(this.#workouts));
}

_getLocalStorage() {
  const data = JSON.parse(localStorage.getItem("workouts"));

  if (!data) return;

  // Restore workouts array
  this.#workouts = data;

  this.#workouts.forEach(work => {
    this._renderWorkout(work);
  });
}

reset() {
  localStorage.removeItem("workouts");
  location.reload();
  // reloads the page
}</code></pre>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section {
  grid-column-start: 4;
  grid-column-end: 14;
  width: 100%;
  padding-top: 0 !important;
  padding-bottom: 10rem;

  .container {
    display: flex;
    flex-flow: column nowrap;

    .code-item {
      display: flex;
      flex-flow: column nowrap;
      row-gap: 1rem;
      padding-top: 10rem;

      .container {
        background-color: var(--clr-white);
        padding: 1rem;
        width: calc(100% + 2rem);
        margin: 0 -1rem;
        border-radius: 3px;

        pre {
          overflow-x: scroll;
        }

        code {
          background-color: var(--clr-white);
          font-family: 'Courier';
          font-size: 1rem;
          overflow: auto;
        }

        .img {
          width: calc(100% + 2rem);
          margin: 0 -1rem;
          box-shadow:
            rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
            rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
        }
      }
    }
  }
}
</style>
