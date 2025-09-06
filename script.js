// Smooth scroll to section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Contact form functionality
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("msg").innerText = "✅ Thank you! We will contact you soon.";
  this.reset();
});

// Theme Toggle (Light/Dark Mode)
document.getElementById("themeToggle").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");

  // Button ka text change karo
  if (document.body.classList.contains("dark-mode")) {
    this.innerText = "☀️ Light Mode";
  } else {
    this.innerText = "🌙 Dark Mode";
  }
});