const core = require('@actions/core');
const github = require('@actions/github');
const test = require('./test');
const fs = require('fs');
async function run() {
  try {
    // Get the input named 'who-to-greet'
    let nameToGreet = core.getInput('who-to-greet');

    if (!nameToGreet) {
        nameToGreet = process.env.INPUT_WHO_TO_GREET;
      }

    // Set the output named 'time'
    const time = (new Date()).toTimeString();
    const fun= "Buffallo donkey !!!!!"
    core.setOutput("time", time);
    core.setOutput("fun",fun);

    // Log the greeting
    console.log(`Hello ${nameToGreet} at ${time} yo are crazy fellow! and ${fun}`);
    console.log('Bro you are crazy there is still lot to learn in github actions. And I love this shit');
//     fs.appendFileSync(process.env.GITHUB_OUTPUT, `time=${time}\n`);
// fs.appendFileSync(process.env.GITHUB_OUTPUT, `fun=${fun}\n`);
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
