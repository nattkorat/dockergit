const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(
        {
            "id": 1,
            "name": "natt"
        }
    )
})

app.get('/view', (req, res) =>{
    return res.send({
        "Title": "new push from local",
        "Content": "To test is it work or not"
    })
})

app.listen(5000, () =>{
    console.log("listening on port 5000");
})