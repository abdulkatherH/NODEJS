const pool = require('./db');
    
const getItems = async (req, res) => {
  const result = await pool.query('SELECT * FROM employee');
  res.json(result.rows);
};

const getItemById = async (req, res) => {
  const id = req.params.id;
  const result = await pool.query('SELECT * FROM employee WHERE id = $1', [id]);
   if (result.rows.length === 0) {
      return res.status(404).send('Item not found');
   }
  res.json(result.rows[0]);
};

const createItem = async (req, res) => {
  const { name, description } = req.body;
  const result = await pool.query(
    'INSERT INTO employee (name, age) VALUES ($1, $2) RETURNING *',
    [name, description]
  );
  res.status(201).json(result.rows[0]);
};

const updateItem = async (req, res) => {
  const id = req.params.id;
  const { name, description } = req.body;
  const result = await pool.query(
    'UPDATE employee SET name = $1, age = $2 WHERE id = $3 RETURNING *',
    [name, description, id]
  );
  if (result.rows.length === 0) {
      return res.status(404).send('Item not found');
  }
  res.json(result.rows[0]);
};

const deleteItem = async (req, res) => {
  const id = req.params.id;
  const result = await pool.query('DELETE FROM employee WHERE id = $1 RETURNING *', [id]);
  if (result.rows.length === 0) {
      return res.status(404).send('Item not found');
  }
  res.status(204).send();
};

module.exports = {
  getItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
};