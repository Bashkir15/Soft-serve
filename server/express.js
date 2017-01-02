import express from 'express'
import ejs from 'ejs'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import path from 'path'

import indexRoutes from './routes'

module.exports = () => {
	let app = express();

	app.set('view engine', 'ejs');
	app.set('views', path.join(__dirname, '../docs/views'));

	app.use(morgan('dev'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(express.static(path.join(__dirname, '../docs')));
	app.use(express.static(path.join(__dirname, '../dist')));
	app.use(express.static(path.join(__dirname, '../node_modules')));

	app.use('/', indexRoutes);

	return app;
}