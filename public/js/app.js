// app.js

// Function to load HTML content based on the URL hash
function loadContent() {
    const contentDiv = document.getElementById('content');
    const hash = window.location.hash;

    // Default page (home page)
    if (!hash || hash === '#home') {
        contentDiv.innerHTML = `
            <section class="auth-section">
                <h2>Welcome to CertifiQ</h2>
                <p>Create certificates that inspire achievement.</p>
                <a href="#login" class="nav-link">Login</a>
                <a href="#forgot-password" class="nav-link">Forgot Password?</a>
            </section>
        `;
    }
    // Login page
    else if (hash === '#login') {
        contentDiv.innerHTML = `
            <section class="auth-section">
                <h2>Log In</h2>
                <form class="auth-form">
                    <label for="email">Email Address</label>
                    <input type="email" id="email" placeholder="Placeholder" required>
                    <label for="password">Password</label>
                    <input type="password" id="password" placeholder="Placeholder" required>
                    <a href="#forgot-password" class="forgot-password-link">Forgot Password?</a>
                    <button type="submit" class="auth-submit-btn">Log In</button>
                    <a href="/auth/google" class="google-login-btn">Log in with Google</a>
                    <p class="signup-prompt">No account yet? <a href="#signup">Sign up</a></p>
                </form>
            </section>
        `;
    }
    // Forgot Password page
    else if (hash === '#forgot-password') {
        contentDiv.innerHTML = `
            <section class="auth-section">
                <h2>Forgotten your password?</h2>
                <p>Enter your email address to reset your password.</p>
                <form class="auth-form">
                    <label for="email">Email Address</label>
                    <input type="email" id="email" placeholder="Enter your email address" required>
                    <button type="submit" class="auth-submit-btn">Send Reset Link</button>
                </form>
            </section>
        `;
    }
}

// Listen for hash changes
window.addEventListener('hashchange', loadContent);

// Initial load
window.addEventListener('load', loadContent);
