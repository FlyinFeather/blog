---


---

`gists` are short code snippits that can be helpful to store and be able to access within R from remote computers and other peoples code. Now that github repositories have any free options to do this now. It is still a nice simple way to share code snippits that you have control over when they are accessed. What I mean is that within R it is possible to run the following commands:


```{r}

```

This will result in a script being imported and run however if you remove or change the code the user running the above command will use the code attached to the `gists`.

# How to convert files in github repo to a gist

First of all, note that Gist doesn't support directories. To import a repository into a gist follow the next steps:

1.  Create a new `gist` and clone it locally (replace the dummy id with your Gist id):
    
    ```
    git clone git@gist.github.com:792bxxxxxxxxxxxxxxx9.git
    
    ```
    
2.  `cd` to that gist directory
    
3.  Pull and merge from your GitHub repository:
    
    ```
    git pull git@github.com:<user>/<repo>.git
    
    ```
    
4.  Push your changes
    
    ```
    git push
    
    ```
    

Again, note that if you have directories, you have to delete and commit them:

```
rm -rf some-directory
git commit -m 'Removed some-directory' .

```

Using the steps above, the project history will be kept. If you don't care about history, you can always push files in your `gist`. Let's say you have a repository containing multiple folders and you want for each folder to create a `gist`. You will repeat the next steps (or a script could do that):

```
git clone git@gist.github.com:<gist-id>.git
cd <gist-id>
cp ../path/to/your/github/repository/and/some/folder/* .
git add .
git commit -m 'Added the Gist files' .
git push

```

* * *

`gist` is different than how GitHub works:

> `gist` is a simple way to share snippets and pastes with others. All `gist`s are Git repositories, so they are automatically versioned, forkable and usable from Git.

However, if you try to push directories in `gist`s you will get errors from remote:

```
$ git push
Counting objects: 32, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (21/21), done.
Writing objects: 100% (32/32), 7.35 KiB | 0 bytes/s, done.
Total 32 (delta 10), reused 0 (delta 0)
remote: Gist does not support directories.
remote: These are the directories that are causing problems:
remote: foo
To git@gist.github.com:792.....0b79.git
 ! [remote rejected] master -> master (pre-receive hook declined)
error: failed to push some refs to 'git@gist.github.com:79.......9.git'

```