document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  if (!form) return; // only run on contact.html

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // inputs
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");
    const success = document.getElementById("success");

    let valid = true;

    // Clear previous errors
    document.querySelectorAll(".error").forEach(err => err.textContent = "");

    // Validation
    if (name.value.trim() === "") {
      document.getElementById("error-name").textContent = "Full name is required";
      valid = false;
    }

    if (email.value.trim() === "") {
      document.getElementById("error-email").textContent = "Email is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      document.getElementById("error-email").textContent = "Enter a valid email";
      valid = false;
    }

    if (subject.value.trim() === "") {
      document.getElementById("error-subject").textContent = "Subject is required";
      valid = false;
    }

    if (message.value.trim().length < 10) {
      document.getElementById("error-message").textContent = "Message must be at least 10 characters";
      valid = false;
    }

    // Show success message
    if (valid) {
      success.style.display = "block";
      form.reset();
    } else {
      success.style.display = "none";
    }
  });
});
