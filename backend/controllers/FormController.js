const express = require('express');
const { createSession } = require('../utils/sessionManager');


const getForm = (req, res) => {
    if (!req.session.form) {
        return res.status(404).json({ error:'Form not found in session' });
    }
    res.json({ message:'Form retrieved successfully!', profile: req.session.form });
};

const setForm = (req, res) => {
    const { name, age, gender, feelings } = req.body;

    if (!name || !age || !gender || !feelings) {
        return res.status(400).json({ error:'Fill all the required fields' });
    }
    
  try {
    const sessionId = createSession(req.body);
     res.json({ sessionId, message: 'text stored' });
    // Store form in the session
  }
  catch (err) {
    res.status(500).json({ message: 'no session id created ', error: err.message });
  }
   
};

module.exports = {setForm,getForm};

