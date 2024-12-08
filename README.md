Weather Dashboard

The Weather Dashboard is a web application that provides weather information for any city using the OpenWeatherMap API. It features an autocomplete functionality to suggest city names as you type, enhancing user experience.

Features

City Weather Search: Enter a city name to fetch current weather details such as temperature, humidity, wind speed, and weather conditions.

Autocomplete Suggestions: Quickly find cities with the autocomplete dropdown as you type.

Responsive Design: Optimized for various screen sizes.

Technology Stack

Frontend: HTML, CSS, JavaScript

Framework: Angular

API: OpenWeatherMap API

How to Run the Project

Prerequisites

A web browser.

Internet connection for accessing the OpenWeatherMap API.

A code editor (optional, for modifications).

Node.js and npm (for Angular development).

Steps

Using StackBlitz (Angular)

Open the project on StackBlitz.

Copy and paste the provided files (HTML, CSS, and TypeScript) into their respective sections.

Replace the placeholder your-api-key with your actual API key from OpenWeatherMap in the script.js or main.ts file.

Save and run the project to see the application in action.

Local Deployment

Clone this repository:

git clone https://github.com/BravoTrevor/weather-dashboard.git
cd weather-dashboard

Replace your-api-key in the script.js file with your OpenWeatherMap API key.

Open index.html in your browser to launch the application.

File Structure

weather-dashboard/
|-- index.html          # Main HTML file
|-- global_styles.css   # Styling file
|-- main.ts             # Angular-based TypeScript file
|-- script.js           # JavaScript file for API calls and logic
|-- README.md           # Project documentation

How to Obtain an OpenWeatherMap API Key

Visit the OpenWeatherMap website.

Sign up for a free account.

Navigate to the API section and generate your API key.

Replace your-api-key in the script.js or main.ts file with the generated key.

Troubleshooting

Autocomplete not working: Ensure you have correctly added the cities list in your JavaScript or TypeScript code.

API Errors: Check if the API key is valid and not restricted by IP or domain.

CORS Issues: Run the application on a local server or hosting platform if you encounter CORS errors.

Future Improvements

Add support for multiple languages.

Include hourly and weekly forecasts.

Implement error handling for network issues.

License

This project is licensed under the MIT License. You are free to use, modify, and distribute the application as long as the original copyright notice is retained.

Author

Created by BravoTrevor.

