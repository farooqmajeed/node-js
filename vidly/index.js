const express = require("express");
const Joi = require("joi");
const app = express();

app.use(express.json());

const genres = [
  {
    id: 1,
    name: "Action",
  },
  {
    id: 2,
    name: "Adventure",
  },
  {
    id: 3,
    name: "Animation",
  },
];

function genresValidator(genres) {
    const schema = {
        name: Joi.string().min(3).required()
    }
   return schema.validate(genres);

    // return Joi.validate({}, schema); 
}

app.get('/genres', (req, res) => {
    res.send(genres)
});

app.post('/add-genre', (req, res) => {
    const {error} = genresValidator(req.body);
    if (error) return res.status(404).send(error.details[0].message);
    const genre = {
        id: genres.length + 1,
        name: req.body.name
    }
    genres.push(genre);
    res.send(genres);
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});