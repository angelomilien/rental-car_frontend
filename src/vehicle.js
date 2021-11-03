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
        this.element.addEventListener('click', this.handleClick);
        Vehicle.all.push(this)
    };

    render(){
        this.element.innerHTML = `
        <div>
           <h2 class="company_name">${ this.rental_company.name}</h2>
           <h3 class="make">${ this.make}</h3>
           <p class="model:"><strong>Model: </strong> ${this.model}</p>
           <p class="transmission"><strong>transmission: </strong> ${this.transmission}</p>
           <p class="fuel_type"><strong>fuel type: </strong>${this.fuel_type}</p>
           <div class="car-div"data-id="${this.id}">
                <div><strong>Doors: </strong> <p class="doors" style="display: inline-flex">${this.doors}</p> </div>
                <div><strong>Mileage: </strong><p class="mileage" style="display: inline-flex">${this.mileage}</p></div>
                <div><strong>Year: </strong><p class="year" style="display: inline-flex"> ${this.year}</p></div>
           </div>
           <button class="edit" data-id=${this.id}>Edit Vehicle</button>
           <button class="delete" data-id=${this.id}>X</button>
        </div>`
        this.element.style.display = "inline-flex";
        this.element.style.margin = "10px 80px 20px 10px";
        return this.element
    }

    handleClick = (e) => {
        // debugger
        if(e.target.innerText === "Edit Vehicle"){
            // console.log(e.target)
            e.target.innerText = "Save Vehicle"
            this.createEditForm()
        }else if(e.target.innerText === "X"){
            // console.log(e.target)
            vehicleCall.deleteVehicle(e)
        }else if(e.target.innerText === "Save Vehicle"){
            // console.log("save works")
            e.target.innerText = "Edit Vehicle"
            this.updateVehicleInfo()
        }
    }


    createEditForm(){
        const div = this.element.querySelector('div').children[5];
        for (const element of div.children){
            const p = element.children[1]
            const inputValue = p.innerText;
            const  name = p.classList[0];
            p.outerHTML = `<input type="text" class="edit-${name}" value="${inputValue}" style="display: inline-flex"/><br><br>`
        }
    }


    updateVehicleInfo(){
        const div = this.element.children[0].children[5]
        this.doors = div.querySelector(".edit-doors").value;
        this.mileage = div.querySelector(".edit-mileage").value;
        this.year = div.querySelector(".edit-year").value;
        vehicleCall.updateVehicle(this)
    }

    setToDom(){
        Vehicle.cont.appendChild(this.render())
    }

    addOptionToSelect(){
        for(const select of selectTagColecction){

            const option = document.createElement('option');
            option.id  = this.id;
            option.innerText = this[select.name];
            select.appendChild(option);

            for (const opt of select.children){
                if (opt.innerText === this[select.name] && opt.id !== option.id){
                    select.removeChild(option);
                }
            }
        }
    }
}


// addFuelTypeToSelect(){
//     const option = document.createElement('option');
//     option.id = this.id
//     option.value = this.fuel_type;
//     option.innerText = this.fuel_type;
//     fuel_type_select_element.appendChild(option)

//     for (const opt of fuel_type_select_element.children){
//         if (opt.innerText === this.fuel_type && opt.id !== option.id){
//             fuel_type_select_element.removeChild(option);
//         }
//     }
// }