// Replace with your GitHub username
const githubUsername = "Panktivpatel";
        
// GitHub API endpoint
const apiUrl = `https://api.github.com/users/${githubUsername}/repos`;

// Fetch data from GitHub API
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const repositoriesList = document.getElementById("repositories-list");

        // Loop through repositories and add them as Bootstrap cards
        data.forEach(repo => {
            const card = document.createElement("div");
            card.classList.add("card", "col-md-12"); 
            card.style.marginRight = "2%";

            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");

            const cardTitle = document.createElement("h5");
            cardTitle.classList.add("card-title");

            // Create a link for each repository
            const cardLink = document.createElement("a");
            cardLink.href = repo.html_url;
            cardLink.target = "_blank";
            cardLink.textContent = repo.name;

            // Assemble the elements
            cardTitle.appendChild(cardLink);
            cardBody.appendChild(cardTitle);
            card.appendChild(cardBody);

            // Append the card to the repositories list
            repositoriesList.appendChild(card);
        });
    })
    .catch(error => console.error("Error fetching GitHub data:", error));