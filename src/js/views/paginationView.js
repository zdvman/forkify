import View from './view.js';
import icons from '../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (event) {
      const button = event.target.closest('.btn--inline');
      const goToPage = +button?.dataset?.goto;
      if (!goToPage) return;
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const currentPage = this._data.page;
    const totalPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // Page 1 and there are other pages
    if (currentPage === 1 && totalPages > 1) {
      return this._generateNextButton(currentPage, totalPages);
    }

    // Last page
    if (currentPage === totalPages && totalPages > 1) {
      return this._generatePrevButton(currentPage, totalPages);
    }

    // Other pages
    if (currentPage < totalPages) {
      return `${this._generatePrevButton(currentPage, totalPages)}
              ${this._generateNextButton(currentPage, totalPages)}`;
    }

    // Only one page
    return '';
  }

  _generatePrevButton(currentPage, totalPages) {
    return `<button data-goto="${
      currentPage - 1
    }" class="btn--inline pagination__btn--prev">
              <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
              </svg>
              <span>Page ${currentPage - 1}</span>
            </button>`;
  }

  _generateNextButton(currentPage, totalPages) {
    return `<button data-goto="${
      currentPage + 1
    }" class="btn--inline pagination__btn--next">
              <span>Page ${currentPage + 1}</span>
              <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
              </svg>
            </button>`;
  }
}

export default new PaginationView();
