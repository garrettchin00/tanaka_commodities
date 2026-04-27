(function(){
	let now = new Date();
	let span = document.querySelector("footer span");
	span.innerHTML = now.getFullYear();
})();

let messages = {
  success: "The form was submitted successfully",
  failure: "There was an issue when trying to submit the form, please correct your errors and try again",
  nonsense: "Beep boop beep. I am a computer",
  hello: "Hello, human person!",
  termsMsg: "You must agree to the terms and conditions before joining",
  uNameMsg: "User name must be at least six characters and can include uppercase or lowercase letters, numbers, and @ - \ _ !",
  emailMsg: "Please enter a valid email address",
  zipMsg: "Please enter a valid zip code",
};

let newUser = {
  userName: "",
  userEmail: "",
  userZipCode: "",
  userCity: "",
  userCountry: "",
  userPhone: "",
  userAddress: "",
  
  getUser: function(){
    return
    `<strong>User Name:</strong> ${this.userName}<br>
    <strong>Email:</strong> ${this.userEmail}<br>
    <strong>Zip Code:</strong> ${this.userZipCode}<br>
    <strong>City:</strong> ${this.userCity}<br>
    <strong>Country:</strong> ${this.userCountry}<br>
    <strong>Phone:</strong> ${this.userPhone}<br>
    <strong>Address:</strong> ${this.userAddress}`;
  }
};

// validate form
function validateForm(event){
  // prevent the form from submitting while we perform validation
  event.preventDefault();
  
  // the inputs
  let uName = document.getElementById("userName");
  let email = document.getElementById("email");
  let zipCode = document.getElementById("zipCode");
  let city = document.getElementById("city");
  let country = document.getElementById("country");
  let phone = document.getElementById("phone");
  let address = document.getElementById("address");
  let fieldset = document.querySelector("fieldset");
  let agree = document.getElementById("agree");
  
  // this is where we'll display a message if they haven't agreed to the terms
  let terms = document.getElementById("termsError");
  // containers for display to user of their submission and any error messages
  let confirm = document.getElementById("confirm");
  
  // the regular expressions
  let uNameRegex = /^(?=.*\d+)(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*[@!_.-]+).{6,}$/g;
  let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]{2,3})$/;
  let zipRegex = /^\d{5}$/;
  let cityRegex = /^[a-zA-Z\s]+$/;
  let countryRegex = /^[a-zA-Z\s]+$/;
  let phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  let addressRegex = /^[a-zA-Z0-9\s.,#-]+$/;
  
  // remove the border class given to inputs on previous submit of error
  uName.classList.remove("error");
  email.classList.remove("error");
  zipCode.classList.remove("error");
  city.classList.remove("error");
  country.classList.remove("error");
  phone.classList.remove("error");
  address.classList.remove("error");
  agree.classList.remove("error");
  
  // re-hide the output paragraph
  confirm.classList.add("hidden");
  
  // hide any previous error messages
  uName.nextElementSibling.classList.add("hidden");
  email.nextElementSibling.classList.add("hidden");
  zipCode.nextElementSibling.classList.add("hidden");
  city.nextElementSibling.classList.add("hidden");
  country.nextElementSibling.classList.add("hidden");
  phone.nextElementSibling.classList.add("hidden");
  address.nextElementSibling.classList.add("hidden");
  terms.classList.add("hidden");
  confirm.innerHTML = "";

  // variable to track whether or not the form is valid
  let isValid = true;
 
  // ensure that username matches pattern, give feedback to user if not
  if(uName.value === "" || uName.value.length < 6 || !(uNameRegex.test(uName.value))){
    // change our boolean flag because the form is not valid
    isValid = false; 
    // add error class to input
    uName.classList.add("error");
    // display error message for user about this input
    uName.nextElementSibling.classList.remove("hidden");
    // use the message from our map to log an error to the console
    console.error(messages["uNameMsg"]);
  }else{ // this means that we have valid input on this data and can add it to our object
    // add this property to our object
    newUser.userName = uName.value
  }
  
  
  // ensure that email address is correct/matches pattern
  if(email.value === "" || !(emailRegex.test(email.value))){
    // change our boolean flag because the form is not valid
    isValid = false;
    // add error class to input
    email.classList.add("error");
    // add error message for user about this input - "Please enter a valid email address";
    email.nextElementSibling.classList.remove("hidden");
    // use the message from our map to log an error to the console
    console.error(messages["emailMsg"]);
  }else{ // this means that we have valid input on this data
    // add this property to our object
    newUser.userEmail = email.value;
  }

  // ensure that the zip code is five digits only
  if(zipCode.value === "" || !(zipRegex.test(zipCode.value))){
    // change our boolean flag because the form is not valid
    isValid = false;
    // add error class to input
    zipCode.classList.add("error");
    // add error message for user about this input - "Please enter a valid zip code";
    zipCode.nextElementSibling.classList.remove("hidden");
    // use the message from our map to log an error to the console
    console.error(messages["zipMsg"]);
  }else{ // this means that we have valid input on this data
    // add this property to our object
    newUser.userZipCode = zipCode.value;
  }
  
  // ensure that the city is valid
  if(city.value === "" || !(cityRegex.test(city.value))){
    // change our boolean flag because the form is not valid
    isValid = false;
    // add error class to input
    city.classList.add("error");
    // add error message for user about this input - "Please enter a valid city";
    city.nextElementSibling.classList.remove("hidden");
    // use the message from our map to log an error to the console
    console.error(messages["cityMsg"]);
  }else{ // this means that we have valid input on this data
    // add this property to our object
    newUser.userCity = city.value;
  }

  // ensure that the country is valid
  if(country.value === "" || !(countryRegex.test(country.value))){
    // change our boolean flag because the form is not valid
    isValid = false;
    // add error class to input
    country.classList.add("error");
    // add error message for user about this input - "Please enter a valid country";
    country.nextElementSibling.classList.remove("hidden");
    // use the message from our map to log an error to the console
    console.error(messages["countryMsg"]);
  }else{ // this means that we have valid input on this data
    // add this property to our object
    newUser.userCountry = country.value;
  }

  // ensure that the phone number is valid
  if(phone.value === "" || !(phoneRegex.test(phone.value))){
    // change our boolean flag because the form is not valid
    isValid = false;
    // add error class to input
    phone.classList.add("error");
    // add error message for user about this input - "Please enter a valid phone number";
    phone.nextElementSibling.classList.remove("hidden");
    // use the message from our map to log an error to the console
    console.error(messages["phoneMsg"]);
  }else{ // this means that we have valid input on this data
    // add this property to our object
    newUser.userPhone = phone.value;
  }

  // ensure that the address is valid
  if(address.value === "" || !(addressRegex.test(address.value))){
    // change our boolean flag because the form is not valid
    isValid = false;
    // add error class to input
    address.classList.add("error");
    // add error message for user about this input - "Please enter a valid address";
    address.nextElementSibling.classList.remove("hidden");
    // use the message from our map to log an error to the console
    console.error(messages["addressMsg"]);
  }else{ // this means that we have valid input on this data
    // add this property to our object
    newUser.userAddress = address.value;
  }

    // if the user doesn't agree to terms and conditions, display a message 
  if(!agree.checked){
    // change our boolean flag because the form is not valid

    // add the error class to the input
    agree.classList.add("error");
    // show the error message for the checkmark
    terms.classList.remove("hidden");
    // use the map to add an error message to the console
    console.error(messages["termsMsg"]);
  }

    // if the form is valid, submit it and add the user info to the object
  if(isValid){

    // call the display submission function to display the user object on the screen (you'd also actually submit here)
    displaySubmission(); 

    // You'd also add the code to actually submit to the server here in cases where you have a server to connect to - we are not including that in this activity
    // document.getElementById("newAcct").submit();

    // reset values
    uName.value = "";
    email.value = "";
    zipCode.value = "";
    agree.checked = false;

    // clear out any error messages
    uName.nextElementSibling.classList.add("hidden");
    email.nextElementSibling.classList.add("hidden");
    zipCode.nextElementSibling.classList.add("hidden");
    city.nextElementSibling.classList.add("hidden");
    country.nextElementSibling.classList.add("hidden");
    phone.nextElementSibling.classList.add("hidden");
    address.nextElementSibling.classList.add("hidden");
    agree.nextElementSibling.classList.add("hidden");

    // display the success message from the map to the user in an alert
    window.alert(messages["success"]);
  }
}

