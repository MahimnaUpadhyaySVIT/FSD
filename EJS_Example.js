const express = require('express');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
	
	const data = {
		name: 'Mahimna Upadhyay',
		hobbies: ['Astrophotography', 'Reading', 'Writing', 'Sketching', 'Football', 'Table Tennis']
	}

	res.render('Home', {data: data});
});

app.listen(port, ()=>{
	console.log(`Server is running on port ${port}`);
})
