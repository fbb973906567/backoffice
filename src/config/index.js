const configName = process.env.REACT_APP_API
console.log(process.env)
export default require(`./${configName}.js`).default