function displaySubmission(){
  // container to display the user object
  let confirm = document.getElementById("confirm");
  
  // un-hide the container by rmoving the hidden class
  confirm.classList.remove("hidden");
  
  // reset text in the confirm paragraph to ready for new output
  confirm.innerHTML = "";
  
  // display the user's input to them on the screen (add your user's info to the output below)
  confirm.innerHTML = "<strong class=\"large\">Your Information:</strong><br>" + newUser.getUser();
}

// testing the map functionality
function mapMessages(){
  // the span to output the messages/tests
  let mapTests = document.getElementById("mapTesting");
  
  // variable to hold the HTML string we build of output
  let html = "";
  
  // the maps object variable name is "messages" let's test some methods on that object
  // first, how about we return and display the keys with console.log
  let messageKeys = Object.keys(messages);
  console.log(messageKeys);
  
  // we can determine whether an element is in the map by checking for a specific key as well. 
  // let's look for a key named "success" and log it to the console if it's in the map
  if("success" in messages){
    console.log("success is in the messages map")
  }
  
  // we can also remove key/value pairs from the map
  // let's confirm that the "nonsense" key is in the map, then remove it and its
  // associated data from the map
  if("nonsense" in messages){
    console.log("There is nonsense in the map");
    delete messages["nonsense"]; // removes nonsense from map
    console.log(messages);
  }
  
  // we can check again for that message to confirm if we want too
  if("nonsense" in messages){
    console.log("whoops, thought we deleted that");
  }else{
    console.log("There is no nonsense in the map");
  }
}

