class VehicleApi {
    constructor(port){
        this.port = port
    }

    getVehicles(){
        fetch(this.port + `/vehicles`)
        .then(response => response.json())
        .then(data => {
            for(const vehicle of data){
                let c = new Vehicle(vehicle)
                c.setToDom()
            }
        })
        .catch()
    }

    
}