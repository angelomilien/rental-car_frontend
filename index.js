const port = `http://localhost:3000`;
const vehicleCall = new VehicleApi(port);
// const villianCall = new VillianService(port);
const form_element = document.getElementById("vehicle-form");
const make_element = document.getElementById("vehicle-make");
const model_element = document.getElementById("vehicle-model");
const door_element = document.getElementById("vehicle-door");
const transmission_element = document.getElementById("vehicle-transmission");
const fuel_type_element = document.getElementById("vehicle-fuel-type");
const mileage_element = document.getElementById("vehicle-mileage");
const year_element = document.getElementById("vehicle-year");
const rental_company_id_element = document.getElementById("vehicle-rental-company_id");


vehicleCall.getVehicles()
// villianCall.getVillians()
form.addEventListener('submit', handleSubmit)

function handleSubmit(e){
  e.preventDefault();
  vehicleCall.createVehicles()
//   debugger
}