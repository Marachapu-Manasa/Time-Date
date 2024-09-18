function displayTimeDate() {
    const now = new Date();

    
    // Get time components
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    // Get date components
    const day = now.getDate();
    const month = now.getMonth() +1; // Months are 0-based
    const year = now.getFullYear();



    // Format date and time strings
    const timeString = `${hours}:${minutes}:${seconds}`;
    const dateString = `${day}/${month}/${year}`;

    // Update the clock element in the HTML
    document.getElementById("clock").textContent = `${timeString} ${dateString}`;
}

// Call the displayDateTime function initially
displayTimeDate();

// Update the clock every second
setInterval(displayTimeDate, 1000);
