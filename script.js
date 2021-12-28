let counter = 0;
const myInterval = setInterval( () => {
  counter++;
  switch (counter) {
    case 1:
    console.log("Never gonna give you up...");
    break;
    case 2:
    console.log("Never gonna let you down...");
    break;
    case 3:
    clearInterval( myInterval );
    break;
  }
  
}, 1000);