
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with '----',
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log('--------------------')
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be 'batata'
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  const r =text.split(" ")[0].trim();
  if (text === 'quit\n') {
    quit();
  }
  else if(r === 'hello'){
    hello(text);
  }
  else if(r === 'help'){
  help(text);
  }
  else if((text.trim() === 'list')){
    listTasks();
    }
else if((r === 'add')){
  addTask(text);
}
  else{
    unknownCommand(text);
  }
}


/**
 * prints 'unknown command'
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(text){
  console.log(text.replace('\n','!'))
}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('exit')
  process.exit();
}

/**
 * help
 */
function help(text){
  console.log(text.replace('\n','!'))
}
const task=["start=homework","return-homework","finish-homework"]

function listTasks() {
  task.forEach((task, index) => {
    console.log(`${index+1}. ${task}`);
  });
}


function addTask(text) {
  const taskToAdd = text.trim().substring(4).trim(); // Remove the "add" command

if (taskToAdd === '') {
  console.log('Error');
  } else {
    task.push(taskToAdd);
    console.log(`Task \n "${taskToAdd}"`);
    listTasks(); // List all tasks including the new one
  }
}


//function AddlistTasks() {
 // task.forEach((task, index) => {
  //task.push(slice(1,r));
 // console.log(`${index+1}. ${task}`);
//})
//}
startApp('zahraa alaaeddine')