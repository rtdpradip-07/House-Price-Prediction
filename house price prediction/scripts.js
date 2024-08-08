// Simple prediction model for demonstration purposes
// This is a placeholder. Replace with a more complex model or API call in real-world scenarios.

function predictPrice() {
    // Get values from the form
    const size = parseFloat(document.getElementById('size').value);
    const bedrooms = parseInt(document.getElementById('bedrooms').value);
    const location = parseInt(document.getElementById('location').value);

    // Simple formula for demonstration
    // This is a basic example. For a real application, use a trained model or API
    const basePrice = 50000; // Base price in dollars
    const sizeFactor = 100;   // Price per sq ft
    const bedroomFactor = 10000; // Additional price per bedroom
    const locationFactor = 5000;  // Additional price based on location

    // Calculate price
    const predictedPrice = basePrice + (size * sizeFactor) + (bedrooms * bedroomFactor) + (location * locationFactor);

    // Display the result
    document.getElementById('price').textContent = `Predicted House Price: $${predictedPrice.toLocaleString()}`;
}
