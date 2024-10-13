const _ = require('lodash')
const list = [1,[2,[3,[4]]]] 
const gl = _.flattenDeep(list)
console.log(gl)