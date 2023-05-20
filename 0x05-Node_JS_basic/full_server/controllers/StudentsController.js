const readDatabase = require('../utils.js')
class StudentController {
  getAllStudents(request, response) {
    readDatabase('../../database.csv').then((data) => {
      response.status(200)
      message = `This is the list of our students\nNumber of students in FIELD: ` + data.length + '\nList: ' + data
      response.send(message)
    }.catch ((error) => {
      response.status(500)
      response.send('Cannot load the database')
    }
  }
}
