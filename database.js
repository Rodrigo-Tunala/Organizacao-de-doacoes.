const sqlite3 = require('sqlite3')

const { open } = require ('sqlite')

const creatDb = async () => {

    const db = await open({
        filename: './database.db',
        driver: sqlite3.Database

    })

    await db.exec(`
        CREATE TABLE IF NOT EXISTS donation_point (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL UNIQUE,
            email TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL,
            address TEXT NOT NULL,
            city TEXT NOT NULL,
            neighborhood TEXT NOT NULL,
            phone TEXT NOT NULL UNIQUE,
            food_status TEXT  DEFAULT 'baixo' CHECK( food_status IN ('baixo', 'médio', 'alto') ),
            water_status TEXT  DEFAULT 'baixo' CHECK( water_status IN ('baixo', 'médio', 'alto') ),
            clothes_status TEXT  DEFAULT 'baixo' CHECK( clothes_status IN ('baixo', 'médio', 'alto') ),
            hygiene_status TEXT  DEFAULT 'baixo' CHECK( hygiene_status IN ('baixo', 'médio', 'alto') ),
            remedy_status TEXT  DEFAULT 'baixo' CHECK( remedy_status IN ('baixo', 'médio', 'alto') )
        )
        
        `)

    console.log('Tabela de ponto de doação criada com sucesso!')


    const checking = await db.get(`SELECT * FROM donation_point`)

    if (!checking) {
        await db.exec(`
            INSERT INTO donation_point (name, email, password, address, city, neighborhood, phone)
            VALUES(
                'Igreja',
                'igreja@gmail.com',
                '******',
                'Rua Igreja, 123',
                'Ficticia',
                'Igrejinha',
                '91234-5678'
            ),
            (
                'Escola',
                'escola@gmail.com',
                '******',
                'Rua Escola, 456',
                'Ficticia',
                'Escolinha',
                '98765-4321'
            ),
            (
                'Ginásio',
                'ginasio@gmail.com',
                '******',
                'Rua Ginásio, 789',
                'Ficticia',
                'Ginásinho',
                '91597-5364'
            ),
            (
                'Teatro',
                'teatro@gmail.com',
                '******',
                'Rua Teatro, 159',
                'Ficticia',
                'Teatrinho',
                '94635-7951'
            )

            `)


    }else {
        console.log('Dados já existe no banco de dados')
    }

    return db;
}

module.exports = { creatDb };