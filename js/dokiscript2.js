const tosButton = document.getElementById("tosButton");
const tosCardSection = document.getElementById("tosCard");


const terms = [
  { name: " Introduction", 
   description: "Welcome to Data Doki Bot. These terms govern your use of the bot. By using Data Doki Bot, you agree to these terms.",
   icon: "fas fa-location-arrow" },

  { name: " User Data Storage and Usage",
   description: "Data Storage : Commands are stored for 30 days for analytics and improvement purposes. All stored information is heavily encrypted to ensure privacy and security. Information collected is privately stored and not shared with third parties.",
   icon: "fas fa-folder" },

  { name: "Discord Guidelines",
   description: "Users must comply with Discord's Terms of Service and Community Guidelines. Users agree to use the bot responsibly and within Discord's guidelines.",
   icon: "fab fa-discord" },

   { name: "Data Handling",
   description: "Most used commands are logged anonymously for bot improvement, command logs are automatically deleted after 30 days. Robust measures are in place to safeguard stored data.",
   icon: "fas fa-database" },

   { name: "User Agreement",
   description: "By using Data Doki Bot, users consent to the storage and handling of data as outlined, users cannot opt-out of basic command logging for bot improvement.",
   icon: "fa fa-check-circle" },

   { name: "Additional Notes",
   description: "These terms are subject to change without notice. Check back periodically for updates. For inquiries or concerns about data handling. Contact us by making a ticket in the main discord.",
   icon: "fa fa-exclamation-triangle" }
];

tosButton.addEventListener("click", () => {
  tosCardSection.innerHTML = "";
  commandCardsSection.innerHTML = "";

  const container = document.createElement("div");
  container.classList.add("terms-container");
  tosCardSection.appendChild(container);

    
    for (const term of terms) { 
      const card = document.createElement("div");
      card.classList.add("card-term"); 
      const name = document.createElement("h3");
      const icon = document.createElement("i");
      icon.classList.add(...term.icon.split(" ")); 
      name.appendChild(icon); 
      name.appendChild(document.createTextNode(" " + term.name)); 
      card.appendChild(name);
    const hr = document.createElement("hr"); 
    card.appendChild(hr); 
    const description = document.createElement("p");
    description.textContent = term.description.replace(/, /g, " ");
    card.appendChild(description);
    container.appendChild(card); 
  }

  tosCardSection.classList.remove("hidden");
  introSection.style.opacity = 0;
  setTimeout(() => {
    introSection.innerHTML = "<h2>Terms of Service and Privacy Policy</h2>";
    introSection.style.opacity = 1;
  }, 0);
});