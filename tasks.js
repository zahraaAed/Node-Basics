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
    ifRemove();
   }
  else {
    unknownCommand(text);
  }
}

function unknownCommand(c) {
  console.log('unknown command: "' + c.trim() + '"');
}

function hello(text) {
  console.log(text.replace('\n', '!'));
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

function ifRemove() {
    console.log("Task number does not exist");
  }
startApp('zahraa alaaeddine')