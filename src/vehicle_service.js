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
                v.addMakeToSelect()
                v.addModelToSelect()
                v.addTransmissionToSelect()
                v.addFuelTypeToSelect()
            }
        })
        .catch()
    }

    createVehicles(){
        const vehicleInfo = {
            vehicle: {
                make: make_element.value,
                model: model_element.value,
                transmission: transmission_element.value,
                fuel_type: fuel_type_element.value,
                door: door_element.value,
                mileage: mileage_element.value,
                year: year_element.value,
                rental_company_id: rental_company_id_element.value
            }
        };
        // const configObject = {
        //     method: 'POST',
        //     headers: {
        //         "Content-Type": "application/json",
        //         Accept: "application/json"
        //     },
        //     body: JSON.stringify(commentInfo)
        // }

        // //debugger
        // fetch(this.port + `/comments`, configObject)
        // .then(response => response.json())
        // .then(data => {
        //     const c = new Comment(data)
        //     c.attachToDom()
        // })
    }


    
}