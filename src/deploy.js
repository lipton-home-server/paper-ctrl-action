const github = require('@actions/github')
const axios = require('axios')


module.exports = async function deploy(core){
    try{
        const imageTag = process.env.IMAGE_TAG
        const targetAddress = process.env.TARGET_ADDRESS
        const targetPort = process.env.TARGET_PORT
    }
    catch (err){

    }
}