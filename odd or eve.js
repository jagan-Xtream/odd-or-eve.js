const readline = require('readline')
const inp = readline.createInterface({
    input:process.stdin,
    output:process.stdout
    
})
var userInput;

inp.on('line', (data) => {
 userInput = data.split(' ').map(i => Number(i))
})
   function name(n) {
       S=userInput[0],userInput[1],userInput[2]
  if(n%2===0){
      console.log('Even').toFixed(2)

  }
  else if(n===0){
      console.log('ZERO').toFixed(2)
  }
  else{
      console.log('Odd').toFixed(2)
  }
  return ;
  
   }
    inp.on('close', () => {
name(userInput)
    
})

