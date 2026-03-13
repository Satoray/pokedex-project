const oracledb = require("oracledb");
const path = require("path");

async function conectar() {

    try {

        const connection = await oracledb.getConnection({

            user: "POKEMON_USR",
            password: "Sato162501Ra",

            connectString: "pokedex_high",

            configDir: path.join(__dirname, "wallet"),
            walletLocation: path.join(__dirname, "wallet"),
            walletPassword: "Sato162501Ra"

        });

        console.log("Conectado ao Oracle!");

        return connection;

    } catch (err) {

        console.error("Erro ao conectar:", err);

    }

}

module.exports = conectar;