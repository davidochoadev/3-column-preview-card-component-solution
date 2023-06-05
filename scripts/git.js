const simpleGit = require("simple-git");
const git = simpleGit.default();

async function main() {
   const message = process.argv.slice(4).join(" ") || "General Edits on Current Branch";
/*    await git.add(".");
   await git.commit(`🛠 Fix: ${message}`);
   await git.push("origin","main"); */

   switch(process.argv.slice(2)[0]){
      case 'fix':
         await git.add(".");
         await git.commit(`🛠 Fix: ${message}`);
         await git.push("origin","main");
         break;
      case 'feat':
         await git.add(".");
         await git.commit(`✅ Feat: ${message}`);
         await git.push("origin","main");
         break;
      case 'refactoring':
         await git.add(".");
         await git.commit(`✏️ Refactoring: ${message}`);
         await git.push("origin","main");
         break;
   }
}

// logs "test-branch"
main();