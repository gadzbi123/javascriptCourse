/* eslint-disable no-useless-catch */
import { async } from 'regenerator-runtime';
import { API_URL, RES_PER_PAGE } from './config';
import { getJSON } from './helpers';

export const state = {
  recipe: {},
  search: { query: '', results: [], resultsPerPage: RES_PER_PAGE, page: 1 },
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
