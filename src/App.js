import React, { useState } from 'react';
import './App.css';
import { Grid, TextField, Card, Typography, CardContent, Button, MenuItem, Select, FormControl, InputLabel, TextareaAutosize } from '@mui/material';
import { inputFormElement } from './formElement';

function App() {
  const [formData, setFormData] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="App">
      <Grid style={{ padding: "80px 5px 0 5px" }}>
        <Card style={{ maxWidth: 550, margin: "0 auto" }}>
          <CardContent>
            <Typography variant="h4" color="primary">
              Project Requirements Survey
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Please fill out this survey about your project needs
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={4}>
                {inputFormElement.map((input, index) => {
                  const { id, label, type, required, placeholder, options } = input;
                  return (
                    <Grid key={index} xs={12} sm={6} item>
                      {type === 'text' || type === 'email' ? (
                        <TextField
                          id={id}
                          name={id}
                          label={label}
                          type={type}
                          required={required}
                          placeholder={placeholder}
                          value={formData[id] || ''}
                          onChange={handleChange}
                          fullWidth
                          variant="outlined"
                        />
                      ) : type === 'select' ? (
                        <FormControl fullWidth variant="outlined" required={required}>
                          <InputLabel>{label}</InputLabel>
                          <Select
                            name={id}
                            value={formData[id] || ''}
                            onChange={handleChange}
                            label={label}
                          >
                            {options.map((option, i) => (
                              <MenuItem key={i} value={option.value}>
                                {option.label}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      ) : type === 'textarea' ? (
                        <TextField
                          id={id}
                          name={id}
                          label={label}
                          placeholder={placeholder}
                          required={required}
                          value={formData[id] || ''}
                          onChange={handleChange}
                          multiline
                          rows={4}
                          fullWidth
                          variant="outlined"
                        />
                      ) : null}
                    </Grid>
                  );
                })}
                <Grid container spacing={1}>
                  <Grid item xs={12} align="center">
                    <Button
                      style={{ margin: '10px' }}
                      type="reset"
                      variant="outlined"
                      color="primary"
                      onClick={() => setFormData({})} // Reset form
                    >
                      Reset
                    </Button>
                    <Button type="submit" variant="contained" color="primary">
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

export default App;
