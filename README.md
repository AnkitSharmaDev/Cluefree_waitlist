# clufree Waitlist Website

This project is a complete waitlist signup website named "clufree," built with React and a Firebase backend.

## Project Structure

- `/frontend`: The Create React App for the user-facing website.
- `/functions`: The Node.js project for Firebase Cloud Functions.
- `firebase.json`: Configuration for Firebase deployment.

## Setup Instructions

### 1. Firebase Project Setup

1.  **Create a Firebase Project:** Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
2.  **Add a Web App:** In your project dashboard, click the web icon (`</>`) to add a new web app. Note down the `firebaseConfig` object provided.
3.  **Enable Firestore:** In the "Build" section of the left menu, click on "Firestore Database" and create a database. Start in "production mode".
4.  **Create a `waitlist` Collection:** In the Firestore UI, create a new collection named `waitlist`.

### 2. Frontend Configuration

1.  **Install Dependencies:**
    ```bash
    cd frontend
    npm install
    ```
2.  **Create Environment File:** Create a `.env` file in the `frontend` directory by copying the example below.

    ```
    # Firebase Configuration
    REACT_APP_API_KEY="Your-API-Key"
    REACT_APP_AUTH_DOMAIN="Your-Auth-Domain"
    REACT_APP_PROJECT_ID="Your-Project-Id"
    REACT_APP_STORAGE_BUCKET="Your-Storage-Bucket"
    REACT_APP_MESSAGING_SENDER_ID="Your-Messaging-Sender-Id"
    REACT_APP_APP_ID="Your-App-Id"

    # URL for the deployed Cloud Functions
    # You can get this from the Firebase console after deployment
    REACT_APP_JOIN_WAITLIST_URL="Your-Cloud-Function-URL-for-joinWaitlist"
    REACT_APP_GET_WAITLIST_URL="Your-Cloud-Function-URL-for-getWaitlist"
    ```

3.  **Fill in Firebase Config:** Replace the placeholder values in `.env` with the `firebaseConfig` values from when you created your web app.

### 3. Backend Configuration

1.  **Install Dependencies:**
    ```bash
    cd functions
    npm install
    ```
2.  **Set Environment Variables:** You need to configure environment variables for the cloud functions to use Resend for sending emails and an admin password. Use the Firebase CLI for this.

    First, get an API key from [Resend](https://resend.com).

    Then, install the Firebase CLI if you haven't already:
    ```bash
    npm install -g firebase-tools
    ```

    Then, log in and set the configuration variables. Replace the placeholder values with your actual credentials.
    ```bash
    firebase login

    # Set your Resend API Key
    firebase functions:config:set resend.api_key="YOUR_RESEND_API_KEY"

    # Set the password for the admin page
    firebase functions:config:set admin.password="YOUR_SUPER_SECRET_PASSWORD"
    ```

### 4. Deployment

Once all configurations are set, you can deploy the entire project (hosting and functions) with a single command from the root directory.

1.  **Build the React App:**
    ```bash
    cd frontend
    npm run build
    cd ..
    ```
2.  **Deploy to Firebase:**
    ```bash
    firebase deploy
    ```

This will deploy the frontend to Firebase Hosting and the backend functions to Cloud Functions. After deployment, make sure to update the function URLs in your `frontend/.env` file and re-build/re-deploy if necessary.
