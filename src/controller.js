const studentsList = [
  {
    pos: 1,
    email: "mdvalarezo@utpl.edu.ec",
    name: "Mario Valarezo",
  },
  {
    pos: 2,
    email: "chjuca@utpl.edu.,ec",
    name: "Carlos Juca",
  },
  {
    pos: 3,
    email: "rjbalcazar@utpl.edu.ec",
    name: "Renato Balcazar",
  },
];

const groupName = 1;

function getStudents(req, res) {
  res.status(200).json({
    status: 200,
    id: groupName,
    students: studentsList,
  });
}

function notFound(req, res) {
  res.status(404).json({
    status: 404,
    message: "El recurso que buscas no existe.",
  });
}

/**
 * Return the studen from the list using the id
 */
function getStudentById(req, res) {
  const { id } = req.params;
  const student = studentsList.find((student) => student.pos == id);
  if (student) {
    res.status(200).json({
      pos: student.pos,
      email: student.email,
      name: student.name,
    });
  } else {
    notFound(req, res);
  }
}

  
  

module.exports = { getStudents, getStudentById, notFound };
