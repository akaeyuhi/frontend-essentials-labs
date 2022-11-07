class DataLoader {
  _rootElement = null;
  _items = [];

  constructor(rootElement) {
    this._rootElement = rootElement;
  }

  async loadData() {
    try {
      const result = await (await fetch("https://randomuser.me/api")).json();
      const { picture, gender, name, city, postcode, coordinates } = result;
      const dto = new UserDto({
        picture,
        gender,
        name,
        city,
        postcode,
        coordinates,
      });
      return dto;
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  }

  getMarkup(data) {
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
