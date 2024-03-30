// index.js

function parseCoordinates(inputString) {
    // Split the input string into individual sets of coordinates
    const coordinateSets = inputString.split(';');
  
    // Parse each coordinate set
    const points = coordinateSets.map((set) => {
      const [x, y] = set.split(',').map(Number);
      return { x, y };
    });
  
    return points;
  }
  
  function visualizeStringInput(inputString) {
    const points = parseCoordinates(inputString);
  
    // Use your chosen graphing library to plot the points
    // (D3.js, Plotly, etc.)
  
    // Return the graph or visualization
  }
  
  module.exports = visualizeStringInput;
  