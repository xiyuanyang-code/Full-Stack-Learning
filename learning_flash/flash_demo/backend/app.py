from flask import Flask, request, jsonify
from flask_cors import CORS # Import CORS to handle cross-origin requests

app = Flask(__name__)
# Enable CORS to allow requests from all origins. In real projects, you may want to restrict to specific origins.
CORS(app)

@app.route('/')
def home():
    """
    A simple root route that displays a welcome message when accessed.
    """
    return "Welcome to my simple Flask backend!"

@app.route('/api/process_text', methods=['POST'])
def process_text():
    """
    This API endpoint receives text sent from the frontend, processes it, and returns the result.
    """
    # Ensure the request body is in JSON format
    if not request.is_json:
        return jsonify({"error": "Request must be in JSON format"}), 400

    # Get the 'text' field from the JSON data
    data = request.get_json()
    received_text = data.get('text', '') 

    if not received_text:
        return jsonify({"error": "No text content received"}), 400

    # Backend processing logic: add a prefix to the text
    processed_text = f"Hello from Flask! You sent: '{received_text}'"

    # Return the processed text as a JSON response to the frontend
    return jsonify({"processed_message": processed_text})

if __name__ == '__main__':
    # Run the Flask app in development mode
    # debug=True will automatically restart the server on code changes and provide debug info
    # port=5000 specifies the port the app listens on
    app.run(debug=True, port=5000)