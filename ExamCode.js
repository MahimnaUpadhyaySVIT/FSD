const express = require('express');

const app = express();
const port = 3000;

const data = {
	"name": "Mahimna",
	"hobbies":['Football', 'Table Tennis', 'Sketching', 'Writing']
}

app.get('/', (req, res)=>{
	res.send(data);
});

app.get('/newData', (req, res)=>{
	const jsonData = {
		"id": 1,
		"name": "Mahimna",
		"std": "MCA FY"
	}

	res.send(jsonData);
});

app.listen(port, ()=>{
	console.log(`Server is running on ${port}`);
});
