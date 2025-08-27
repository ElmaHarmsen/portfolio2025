<script setup></script>

<template>
  <section class="section">
    <div class="container">
      <div class="code-item" id="project-architecture">
        <h1>Project Architecture: Flowchart</h1>
        <div class="container no-bg">
          <img
            src="../assets/photos/code/forkify-flowchart.png"
            class="img"
            alt="Forkify flowchart"
          />
        </div>
      </div>
      <div class="code-item" id="project-structure">
        <h1>Project Structure: MVC</h1>
        <div class="container no-bg">
          <img
            src="../assets/photos/code/forkify-architecture.png"
            class="img"
            alt="Forkify flowchart"
          />
        </div>
      </div>
      <div class="code-item" id="project-features">
        <h1>Search & Search Results</h1>
        <div class="container">
          <pre><code>class SearchView {
  _parentElement = document.querySelector(".search");

  getQuery() {
    const query = this._parentElement.querySelector(".search__field").value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._parentElement.querySelector(".search__field").value = "";
  }

  addHandlerSearch(handler) {
    this._parentElement.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();</code></pre>
        </div>
        <div class="container">
          <pre><code>class ResultsView extends View {
  _parentElement = document.querySelector(".results");
  _errorMessage = "No recipes found for that query. Try again.";
  _successMessage = "";

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join("");
  }
}

export default new ResultsView();
</code></pre>
        </div>
        <div class="container">
          <pre><code>// Controller
const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    // Get search query
    const query = searchView.getQuery();
    if (!query) return;

    // Load search results
    await model.loadSearchResults(query);

    // Render results
    // resultsView.render(model.state.search.results); // all results
    resultsView.render(model.getSearchResultsPage());

    // Render pagination buttons
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};</code></pre>
        </div>
        <div class="container">
          <pre><code>// Model
export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;
    const data = await AJAX(`${API_URL}?search=${query}&key=${API_KEY}`);

    state.search.results = data.data.recipes.map(recipe => {
      return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        image: recipe.image_url,
        ...(recipe.key && { key: recipe.key }),
      };
    });
    state.search.page = 1;
  } catch (err) {
    console.error(`${err} 💥💥💥`);
    throw err;
  }
};</code></pre>
        </div>
      </div>
      <div class="code-item">
        <h1>Pagination</h1>
        <div class="container">
          <pre><code>class PaginationView extends View {
  _parentElement = document.querySelector(".pagination");

  addHandlerClick(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn--inline");
      if (!btn) return;

      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // Markup here...
  }
}

export default new PaginationView();</code></pre>
        </div>
        <div class="container">
          <pre><code>// Controller
const controlPagination = function (goToPage) {
  // Render new results
  resultsView.render(model.getSearchResultsPage(goToPage));

  // Render new pagination buttons
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  // Update recipe servings (state)
  model.updateServings(newServings);

  // Update recipeview - rerender entire recipe
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};</code></pre>
        </div>
        <div class="container">
          <pre><code>// Model
export const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page;

  const start = (page - 1) * state.search.resultsPerPage; // 0
  const end = page * state.search.resultsPerPage; // 9

  return state.search.results.slice(start, end);
};
</code></pre>
        </div>
      </div>
      <div class="code-item">
        <h1>Bookmarks & Localstorage</h1>
        <div class="container">
          <pre><code>class BookmarksView extends View {
  _parentElement = document.querySelector(".bookmarks__list");
  _errorMessage = "No bookmarks yet. Find a recipe and bookmark it.";
  _successMessage = "";

  addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }

  _generateMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join("");
  }
}

export default new BookmarksView();
</code></pre>
        </div>
        <div class="container">
          <pre><code>// Controller
const controlAddBookmark = function () {
  // Add/remove bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  // Update recipe view
  recipeView.update(model.state.recipe);

  // Render bookmarks
  bookmarksView.render(model.state.bookmarks);
};</code></pre>
        </div>
        <div class="container">
          <pre><code>// Model
const persistBookmarks = function () {
  localStorage.setItem("bookmarks", JSON.stringify(state.bookmarks));
};

