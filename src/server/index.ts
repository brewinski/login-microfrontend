
import express from 'express';
import html from './html';
import { renderToString } from 'react-dom/server';
import React from 'react';
import App from '../App';

const port = 3000;
const server = express();

server.use(express.static('dist'));

server.get('/', (req, res) => {
	const body: any = renderToString(
		React.createElement(App)
	);
  	res.send(html({body}));
})

server.listen(port, () => console.log(`Example app listening on port ${port}!`));
