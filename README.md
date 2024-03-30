---

# steep

[![npm version](https://badge.fury.io/js/steep.svg)](https://badge.fury.io/js/steep)

**steep** is an npm package that allows you to visualize multiple sets of **x** and **y** coordinates from a single input string. Whether you're plotting data points, creating graphs, or analyzing trends, **steep** has got you covered!

## Installation

To use **steep**, you need to have [Node.js](https://nodejs.org/) installed. Then, simply run:

```bash
npm install steep
```

## Usage

1. Import the `visualizeStringInput` function in your JavaScript file:

    ```javascript
    const steep = require('steep');
    ```

2. Call the function with your input string and visualization type:

    ```javascript
    const inputString = "345,5643;342,876;123,456";
    const visualizationType = 'scatter'; // Choose from 'scatter', 'line', or 'bar'

    steep.visualizeStringInput(inputString, visualizationType);
    ```

3. Customize the graphing logic:
    - Use your preferred graphing library (e.g., D3.js, Plotly) to create the actual graph.
    - Replace the `console.log` statements in the `visualizeStringInput` function with your graphing code.

## Input Format

- The input string should contain multiple sets of coordinates separated by semicolons (;).
- Each set consists of an **x** value and a corresponding **y** value, separated by a comma (,).

## Visualization Options

Choose from the following visualization types:
- `'scatter'`: Create a scatter plot
- `'line'`: Create a line graph
- `'bar'`: Create a bar chart

## Dropdown Menu

In addition to the core functionality, **steep** now includes a colorized dropdown menu. The menu provides options for selecting different visualization types. When the user clicks the "Menu" button, the dropdown reveals available choices.

### How to Use the Dropdown Menu

1. Click the "Menu" button.
2. Choose your preferred visualization type (scatter, line, or bar).
3. Observe the graph based on your selection.

Feel free to customize the menu appearance and colors in the CSS to match your project's branding.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
