class DataLoader {
  _rootElement = null;
  _items = [];
  _loaderElement = null;

  constructor(rootElement, loaderElement) {
    this._rootElement = rootElement;
    this._loaderElement = loaderElement;
    this._loaderElement
      .querySelector(".load__button")
      .addEventListener("click", async () => await this._onClickHandler());
  }

  async _loadData() {
    try {
      const result = await (await fetch("https://randomuser.me/api")).json();
      const { picture, gender, name, location } = result.results.pop();
      const dto = new UserDto({
        picture: picture.large,
        gender,
        name: name.first + " " + name.last,
        city: location.city,
        postcode: location.postcode,
        coordinates: `latitude: ${location.coordinates.latitude}
        longitude: ${location.coordinates.longitude}
        `,
      });
      this._items.push(dto);
      return dto;
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  }

  async _loadTableItems(count) {
    for (let i = 0; i < count; i++) {
      await this._loadData();
    }
    this._setSuccess();
  }

  async renderResult(count) {
    await this._loadTableItems(count);
    for (const item of this._items) {
      const newElement = document.createElement("div");
      newElement.innerHTML = this._getMarkup(item);
      this._rootElement.appendChild(newElement);
    }
    this._items = [];
  }

  async _onClickHandler() {
    if (
      !this._loaderElement
        .querySelector(".load__success")
        .classList.contains("display")
    )
      this._setSuccess();
    await this.renderResult(5);
  }

  _setSuccess() {
    this._loaderElement
      .querySelector(".load__success")
      .classList.toggle("display");
  }

  _getMarkup(data) {
    return `
      <div class="result__item">
         <img src=${data.picture} alt="image" class="result__image">
         <p>Gender: ${data.gender}</p>
         <p>Name: ${data.name}</p>
         <p>City: ${data.city}</p>
         <p>Postcode: ${data.postcode}</p>
         <p>Coordinates: ${data.coordinates}</p>
      </div>`;
  }
}
