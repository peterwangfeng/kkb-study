
const cluster = require('cluster')
const os = require('os')
const numlen = os.cpus().length
const process = require('process')

console.log("cpus的数量:" + numlen)

const worker = {

}
if (cluster.isMaster) {

} else {
    const app = require('./')
}