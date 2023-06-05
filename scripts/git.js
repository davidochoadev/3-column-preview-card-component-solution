import chalk from 'chalk';
import simpleGit from 'simple-git';

const git = simpleGit();

async function autoCommitFunc() {
   const message = process.argv.slice(4).join(" ") || "General Edits on Current Branch";
   let messagePrefix;
   let consoleMessage;

   switch(process.argv.slice(2)[0]){
      case 'fix':
         messagePrefix = "🛠 Fix";
         consoleMessage = "🛠 Fixing Commit Successful";
         break;
      case 'feat':
         messagePrefix = "✅ Feat";
         consoleMessage = "✅ Featuring Commit Successful";
         break;
      case 'refactoring':
         messagePrefix = "✏️ Refactoring";
         consoleMessage = "✏️ Refactoring Commit Successful";
         break;
      default:
         messagePrefix = "🤖 Automatic Commit";
         consoleMessage = "🤖 Automaitc Commit Successful";
   }

   await git.add(".");
   await git.commit(`${messagePrefix}: ${message}`);
   await git.push("origin", "main");
   console.log(chalk.blue(consoleMessage));
}

autoCommitFunc();