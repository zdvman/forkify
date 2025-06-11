import View from './view.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg';

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet found. Please add some!';
  _message = 'Start by adding some bookmarks. Have fun!';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    return `${this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('')}
    `;
  }
}

export default new BookmarksView();
