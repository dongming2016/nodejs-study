const conn = require('../util/connection');
const uuidV4 = require('uuid/v4');

function getAll() {
    const sql = `select u_id as id, u_name as name from tbl_user_info`;
    const p = new Promise((resolve, rejects) => {
        conn.query(sql, function(err, result) {
            if (err) {
                console.log(`[INSERT ERROR] - ${err.message}`);
                rejects('error');
            }
            resolve(result);
        });
    });
    
    return p;
}

function saveHero(hero) {
    hero.id = uuidV4();
    const sql = `insert into tbl_user_info values('${hero.id}', '${hero.name}')`;
    const p = new Promise((resolve, rejects) => {
        conn.query(sql, function(err, result) {
            if (err) {
                console.log(`[INSERT ERROR] - ${err.message}`);
                rejects({});
            }
            resolve(hero);
        });
    });
    
    return p;
}

function deleteHero(id) {
    const sql = `delete from table tbl_user_info where u_id = ${id}`;
    const p = new Promise((resolve, rejects) => {
        conn.query(sql, function(err, result) {
            if (err) {
                console.log(`[DELETE ERROR] - ${err.message}`);
                rejects(null);
            }
            resolve('success!');
        });
    });
    
    return p;
}

module.exports = { getAll, saveHero, deleteHero };