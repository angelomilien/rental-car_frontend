const port = `http://localhost:3000`;
const vehicleCall = new VehicleApi(port);
const rentalCompanyCall = new RentalCompanyApi(port);
const selectTagColecction = document.getElementsByClassName("enume")
const form = document.getElementById("vehicle-form");
const make_select_element = document.getElementById("vehicle-make");
const model_select_element = document.getElementById("vehicle-model");
const door_select_element = document.getElementById("vehicle-door");
const transmission_select_element = document.getElementById("vehicle-transmission");
const fuel_type_select_element = document.getElementById("vehicle-fuel-type");
const mileage_select_element = document.getElementById("vehicle-mileage");
const year_select_element = document.getElementById("vehicle-year");
const rental_company_select_element = document.getElementById("vehicle-rental-company-id");



vehicleCall.getVehicles()

rentalCompanyCall.getRentalCompanies()


form.addEventListener('submit', handleSubmit)
function handleSubmit(e){
  e.preventDefault();
  vehicleCall.createVehicles()
  // debugger
}