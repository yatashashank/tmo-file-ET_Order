# ET_Order file Generator
This is a utility tool for the BAM team. Which assists in the creation of the CSV file required by the IoT Order Portal. This utility converts a Spireon excel file containing device data into an IoT Order Portal CSV file.

### Run the tool locally

1. If you don't already have nodejs, download and install sutiable version from [here](https://nodejs.org/en/download/) .
2. Clone the repo and then navigate to the repo from the terminal
2. Install dependencies using `npm install`.
3. Run `npm start [Spireon file path]` to start a tool.
4. You should be able to see a new CSV file with name orders-portal.csv.
5. Note: Currently this file has an extra line which needed to be removed manually.
