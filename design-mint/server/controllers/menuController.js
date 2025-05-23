import { pool } from "../db.js";

export const getmenus = async (req,res) => {
    try {
        const result = await pool.query('SELECT * FROM menus ORDER BY id');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};