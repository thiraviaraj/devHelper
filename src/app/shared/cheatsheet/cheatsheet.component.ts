import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cheatsheet',
  templateUrl: './cheatsheet.component.html',
  styleUrls: ['./cheatsheet.component.css']
})
export class CheatsheetComponent implements OnInit {
  config: any = {
    setup: [{ cmd: 'git config --global user.name "[firstname lastname]"', desc: "set a name that is identifiable for credit when review version history" },
    { cmd: 'git config --global user.email "[valid-email]"', desc: "set an email address that will be associated with each history marker" },
    { cmd: 'git config --global color.ui auto', desc: "set automatic command line coloring for Git for easy reviewing" },
    { cmd: 'git config --global core.editor "code --wait"', desc: "set VSCODE as a default Editor" },
    { cmd: 'git config --global core.autocrlf true', desc: "Auto-converting CRLF line endings into LF (Windows)" },
    { cmd: 'git config --global core.autocrlf input', desc: "Don't want Git to automatically convert them. Auto-converting CRLF line endings into LF (Linux / MacOS)"},
    { cmd: 'git config --global -e', desc: "Edit Global Config"}],
    init: [{ cmd: 'git init', desc: "initialize an existing directory as a Git repository" },
    { cmd: 'git clone [url]', desc: "retrieve an entire repository from a hosted location via URL" },],
    stage: [{ cmd: 'git status', desc: "show modified files in working directory, staged for your next commit" },
    { cmd: 'git add [file]', desc: "add a file as it looks now to your next commit (stage)" },
    { cmd: 'git reset [file]', desc: "unstage a file while retaining the changes in working directory" },
    { cmd: 'git diff', desc: "diff of what is changed but not staged" },
    { cmd: 'git diff --staged', desc: "diff of what is staged but not yet commited" },
    { cmd: 'git commit -m "[descriptive message]"', desc: "commit your staged content as a new commit snapshot" }],
    branch: [{ cmd: 'git branch', desc: "list your branches. a * will appear next to the currently active branch" },
    { cmd: 'git branch [branch-name]"', desc: "create a new branch at the current commit" },
    { cmd: 'git checkout', desc: "switch to another branch and check it out into your working directory" },
    { cmd: 'git merge [branch]', desc: "merge the specified branch’s history into the current one" },
    { cmd: 'git log', desc: "show all commits in the current branch’s history" },
    { cmd: 'git cherry-pick dev~2', desc: "Picks the second last commit from dev branches and amends" },
    ],
    inspect: [{ cmd: 'git log', desc: "show the commit history for the currently active branch" },
    { cmd: 'git log branchB..branchA', desc: "show the commits on branchA that are not on branchB" },
    { cmd: 'git log --follow [file]', desc: "show the commits that changed file, even across renames" },
    { cmd: 'git diff branchB...branchA', desc: "show the diff of what is in branchA that is not in branchB" },
    { cmd: 'git show [SHA]', desc: "show any object in Git in human-readable format" }],
    tracking: [{ cmd: 'git rm [file]', desc: "delete the file from project and stage the removal for commit" },
    { cmd: 'git mv [existing-path] [new-path]', desc: "change an existing file path and stage the move" },
    { cmd: 'git log --stat -M', desc: "show all commit logs with indication of any paths that moved" }],
    share: [{ cmd: 'git remote add [alias] [url]', desc: "add a git URL as an alias" },
    { cmd: 'git fetch [alias]', desc: "fetch down all the branches from that Git remote" },
    { cmd: 'git merge [alias]/[branch]', desc: "merge a remote branch into your current branch to bring it up to date" },
    { cmd: 'git push [alias] [branch]', desc: "Transmit local branch commits to the remote repository branch" },
    { cmd: 'git pull', desc: "fetch and merge any commits from the tracking remote branch" }],
    rewrite: [{ cmd: 'git rebase [branch] #git rebase -i HEAD~3', desc: "apply any commits of current branch ahead of specified one" },
    { cmd: 'git reset --hard [commit]', desc: "clear staging area, rewrite working tree from specified commit" }],
    temp: [{ cmd: 'git stash', desc: "Save modified and staged changes" },
    { cmd: 'git stash list', desc: "list stack-order of stashed file changes" },
    { cmd: 'git stash pop', desc: "write working from top of stash stack" },
    { cmd: 'git stash drop', desc: "discard the changes from top of stash stack" }],
  };
  headerData: any = {
    setup: { title: 'SETUP', subtitle: 'Configuring user information used across all local repositories' },
    init: { title: 'SETUP & INIT', subtitle: 'Configuring user information, initializing and cloning repositories' },
    stage: { title: 'STAGE & SNAPSHOT', subtitle: 'Working with snapshots and the Git staging area' },
    branch: { title: 'BRANCH & MERGE', subtitle: 'Isolating work in branches, changing context, and integrating changes' },
    inspect: { title: 'INSPECT & COMPARE', subtitle: 'Examining logs, diffs and object information' },
    tracking: { title: 'TRACKING PATH CHANGES', subtitle: 'Versioning file removes and path changes' },
    share: { title: 'SHARE & UPDATE', subtitle: 'Retrieving updates from another repository and updating local repos' },
    rewrite: { title: 'REWRITE HISTORY', subtitle: 'Rewriting branches, updating commits and clearing history' },
    temp: { title: 'TEMPORARY COMMITS', subtitle: 'Temporarily store modified, tracked files in order to change branches' }
  };
  @Input() key = "setup";
  constructor() { }

  ngOnInit(): void {
  }

}
