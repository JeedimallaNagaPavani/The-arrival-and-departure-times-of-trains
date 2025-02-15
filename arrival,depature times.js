// script.js

function findPlatform() {
    // Get the user input for arrival and departure times
    let arrivalInput = document.getElementById("arrivals").value;
    let departureInput = document.getElementById("departures").value;

    // Convert the input strings into arrays of numbers
    let arrivals = arrivalInput.split(',').map(time => parseFloat(time.trim()));
    let departures = departureInput.split(',').map(time => parseFloat(time.trim()));

    // Sort the arrival and departure times
    arrivals.sort((a, b) => a - b);
    departures.sort((a, b) => a - b);

    let platformCount = 1; // At least one platform is needed initially
    let result = 1; // Variable to store the maximum number of platforms needed
    let i = 1; // Pointer for the next arrival
    let j = 0; // Pointer for the next departure

    // Traverse through the arrival and departure times
    while (i < arrivals.length && j < departures.length) {
        // If the next arrival is before the next departure
        if (arrivals[i] <= departures[j]) {
            platformCount++; // A new platform is required
            i++; // Move to the next arrival
        } else {
            platformCount--; // A platform is freed
            j++; // Move to the next departure
        }

        // Track the maximum number of platforms required at any time
        result = Math.max(result, platformCount);
    }

    // Display the result (minimum platforms required)
    document.getElementById("result").textContent = "Minimum Platforms Required: " + result;
}