class Vehicle {
    static all = [];
    // static cont = document.getElementById("comments-cont")
    constructor({model, make, id, transmission, fuel_type, doors, mileage, year, rental_company_id, rental_company}){
        this.model = model
        this.make = make
        this.id = id 
        this.transmission = transmission
        this.fuel_type = fuel_type
        this.doors = doors
        this.mileage = mileage
        this.year = year
        this.rental_company_id = rental_company_id
        this.rental_company= rental_company
        this.element = document.createElement('li');
        this.element.dataset['id'] = id;
        this.element.id = `vehicle-${id}`;
        // this.element.addEventListener('click', this.handleClick);
        Vehicle.all.push(this)
        // debugger
    };

    render(){
        // this.element.innerHTML = `
        // <div data-id="${this.id}">
        // <h2 class="title">${this.title}</h2>
        // <p class="description">${this.description}</p>
        // </div>
        // <button class="edit" data-id=${this.id}>Edit Comment</button>
        // <button class="delete" data-id=${this.id}>X</button>
        // `
        // return this.element
    }
}


// string "make"
//     t.string "model"
//     t.string "transmission"
//     t.string "fuel_type"
//     t.integer "doors"
//     t.integer "mileage"
//     t.integer "year"
//     t.integer "rental_company_id"