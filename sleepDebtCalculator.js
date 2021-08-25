// expression function to get sleep hours
const getSleepHours =  day => {
    // convert input to lower case
    day = day.toLowerCase();
    switch (day) {
      case 'monday':
      return 8;
      break;
      case 'tuesday':
      return 5;
      break;
      case 'wednesday':
      return 7;
      break;
      case 'thursday':
      return 9;
      break;
      case 'friday':
      return 12;
      break;
      case 'saturday':
      return 8;
      break;
      case 'sunday':
      return 6;
      break;
      default:
      return 'Select a day';
      break;
    }
  };
  
  // get the actual sleep hours
  const getActualSleepHours = () => {
    // total actual sleep hours
    totalSleep = getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday') 
    return totalSleep;
    }
  
  // calculate ideal sleep hours for the whole week
    const getIdealSleepHours = () => {
      const idealHours = 9;
      return idealHours * 7;
    }
  
  // calculate the sleep debt
  
  const calculateSleepDebt = () => {
    actualSleepHours = getActualSleepHours();
    idealSleepHours = getIdealSleepHours();
  
    if (actualSleepHours == idealSleepHours ){
      console.log('Kudos! You got the perfect sleep hours');
    }
    else if( actualSleepHours > idealSleepHours ) {
      console.log(`You got ${actualSleepHours - idealSleepHours} hours more sleep than needed.`);
    }
    else {
      console.log(`You had ${idealSleepHours - actualSleepHours} hours less of sleep. You really need to get some sleep.`)
    }
  };
  
  calculateSleepDebt