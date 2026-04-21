const express = require('express');

const { creatDb } = require('./database');

const cors = require('cors');

const app = express();



app.use(cors());

app.use(express.json());



app.get("/", (req, res) => {
    res.send(`
        <body>
            <h1>Olá Mundo</h1>
            <h2>Bemvindo a API de Doaçoes</h2>
            <p>Use os seguintes endpoints para interagir com a API: /donation_point e /donation_point/:id</p>
        </body>
        `);

});

app.get("/donation_point", async (req, res) => {

    console.log('Lista de locais de doação');

    const db = await creatDb();

    const alldonation_point = await db.all('SELECT * FROM donation_point');

    res.json(alldonation_point);
});

app.post("/donation_point", async (req, res) => {

    const {name,email, password, address, city, neighborhood, phone} = req.body;

    const db = await creatDb();

    await db.run(`
        INSERT INTO donation_point
        (
        name, 
        email, 
        password, 
        address, 
        city, 
        neighborhood, 
        phone)

        VALUES 
        (
        ?, ?, ?, ?, ?, ?, ?
        )`,
        [
            name, 
            email, 
            password, 
            address, 
            city, 
            neighborhood, 
            phone
        ]
    
    );

    res.send(`Ponto de doação criado`)

});

app.put("/donation_point/:id", async (req, res) => {

    const { id } = req.params;

    const {food_status, water_status, clothes_status, hygiene_status, remedy_status} = req.body;

    const db = await creatDb();

    await db.run(`
        UPDATE donation_point SET
        
        food_status = ?,
        water_status = ?, 
        clothes_status = ?, 
        hygiene_status = ?, 
        remedy_status = ?
        WHERE id = ?`,
        
        [
            food_status, 
            water_status, 
            clothes_status, 
            hygiene_status, 
            remedy_status,
            id
        ]
    );

    res.send(`Doações atuaçizada com sucesso!`)

});

app.delete("/donation_point/:id", async (req, res) => {

    const { id } = req.params;

    const db = await creatDb();

    await db.run(`DELETE FROM donation_point WHERE id = ? `, [id]);

    res.send(`Ponto de doação deletado.`);


});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    creatDb();
});