const commandsButton = document.getElementById("commandsButton");
const commandCardsSection = document.getElementById("commandCards");
const introSection = document.getElementById("intro");
const commands = [
  { name: "help", description: "/help, Shows a list of available commands.",icon: "fa fa-info-circle" },
  { name: "Breach", description: ".breach <username / email / Discord ID / ip>, Search throught the newest data breaches.",icon: "fa fa-search" },
  { name: "Search", description: ".search <username / email / Password>, Search throught stealer logs.",icon: "fa fa-search" },
  { name: "Intelxfree", description: ".intelxfree <id from intelx>, Search the id in a scraped Intelligence X.",icon: "fa fa-search" },
  { name: "Url", description: ".url <username / email / Password / Domain>, Search throught fresh stealer logs. (Premium feature)",icon: "fa fa-user-secret" },
  { name: "Snus user", description: ".snus <user>, Search an username throught snusbase.",icon: "fa fa-search" },
  { name: "Snus ip", description: ".snus <ip>, Search an ip throught snusbase.",icon: "fa fa-search" },
  { name: "Snus email", description: ".snus <email>, Search an email throught snusbase.",icon: "fa fa-search" },
  { name: "Snus password", description: ".snus <password>, Search an password throught snusbase.",icon: "fa fa-search" },
  { name: "userinfo", description: "/userinfo <username>, Lookup an roblox username.",icon: "fa fa-user-circle" },
  { name: "ip", description: "/ip <ip>, ISP the Wi-Fi provider, location.",icon: "fa fa-map-marker" },
  { name: "Lookup", description: ".lookup <email>, Give information about an email.",icon: "fa fa-eye" },
  { name: "Holehe", description: ".holehe <email>, See on what site the email is registered.",icon: "fa fa-eye" },
  { name: "Whois", description: ".whois <id>, Lookup a Discord ID.",icon: "fab fa-discord" },
  { name: "Redeem", description: ".redeem <key>, Redeem a key to get an active license on the bot.",icon: "fa fa-key" },
];

commandsButton.addEventListener("click", () => {
    commandCardsSection.innerHTML = ""; 
    tosCardSection.innerHTML = "";
    const container = document.createElement("div"); 
    container.classList.add("command-container"); 
    commandCardsSection.appendChild(container); 
  
    for (const command of commands) { 
      const card = document.createElement("div");
      card.classList.add("card"); 
      const name = document.createElement("h3");
      const icon = document.createElement("i");
      icon.classList.add(...command.icon.split(" ")); 
      name.appendChild(icon); 
      name.appendChild(document.createTextNode(" " + command.name)); 
      card.appendChild(name);
      const hr = document.createElement("hr"); 
      card.appendChild(hr);
      const description = document.createElement("p");
      description.textContent = command.description;
      card.appendChild(description);
      container.appendChild(card); 
    }
  
    commandCardsSection.classList.remove("hidden");
    introSection.style.opacity = 0;
    setTimeout(() => {
      introSection.innerHTML = "<h2>Commands</h2>";
      introSection.style.opacity = 1;
    }, 0); 
  });