const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database("./src/database/database.db")

// db.serialize(() => {

//     db.run(`
//       CREATE TABLE  IF NOT EXISTS  places (
//           id INTEGER PRIMARY KEY AUTOINCREMENT,
//           image TEXT,
//           name TEXT,
//           address TEXT,
//           address2 TEXT,
//           state TEXT,
//           city TEXT,
//           items TEXT
//       );     
//     `)
//     const query = `
//      INSERT INTO places (
//          image, name,  address, address2, state, city, items
//      ) VALUES (
//          ?,?,?,?,?,?,?
//      );`

//     const values = [
//         "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//         "Colectoria",
//         "Guilhereme jambala, vila jardim america",
//         "Nº 260",
//         "SC",
//         "Rio do Sul",
//         "Resíduos Eletronicos,lampadas"
//     ]

//     function afterInsertData(err) {
//         if (err) {
//             return console.log(err)
//         }
//         console.log("Cadastrado com sucesso")
//         console.log(this)
//     }

//     db.run(query, values, afterInsertData)

//     //   db.all(`select * from places`, function(err, rows) {
//     //     if (err) {
//     //         return console.log(err)
//     //     }

//     //     console.log("Aqui estão seus registros")
//     //     console.log(rows)
//     //   })

//     //   db.run(`Delete from places where id = ? `, [1], function(err) {
//     //     if (err) {
//     //         return console.log(err)
//     //     }

//     //     console.log('Registro deletado com sucesso')
//     //   })
// })

module.exports =  db


