const { Client } = require('pg');

exports.handler = async (event) => {
    const client = new Client({
        host: process.env.RDS_HOSTNAME || 'database-1.c92w6u0qkpcw.ap-south-1.rds.amazonaws.com',
        user: process.env.RDS_USERNAME || 'postgres',
        password: process.env.RDS_PASSWORD || 'mypassword',
        database: process.env.RDS_DATABASE || 'database-1',
        port: process.env.RDS_PORT || 5432
    });

    await client.connect();

    const { student_id, name, age, grade } = JSON.parse(event.body);

    const query = 'INSERT INTO students(student_id, name, age, grade) VALUES($1, $2, $3, $4) RETURNING *';
    const values = [student_id, name, age, grade];

    try {
        const res = await client.query(query, values);
        await client.end();
        return {
            statusCode: 200,
            body: JSON.stringify(res.rows[0]),
        };
    } catch (err) {
        await client.end();
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Database error: ' + err.message }),
        };
    }
};
