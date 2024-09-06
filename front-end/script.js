const apiUrl = 'http://localhost:3000';

// Add individual to the network
async function addIndividual() {
  const name = document.getElementById('individualName').value;

  if (name.trim() === '') {
    alert('Please enter a valid name.');
    return;
  }

  const response = await fetch(`${apiUrl}/individual`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name }),
  });

  if (response.ok) {
    alert(`Added individual ${name}`);
    document.getElementById('individualName').value = '';
  } else {
    alert('Error adding individual.');
  }
}

// Establish friendship between two individuals
async function addFriendship() {
  const person1 = document.getElementById('friend1').value;
  const person2 = document.getElementById('friend2').value;

  if (person1.trim() === '' || person2.trim() === '') {
    alert('Please enter valid names for both individuals.');
    return;
  }

  const response = await fetch(`${apiUrl}/friendship`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ person1, person2 }),
  });

  if (response.ok) {
    alert(`Established friendship between ${person1} and ${person2}`);
    document.getElementById('friend1').value = '';
    document.getElementById('friend2').value = '';
  } else {
    alert('Error establishing friendship.');
  }
}

// Calculate degrees of separation between two individuals
async function calculateDegrees() {
  const startPerson = document.getElementById('startPerson').value;
  const targetPerson = document.getElementById('targetPerson').value;

  if (startPerson.trim() === '' || targetPerson.trim() === '') {
    alert('Please enter valid names for both individuals.');
    return;
  }

  const response = await fetch(`${apiUrl}/degrees-of-separation?start=${startPerson}&target=${targetPerson}`);

  const resultElement = document.getElementById('result');
  if (response.ok) {
    const data = await response.json();
    resultElement.textContent = `Degrees of separation: ${data.degreesOfSeparation}`;
  } else {
    resultElement.textContent = 'No connection found between the individuals.';
  }
}
