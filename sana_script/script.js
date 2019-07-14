const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

const stf = () => {
  console.log("Fast Path Opener");
  let paths = JSON.parse("routes.json");
  paths.array.forEach(routes => {
    console.log(`${routes}`)
  });
  readline.question(`Put a option -> `, (option) => {
    
    readline.close()
  })
}
  