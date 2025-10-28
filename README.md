# Ambient Light API Demo 💡

## Harnessing the Power of Environmental Illumination in Your Web Applications

This repository showcases a practical demonstration of the HTML5 Ambient Light API, allowing you to access and utilize ambient light sensor data within your web applications.  Explore how this emerging technology can enhance user experiences, enable adaptive interfaces, and unlock new possibilities for location-aware applications.

## About 📝

The Ambient Light API provides a standardized way for web developers to access ambient light sensor data from devices, such as smartphones and tablets. This allows your applications to react intelligently to the surrounding environment, adjusting brightness, color schemes, or other settings based on the detected light levels. This demo provides a simple yet functional example of how to integrate and utilize this API, providing a foundation for building more complex applications.

## Key Features ✨

*   **Real-time Light Level Display:**  Displays the current ambient light level in lux, providing immediate feedback.
*   **Adaptive Brightness Control:** Demonstrates how to adjust a simulated screen brightness based on the detected light level.
*   **Color Scheme Adjustment:**  Illustrates changing a website's color scheme (light/dark mode) based on ambient light.
*   **Threshold-Based Actions:**  Shows how to trigger specific actions (e.g., displaying a notification) when the light level crosses a defined threshold.
*   **Error Handling:** Includes robust error handling to gracefully manage situations where the API is unavailable or returns invalid data.

## Getting Started 🚀

**Prerequisites:**

*   A modern web browser that supports the Ambient Light API (e.g., Chrome 98+, Edge 98+).  Note that support is still evolving.
*   A device with an ambient light sensor (most smartphones and tablets).

**Installation:**

1.  Clone the repository:
    ```bash
    git clone https://github.com/pkibbey/ambient-light-api-demo.git
    cd ambient-light-api-demo
    ```

2.  Open `index.html` in your web browser. The demo should load and start displaying the ambient light level.

## Usage 💻

The core logic resides within `script.js`. Here's a breakdown of how to interact with the API:

**Accessing the Ambient Light Sensor:**

```javascript
const ambientLightSensor = navigator.getAmbientLightSensor();

if (ambientLightSensor) {
  console.log("Ambient Light Sensor found!");
} else {
  console.log("Ambient Light Sensor not found.");
}
```

**Listening for Light Level Updates:**

```javascript
if (ambientLightSensor) {
  ambientLightSensor.onreading = function() {
    const lightLevel = this.illuminance; // in lux
    console.log("Illuminance:", lightLevel, "lux");

    // Example: Adjust screen brightness (simulated)
    document.getElementById("brightness-level").innerText = lightLevel;

    // Example: Adjust color scheme
    if (lightLevel > 200) {
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
    }
  };

  // Start observing the sensor
  ambientLightSensor.start();
}
```

**Handling Errors:**

```javascript
if (ambientLightSensor) {
  ambientLightSensor.onerror = function(error) {
    console.error("Error accessing Ambient Light Sensor:", error);
  };
}
```

**Stopping Observation:**

When you're finished using the sensor, remember to stop observing it:

```javascript
if (ambientLightSensor) {
  ambientLightSensor.stop();
}
```

## Contributing 🤝

We welcome contributions to this project!  If you're interested in helping, please follow these guidelines:

1.  **Fork the repository:** Create a fork of this repository on GitHub.
2.  **Create a branch:** Create a new branch for your feature or bug fix (e.g., `feature/adaptive-brightness`).
3.  **Make your changes:** Implement your feature or fix the bug, ensuring that your code adheres to the existing style and conventions.
4.  **Submit a pull request:** Submit a pull request to the main branch, providing a clear description of your changes.
5.  **Code Style:** Please adhere to standard JavaScript coding conventions.

## License 📜

This project is licensed under the [MIT License](LICENSE).  See the `LICENSE` file for details.

## Support & Issues ℹ️

*   **GitHub Issues:**  Report any bugs or feature requests on the [Issues page](https://github.com/pkibbey/ambient-light-api-demo/issues).
*   **GitHub Discussions:** Engage in discussions and ask questions about the project on the [Discussions page](https://github.com/pkibbey/ambient-light-api-demo/discussions).

---
[![Build Status Placeholder](https://img.shields.io/badge/build-pending-green.svg)](https://github.com/pkibbey/ambient-light-api-demo)
[![License Placeholder](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Version Placeholder](https://img.shields.io/badge/version-1.0.0-yellow.svg)](https://github.com/pkibbey/ambient-light-api-demo)
