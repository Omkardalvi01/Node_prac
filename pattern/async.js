const {readFile, writeFile} = require('fs')
const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)
const getText = (path) =>{
    return new Promise((resolve, reject) =>{
        readFile(path, 'utf8', (err,data) => {
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    }) 
}
// getText('./content/first.txt').then((result)=>
//     console.log(result))
// .catch((err) => console.log(err))

const start = async() =>{
    try{
        const first =await readFilePromise('./content/first.txt')
        const second = await readFilePromise('./content/second.txt')
        await writeFile(
            './content/result-mind-grenade.txt',
            `THIS IS AWESOME : ${first} ${second}`,
            { flag: 'a' }
          )
        console.log(first , second)
    }catch(e){
        console.log(e)
    }
    
}