/* Simple Hello World in Node.js */
function startApp(name) {
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`);
  console.log('--------------------');
}

function onDataReceived(text) {
  const r = text.split(" ")[0].trim();
  if (text === 'quit\n') {
    quit();
  } else if (r === 'hello') {
    hello(text);
  } else if (r === 'help') {
    help(text);
  } else if (text.trim() === 'list') {
    listTasks();
  } else if (r === 'add') {
    addTask(text);

  }
  
   else if (r === 'remove' || r === 'remove1' || r === 'remove2') {
    removeTask(r); 
  }
  else if (text.startsWith('remove')){
    let txt=text.slice(6,text.length);
    ifRemove(txt);
   }
   else if(r==='edit'){
    editingTask(text);
   }
  else {
    unknownCommand(text);
  }
}

function unknownCommand(c) {
  console.log('unknown command: "' + c.trim() + '"');
}

function hello(text) {
  console.log("hello");
  console.log("help");
  console.log("quit");
  console.log("listTasks");
  console.log("addTask");
  console.log(" removeTask(");
  console.log("ifRemove")
  console.log("editingTask");


}
function quit() {
  console.log('exit');
  process.exit();
}

const task = ["start=homework", "return-homework", "finish-homework"];

function listTasks() {
  task.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
  });
}
function addTask(text) {
  const taskToAdd = text.trim().substring(4).trim();

  if (taskToAdd === '') {
    console.log('Error');
  } else {
    task.push(taskToAdd);
    console.log(`Task \n "${taskToAdd}"`);
    listTasks(); // List all tasks including the new one
  }
}

function removeTask(command) {

  if (command === 'remove') {
    if (task.length > 0) {
      const removedTask = task.pop();
      console.log(`Removed task: ${removedTask}`);
    } else {
      console.log('Task list is empty.');
    }
  } else if (command === 'remove1') {
    if (task.length > 0) {
      const removedTask = task.shift();
      console.log(`Removed task: ${removedTask}`);
    }
  } else if (command === 'remove2') {
    if (task.length > 1) {
      const removedTask = task.splice(1, 1)[0];
      console.log(`Removed task: ${removedTask}`);
    }
  }

  listTasks();
}

function ifRemove(result) {
  if (parseInt(result) > task.length || parseInt(result) < 1) {//if the umber is more than the tasks or lower than 1 it will print that the task number does not exist
    console.log("Task number does not exist");
  }
}
function editingTask(text) {
  const editText = text.trim().split(" ");
  
  if (editText[0] === 'edit') { 
    if (editText.length < 3) { 
      console.log("Invalid");
    } else {
      const taskIndex = parseInt((editText[1]) - 1); 
      const newTaskText = editText.slice(2).join(" ");
      
      if (!isNaN(taskIndex) && taskIndex >= 0 && taskIndex < task.length) { 
        task[taskIndex] = newTaskText; 
        console.log(`Updated task ${taskIndex + 1} to: ${newTaskText}`); 
      } else {
        console.log("Invalid task index or task does not exist.");
      }
    }
  } else {
    console.log("Invalid command. Use 'edit [index] [new text]'");
  }
  listTasks();
}


startApp('zahraa alaaeddine')
