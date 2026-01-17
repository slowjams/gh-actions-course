/*
@actions/core is a Node.js library provided by GitHub for writing custom GitHub Actions. It offers APIs to interact with workflow inputs, outputs, environment variables, and logging. With @actions/core, you can:

- Get and set action inputs and outputs
- Set environment variables
- Mark actions as failed or succeeded
- Log messages at different levels (info, warning, error)
- Group logs for better readability

Octokit is the tool you use in GitHub Actions to interact with the GitHub API easily and securely.
*/

const core = require('@actions/core');

async function run() {
    core.info('I am a custom JS action');
}

run()

// incomplete, to be work on the future