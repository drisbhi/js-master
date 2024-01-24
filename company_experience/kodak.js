
// 1.  Given the arrival time and departure time of trains, I needed to find the number of platforms required.

function findMinimumPlatforms(arrival, departure) { 
    // Sort the arrival and departure times in ascending order 
    arrival.sort((a, b) => a - b); 
    departure.sort((a, b) => a - b); 
    let platformsRequired = 1; // At least one platform is needed 
    let maxPlatforms = 1; let i = 1; // Pointer for arrival times 
    let j = 0; // Pointer for departure times 
    while (i < arrival.length && j < departure.length) { 
      if (arrival[i] <= departure[j]) { // If a train is arriving before or at the same time as one is leaving 
        platformsRequired++; 
         i++; 
        if (platformsRequired > maxPlatforms) { 
          maxPlatforms = platformsRequired; 
        } 
      } else { // If a train is leaving, we free up a platform 
        platformsRequired -- ; 
        j++; 
      } 
    } 
    return maxPlatforms; 
  }

  
  //2. develop a basic note-taking app using CodeSandbox. The task included adding notes,
  //   deleting notes, and displaying all the notes in a list.  follow up question 
  //   how to optimise flatlist and what are the options available to store.

  //3. Difference between useCallback and useMemo.
  //   Functional components and class components.
