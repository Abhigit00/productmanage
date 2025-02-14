const express = require('express');
const mongoose = require('mongoose');
const app = express();
const router = require('./router');
port = 4000;
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use('/api',router)


mongoose.connect('mongodb+srv://abhiramsv33:jowEY6r6vbGv4lvF@cluster0.vip4r.mongodb.net/product')
  .then(()=>{console.log("DB connected");
  })
  .catch(()=>{console.log("DB connection error");
  })

app.listen(port,()=>{console.log(`app running on ${port}`);
})





