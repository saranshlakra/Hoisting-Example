/* -------Hoisting Example-------
  hoisting means every declared variable and function will be shifted to the top 
  of the scope.
  for example: you can call the function before execution  */

// example using function.
  function sum(x,y){
      add = x+y;
      console.log(add);
  }
  sum(10,15); // function called after declaration.

  // or

sum(10,5); // function called before declaration.
  function sum(x,y){
      add = x+y;
      console.log(add);
  }


  // example using variable declaration.

  a = 4;
  b = 4;
  addition = a+b;
  console.log(addition);
 var a,b;

 c = 80;
 console.log(c);
 var c;

