
const { num1, num2 } = require('./index')

const Benchmark = require('benchmark')
const suite = new Benchmark.Suite()

suite.add('Number', () => {
    num1('1234')
}).add('+', () => {
    num2('1234')
}).on('cycle', ev => {
    console.log(ev.target)
}).on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
}).run({
    async: true
})