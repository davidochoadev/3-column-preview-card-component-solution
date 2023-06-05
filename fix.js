const simpleGit = require("simple-git");
const git = simpleGit.default();

async function main() {
   const message = process.argv[2] || "Fixing current branch";
   await git.add(".");
   await git.commit(`⚙️Fix: ${message}`);
   await git.push("origin","main");
}

// logs "test-branch"
main();