// event listeners
document.getElementById("newAcct").addEventListener("submit", validateForm);
// call our map function
mapMessages();

// Return a random number between min and max (inclusive).
//this function is from your book
function getRandomNumber(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

//function to run all math object functions on click
function mathMethods(evt){
  //prevent the default submit action from happening
  evt.preventDefault();
  
  //an array of numbers for the methods that work on a collection
  let numbers = [12, 35, -100, -1, 7];
  
  //read in the two entered numbers and save each to a variable
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  
  //let's add our two numbers to the numbers array also
  numbers.push(num1, num2);
  
  //variable to build the string display output to the screen
  let output = "";
  
  //variable to store the ol where we'll display output
  let outputList = document.getElementById("results");
  
  //variable to store the section where we'll output the result of the array methods
  let arrayOutput = document.getElementById("arrayMethods");
  
  //basic error checking to make sure that the form has two numerical inputs
  if(num1 === "" || num2 === "" || isNaN(num1) || isNaN(num2)){
    output = `<p class="error">Please enter numercial values in both form inputs and submit again</p>`;
  }else{
  
    //absolute value TODO output/call
    output += `<li>The absolute value of ${num1} is ${Math.abs(num1)}</li>`;

    //ceiling TODO output/call
    output += `<li>The ceiling value of ${num2} is ${Math.ceil(num2)}</li>`;

    //cosine TODO output/call
    output += `<li>The cosine value of ${num1} is ${Math.cos(num1)}</li>`;

    //floor TODO output/call
    output += `<li>The floor value of ${num2} is ${Math.floor(num2)}</li>`;

    //logarithm TODO output/call
    output += `<li>The logarithm value of ${num1} is ${Math.log(num1)}</li>`;

    //power TODO output/call
    output += `<li>${num1} raised to the power of ${num1} is ${Math.pow(num1, num2)}</li>`;

    //round TODO output/call
    output += `<li>${num1} rounded is ${Math.round(num1)}</li>`;

    //sine TODO output/call
    output += `<li>The sine value of ${num2} is ${Math.sin(num2)}</li>`;

    //square root TODO output/call
    output += `<li>The square root of ${num1} is ${Math.sqrt(num1)}</li>`;

    //tangent TODO output/call
    output += `<li>The tangent value of ${num2} is ${Math.tan(num2)}</li>`;

    //random number generator (between number 1 and number 2)
    if(num1 < num2){
      //TODO get random number and display in output
      let newRandom = getRandomNumber(parseInt(num1), parseInt(num2));
      output += `<li>A random number between ${num1} and ${num2} is ${newRandom}</li>`;
    }else{
     //TODO get random number and display in output
      let newRandom = getRandomNumber(parseInt(num2), parseInt(num1));
      output += `<li>A random number between ${num2} and ${num1} is ${newRandom}</li>`;
    }

    //display the results from the previous math methods to the screen
      outputList.innerHTML = output;

        //these are the methods we'll use with the array we have above
      //we'll let the user know that first
      output = `<h4>These methods are run on the numbers array, which contains these values:</h4>`;
      //display the values in the numbers array
      numbers.forEach(function(number, index){
        output += `At index ${index} the value is ${number}<br>`;
      });

      //max value of the array of numbers
      //the three dots are called the spread operator and they allow us to pass the array to the max and min methods without needing to use more complex syntax because the array doens't have a lot of elements
    //TODO - find and display the max value in the numbers array
      output += `<ol><li>The max value of the numbers array is ${Math.max(...numbers)}</li>`;

      //min value of the array of numbers
      //TODO - find and display the min value in the numbers array
      output += `<li>The min value of the numbers array is ${Math.min(...numbers)} </li></ol>`;
    }
    //display the output string for the array methods (or errors from missing input values) in the correct place on the page
      arrayOutput.innerHTML = output;
  }

//function for the Snake Eyes Game
function snakeEyes(){
  //get the two spans where we'll display the numbers, and the one for the message
  let dieDisplay1 = document.getElementById("random1");
  let dieDisplay2 = document.getElementById("random2");
  let gameMessage = document.getElementById("snakeEyesMsg");
  
  //generate two random numbers between 1 and six (like rolling dice)
  let die1 = getRandomNumber(1, 6);
  let die2 = getRandomNumber(1, 6);
  
  //display those numbers to the screen
  dieDisplay1.innerHTML = die1;
  dieDisplay2.innerHTML = die2;
  
  //see if they match, then display winning message
  if(die1 === 1 && die2 === 1){
    gameMessage.textContent = "Snake Eyes! You Win!"
  }else{
    gameMessage.textContent = "You lose. Try Again";
  }
}

//attach an event listener to the form button on submit to call the function
document.getElementById("mySubmit").addEventListener("click", mathMethods);

//attach an event listener to the button for the game
document.getElementById("gamePlay").addEventListener("click", snakeEyes);