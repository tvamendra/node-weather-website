const express = require('express')
const path = require('path')
const hbs = require('hbs')
const { title } = require('process')
const forecast = require('./utils/forecast')

const app = express()


//define paths
// console.log(path.join(__dirname,'../public'));
const publicDir=path.join(__dirname,'../public')
const viewsPath=path.join(__dirname,'../templates/views')
const partialsPath= path.join(__dirname, "../templates/partials")

// setup handlebars for express
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath)


// setup directory to app
app.use(express.static(publicDir))



app.get('', (req, res) => {
    res.render('index',{
        title: "Weather App",
        name: "Tvamendra"
    })
})

app.get('/help', (req,res) => {
    res.render('help',{
        helpText: "This is some helpful text for example.",
        title: "Help",
        name: "Tvamendra"

    })
})

app.get('/about',(req,res) =>{
    res.render('about',{
        title: "About me",
        name: "Tvamendra"
    })
})



app.get('/weather',(req,res) =>{
    if(!req.query.place){
        return res.send({
            error: "Place not passed in query param"
        })
    }
    Status = forecast(req.query.place, (error,data) =>{
        if(error){
            res.send({
                error: error
            })
        }
        else{
            res.send({
                location: req.query.place,
                status:data,
            })
        }
    })
    // res.send({
    //     place: req.query.place
    // })
})

app.get('/products', (req,res) => {
    // console.log(req.query);
    if (!req.query.search) {
        return res.send({
            error: "You must provide a search term"
        })
    }

    res.send({
        products: []
    })
})

app.get('/help/*',(req,res) => {
    res.render('404',{
        title: "404",
        name: "Tvamendra",
        errorMessage: "help article not found"
    })
})

app.get('*',(req,res) => {
    res.render('404',{
        title: "404",
        name: "Tvamendra",
        errorMessage: "page not found"
    })
})


// app.com
// app.com/help
// app.com/about

app.listen(3000, () => {
    console.log('Server is up on port 3000');
})