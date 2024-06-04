# Smart Search API

This is a Node.js project that provides an API to extract entities such as cities, brands, dish types, and diets from a given search term. The entities are stored in a MySQL database.

## Features

- Extracts entities from a search term.
- Supports cities, brands, dish types, and diets.
- Optimized for performance.
- Uses Sequelize for database interactions.

## Getting Started

### Prerequisites

- Node.js (>= 18.x)
- MySQL

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Ironmandeveloper/Smart-Search-Algorithm.git
    cd Smart-Search-Algorithm
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Configure the database:

    Create a MySQL database and update the `config/config.json` file with your database credentials:

    ```json
    {
      "development": {
        "username": "your_username",
        "password": "your_password",
        "database": "smart_search_dev",
        "host": "127.0.0.1",
        "port":"3306",
        "dialect": "mysql"
      }
    }
    ```

4. Run the database migrations:

    ```bash
    npx sequelize-cli db:migrate
    ```

5. Seed the database with initial data:

    ```bash
    npx sequelize-cli db:seed:all
    ```

### Running the Server

Start the server:

```bash
npm run start

The server will be running on http://localhost:3000.

API Usage
Extract Entities
Endpoint: /api/extract

Method: GET

Query Parameter: searchTerm

Example: 

GET /api/extract?searchTerm=McDonald's in London

Response:

[
  {
    "city": { "id": 1, "name": "London" },
    "brand": { "id": 4, "name": "McDonald's" }
  }
]

Project Structure:

app.js: Main entry point of the application.
models/: Contains Sequelize models.
routes/: Contains route definitions.
seeders/: Contains database seed files.
migrations/: Contains database migrations files.
utils/: Contains utility functions (e.g., extractEntities.js).
config/: Contains environment configuration json files.

License:

This project is licensed under the MIT License - see the LICENSE file for details.

