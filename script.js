// Import node-fetch
const fetch = require('node-fetch');

// Function to fetch and process stock data
async function fetchAndProcessStockData() {
  // Alpha Vantage API URL with a placeholder for the API key
  const apiKey = 'e36f1ae854mshebac2bda09d59f7p19260bjsn73ee884975f1';
  const apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=GPV.TRV&outputsize=full&apikey=${apiKey}`;

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

    // Extract daily time series data
    const timeSeries = data["Time Series (Daily)"];
    if (!timeSeries) {
      throw new Error("Time series data not found in response.");
    }

    // Process data: Extract closing prices for the last 5 days
    const recentPrices = Object.entries(timeSeries)
      .slice(0, 5) // Get the first 5 entries (most recent dates)
      .map(([date, values]) => ({
        date,
        closingPrice: values["4. close"],
      }));

    // Log processed data
    console.log("Recent Closing Prices:");
    console.log(recentPrices);
    return recentPrices;
  } catch (error) {
    // Handle and log errors
    console.error("An error occurred while fetching or processing stock data:");
    console.error(error.message);
  }
}

// Call the function
fetchAndProcessStockData();
