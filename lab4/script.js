document.addEventListener("DOMContentLoaded", async () => {
  const clickControls = new Task1Controls();
  clickControls.addClickListeners();
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
