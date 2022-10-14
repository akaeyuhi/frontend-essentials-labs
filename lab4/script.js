document.addEventListener("DOMContentLoaded", async () => {
  const clickControls = new Task1Controls();
  clickControls.addClickListeners();
  const buttons = new ButtonControls();
  buttons.setClickListeners();
  console.log(buttons);
});

class Task1Controls {
  _firstElement;
  _secondElement;
  _firstActiveClass;
  _secondActiveClass;

  constructor() {
    this._firstElement = document.getElementById("first-element");
    this._secondElement = document.querySelector(".second-element");
    this._firstActiveClass = "first-element__active";
    this._secondActiveClass = "second-element__active";
  }

  addClickListeners() {
    this._firstElement.addEventListener(
      "click",
      this._getClickListener(this._firstElement, this._firstActiveClass)
    );
    this._secondElement.addEventListener(
      "click",
      this._getClickListener(this._secondElement, this._secondActiveClass)
    );
  }

  removeClickListeners() {
    this._firstElement.removeEventListener("click");
    this._secondElement.removeEventListener("click");
  }

  _getClickListener(element, toggledClass) {
    return (event) => {
      event.stopPropagation();
      element.classList.toggle(toggledClass);
    };
  }
}

class ButtonControls {
  _imageContainer;
  _toggleElement;
  _zoomInElement;
  _zoomOutElement;
  _resetElement;
  _currentZoom = 1;
  _step = 0.3;

  constructor() {
    this._imageContainer = document.querySelector(".buttons__image__container");
    this._toggleElement = document.querySelector(".buttons__toggle");
    this._zoomInElement = document.querySelector(".buttons__increase");
    this._zoomOutElement = document.querySelector(".buttons__decrease");
    this._resetElement = document.querySelector(".buttons__reset");
  }

  get image() {
    return this._imageContainer.querySelector("img");
  }

  _imageToggle() {
    let image = this.image;
    if (image) {
      this._imageContainer.removeChild(image);
      this._currentZoom = 1;
    } else {
      image = document.createElement("img");
      image.src =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/%D0%9B%D0%B0%D1%82%D0%B8%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%BA%D0%B0%D1%84%D0%B5%D0%B4%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%B8%D0%B9_%D1%81%D0%BE%D0%B1%D0%BE%D1%80_%28%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%29_16.jpg/1280px-%D0%9B%D0%B0%D1%82%D0%B8%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%BA%D0%B0%D1%84%D0%B5%D0%B4%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%B8%D0%B9_%D1%81%D0%BE%D0%B1%D0%BE%D1%80_%28%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%29_16.jpg";
      image.style.transition = "transform 0.2s ease";
      image.style.width = "600px";
      this._imageContainer.appendChild(image);
    }
  }

  _zoomIn() {
    const image = this.image;
    if (!image) return;
    const zoomValue = this._currentZoom + this._step;
    image.style.transform = `scale(${zoomValue})`;
    this._currentZoom += this._step;
  }

  _zoomOut() {
    const image = this.image;
    if (!image) return;
    const zoomValue = this._currentZoom - this._step;
    if (zoomValue <= this.zoomStep) return;
    image.style.transform = `scale(${zoomValue})`;
    this._currentZoom -= this._step;
  }

  _reset() {
    const image = this.image;
    if (!image) return;
    this._currentZoom = 1;
    image.style.transform = `scale(${this._currentZoom})`;
  }

  setClickListeners() {
    this._toggleElement.addEventListener("click", () => this._imageToggle());
    this._zoomInElement.addEventListener("click", () => this._zoomIn());
    this._zoomOutElement.addEventListener("click", () => this._zoomOut());
    this._resetElement.addEventListener("click", () => this._reset());
  }
}
