const core = require('@actions/core');
const github = require('@actions/github');
const test = require('./test');

async function run() {
  try {
    // Get the input named 'who-to-greet'
    const nameToGreet = core.getInput('who-to-greet');

    // Set the output named 'time'
    const time = (new Date()).toTimeString();
    const fun= "Buffallo donkey !!!!!"
    core.setOutput("time", time);
    core.setOutput("fun",fun);

    // Log the greeting
    console.log(`Hello ${nameToGreet} at ${time} yo are crazy fellow! and ${fun}`);
    console.log('Bro you are crazy there is still lot to learn in github actions. And I love this shit');
  } catch (error) {
    core.setFailed(error.message);
  }
}

async function race(){
  console.log("This is from race function !!!!!");
}

run();
race();
test.crazy();
