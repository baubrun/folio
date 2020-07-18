const fs = require("fs")
const path = require("path")

/*
    <div class="col-12 col-md-6 my-3">
        <a href="https://relaxed-clarke-539d8c.netlify.app/">
            <img class="img-fluid rounded folios" src="./images/rt.PNG" alt="Resto">
        </a>
        <h1>Resto</h1>
        <p class="text-muted">Responsive frontend for a restaurant. 80% complete...</p>
    </div>

*/

const dirPath = path.join(__dirname, "images")

const imageFileNames = fs.readdirSync(dirPath)

console.log(imageFileNames)