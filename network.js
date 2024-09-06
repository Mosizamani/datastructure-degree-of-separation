class SocialNetwork {
    constructor() {
      this.network = new Map();
    }
  
    // Add an individual to the network
    addIndividual(name) {
      if (!this.network.has(name)) {
        this.network.set(name, []);
      }
    }
  
    // Establish a friendship between two individuals
    addFriendship(person1, person2) {
      if (this.network.has(person1) && this.network.has(person2)) {
        this.network.get(person1).push(person2);
        this.network.get(person2).push(person1);
      } else {
        console.log("Both individuals must be part of the network.");
      }
    }
  
    // Calculate the degree of separation between two individuals using BFS
    calculateDegreesOfSeparation(start, target) {
      if (!this.network.has(start) || !this.network.has(target)) {
        return -1; // Return -1 if either person is not in the network
      }
  
      let visited = new Set();
      let queue = [[start, 0]]; // Queue stores [person, degree]
  
      while (queue.length > 0) {
        const [current, degree] = queue.shift();
  
        if (current === target) {
          return degree; // Return the degree of separation when target is found
        }
  
        if (!visited.has(current)) {
          visited.add(current);
          let friends = this.network.get(current);
  
          for (let friend of friends) {
            if (!visited.has(friend)) {
              queue.push([friend, degree + 1]);
            }
          }
        }
      }
  
      return -1; // Return -1 if no connection is found
    }
  
    // Update individual details (name)
    updateIndividual(oldName, newName) {
      if (this.network.has(oldName)) {
        const friends = this.network.get(oldName);
        this.network.delete(oldName);
        this.network.set(newName, friends);
  
        // Update all friends' lists
        for (let [person, friends] of this.network) {
          const index = friends.indexOf(oldName);
          if (index !== -1) {
            friends[index] = newName;
          }
        }
      }
    }
  
    // Display the network (for debugging or visualization)
    displayNetwork() {
      for (let [person, friends] of this.network) {
        console.log(`${person}: ${friends.join(", ")}`);
      }
    }
  }
  
  module.exports = SocialNetwork
  