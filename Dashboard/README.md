# Dashboard UI/UX Design

This project serves as a user interface (UI) and user experience (UX) design for a dashboard. It displays various information such as device status, usage statistics, and recent activities using tables and charts. The design includes a sidebar for navigation, a header for the page title, and cards for quick status overviews.

## Project Structure

The project is organized into three main files:

1. `index.html`: Contains the HTML structure of the dashboard.
2. `styles.css`: Contains the CSS styles for the dashboard.
3. `script.js`: Contains the JavaScript code for dynamic elements and charts.

## Features

### Sidebar

- **Navigation Menu**: Contains links to different sections such as Dashboard, Profile, Notifications, Devices, and Logout.
- **Design**: Fixed position on the left side, with a gradient background and responsive hover effects.

### Main Content

- **Header**: Displays the page title "Dashboard" and can be extended to include user information and actions.
- **Cards**: Displays quick statistics for Active, Full, and Offline statuses.
- **Scrollable Table**: Shows detailed information about devices, including Seabin ID, last emptied date, and capacity.
- **Charts**: Visualizes data using Pie and Bar charts created with Chart.js.

## Styles

The `styles.css` file defines the visual aspects of the dashboard:

- **General Styles**: Sets the font, background color, and text color for the body.
- **Sidebar**: Styles for the sidebar, including width, height, background gradient, and padding.
- **Content**: Styles for the main content area, including margins and padding.
- **Header**: Styles for the header, including flexbox layout, padding, and background color.
- **Cards**: Styles for the status cards, including background color, padding, border-radius, and margins.
- **Table**: Styles for the table, including width, padding, text alignment, border styles, and hover effects.
- **Charts**: Styles for the chart containers to ensure they fit within the design layout.

## Scripts

The `script.js` file initializes the charts using Chart.js:

- **Pie Chart**: Displays the proportion of "Full" and "Not Full" statuses.
- **Bar Chart**: Displays the capacity of different Seabin IDs. Bars representing 100% capacity are highlighted in red, while others are in blue.

## Usage

To use this project, follow these steps:

1. **Clone the Repository**: Download or clone the repository to your local machine.
2. **Open `index.html`**: Open the `index.html` file in a web browser to view the dashboard.
3. **Modify Data**: Update the data in `script.js` to reflect your own dataset.

## Dependencies

- **Chart.js**: The project uses Chart.js for creating interactive charts. The library is included via a CDN link in the `index.html` file.

## Future Enhancements

- **Interactivity**: Add more interactive elements such as filters and search functionality for the table.
- **Responsive Design**: Improve responsiveness to ensure the dashboard looks good on all devices.
- **Backend Integration**: Connect the dashboard to a backend to fetch real-time data.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is open-source and available under the MIT License.

