const child_process = require('child_process')
describe("web-debug-cli", function() {
    it('`lib` should be ok', function () {
        child_process.exec('node ./lib/index.js')
    })
})
