const skills = [
    { id: 1, name: 'JavaScript', level: 'Advanced', done: true },
    { id: 2, name: 'Node.js', level: 'Intermediate', done: true },
    { id: 3, name: 'React', level: 'Beginner', done: true },
    { id: 4, name: 'Python', level: 'Advanced', done: true },
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
};

function getAll() {
  return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find((skill) => skill.id === id);
}

function create(skill) {
    skill.id=Date.now() % 100000;
    skill.done = true;
    skill.level = 'Beginner';
    skills.push(skill);
}

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex((skill) => skill.id === id);
    skills.splice(idx, 1);
}