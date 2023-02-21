const express = require("express");
const app = express();
// console.dir(app);
app.use((req, res) => {
    console.log("We got a request!!")
    res.send("We got your Request, Sargent :0")
}
)
app.listen(3000, () => {
    console.log("We are listening on port 3000!");
})
