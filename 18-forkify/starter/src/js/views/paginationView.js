import View from './View';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');
  _errorMessage = 'No recipe found for your query! Please try again!';
  _message;

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      e.preventDefault();
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    });
  }
  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    const currPage = this._data.page;
    console.log(numPages);
    //on 1 page multiple
    if (currPage === 1 && numPages > 1) {
      return this._generateMarkupPaginationNext(currPage);
    }
    //on last page
    if (currPage === numPages && numPages > 1) {
      return this._generateMarkupPaginationPrev(numPages);
    }
    //in the middle
    if (currPage > 1 && currPage < numPages) {
      return (
        this._generateMarkupPaginationPrev(currPage) +
        this._generateMarkupPaginationNext(currPage)
      );
    }
    //only 1 page
    return '';
  }
  _generateMarkupPaginationPrev(page) {
    return `
    <button data-goto="${page - 1}" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${page - 1}</span>
    </button>
`;
  }
  _generateMarkupPaginationNext(page) {
    return `
    <button data-goto="${page + 1}" class="btn--inline pagination__btn--next">
        <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
        </svg>
        <span>Page ${page + 1}</span>
    </button>
`;
  }
}
export default new PaginationView();
