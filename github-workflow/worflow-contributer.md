# These are instructions for writing, correcting or translating blogpost

## Basic setup

1. First you need to have a github account
   - Navigate to: [https://github.com](<[github.com](https://github.com)>) to create one.
2. You need to have git installed on your computer
   - Navigate to: [https://git-scm.com/book/en/v2/Getting-Started-Installing-Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and follow the instructions for your opperating system.
3. **Fork** the We On Bikes [repository]() on github
   - By forking you create a complete independent copy of the repository on your own github account.
4. Now that you have a fork of the weonbikes.com website on your github you can **clone** your repository to your local machine:
   - open the _git bash_ cli (_comand line interface_) in the directory where you want your working folder (the clone) by right clicking on the directory > open with > git bash here, and run the following comand:

```bash
  git clone [url]
```

where [url] is the url of your repository, you'll also find it under the green 'code' button in your repository.

_If you dont delete the cloned repository from your computer this tipically is done only once._

## Workflow first contribution

Now you can open the repository folder in your text editor (right click on de folder > open with > [your text editor])

Now that you have the cloned repository you can start contributing to the codebase. Thing is probably you only have the main branch, which is the deployed website, and it would be a bad habbit to at new code directly to the deployed codebase without reviewing. So you work on a new branch, for every project you make a new branch.

1. Open your terminal and make a new branch:

```bash
git branch [new_branch]
```

where [new_brach] is the name of your branch, you can call it what ever you like or is functional for you.

2. Now you can switch to the new branch by typing:

```bash
git checkout [new_branch]
```

3. Or the previous two steps at once:

```bash
git checkout -b [new_branch]
```

4. You probably gonna add new files and folders to the repository, for git to keep track of them you'll have to **add** them first:

```bash
git add .
```

where the . (dot) means all files.

5. if you are done with your project or a part of it you can **commit** the changes you made:

```bash
git commit -am "[your message]"
```

where the 'a' **flag** (a flag adds a feature of the command) means all and the 'm' stands for your commit message, which very briefly describes your commit i.e.: "added first chapter" or "Complete blogpost".

6. Now that're done you can update the github repository with your changes:

- if your local branch **does not** exist on the remote run:

```bash
git push -u origin [branch_name]
```

- if your local branch **already exist** on the remote run:

```bash
git push [branch_name]
```

where [branch_name] is the name of the branch you are currently working on

1. Make a **pull request**
   - Navigate to your repository on github.com and make a pull request for your contribution (the new branch)

## Workflow continues contributions

When you continue to contribute the main codebase (the original repository) may be changed to yours in the meantime.
Navigate to: [https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork) and follow the steps to update your fork (pull and merge from the original or _upstream_ repository)

_BTW To see on which branch you are you can run the following commands_

```bash
git status
```

_or_

```bash
git branch
```

1. Checkout to main branch if you are not:

```bash
git checkout main
```

2. Update local codebase with repo:

```bash
git pull
```

I guess this way you don't have to merge your branches after a pull request, because this has been done on the upstream.

3. Continue your new contibution as in _Workflow first contribution_, starting with a new branch for a new project.
