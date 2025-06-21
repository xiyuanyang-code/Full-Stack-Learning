// frontend/script.js

// Get HTML elements
const userInput = document.getElementById('user-input');
const responseArea = document.getElementById('response-area');

// Define the backend API URL
// Note: This should match the address and port where your Flask app is running
const backendApiUrl = 'http://127.0.0.1:5000/api/process_text';

const click_to_send = document.getElementById("click-to-send")
click_to_send.onclick = async function() {
    const textToSend = userInput.value; // Get the text from the input box

    if (!textToSend) { // If the input box is empty, do not send the request
        responseArea.textContent = 'Please enter something before sending!';
        return;
    }

    // Update the frontend display to indicate sending in progress
    responseArea.textContent = 'Sending to backend...';

    try {
        // Use fetch API to send a POST request to the backend
        const response = await fetch(backendApiUrl, {
            method: 'POST', // Specify the request method as POST
            headers: {
                'Content-Type': 'application/json' // Tell the backend we are sending JSON data
            },
            body: JSON.stringify({text: textToSend}) // Convert JavaScript object to JSON string as request body
        });

        // Check if the HTTP response is successful (status code 2xx)
        if (!response.ok) {
            // If the response is not successful, throw an error
            throw new Error(`HTTP error! Status code: ${response.status}`);
        }

        // Parse the JSON data returned by the backend
        const data = await response.json();

        // Display the 'processed_message' returned by the backend on the frontend page
        if (data.processed_message) {
            responseArea.textContent = `Backend says: ${data.processed_message}`;
        } else if (data.error) {
            // If the backend returned an error message
            responseArea.textContent = `Backend error: ${data.error}`;
        } else {
            responseArea.textContent = 'Backend returned unknown data.';
        }

    } catch (error) {
        // Catch any errors that occur during the request (such as network issues)
        console.error('Error occurred while sending or receiving data:', error);
        responseArea.textContent = `Error: ${error.message} Please check if the backend is running.`;
    }
}
