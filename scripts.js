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

document.getElementById('playBtn').addEventListener('click', function() {
    // 1. Get user input
    let userGuess = parseInt(document.getElementById('userGuess').value);
    let resultMessage = document.getElementById('resultMessage');
    let displayUser = document.getElementById('displayUser');
    let displayRandom = document.getElementById('displayRandom');

    // 2. Validate input
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        resultMessage.innerHTML = "Please enter a number between 1 and 10.";
        resultMessage.style.color = "white";
        return;
    }

    // 3. Generate random number 1-10
    let randomNum = Math.floor(Math.random() * 10) + 1;

    // 4. Display numbers
    displayUser.innerHTML = userGuess;
    displayRandom.innerHTML = randomNum;

    // 5. Compare and provide feedback
    if (userGuess === randomNum) {
        resultMessage.innerHTML = "You win!";
        resultMessage.style.color = "white";
    } else {
        resultMessage.innerHTML = "You did not win. Try again!";
        resultMessage.style.color = "black";
    }
});
