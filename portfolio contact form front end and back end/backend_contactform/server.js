const express = require('express');
const Formdata = require('./Model/form.model');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/formdata', async(req,res)=>{



  try {

const formdata = await Formdata.create(req.body)

res.status(200).json(formdata)

  } catch (error) {

      console.log(error.message)

      res.status(500).json({message : error.message})

  }

})


// Get all form data
app.get('/formdata', async (req, res) => {
  try {
    const formdata = await Formdata.find();
    res.status(200).json(formdata);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
});

// Get one form data by ID
app.get('/formdata/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const formdata = await Formdata.findById(id);
    if (!formdata) {
      return res.status(404).json({ message: 'Form data not found' });
    }
    res.status(200).json(formdata);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
});

// Update form data by ID
app.put('/formdata/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const updatedFormdata = await Formdata.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedFormdata) {
      return res.status(404).json({ message: 'Form data not found' });
    }
    res.status(200).json(updatedFormdata);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
});



// Delete form data by ID
app.delete('/formdata/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedFormdata = await Formdata.findByIdAndRemove(id);
    if (!deletedFormdata) {
      return res.status(404).json({ message: 'Form data not found' });
    }
    res.status(200).json({ message: 'Form data deleted successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect('mongodb://127.0.0.1:27017/form')
  .then(() => {
    console.log('Mongo DB Connected!');
    app.listen(3000, () => {
      console.log('Node Api connected');
    });
  })
  .catch((error) => {
    console.log(error);
  });
