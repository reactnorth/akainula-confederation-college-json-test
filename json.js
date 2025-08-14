console.log("Fetching data..."); // Pre-fetch console log.

fetch('./program-data.json') // Get the JSON data.
  .then(response => response.json()) // Parse the JSON data.
  .then(data => { // Render the JSON data
    const container = document.getElementById("output-container");    
    console.log("Rendering data...");

    data.forEach(item => {
      const name = item.name;
      const id = item._id;
      const mission = item.missionStatement || "No description yet."; // Fallback if missing
      const url = item.slug.current;

      // Throw error in debug console for missing mission statements
      if (!item.missionStatement) {
        console.error("Missing mission statement:", item);
      }

      // Update the <div> with id="output-container" with results
      container.innerHTML += `
        <div class="program" value="${id}">
          <h1 class="program-name">${name}</h1>
          <p class="mission">${mission}</p>
          <a class="button" href="https://www.confederationcollege.ca/programs/${url}">View Program</a>
        </div>
      `;
    });

    console.log("Complete..."); // Let the console know rendering is finished
  });
