// Uncomment and customize this code if you need more advanced validation

document.getElementById('myForm').addEventListener('submit', function(event) {
    if (!this.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
      this.classList.add('was-validated'); // Trigger validation styles
    } else {
      // Form is valid, submit data or handle success here
      // e.g., submit form using AJAX or redirect to a success page
      document.getElementById('success-message').classList.remove('d-none'); // Show success message
    }
  });
  