class UserDto {
  picture = "";
  gender = "";
  name = "";
  city = "";
  postcode = 0;
  coordinates = 0;

  constructor(inputData) {
    this.picture = inputData.picture;
    this.gender = inputData.gender;
    this.name = inputData.name;
    this.city = inputData.city;
    this.postcode = inputData.postcode;
    this.coordinates = inputData.coordinates;
  }
}
