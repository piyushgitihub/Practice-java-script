// Immediately Invoked Function Expressions


(function chai(){ //named IIFE
    console.log(`DB CONNECTED`);
})();

 ( (name) => {
    console.log(`DB CONNECTEDTWO ${name}`);
 } )('piyush');

//chai()