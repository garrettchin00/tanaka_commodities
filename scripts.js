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