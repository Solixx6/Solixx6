/***********************************************
  WARNING: Frontend-only demo. Not secure for production.
  Always use proper backend authentication in real apps.
***********************************************/

// =================== Global Variables ===================
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let users = JSON.parse(localStorage.getItem('users')) || [];
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

// =================== Cart Functionality ===================
function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ 
            name, 
            price, 
            quantity: 1,
            id: Date.now().toString()
        });
    }
    
    updateCartStorage();
    showNotification(`${name} added to cart!`);
}

function updateCartStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = count;
}

// =================== User Authentication ===================
function handleLogin(e) {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const user = users.find(u => 
        u.username === username && u.password === password
    );

    if (user) {
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
        closeModals();
        updateAuthUI();
        showNotification(`Welcome back, ${username}!`);
    } else {
        showNotification('Invalid credentials!', 'error');
    }
}

function handleSignup(e) {
    e.preventDefault();
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        showNotification("Passwords don't match!", 'error');
        return;
    }

    if (users.some(u => u.username === username)) {
        showNotification('Username taken!', 'error');
        return;
    }

    const newUser = { username, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    showNotification('Account created! Please login.');
    switchToLogin();
}

function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateAuthUI();
    showNotification('Logged out successfully!');
}

// =================== UI Management ===================
function updateAuthUI() {
    const authButtons = document.querySelector('.auth-buttons');
    const userGreeting = document.querySelector('.user-greeting');
    
    if (currentUser) {
        authButtons.style.display = 'none';
        userGreeting.innerHTML = `
            Welcome, ${currentUser.username}!
            <button class="logout-btn" onclick="logout()">Logout</button>
        `;
        userGreeting.style.display = 'flex';
    } else {
        authButtons.style.display = 'flex';
        userGreeting.style.display = 'none';
    }
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}

// =================== Modal Management ===================
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

function closeModals() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.style.display = 'none';
        modal.querySelector('form').reset();
    });
}

function switchToLogin() {
    closeModals();
    openModal('loginModal');
}

// =================== Event Listeners ===================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize
    updateCartCount();
    updateAuthUI();

    // Auth Buttons
    document.querySelector('.login-btn').addEventListener('click', () => openModal('loginModal'));
    document.querySelector('.signup-btn').addEventListener('click', () => openModal('signupModal'));

    // Forms
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    document.getElementById('signupForm').addEventListener('submit', handleSignup);

    // Modal Close
    document.querySelectorAll('.close').forEach(btn => {
        btn.addEventListener('click', closeModals);
    });

    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) closeModals();
    });

    // Form switching
    document.getElementById('showSignup').addEventListener('click', (e) => {
        e.preventDefault();
        closeModals();
        openModal('signupModal');
    });
});
