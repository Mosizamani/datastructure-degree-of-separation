const express = require('express')
const cors = require('cors')
const SocialNetwork = require('./network')

const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json())

app.use(express.static('front-end'))

// Create a new instance of the social network
const network = new SocialNetwork();

// Add individual to the network
app.post('/individual', (req, res) => {
  const { name } = req.body;
  network.addIndividual(name);
  res.status(201).send({ message: `Added individual ${name} to the network.` });
});

// Add friendship between two individuals
app.post('/friendship', (req, res) => {
  const { person1, person2 } = req.body;
  network.addFriendship(person1, person2);
  res.status(201).send({ message: `Established friendship between ${person1} and ${person2}.` });
});

// Calculate degrees of separation
app.get('/degrees-of-separation', (req, res) => {
  const { start, target } = req.query;
  const degree = network.calculateDegreesOfSeparation(start, target);
  if (degree === -1) {
    res.status(404).send({ message: 'No connection found between the individuals.' });
  } else {
    res.status(200).send({ degreesOfSeparation: degree });
  }
});

// Update individual details
app.put('/individual', (req, res) => {
  const { oldName, newName } = req.body;
  network.updateIndividual(oldName, newName);
  res.status(200).send({ message: `Updated individual ${oldName} to ${newName}.` });
});

// Display the current network (for testing/debugging)
app.get('/network', (req, res) => {
  network.displayNetwork();
  res.status(200).send({ message: 'Check console for network details.' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Social network app listening at http://localhost:${PORT}`);
});
