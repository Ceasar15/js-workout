// menu object 
const menu = {
    _courses: {
        _appetizers: [],
        _mains: [],
        _desserts: [],
        // getter fucntion for apppetizers
        get appetizers() {
            return this._appetizers;
        },
        // setter function for appetizers
        set appetizers(appetizers) {
            this._appetizers = appetizers;
        },
        // getter function for main
        get mains() {
            return this._mains;
        },
        // setter function for mains
        set mains(mains) {
            this._mains = mains;
        },
        // getter function for desserts
        get desserts() {
            return this._desserts;
        },
        // setter function for desserts
        set desserts(desserts) {
            this._desserts = desserts;
        },
    },
    // getter function to return object
    get courses() {
        return {

            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts,
        }
    },
    // create dish method
    addDishToCourse: function (courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice,
        };
        
        this._courses[courseName].push(dish);

    },
    // get randome dish from course 
    getRandomDishFromCourse: function (courseName) {
        let dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        
        return dishes ? dishes[randomIndex]: null;
    },

    // generate random meal 
    generateRandomMeal: function () {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const desserts = this.getRandomDishFromCourse('desserts');

        if (!appetizer) {
          return 'No appetizer available';
        }
        if (!main) {
          return 'No main dish is available';
        }
        if (!desserts) {
          return 'No dessert is available';
        }
        const totalPrice = appetizer.price + main.price + desserts.price;

        // return string
        return `Your main dish is ${main.name}, appetizer is ${appetizer.name}, dessert is ${desserts.name}. The total price is $${totalPrice} `; 
    }
};


menu.addDishToCourse('appetizers', 'Orange Drink', 43.9);
menu.addDishToCourse('mains', 'Jollof Rice', 47.9);
menu.addDishToCourse('desserts', 'Kelewele', 49.9);
menu.addDishToCourse('appetizers', 'Apple Drink', 41.9);
menu.addDishToCourse('mains', 'Fried Rice', 47.9);
menu.addDishToCourse('desserts', 'Abotsi', 44.9);
menu.addDishToCourse('appetizers', 'Mango Drink', 46.4);
menu.addDishToCourse('mains', 'Waakye Rice', 46.8);
menu.addDishToCourse('desserts', 'Brad', 46.9);
menu.addDishToCourse('appetizers', 'Date Drink', 46.5);
menu.addDishToCourse('mains', 'Fufu Rice', 46.9);
menu.addDishToCourse('desserts', 'Brukina', 45.9);

let meal = menu.generateRandomMeal()
console.log(meal);