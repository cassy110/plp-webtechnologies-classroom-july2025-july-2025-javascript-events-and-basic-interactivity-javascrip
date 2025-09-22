// =============================
// Part 1: Event Handling Example
// =============================
const msgBtn = document.getElementById("msgBtn");
const msgOutput = document.getElementById("msgOutput");

msgBtn.addEventListener("click", () => {
  msgOutput.textContent = "🎉 You clicked the button!";
});

// =============================
// Part 2: Interactive Elements
// =============================

// 1. Dark Mode Toggle
const toggleMode = document.getElementById("toggleMode");
toggleMode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// 2. Counter
let count = 0;
const countDisplay = document.getElementById("count");
document.getElementById("increase").addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});
document.getElementById("decrease").addEventListener("click", () => {
  count--;
  countDisplay.textContent = count;
});

// 3. Collapsible FAQ
const faq = document.querySelector(".faq");
faq.querySelector(".faq-question").addEventListener("click", () => {
  faq.classList.toggle("active");
});

// =============================
// Part 3: Form Validation
// =============================
const form = document.getElementById("signupForm");
const feedback = document.getElementById("formFeedback");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form submission

  // Get input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Improved email validation regex
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Validation rules
  if (name.length < 3) {
    feedback.textContent = "❌ Name must be at least 3 characters.";
    feedback.style.color = "red";
  } else if (!emailPattern.test(email)) {
    feedback.textContent = "❌ Please enter a valid email address.";
    feedback.style.color = "red";
  } else if (password.length < 6) {
    feedback.textContent = "❌ Password must be at least 6 characters.";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "✅ Form submitted successfully!";
    feedback.style.color = "green";

    // Optional: Clear form after success
    form.reset();
  }
});
