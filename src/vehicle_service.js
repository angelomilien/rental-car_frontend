class VehicleApi {
    constructor(port){
        this.port = port
    }

    getVehicles(){
        fetch(this.port + `/vehicles`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
    }
}