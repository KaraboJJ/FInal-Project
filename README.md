# Streamflix Web App

A Netflix-style movie streaming app built with React and Firebase, featuring:

- User registration and login (Firebase Auth)
- Dummy movie list with embedded video player
- Protected dashboard for logged-in users
- Ready for PayFast R59/month integration

##  Setup Instructions

### 1. Install dependencies

npm install

### 2. Add Firebase Config

Replace values in `src/firebase.js` with your Firebase project credentials.

### 3. Run the App

npm run dev

### 4. Build for Production

npm run build

##  Authentication

- Firebase Email/Password auth enabled
- Wraps routes using context and `PrivateRoute`

## Payment (optional)

You can integrate PayFast using a subscribe button and redirect logic.

---

Enjoy your own Streamflix! 🎬
