const express = require("express");

const app = express();

// we have four methods

const courses = [
  { id: "1", name: "Course1" },
  { id: "2", name: "Course2" },
  { id: "3", name: "Course3" },
];

// app.get() fetch data from server
// app.post() send data to server
// app.put() update data to server
// app.delete() delete data from server
// app.patch() update data to server

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

// for the  specific id of course
app.get("/api/courses/:id", (req, res) => {
  console.log(req.params);
  const course = courses.find((c) => c.id === req.params.id);
  console.log("====", course);
  if (!course) res.status(404).send("The course is not available");
  res.send(course);
});

// for specific params in url
// app.get('/api/post/:year/:month', (req, res) => {
//   res.send(req.params.id); // return send { year: '2023', month: '1',}
// });
// // for specific query in url
// app.get('/api/post/:year/:month', (req, res) => {
//   res.send(req.query); // return send {sortBy:'name'}
// });
app.listen(3000, () => {
  console.log("Server");
});
