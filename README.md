# control-flow-error-handling
## Challenge 1 - API Data Fetching

### Challenge Description
In this project, I fetch stock data from the Alpha Vantage API using node-fetch, process the data to show the most recent stock closing prices, and handle any errors.

### Problem Solving Notes
1. _Fetching Data:_
- Used node-fetch to get stock data for "GPV.TRV" from Alpha Vantage.

2. _Error Handling:_
- Checked for API errors and missing data.

3. _Processing Data:_
- Extracted the closing prices for the last 5 days and displayed them.

4. _Displaying Results:_
- Printed the dates and closing prices to the console.

### Resources

[Alpha Vantage](https://www.alphavantage.co/)
[Node Package](https://www.npmjs.com/package/node-fetch)

### Self Reflection

- __What Went Well__: Data was fetched and processed correctly.
- __What Could Be Improved__: Add better logging and rate-limiting for API calls.
- __What I Learned__: Learned how to fetch, handle, and process API data in Node.js. I also gained valuable experience in error handling, ensuring that any issues with the API response, such as missing data or network failures, were caught and managed gracefully. This taught me the importance of anticipating errors in real-world applications and ensuring a smooth user experience even when things go wrong.