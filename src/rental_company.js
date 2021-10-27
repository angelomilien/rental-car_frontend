class RentalCompany {
    constructor({name, location, inventory, id}){
        this.name = name 
        this.location = location
        this.inventory = inventory
        this.id = id
    }

    addRentalNameToSelect(){
        const option = document.createElement('option');
        option.value = this.id;
        option.innerText = this.name;
        rental_company_select_element.appendChild(option)

        // for (const opt of rental_company_select_element.children){
        //     if (opt.innerText === this.name && opt.value !== option.value){
        //         rental_company_select_element.removeChild(option);
        //     }
        // }
    }
}