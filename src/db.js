const fileSystem = require("fs");
const path = require('path')
export const readDb = () => {
  fileSystem.readFile('../db.json', (err, data) => {
    if (err) {
      console.log("File can't be read", err)
      return
    }
    try {
      const client = JSON.parse(data)
      return client
    } catch (err) {
      console.log("Error parsing JSON string:", err)
    }
  })
}
export const writeDb = (data) => {
  fileSystem.writeFile(path.join(__dirname, '../', 'db.json'), data, (err) => {
    if (err) {
      console.log("File can't be write", err)
      return
    }
  })
}