// === Part 1: Event Handling ===

// Toggle Light/Dark Theme
document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// === Part 2: Interactive Features ===

// Counter Feature
let count = 0;
document.getElementById('incrementBtn').addEventListener('click', () => {
  count++;
  document.getElementById('count').textContent = count;
});

// Collapsible FAQ Section
document.querySelectorAll('.question').forEach((question) => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    answer.classList.toggle('hidden');
  });
});

// === Part 3: Form Validation ===

document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form from submitting

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const messages = [];

  // Validate name
  if (name === '') {
    messages.push('Name is required.');
  }

  // Validate email
  const emailPattern = /^[^@]+@[^@]+\.[a-z]{2,}$/i;
  if (!emailPattern.test(email)) {
    messages.push('Enter a valid email address.');
  }

  // Validate password
  if (password.length < 6) {
    messages.push('Password must be at least 6 characters long.');
  }

  const formMessages = document.getElementById('formMessages');
  formMessages.innerHTML = ''; // Clear old messages

  if (messages.length > 0) {
    formMessages.innerHTML = messages.map(msg => `<p>${msg}</p>`).join('');
  } else {
    formMessages.style.color = 'green';
    formMessages.innerHTML = '<p>Form submitted successfully! 🎉</p>';
    this.reset(); // Optionally reset the form
  }
});
