import expressFile from './server/express'
import http from 'http'

let app = expressFile();
let server = http.Server(app);

server.listen(8000, () => {
	console.log('The application is up and running at localhost:8000');
});
