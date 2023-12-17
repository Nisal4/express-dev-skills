const skills = [
    { id: 1, name: 'JavaScript', level: 'Advanced' },
    { id: 2, name: 'Node.js', level: 'Intermediate' },
    // Add more skills as needed
];

module.exports = {
  getAll,
  getOne
};

function getAll() {
  return skills;
}

function getOne(id) {
  return skills.find(skill => skill.id === parseInt(id));
}