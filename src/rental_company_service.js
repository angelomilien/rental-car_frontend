class RentalCompanyApi {
    constructor(port){
        this.port = port
    }

    getRentalCompanies(){
        fetch(this.port + `/rental_companies`)
        .then(response => response.json())
        .then(data => {
            for(const rentalCompany of data){
                let r = new RentalCompany(rentalCompany)
                r.addRentalNameToSelect()
            }
        })
        .catch()
    }
}