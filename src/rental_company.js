class RentalCompany {
    constructor({name, location, inventory, id}){
        // debugger
        this.name = name 
        this.location = location
        this.inventory = inventory
        this.id = id
    }

    addToSelect(){
        const option = document.createElement('option');
        option.value = this.id;
        option.innerText = this.name;
        rental_company_select_element.appendChild(option)
    }
}