body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    min-height: 100vh;
    position: relative;
}

header {
    background-color: #333;
    color: #fff;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header-right {
    display: flex;
    align-items: center;
    gap: 20px;
}

.auth-buttons {
    display: flex;
    gap: 10px;
}

.auth-buttons button {
    padding: 8px 16px;
    font-size: 14px;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.login-btn {
    background-color: #007bff;
    color: #fff;
}

.login-btn:hover {
    background-color: #0056b3;
}

.signup-btn {
    background-color: #28a745;
    color: #fff;
}

.signup-btn:hover {
    background-color: #218838;
}

.cart {
    font-size: 16px;
    display: flex;
    align-items: center;
    gap: 5px;
}

.cart i {
    font-size: 20px;
}

.cart span {
    background-color: #ff5722;
    color: #fff;
    padding: 2px 8px;
    border-radius: 50%;
    font-size: 12px;
}

main {
    padding: 20px;
    padding-bottom: 60px; /* Prevent footer overlap */
}

.product-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.product {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 15px;
    width: 200px;
    text-align: center;
}

.product img {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
}

.product h2 {
    font-size: 18px;
    margin: 10px 0;
}

.product p {
    font-size: 16px;
    color: #333;
}

.product button {
    background-color: #28a745;
    color: #fff;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
}

.product button:hover {
    background-color: #218838;
}

footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 10px 0;
    position: fixed;
    width: 100%;
    bottom: 0;
}
.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
}

.modal-content {
    background-color: #fff;
    margin: 15% auto;
    padding: 20px;
    width: 300px;
    border-radius: 5px;
    position: relative;
}

.modal-content form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.modal-content input {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

.modal-content button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
}

.modal-content button:hover {
    background-color: #0056b3;
}

.close {
    position: absolute;
    right: 20px;
    top: 10px;
    font-size: 24px;
    cursor: pointer;
}
/* Notifications */
.notification {
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 15px 25px;
    border-radius: 5px;
    color: white;
    z-index: 1000;
    animation: slideIn 0.3s ease-out;
}

.notification.success { background: #28a745; }
.notification.error { background: #dc3545; }

@keyframes slideIn {
    from { transform: translateX(100%); }
    to { transform: translateX(0); }
}
