const express = require("express");
const cors = require("cors");
const oracledb = require("oracledb");
const conectar = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/pokemons", async (req, res) => {

    try {

        const connection = await conectar();

        const result = await connection.execute(
            `SELECT 
                ID,
                NAME,
                TYPE1,
                TYPE2,
                HP,
                ATTACK,
                DEFENSE,
                SPATK,
                SPDEF,
                SPEED,
                HEIGHT,
                WEIGHT
             FROM POKEMON_USR.POKEMONS`,
            [],
            { outFormat: oracledb.OUT_FORMAT_OBJECT }
        );

        await connection.close();

        const dados = result.rows.map(p => ({
            id: p.ID,
            nome: p.NAME,
            tipo1: p.TYPE1,
            tipo2: p.TYPE2,
            hp: p.HP,
            attack: p.ATTACK,
            defense: p.DEFENSE,
            spatk: p.SPATK,
            spdef: p.SPDEF,
            speed: p.SPEED,
            height: p.HEIGHT,
            weight: p.WEIGHT
        }));

        res.json(dados);

    } catch (err) {

        console.error(err);
        res.status(500).json({ erro: err.message });

    }

});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});
