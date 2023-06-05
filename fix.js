const simpleGit = require("simple-git");
const git = simpleGit.default();

async function main(message) {
   await git.add(".");
   await git.commit(`⚙️Fix: ${message}`);
   await git.push("origin","main");
}

// logs "test-branch"
main("fixed component");