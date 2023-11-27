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

// Task six
