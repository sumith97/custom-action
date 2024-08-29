const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try {
    // Get the input named 'who-to-greet'
    const nameToGreet = core.getInput('who-to-greet');

    // Set the output named 'time'
    const time = (new Date()).toTimeString();
    core.setOutput("time", time);

    // Log the greeting
    console.log(`Hello ${nameToGreet} at ${time} yo are crazy fellow!`);
    console.log('Bro you are crazy there is still lot to learn in github actions. And I love this shit');
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
