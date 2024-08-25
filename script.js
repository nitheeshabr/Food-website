// script.js

// Check if user is signed in and store email in local storage
document.addEventListener('DOMContentLoaded', () => {
    const email = localStorage.getItem('userEmail');
    if (email) {
        document.getElementById('signInModal').remove();
    }
});

// Handle item click to show sign-in modal if user is not signed in
document.querySelectorAll('.order-btn').forEach(button => {
    button.addEventListener('click', () => {
        const email = localStorage.getItem('userEmail');
        if (email) {
            showOrderModal(button.textContent);
        } else {
            const signInModal = new bootstrap.Modal(document.getElementById('signInModal'));
            signInModal.show();
        }
    });
});

// Sign-In form submission
document.getElementById('signInForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    localStorage.setItem('userEmail', email);
    
    const signInModal = bootstrap.Modal.getInstance(document.getElementById('signInModal'));
    signInModal.hide();
    
    // Show order modal after signing in
    const orderItem = document.getElementById('orderItem').value;
    showOrderModal(orderItem);
});

// Show order modal
function showOrderModal(orderItem) {
    document.getElementById('orderItem').value = orderItem;
    const orderModal = new bootstrap.Modal(document.getElementById('orderModal'));
    orderModal.show();
}

// Order form submission
document.getElementById('orderForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const orderItem = document.getElementById('orderItem').value;
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;

    // Here you would handle sending the email or processing the order.
    // For example, you might use an API to send the order details.

    // Mock sending email (Replace with actual email sending logic)
    console.log(`Order Details:
        Item: ${orderItem}
        Name: ${name}
        Address: ${address}
        Phone: ${phone}
    `);

    alert('Your order has been placed!');

    // Hide order modal and clear form
    const orderModal = bootstrap.Modal.getInstance(document.getElementById('orderModal'));
    orderModal.hide();
    document.getElementById('orderForm').reset();
});
