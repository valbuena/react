import * as CategoriesAPI from '../utils/CategoriesAPI'
export const GET_CATEGORIES = 'GET_CATEGORIES'
export function getCategories (categories) {
  return {
    type : GET_CATEGORIES,
    categories
  }
}


export const fetchCategories = () => dispatch => (
  CategoriesAPI
    .getAllCategories()
    .then(categories => dispatch(getCategories(categories)))
);
