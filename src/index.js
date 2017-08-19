const fork = require('child_process').fork;

export default function nodeMockServer( options = {}) {

    console.log("starting mock server");


    var debug = typeof v8debug === 'object';
    if (debug) {
        //Set an unused port number.
        process.execArgv.push('--debug=' + (40894));
    }
    const mockServer = fork('mock')

    let running = true;

    return {
        name: 'nodeMockServer',
        ongenerate () {
            if (!running) {
                running = true;

                // Log which url to visit
                // const url = `${PROTOCOL + options.host}:${options.port}`
                // options.contentBase.forEach(base => {
                //     console.log(green(url) + ' -> ' + resolve(base))
                // })

                // Open browser
                if (options.open) {
                    // TODO opener(url)
                }
            }
        }
    }
}
