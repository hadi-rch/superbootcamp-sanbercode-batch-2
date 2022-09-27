// const express = require('express')
// const app = express()
// const port = 3000

// app.use(express.static('public'))

// app.get('/', (req, res) => {
//   res.send(
//     `Hello World!`
//   )
// })

// app.get('/users',(req, res) => {
//   let name = req.params.name
//   if (name) {
//     res.send(`Hello ${name}!`)
//   } else {
//     res.send(`Hello Users!`)
//   }}
//   )
// app.get('/users/:slug',(req, res) => {
//   let slug = req.params.slug
//   console.log(slug)
//   if (slug) {
//     res.send(`Hello ${slug}!`)
//   } else {
//     res.send(`Hello Users!`)
//   }}
//   )

//   app.listen(port,() => {
//     console.log(`Example App listening on port ${port}`)
//     })