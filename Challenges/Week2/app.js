//create function
  //control and return statements

function processInput(message)
{

  if (message == "Hello")
  {
    return("Hello World");
}
    else {
      return("You didn't say hello : (");
    }
}

//Prompt user for input and store variable

var userInput;

userInput = prompt();

var response = processInput(userInput);

console.log(response);

processInput(userInput);

//Call function

//Alert user results
