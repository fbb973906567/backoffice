const configName = process.env.NODE_ENV

export default require(`./${configName}.js`).default