const express = require('express');
const router = express.Router();


router.get('/gg', async (req, res) => {
    try {
     console.log("hello world");
     res.send('Hello World!');
    
     
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
