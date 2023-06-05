const simpleGit = require("simple-git");
const git = simpleGit.default();

async function autoCommitFunc() {
   const message = process.argv.slice(4).join(" ") || "General Edits on Current Branch";

   switch(process.argv.slice(2)[0]){
      case 'fix':
         messagePrefix = "🛠 Fix";
         break;
      case 'feat':
         messagePrefix = "✅ Feat";
         break;
      case 'refactoring':
         messagePrefix = "✏️ Refactoring";
         break;
      default:
         messagePrefix = "🤖 Automatic commit";
   }

   await git.add(".");
   await git.commit(`${messagePrefix}: ${message}`);
   await git.push("origin", "main");
   console.log(chalk.blue('Commit Successful'));
}

autoCommitFunc();