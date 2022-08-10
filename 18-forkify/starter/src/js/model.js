/* eslint-disable no-useless-catch */
import { async } from 'regenerator-runtime';
import { API_URL, RES_PER_PAGE } from './config';
import { getJSON, sendJSON } from './helpers';

export const state = {
  recipe: {},
  search: { query: '', results: [], resultsPerPage: RES_PER_PAGE, page: 1 },
  bookmarks: [],
};

export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}get?rId=${id}`);
    // console.log(data.recipe);

    const recipe = data.recipe;

    state.recipe = {
      id: recipe.recipe_id,
      title: recipe.title,
      sourceUrl: recipe.source_url,
      imageUrl: recipe.image_url,
      publisher: recipe.publisher,
      servings: 4,
      ingredients: recipe.ingredients,
      cookingTime: 30,
    };

    if (state.bookmarks.some(bookmark => bookmark.id === id))
      state.recipe.bookmarked = true;
    else state.recipe.bookmarked = false;

    console.log(state.recipe);
  } catch (e) {
    console.log(e);

    throw e;
  }
};

export const loadSearchResult = async function (query) {
  try {
    const data = await getJSON(`${API_URL}search?q=${query}`);
    // console.log(data);

    state.search.query = query;
    state.search.page = 1;
    state.search.results = data.recipes.map(rec => {
      return {
        id: rec.recipe_id,
        title: rec.title,
        imageUrl: rec.image_url,
        publisher: rec.publisher,
      };
    });
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page;
  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;

  return state.search.results.slice(start, end);
};

export const updateServings = function (newServings) {
  state.recipe.servings = newServings;
};

export const addBookmark = function (recipe) {
  //Add bookmark
  state.bookmarks.push(recipe);

  //Mark current recipe as bookmark
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;

  //Save bookmarks to local storage
  persistBookmarks();
};

export const removeBookmark = function (id) {
  //remove bookmark with matching id
  state.bookmarks = state.bookmarks.filter(bookmark => bookmark.id !== id);

  // Remove bookmark from current recipe
  if (id === state.recipe.id) state.recipe.bookmarked = false;

  //Save bookmarks to local storage
  persistBookmarks();
};

const persistBookmarks = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};

const init = function () {
  const data = localStorage.getItem('bookmarks');
  if (data) state.bookmarks = JSON.parse(data);
};
init();

const clearBookmarks = function () {
  localStorage.removeItem('bookmarks');
};
// clearBookmarks();

export const uploadRecipe = async function (newRecipe) {
  try {
    const ingredients = Object.entries(newRecipe)
      .filter(entry => entry[0].includes('ingredient') && entry[1] !== '')
      .map(ing => {
        const ingArr = ing[1].split(',');
        if (ingArr.length !== 3)
          throw new Error(
            'Wrong ingredient format! Please use the correct format'
          );
        return ingArr.filter(word => word !== '').join(' ');
      });
    const recipe = {
      title: newRecipe.title,
      source_url: newRecipe.sourceUrl,
      image_url: newRecipe.imageUrl,
      publisher: newRecipe.publisher,
      cooking_time: +newRecipe.cookingTime,
      servings: +newRecipe.servings,
      ingredients,
    };
    console.log(ingredients);
  } catch (e) {
    throw e;
  }
};
