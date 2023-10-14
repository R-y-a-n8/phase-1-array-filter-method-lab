// Code your solution here
function findMatching(drivers, query) {
    
    query = query.toLowerCase();
  
   
    return drivers.filter(driver => driver.toLowerCase() === query);
  }


  function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.startsWith(query));
  }

   
  function matchName(drivers, query) {
    return drivers.filter(driver => driver.name === query);
  }