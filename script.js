// Age Checker

function checkAge() {
    let age = document.getElementById("ageInput").value;
    let result = document.getElementById("ageResult");
  
    if (age >= 18) {
      result.textContent = "You are an adult";
    } else if (age > 0) {
      result.textContent = "You are a minor";
    } else {
      result.textContent = "Please enter a valid age!";
    }
  }
  
  // Price Calculator
  
  function calculateTotal(price, quantity) {
    return price * quantity;
  }
  
  function showTotal() {
    let total = calculateTotal(100, 5);
    document.getElementById("totalResult").textContent =
      `Total: $${total}`;
  }
  
  function showGreeting() {
    document.getElementById("greetingResult").textContent =
      "Hello, welcome!!";
  }
  
  // Show Countdown
  
  function showCountdown() {
    let countdownList = document.getElementById("countdownList");
    countdownList.innerHTML = "";
  
    let i = 5; // start value
    const interval = setInterval(() => {
      let li = document.createElement("li");
      li.textContent = i;
      countdownList.appendChild(li);
  
      i--;
  
      if (i < 0) {
        clearInterval(interval);
        let li = document.createElement("li");
        li.textContent = "Go!";
        countdownList.appendChild(li);
      }
    }, 1000); // 1000ms = 1 second
  }
  
  
  // Change Theme

  document.getElementById("toggleTheme").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
  
  document.getElementById("addItemBtn").addEventListener("click", () => {
    let li = document.createElement("li");
    li.textContent = "New item added!";
    document.getElementById("dynamicList").appendChild(li);
  });
  
  // Navbar toggle for small screens
  const toggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  
  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
  