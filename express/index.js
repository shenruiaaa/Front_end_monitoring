const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();

const PORT = process.env.PORT || 9000;
const fileName = './database.json';
const fileName1 = './database1.json';

let PV = [];


app.use(cors());   //注入cros
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.post('/tracker', (req, res) => {

	console.log(req.body)
	// 给前端返回东西 res.send()
	res.send(200);
})

const update = (PV) => {
	fs.writeFileSync(fileName, JSON.stringify({
		PV
	}, null, 2));
}


app.put('/pageviews/add', (req, res) => {
	const data = fs.readFileSync(fileName, 'utf8');
	const pv = JSON.parse(data).PV;
	PV = pv;
	const date = new Date();
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();
	const today = `${year}/${month}/${day}`;
	const result = pv.filter(item => item.date === today.toString());
	if (result.length === 0) {
		const data = {
			"date": today.toString(),
			"number": 1
		}
		PV.push(data);
		update(PV);
	} else {
		PV.map(item => item.date === today.toString() && { ...item, number: item.number++ })
		update(PV);
	}

	return res.json(PV.filter(item => item.date === today.toString()));
})

app.get('/pageviews', (req, res) => {
	const data = fs.readFileSync(fileName, 'utf8');
	const pv = JSON.parse(data).PV;
	res.send(pv);
})
app.post('/login', (req, res) => {
	res.send({
		status: 0,
		data: { user: { username: "admin" } },
		msg: '成功！'
	})
})








/**
 * =================================================================
 *                  Running the Server
 * =================================================================
 */
app.listen(PORT, () => {
	console.log(`success listen on Port: ${PORT}`);
})