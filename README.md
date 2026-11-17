# Journey Journal — Backend API

## Key Features

- **Authentication & Authorization (`auth`):** User registration, login, and JWT-based session protection.
- **User Management (`user`):** Profile creation, updating user details, and retrieving user data.
- **Posts Management (`post`):** Full CRUD operations for creating, reading, updating, and deleting travel posts.
- **Interactive Comments (`comments`):** Adding, viewing, and managing comments with support for replies to specific messages.
- **Awards & Gamification (`award`, `userAward`):** System for creating platform awards and assigning achievements to users.

## Getting Started (Local Setup)

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Hopelesszz/travel-back.git
   cd travel-back
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   Create a `.env` file in the root directory and add your MongoDB URI and token secret:
   ```env
   MONGO=your_mongodb_connection_string
   JWT=your_secret_token_key
   ```

4. **Run the server:**
   ```bash
   node app.js
   ```
   *(Or use `npm start` / `npm run dev` depending on the scripts in `package.json`)*

The server will start on `http://localhost:8800`.

## Related Repositories

- **Frontend Repository:** [travel-front](https://github.com/Hopelesszz/travel-front.git)
