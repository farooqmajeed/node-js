const express = require("express");

const Joi  = require('joi');

const app = express();

//  added express middleware
app.use(express.json());

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

function validateCourse(course) {
  const scheme = {
    name : Joi.string().min(3).required()
   }
  
   return Joi.validate(course, scheme);
}
// added new course to the course array

app.post("/api/courses", (req, res) => {
  // input validation
  // if(!req.body.name || req.body.name.length > 3){
  //   return res.status(400).send({
  //     message: "Please provide a valid name",
  //   });
  // }
//  const scheme = {
//   name : Joi.string().min(3).required()
//  }
  const {error} = validateCourse(req.body);
//  const result = Joi.validate(req.body, scheme);
 if(error){
  res.status(400).send(result.error.detail[0].message);
 }

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  }
  courses.push(course);
  res.send(course);
});

//update api
app.put('/api/courses/:id', (req, res) => {

  const course = courses.findIndex((c) => c.id === req.params.id);
  if (course <= -1) res.status(404).send("The course is not available");
  const {error} = validateCourse(req.body);
   if(error){
    res.status(400).send(result.error.detail[0].message);
   }


  course.name = req.body.name;
  res.send(course);

});

app.delete('/api/courses/:id', (req, res) => {
  const course = courses.findIndex((c) => c.id === req.params.id);
  if (course <= -1) res.status(404).send("The course is not available");

  const index = courses.findIndex(course);
  courses.splice(index, 1);
  res.status(course);
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
