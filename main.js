import { Client, Account } from "appwrite";

// Initialize Appwrite Client
const client = new Client();
client
    .setEndpoint('https://cloud.appwrite.io/v1') // Replace with your Appwrite endpoint
    .setProject('1062891159177-pj3hg57u7vp7l15m268ft746t9p8lclc.apps.googleusercontent.com'); // Replace with your Appwrite Project ID

// Initialize Account Service
const account = new Account(client);

// Select Google login button
const googleLoginBtn = document.querySelector('.google-login-btn');

// Log when main.js loads
console.log("main.js loaded");

// Handle Google OAuth login
googleLoginBtn.addEventListener('click', async (event) => {
    event.preventDefault(); // Prevent default link behavior
    console.log("Google login button clicked");

    try {
        // Redirect to Google OAuth (no need for backend route)
        await account.createOAuth2Session(
            'google', // Provider ID for Google
            'http://localhost:5173/success', // Success URL after login
            'http://localhost:5173/fail' // Failure URL if login fails
        );
    } catch (error) {
        console.error("OAuth Error:", error.message);
    }
});

// Optionally, function to get the logged-in user
async function getUser() {
    try {
        const user = await account.get();
        console.log("User:", user);
    } catch (error) {
        console.error("Error getting user:", error.message);
    }
}

// Call `getUser()` on page load if you want to check if a user is logged in
getUser();
