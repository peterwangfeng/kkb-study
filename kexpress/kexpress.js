
const http = require('http')
const url = require('url')
class Application {
	constructor() {
		this.router = []
	}
	get(path, handler) {
		this.router.push({
			path,
			method: 'get',
			handler
		})
	}
	
	post(path, handler) {
		this.router.push({
			path,
			method: 'post',
			handler
		})
	}

	handleRequest(req, res) {
		let { pathname } = url.parse(req.url, true)
		if (pathname === '/favicon.ico') {
			return res.end('')
		}
		res.json = function (param) {
			res.setHeader('Content-Type', 'application/json')
			res.end(JSON.stringify(param))
		}
		let method = req.method
		let { handler } = this.router.find(item => item.path === pathname)
		handler(req, res)
	}

	start() {
		http.createServer(this.handleRequest.bind(this)).listen(...arguments)
	}
}

module.exports = function (config = {}) {
	return new Application
}