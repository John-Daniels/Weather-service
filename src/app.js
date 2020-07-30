const path = require('path')
const express = require('express')
const hbs = require('hbs')
const request = require('request')
const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')

const app = express()
const port = process.env.PORT || 3000

//directories
const publicDir = path.join(__dirname, '../public')
const viewsDir = path.join(__dirname, '../templates/views')
const partialsDir = path.join(__dirname, '../templates/partials')
// const helpDir = path.join(__dirname, '../public')

// setup hbs engine and views Dir
app.set("view engine", 'hbs')
app.set('views', viewsDir)
hbs.registerPartials(partialsDir)

//setup static dir to serve
app.use(express.static(publicDir))

app.get('', (req, res)=> {
    res.render('index', {
        title: 'weather app',
        name: 'HINIX STUDIO\'s'
    })
})
app.get('/about',(req,res) => {
    res.render('about', {
        title: 'About Us',
        name: 'HINIX STUDIO\'s'
    })
})
// app.get('',(req, res) => {
//     res.send('Hello Express!')
// })

// app.get('/help',(req,res) => {
//     app.use(express.static(helpDir))
//     // res.send('Help Page!')
// })

// app.get('/about',(req,res) => {
//     res.send('<h1>About Page!</h1>')
// })
app.get('/help', (req, res) => {
    res.render('help', {
        title: 'help Page!',
        name: 'HINIX STUDIO\'s'
    })
})

app.get('/weather',(req,res) => {
    // try{

    // } catch (e) {
    //     console.log(e)
    // }
    if(!req.query.address) {
        return res.send({
            error: 'You must provide an Address term'
        })
    }
    
    geocode(req.query.address, (error, { latitude, longtitude, location } = {}) => {
        if(error) {
            return res.send({ error })
        }

        forecast(latitude, longtitude, (error, forecastData) => {
            if(error) {
                return res.send({ error })
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })

        })

    })
})


app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        err: 'Help Article Not Found',
        name: 'HINIX STUDIO\'s'
    })
})
app.get('*',(req, res) => {
    res.render('404', {
        title: '404',
        err: 'Page Not Found',
        name: 'HINIX STUDIO\'s'
    })
})

app.listen(port, () => {
    console.log(`server is up on port ${port}.`)
})