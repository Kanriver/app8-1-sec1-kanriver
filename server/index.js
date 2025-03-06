const express = require('express')
const app = express()
const port = 8000
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('public'))

app.post('/api/form-post', (request, response) => {
    let name = request.body.name || ''
    let email = request.body.email || ''
    let msg = request.body.message || ''
    let text =`
        <table border="1"
            <caption>ข้อมูลที่ส่งขึ้นไป</caption>
            <tr><td>name:</td><td>${name}</td></tr>
            <tr><td>email:</td><td>${email}</td></tr>
            <tr><td>message:</td><td>${msg}</td></tr>
    `

    response.send(text)
})

app.listen(port, () => {
    console.log('Server listening on port' + port)
})