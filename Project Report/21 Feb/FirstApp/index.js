const express = require("express");
const app = express();
// console.dir(app);
// app.use((req, res) => {
//     console.log("We got a request!!")
//     res.send("We got your Request, Sargent :0")
// }
// )

app.get('/', (req, res) => {
    res.send('<h1>We are on Home Page</h1>')
})

app.get('/locker/:docs', (req, res) => {
    const { docs } = req.params
    res.send(`<h1>We are looking for ${docs} in locker</h1>`)
})
app.get('/locker', (req, res) => {
    res.send('<h1>We are in locker</h1>')
})

app.get('/Community', (req, res) => {
    res.send('<h1>We are on Community Page </h1>')
})

app.get('/Community/search', (req, res) => {
    const { q, color } = req.query;
    if (!q) {
        res.send(6969);
    }
    res.send(`<h1>We are on Community Page searching for ${q} and color is ${color} </h1>`)
})

app.get('*', (req, res) => {
    res.send('<h1>We don\'t belong <b>Here</b></h1>')
})


app.listen(3000, () => {
    console.log("We are listening on port 3000!");
})
