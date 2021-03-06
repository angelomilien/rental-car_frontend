class VehicleApi {

    constructor(port){
        this.port = port
    }

    getVehicles(){
        fetch(this.port + `/vehicles`)
        .then(response => response.json())
        .then(data => {
            for(const vehicle of data){
                let v = new Vehicle(vehicle)
                v.setToDom()
                v.addOptionToSelect()
            }
        })
        .catch()
    }


    createVehicles(){
        const vehicleInfo = {
            vehicle: {
                make: make_select_element.value,
                model: model_select_element.value,
                transmission: transmission_select_element.value,
                fuel_type: fuel_type_select_element.value,
                doors: door_select_element.value,
                mileage: mileage_select_element.value,
                year: year_select_element.value,
                rental_company_id: rental_company_select_element.value
   
            }
    
        };
        const configObject = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(vehicleInfo)
        }

        fetch(this.port + `/vehicles`, configObject)
        .then(response => response.json())
        .then(data => {
            const v = new Vehicle(data)
            v.setToDom()
            form.reset()
        })
    }
    

    updateVehicle(vehicle){
        const {doors, mileage, year, id} = vehicle

        const vehicleInfo = {
            doors, 
            mileage,
            year
        }

        const configObject = {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(vehicleInfo)
        }
        fetch(`${this.port}/vehicles/${id}`, configObject)
        .then( () => {vehicle.render()})
    }


    deleteVehicle(e){
        const id = e.target.dataset.id
        e.target.parentElement.parentElement.remove()
        fetch(`${this.port}/vehicles/${id}`, {method: 'DELETE'})
        .then(response => response.json())
        .then(json => alert(json.message))
    }


    
}