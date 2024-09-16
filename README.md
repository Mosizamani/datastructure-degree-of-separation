# Degrees of Separation

This project calculates the degrees of separation between individuals in a social network using a breadth-first search algorithm. Users can add individuals, establish friendships, and calculate the shortest connection between two people.

## Features
- Add individuals to the network
- Establish friendships
- Calculate degrees of separation
- Update individual names

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Mosizamani/datastructure-degree-of-separation.git
cd your-repository-name

Usage
Add an individual: POST /individual
Add a friendship: POST /friendship
Calculate degrees of separation: GET /degrees-of-separation

Technologies Used:
Node.js
Express.js
JavaScript

npm install express
npm install --save-dev nodemon

Start the server:
npm start

------------------------------
#### Project Summary

**Challenges:**
1. **Handling User Input Validation:** One challenge was ensuring that all inputs were valid before performing actions like adding individuals or creating friendships. The solution was to implement validation both on the frontend and backend to prevent invalid data entry.
2. **Efficient Algorithm for Degrees of Separation:** Implementing an efficient algorithm to calculate degrees of separation was crucial. Using a breadth-first search (BFS) ensured optimal performance for this task, but ensuring it worked across edge cases (like isolated individuals) was a challenge.
3. **Managing Network Updates:** Ensuring the social network remained consistent when individuals were renamed was a bit tricky, especially ensuring all friendships were updated correctly. A systematic approach to updating the graph’s structure helped address this.

**Wins:**
1. **Algorithm Design:** Implementing the BFS for finding degrees of separation was a big win. It provided a clear and efficient way to solve the problem while ensuring optimal performance even with larger networks.
2. **Code Structure and Modularity:** The code was well-organized into classes and functions, improving maintainability and scalability. The SocialNetwork class encapsulated the logic well, and the API endpoints were straightforward.
3. **User-Friendly Frontend:** The simple but functional frontend allowed easy interaction with the API, providing a good user experience with input validation and responsive design.

**Conclusion:**
Overall, the project was a great success in both implementing the core algorithm and structuring the backend and frontend interaction smoothly. It demonstrates a strong understanding of JavaScript, algorithm design, and web development best practices.

