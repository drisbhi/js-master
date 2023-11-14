
/**
  1. git init - Powers your folder to be managed by git, and 
  intializes a new empty repository. It also creates a .git 
  folder that has all the relevant logic to manage versions of
  yours project.

  2. Working area - There can be a bunch of files that are not currently handled by git. 
  It means that changes done or to be done in those files are not managed by git yet. A file 
  which is in working area is considered to be not in the staging area. when we do 'git status' 
  and we see a bunch of files if 'untracked files ' then these files are actually called to be in the
  working area.

  3. Staging area - What all files are going to be part of the next version that we will create.
  This staging area is the place where git knows that what changes will be done from the last version 
  to the next version. 

  4. Repository Area - This area actually contains the details of all your previous version. and the 
  files in this area , git already manages them and know their version history.
  
  5. git add <filename> - moves file from working area to staging area. 

  6. git rm --cached <file> - moves file  back from staging area to working area.

  7. commit - commit is particular version of the project. It captures a snapshot of the project's staged
  changes and creates a version out of it.
  
  8. git commit - registers staging changes to a commit

  9. git log - list down all the commits of the repository. If you want to exit out of git log prompt press
  'q'.

  10. git restore <file> - It removes all files changes from the staging area to be commited. This can be 
  useful, if we did some dirty piece of code and now no more want it. Instead of deleting every change 
  line by line, we can restore it or you can say restore last clean version of the file. 

  11. git restore --staged <file> - It removes file  changes from staging area to working area. 
  this only works if staging are done in working area.

  12. Diffrence between git rm and git restore ? 
   If you want to move the whole file back to the untracked state, then we do git rm, otherwise if we just 
   want the changes to be moved in working area or staging area then we git restore. 

  13. git diff commit1 commit2 - gives the diffrence of all the file changes between two commits.

  14. git commit -m "<your commit message>" -> If we want to avoid opening a text editor like vim /nano to add commit message 
  we can use this following command.
  
  15. git remote - list down all the remote repos name 

  16. Remote connection - It help you to link two repositories for uploading and downloading changes from each otherwise.

  17. git remote add <remote name> <remote url> - this command helps to add a new link to the remote repo and give a name to it.

  18. git remote rm <name of remote repo> - this command deletes a remote connection

  19. git remote rename <oldname> <new name> - this command rename the remote connection 

  Note : The name of the remote connection is always use to establish communication between the repos. 

  20. git add <file1> <file2> <file3> :  this command will add multiple file changes together in staging area.
  
  21. git add . - this command will add all the files from working area to staging area.

  22. git pull <remote name> <branch name> : downloads latest changes from the branch of the mentioned remote in your local repo. 


  ## Recomended practice to do : - 
   - make changes
   - git add <file>
   - git commit 
   - git pull 
   - git push 

   23. Merge confilts are a very common scnario

   merge conflits can occur if multiple people try to make changes to the same file , and then collaborate.
   





 */