let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./library.js');

// Write your code below:

async function serveDinnerAgain(){

  let foodArray = await Promise.all([steamBroccoli(), cookRice(),  bakeChicken(), cookBeans()]);
    console.log(foodArray);
  let vegetable = foodArray[0];
  let starch =  foodArray[1];
  let protein =  foodArray[2];
  let side =  foodArray[3];


try {
    let vegetable = await vegetablePromise;
  } catch (e) {
    console.log(e.message);
  }

  console.log(`Dinner is served. We're having ${vegetable}, ${starch}, ${protein}, and ${side}.`);
  
}

serveDinnerAgain()

