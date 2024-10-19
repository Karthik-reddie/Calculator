// Get the display element
const display = document.getElementById('display');

// Append clicked value to the display
function appendtoDisplay(value) {
    display.value += value;
}

// Clear the display
function clearDisplay() {
    display.value = '';
}

// Perform the calculation when "=" is clicked
function calcualte() {
    try {
        // Evaluate the expression and display the result
        display.value = eval(display.value);
    } catch (error) {
        // If there's an error in the calculation, clear the display
        display.value = 'Error';
    }
}
