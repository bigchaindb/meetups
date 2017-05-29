const fetch = require('node-fetch')
const ms = require('ms')
const chalk = require('chalk')

let data = []
const url = 'https://api.meetup.com/BigchainDB-IPDB-Meetup/events'

const log = text => console.log(text)
const logError = text => console.log(chalk.bold.red(text))

// Response handling for all fetch calls
const handleResponse = res => {
    if (res.status !== 200) {
        return logError('Non-200 response code from Meetup: ' + res.status)
    }
    return res.json()
}

//
// Fetch all upcoming meetups
//
const fetchMeetups = () => {
    const start = Date.now()

    fetch(url)
        .then(res => {
            return handleResponse(res)
        })
        .then(data_ => {
            if (!data_) {
                return
            }

            data = data_

            log(`Re-built meetups cache. ` +
                `Total: ${data_.length} public meetups. ` +
                `Elapsed: ${(new Date() - start)}ms`)
        })
        .catch(err => {
            logError('Error parsing response from Meetup: ' + err.stack)
        })
}

//
// Let's roll, and roll again every X ms
//
fetchMeetups()
setInterval(fetchMeetups, ms('15m'))

//
// Create the response
//
module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET')

    return data
}
