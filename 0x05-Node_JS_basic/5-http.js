const http = require('http');
const countStudents = require('./3-read_file_async');

const port = 1245;

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2])
      .then(data => {
        res.write(data.join('\n'))
        res.end()
        // try {
        // const data = await countStudents(process.argv[2]);
        //res.write(data.toString());
      })
      .catch(error => {
        res.end(error.message);
      });
  } else {
    res.end();
  }
});
app.listen(port);
module.exports = app;
