# Backend for Giphy Firebase App

This is the backend service for the Giphy Firebase App. It handles authentication, data storage, and management of GIFs.
# FRONTEND APP : https://giphy-firebase-frontend-app.vercel.app/signup

- **Landing Page**: [https://giphy-firebase-frontend-app.vercel.app/](https://giphy-firebase-frontend-app.vercel.app/)
  ![Landing Page](https://github.com/user-attachments/assets/d4d0f6a9-84b5-4aa1-a950-e55be1c8324a)
- **Sign In**: [https://giphy-firebase-frontend-app.vercel.app/signin](https://giphy-firebase-frontend-app.vercel.app/signin)
  ![Sign In Page](https://github.com/user-attachments/assets/828b2268-7737-4d2c-9ad2-feb8973a1588)
- **Sign Up**: [https://giphy-firebase-frontend-app.vercel.app/signup](https://giphy-firebase-frontend-app.vercel.app/signup)
  ![Sign Up Page](https://github.com/user-attachments/assets/b2a617ba-9864-47f7-ae0f-e593fa298da1)
- **Bookmarks**: [https://giphy-firebase-frontend-app.vercel.app/bookmarkss](https://giphy-firebase-frontend-app.vercel.app/bookmarkss)
  ![Bookmarks Page](https://github.com/user-attachments/assets/6f9a6dc7-620a-4842-b65f-37e4cf1d7b65)
## Endpoints

- **Sign In**: `POST /api/signin`
  - **Description**: Authenticates users and returns a JWT token.
  - **Example Request**:
    ```json
    {
      "email": "user@example.com",
      "password": "password123"
    }
    ```
- **Sign Up**: `POST /api/signup`
  - **Description**: Registers new users and returns a JWT token.
  - **Example Request**:
    ```json
    {
      "email": "user@example.com",
      "password": "password123",
      "name": "John Doe"
    }
    ```

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/giphy-firebase-backend.git
    ```
2. Navigate to the project directory:
    ```bash
    cd giphy-firebase-backend
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the server:
    ```bash
    npm start
    ```

## Environment Variables

Ensure to set up the following environment variables in a `.env` file:
- `PORT` - The port on which the server runs.
- `FIREBASE_CONFIG` - Your Firebase configuration object.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, please reach out to [your-email@example.com](mailto:your-email@example.com).
