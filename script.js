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

// Task five
let task_five_form = document.querySelector("#task_five_form");

function submitName() {
	// Prevent the default form submission
	// OBS: "event" is deprecated, still works, but the strike through means its not necessary the correct use. the shorthand "e" is working, but I like using fullterm.
	event.preventDefault();

	// Get the input value
	let task_five_inputName = document.querySelector("#task_five_inputName").value;
	console.log("Navnet ditt er: " + task_five_inputName);

	// BONUS: (If no statement checks. The statement in else is enough by itself)
	// Check if the task_five_inputName is empty or undefined, and define a response for either options.
	if (!task_five_inputName) {
		console.log("Please write a name!");

		// Display the input value in the paragraph with id task_five_p
		let task_five_p = document.querySelector("#task_five_p");
		task_five_p.textContent = "Vennligst skriv et navn";
	} else {
		console.log("Gosh what a name!");

		// Display the input value in the paragraph with id task_five_p
		let task_five_p = document.querySelector("#task_five_p");
		task_five_p.textContent = "Navnet ditt er: " + task_five_inputName;
	}
}

// Add event listener to the form
let task_five_inputSubmit = document.querySelector("#task_five_inputSubmit");
task_five_inputSubmit.addEventListener("click", submitName);

// Task six