export const addBookmark = function (recipe) {
  // Add bookmark
  state.bookmarks.push(recipe);

  // Mark recipe as bookmarked
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;

  persistBookmarks();
};

export const deleteBookmark = function (id) {
  // Delete bookmark by id
  const index = state.bookmarks.findIndex(el => el.id === id);
  state.bookmarks.splice(index, 1);

  // Mark recipe as NOT bookmarked
  if (id === state.recipe.id) state.recipe.bookmarked = false;

  persistBookmarks();
};</code></pre>
        </div>
      </div>
      <div class="code-item">
        <h1>Uploading a Recipe</h1>
        <div class="container">
          <pre><code>class AddRecipeView extends View {
  _parentElement = document.querySelector(".upload");
  _successMessage = "Recipe successfully uploaded.";
  _window = document.querySelector(".add-recipe-window");
  _overlay = document.querySelector(".overlay");
  _btnOpen = document.querySelector(".nav__btn--add-recipe");
  _btnClose = document.querySelector(".btn--close-modal");

  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
  }

  toggleWindow() {
    this._overlay.classList.toggle("hidden");
    this._window.classList.toggle("hidden");
  }

  _addHandlerShowWindow() {
    this._btnOpen.addEventListener("click", this.toggleWindow.bind(this));
  }

  _addHandlerHideWindow() {
    this._btnClose.addEventListener("click", this.toggleWindow.bind(this));
    this._overlay.addEventListener("click", this.toggleWindow.bind(this));
  }

  addHandlerUpload(handler) {
    this._parentElement.addEventListener("submit", function (e) {
      e.preventDefault();
      const dataArray = [...new FormData(this)];
      // returns array with all fields + values of the form

      const data = Object.fromEntries(dataArray);
      // converts array of entries to an object

      handler(data);
    });
  }

  _generateMarkup() {}
}

export default new AddRecipeView();</code></pre>
        </div>
        <div class="container">
          <pre><code>// Controller
const controlAddRecipe = async function (newRecipe) {
  try {
    // Loading spinner
    addRecipeView.renderSpinner();

    // Upload new recipe data
    await model.uploadRecipe(newRecipe);
    console.log(model.state.recipe);

    // Render recipe
    recipeView.render(model.state.recipe);

    // Success message
    addRecipeView.renderSuccessMessage();

    // Render bookmarks view
    bookmarksView.render(model.state.bookmarks);

    // Change ID in url
    window.history.pushState(null, "", `#${model.state.recipe.id}`);

    // Close form window
    setTimeout(function () {
      addRecipeView.toggleWindow();
    }, MODAL_TIMEOUT_SEC * 1000);
  } catch (err) {
    console.error("💥", err);
    addRecipeView.renderError(err.message);
  }
};</code></pre>
        </div>
        <div class="container">
          <pre><code>// Model
export const uploadRecipe = async function (newRecipe) {
  try {
    const ingredients = Object.entries(newRecipe)
      .filter(entry => entry[0].startsWith("ingredient") && entry[1] !== "")
      .map(ing => {
        // const ingArray = ing[1].replaceAll(" ", "").split(",");
        const ingArray = ing[1].split(",").map(el => el.trim());
        if (ingArray.length !== 3)
          throw new Error("Wrong ingredient format. Use the correct format.");

        const [quantity, unit, description] = ingArray;
        return { quantity: quantity ? +quantity : null, unit, description };
      });

    const recipe = {
      title: newRecipe.title,
      source_url: newRecipe.sourceUrl,
      image_url: newRecipe.image,
      publisher: newRecipe.publisher,
      cooking_time: +newRecipe.cookingTime,
      servings: +newRecipe.servings,
      ingredients,
    };

    const data = await AJAX(`${API_URL}?key=${API_KEY}`, recipe);
    state.recipe = createRecipeObject(data);
    addBookmark(state.recipe);
  } catch (err) {
    throw err;
  }
};</code></pre>
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
          font-family: 'DM Mono Regular';
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

      .no-bg {
        background-color: transparent;
      }
    }
  }
}
</style>
