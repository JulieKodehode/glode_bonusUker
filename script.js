console.log("Hello");

// Task one
function toggleTheme() {
	// Changing the color
	let section = document.querySelector("#task_one_section");
	section.classList.toggle("task_one_dark");

	// Checking if button activated
	console.log("Button clicked?");
}
// Adding event listener to activate function
let button = document.querySelector("#task_one_button");
button.addEventListener("click", toggleTheme);

// Task two
function toggleIcon() {
	// Changing the color
	let section = document.querySelector("#task_two_section");
	section.classList.toggle("task_two_dark");

	// Changing the icon
	let icon = document.querySelector("#task_two_icon");
	icon.classList.toggle("task_two_moonIcon");

	// Checking if button activated
	console.log("Button clicked?");
}
// Adding event listener to activate function
let icon = document.querySelector("#task_two_icon");
icon.addEventListener("click", toggleIcon);

// Task three
let task_three_image = document.querySelector("#task_three_image");
// Adding event listener with an arrow function to activate
task_three_image.addEventListener("click", () => {
	// Making the image bigger
	task_three_image.classList.toggle("task_three_image_big");

	// Checking if button activated
	console.log("Button clicked?");
});

// Task four
let task_four_images = document.querySelectorAll(".task_four_image");
// Loop through each element in the NodeList using a for loop
for (let index = 0; index < task_four_images.length; index++) {
	let task_four_image = task_four_images[index];

	// Adding event listener with an arrow function to activate
	task_four_image.addEventListener("click", () => {
		// Making the clicked image bigger
		task_four_image.classList.toggle("task_four_image_big");

		// Checking if button activated
		console.log("Button clicked?");
	});
}

// Task five// Task five
let task_five_form = document.querySelector("#task_five_form");

function submitName() {
	// Prevent the default form submission
	// OBS: "event" is deprecated, still works, but the strike through means its not necessary the correct use. the shorthand "e" is working, but I like using fullterm.
	event.preventDefault();

	// Get the input value
	let task_five_inputName = document.querySelector("#task_five_inputName").value;
	console.log(task_five_inputName);

	let task_five_p = document.querySelector("#task_five_p");
	task_five_p.textContent = task_five_inputName;

	// BONUS:
	// Check if the task_five_inputName is empty or undefined, and define a response for either options.
	// if (!task_five_inputName) {
	// 	console.log("Please write a name!");

	// 	// Display the input value in the paragraph with id task_five_p
	// 	let task_five_p = document.querySelector("#task_five_p");
	// 	task_five_p.textContent = "Vennligst skriv et navn";
	// } else {
	// 	console.log("Gosh what a name!");

	// 	// Display the input value in the paragraph with id task_five_p
	// 	let task_five_p = document.querySelector("#task_five_p");
	// 	task_five_p.textContent = "Navnet ditt er: " + task_five_inputName;
	// }
}

// Add event listener to the form
let task_five_inputSubmit = document.querySelector("#task_five_inputSubmit");
task_five_inputSubmit.addEventListener("click", submitName);

// Task six
let task_six_form = document.querySelector("#task_six_form");

function submitForm() {
	// Prevent the default form submission
	// OBS: "event" is deprecated, still works, but the strike through means its not necessary the correct use. the shorthand "e" is working, but I like using fullterm.
	event.preventDefault();

	// Get input values to all the inputs
	let task_six_inputName = document.querySelector("#task_six_inputName").value;
	console.log(task_six_inputName);

	let task_six_inputEpost = document.querySelector("#task_six_inputEpost").value;
	console.log(task_six_inputEpost);

	let task_six_inputPassword = document.querySelector("#task_six_inputPassword").value;
	console.log(task_six_inputPassword);

	let task_six_inputPasswordReminder = document.querySelector(
		"#task_six_inputPasswordReminder"
	).value;
	console.log(task_six_inputPasswordReminder);

	// Get the ul element
	let task_six_ul = document.querySelector("#task_six_ul");

	// Create li elements for each input
	let nameLi = document.createElement("li");
	nameLi.textContent = task_six_inputName;

	let epostLi = document.createElement("li");
	epostLi.textContent = task_six_inputEpost;

	let passwordLi = document.createElement("li");
	passwordLi.textContent = task_six_inputPassword;

	let reminderLi = document.createElement("li");
	reminderLi.textContent = task_six_inputPasswordReminder;

	// Append the li elements to the ul
	task_six_ul.appendChild(nameLi);
	task_six_ul.appendChild(epostLi);
	task_six_ul.appendChild(passwordLi);
	task_six_ul.appendChild(reminderLi);
}

// Add event listener to the form
let task_six_inputSubmit = document.querySelector("#task_six_inputSubmit");
task_six_inputSubmit.addEventListener("click", submitForm);

// Task seven
// HENT
let task_seven_burgerButton = document.querySelector("#task_seven_burgerButton");
let task_seven_ul = document.querySelector("#task_seven_ul");

// MODIFISER
function task_seven_dropDownMenu() {
	// Is button clicked?
	console.log("Er bildet/iconet/knappen trykket på???");

	// Activate new class
	task_seven_ul.classList.toggle("task_seven_navShow");
}

// SEND
task_seven_burgerButton.addEventListener("click", task_seven_dropDownMenu);

// Task eight
// HENT
let task_eight_ul = document.querySelector("#task_eight_ul");
let task_eight_burgerButton = document.querySelector("#task_eight_burgerButton");

// MODIFISER
function task_eight_dropDownMenu() {
	// Is button clicked?
	console.log("NOE SKJER MED KNAPPEN!!!!");

	// Activate new class
	task_eight_ul.classList.toggle("task_eight_navHidden");
}

// SEND
task_eight_burgerButton.addEventListener("click", task_eight_dropDownMenu);
