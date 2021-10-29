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


//     createVehicles(){
//         debugger
//         const vehicleInfo = {
//             vehicle: {
//                 make: make_select_element.value,
//                 model: model_select_element.value,
//                 transmission: transmission_select_element.value,
//                 fuel_type: fuel_type_select_element.innerText,
//                 door: door_select_element.value,
//                 mileage: mileage_select_element.value,
//                 year: year_select_element.value,
//                 rental_company__id: rental_company_select_element.value
                
//             }
//         };
// //  debugger

//         const configObject = {
//             method: 'POST',
//             headers: {
//                 "Content-Type": "application/json",
//                 Accept: "application/json"
//             },
//             body: JSON.stringify(vehicleInfo)
//         }

//         //debugger
//         fetch(this.port + `/vehicles`, configObject)
//         .then(response => response.json())
//         .then(data => {
//             const v = new Vehicle(data)
//             v.setToDom()
//         })
//     }


    
}