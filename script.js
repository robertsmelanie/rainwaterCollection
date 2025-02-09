function calculateWater() {
    let roofSize = document.getElementById("roofSize").value;
    let rainfall = document.getElementById("rainfall").value;

    if (roofSize > 0 && rainfall > 0) {
        // Calculate total water collection
        let totalWater = roofSize * rainfall * 0.623; // Gallons per year

        // Determine tank size recommendation
        let tankSize;
        if (totalWater < 1000) {
            tankSize = "Small (100-500 gallons)";
        } else if (totalWater < 5000) {
            tankSize = "Medium (500-2500 gallons)";
        } else {
            tankSize = "Large (2500+ gallons)";
        }

        // Display results
        document.getElementById("totalWater").textContent = totalWater.toFixed(1);
        document.getElementById("tankSize").textContent = tankSize;
        document.getElementById("result").style.display = "block";

        // Add affiliate link for filters
       // document.getElementById("filterLink").href = "#";
    } else {
        alert("Please enter valid numbers for roof size and rainfall.");
    }
}
