const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { db, admin } = require("./firebase");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).send("All Signup fields are required");
    }

    // Create user in Firebase Authentication
    const userRecord = await admin.auth().createUser({
      name,
      email,
      password,
    });

    console.log("User Data:", {
      name: userRecord.displayName,
      email: userRecord.email,
    });

    // Store user data in Firestore
    await db
      .collection("giphy-app")
      .doc(userRecord.uid)
      .set({
        name: userRecord.displayName || "Anonymous", // Default value if undefined
        email: userRecord.email || "No Email", // Default value if undefined
        // Add other fields if needed
      });
    // Return success message along with user details
    res.status(201).json({
      message: "User Signed Up Successfully!",
      uid: userRecord.uid,
      name: userRecord.name,
      email: userRecord.email,
    });
  } catch (err) {
    console.log("SIGNUP ERROR", err.message);
    res.status(400).send("Error in SignUp");
  }
});

// SIGNIN
app.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send("Email and password are required");
    }

    // Sign in the user
    const userCredential = await admin.auth().getUserByEmail(email);
    if (!userCredential) {
      return res.status(401).send("Invalid email or password");
    }

    // Verify the password
    const userRecord = await admin
      .auth()
      .signInWithEmailAndPassword(email, password);

    // Generate a custom token
    const token = await admin.auth().createCustomToken(userRecord.uid);

    // Retrieve user details
    const userDetails = {
      uid: userRecord.uid,
      email: userRecord.email,
      name: userRecord.displayName || "Anonymous",
    };

    // Respond with token and user details
    res.status(200).json({
      token,
      ...userDetails,
    });
  } catch (err) {
    console.log("SIGNIN ERROR", err.message);
    res.status(400).send("Error in SignIn");
  }
});
//SIGNOUT
app.post("/signout", async (req, res) => {
  try {
    const { uid } = req.body;

    if (!uid) {
      return res.status(400).send("User ID is required to sign out.");
    }

    await admin.auth().revokeRefreshTokens(uid);

    res.status(200).json({
      message: "User signed out successfully, tokens revoked!",
    });
  } catch (err) {
    console.log("SIGNOUT ERROR", err.message);
    res.status(400).send("Error in SignOut");
  }
});

// Root endpoint
app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
