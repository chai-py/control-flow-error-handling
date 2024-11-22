// Import node-fetch
const fetch = require('node-fetch');

// Function to fetch and process stock data
async function fetchAndProcessStockData() {
  // Using an invalid API URL
  const apiKey = 'e36f1ae854mshebac2bda09d59f7p19260bjsn73ee884975f1';
  const apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=INVALID_SYMBOL&outputsize=full&apikey=${apiKey}`;

  try {
    console.log("Fetching stock data from Alpha Vantage...");

    // Fetch data from Alpha Vantage API
    const response = await fetch(apiUrl);

    // Handle response errors
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    // Parse JSON response
    const data = await response.json();
    console.log("Stock data fetched successfully.");

    // Simulating error: Try to access non-existent data
    const timeSeries = data["Time Series (Daily)"];
    if (!timeSeries) {
      throw new Error("Time series data not found in response.");
    }

    // Simulate a broken data access, trying to access a non-existent property
    const brokenData = timeSeries["2023-01-01"]["non-existent-property"];
    console.log("Broken Data:", brokenData);
  } catch (error) {
    // Handle and log errors
    console.error("An error occurred while fetching or processing stock data:");
    console.error(error.message);
  }
}

// Call the function with broken data
fetchAndProcessStockData();
