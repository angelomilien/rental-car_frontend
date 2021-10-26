class Vehicle {
    static all = [];
    static cont = document.getElementById("vehicles-cont");

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
    };

    render(){
        this.element.innerHTML = `
        <div data-id="${this.id}">
        <h2 class="company_name">${this.rental_company.name}</h2>
        <h3 class="make">${this.make}</h3>
        <p class="model"><strong>Model</strong> ${this.model}</p>
        <p class="transmission"><strong>transmission:</strong> ${this.transmission}</p>
        <p class="fuel_type"><strong>fuel type: </strong>${this.fuel_type}</p>
        <p class="doors"><strong>Doors:</strong>${this.doors}</p>
        <p class="mileage"><strong>Mileage:</strong>${this.mileage}</p>
        <p class="year"><strong>Year:</strong> ${this.year}</p>

        <button class="edit" data-id=${this.id}>Edit Vehicle</button>
        <button class="delete" data-id=${this.id}>X</button>
        </div>
        `
        this.element.style.display = "inline-flex";
        this.element.style.margin = "10px 50px 20px 10px";
        return this.element
    }

    setToDom(){
        Vehicle.cont.appendChild(this.render())
    }
    setOption(make){
        // debugger
        select = this.document.getElementById("make");
   
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