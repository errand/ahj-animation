export default class Toggler {
  constructor() {
    this.container = null;
  }

  bindToDOM(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('container is not HTMLElement');
    }
    this.container = container;
  }

  checkBinding() {
    if (this.container === null) {
      throw new Error('GamePlay not bind to DOM');
    }
  }

  init() {
    this.checkBinding();

    document.addEventListener('click', evt => {
      if (evt.target.dataset.toggle === 'collapse') {
        evt.preventDefault();
        const button = evt.target;
        const collapsible = document.querySelector(`#${button.getAttribute('aria-controls')}`);
        const collapsibleInner = collapsible.querySelector('.card');
        if (collapsible.clientHeight) {
          collapsible.style.height = 0;
        } else {
          collapsible.style.height = `${collapsibleInner.clientHeight}px`;
        }
      }
    });
  }
}
