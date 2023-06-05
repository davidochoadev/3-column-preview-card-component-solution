const simpleGit = require("simple-git");
const git = simpleGit.default();

async function main() {
   await git.checkout("main");
   const branch = await git.branch();
   console.log(branch.current)
}

// logs "test-branch"
main();