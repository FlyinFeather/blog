git - GitHub pages only showing ReadMe file? - Stack Overflow

[Stack Overflow](https://stackoverflow.com)

1.  [Products](#)
2.  [Customers](https://stackoverflow.com/teams/customers)
3.  [Use cases](https://stackoverflow.com/teams/use-cases)

1.  [Log in](https://stackoverflow.com/users/login?ssrc=head&returnurl=https%3a%2f%2fstackoverflow.com%2fquestions%2f48919200%2fgithub-pages-only-showing-readme-file) [Sign up](https://stackoverflow.com/users/signup?ssrc=head&returnurl=%2fusers%2fstory%2fcurrent)

By using our site, you acknowledge that you have read and understand our [Cookie Policy](https://stackoverflow.com/legal/cookie-policy), [Privacy Policy](https://stackoverflow.com/legal/privacy-policy), and our [Terms of Service](https://stackoverflow.com/legal/terms-of-service/public).

Podcast Episode #126: We chat GitHub Actions, fake boyfriends apps, and the dangers of legacy code. [Listen now](https://stackoverflow.blog/podcast/).

[](# "dismiss")

1.  [Home](https://stackoverflow.com/)
2.  1.  Public
    2.  <a id="nav-questions"></a>[Stack Overflow](https://stackoverflow.com/questions)
    3.  <a id="nav-tags"></a>[Tags](https://stackoverflow.com/tags)
    4.  <a id="nav-users"></a>[Users](https://stackoverflow.com/users)
    5.  <a id="nav-jobs"></a>[Jobs](https://stackoverflow.com/jobs?so_medium=StackOverflow&so_source=SiteNav)
3.  1.  Teams
        
        What’s this?
        
    2.  [First 25 Users Free](https://stackoverflow.com/teams "Stack Overflow for Teams is a private, secure spot for your organization's questions and answers.")

# [GitHub pages only showing ReadMe file?](https://stackoverflow.com/questions/48919200/github-pages-only-showing-readme-file)

[Ask Question](https://stackoverflow.com/questions/ask)

Asked 1 year, 8 months ago

Active [2 months ago](https://stackoverflow.com/questions/48919200/?lastactivity "2019-08-27 16:17:51Z")

Viewed 10k times

8

I'm trying to host my webpages into Github pages but for some reason it seems to only show my Readme file.

GitHub repo: [https://github.com/InquisitiveDev2016/InquisitiveDev2016.github.io](https://github.com/InquisitiveDev2016/InquisitiveDev2016.github.io)

Website:

[https://inquisitivedev2016.github.io/](https://inquisitivedev2016.github.io/)

[git](https://stackoverflow.com/questions/tagged/git "show questions tagged 'git'") [github](https://stackoverflow.com/questions/tagged/github "show questions tagged 'github'")

[share](https://stackoverflow.com/q/48919200 "short permalink to this question")|[improve this question](https://stackoverflow.com/posts/48919200/edit)

asked Feb 22 '18 at 3:31

[![](../../_resources/2ba92a43badc411e9f51b043a3044897.png)](https://stackoverflow.com/users/8616809/rookie)

[Rookie](https://stackoverflow.com/users/8616809/rookie)

6311 silver badge88 bronze badges

*   And how did you expect it to behave? Add links to the other pages from your readme file. Here is another page - [inquisitivedev2016.github.io/Photo%20Website/AboutMe](https://inquisitivedev2016.github.io/Photo%20Website/AboutMe) \- so you just need to link it up. – [Lasse Vågsæther Karlsen](https://stackoverflow.com/users/267/lasse-v%c3%a5gs%c3%a6ther-karlsen "307,110 reputation") [Feb 22 '18 at 3:38](#comment84844750_48919200)
    
*   Please include the relevant, minimal info in the question itself. – [jhpratt](https://stackoverflow.com/users/2718801/jhpratt "4,641 reputation") [Feb 22 '18 at 3:43](#comment84844824_48919200)
    

add a comment

<a id="tab-top"></a>

## 3 Answers

[active](https://stackoverflow.com/questions/48919200/github-pages-only-showing-readme-file?answertab=active#tab-top "Answers with the latest activity first") [oldest](https://stackoverflow.com/questions/48919200/github-pages-only-showing-readme-file?answertab=oldest#tab-top "Answers in the order they were provided") [votes](https://stackoverflow.com/questions/48919200/github-pages-only-showing-readme-file?answertab=votes#tab-top "Answers with the highest score first")

<a id="48919506"></a>

8

GitHub Pages is doing what it is designed to do: hosting that entire repository. The root of the repository only contains a single file (`README.md`). Other pages are there, e.g. [https://inquisitivedev2016.github.io/Photo%20Website/webpage.html](https://inquisitivedev2016.github.io/Photo%20Website/webpage.html), but there isn't an easy way to navigate to them.

Consider moving your web content into the root of your repository and renaming your default page to `index.md` or `index.html`, depending what type of file it is. (By convention the default page of most websites is called `index.html`, and this is what GitHub Pages will show by default if it exists.)

[share](https://stackoverflow.com/a/48919506 "short permalink to this answer")|[improve this answer](https://stackoverflow.com/posts/48919506/edit)

answered Feb 22 '18 at 4:07

[![](../../_resources/e055e35fe2a14325bfdbad1e57ebaf9f.jpg)](https://stackoverflow.com/users/354577/chris)

[Chris](https://stackoverflow.com/users/354577/chris)

67.7k2020 gold badges139139 silver badges132132 bronze badges

add a comment

<a id="57678724"></a>

1

Create an index.html in the root and insert the line

```
<meta http-equiv="Refresh" content="2; url=public/index.html">

```

Or so it worked for me with a Vue CLI project I had this trouble with.

[share](https://stackoverflow.com/a/57678724 "short permalink to this answer")|[improve this answer](https://stackoverflow.com/posts/57678724/edit)

answered Aug 27 at 16:17

[![](../../_resources/17015196e3c846daafc67fe0d5f0c78e.png)](https://stackoverflow.com/users/11952222/bretonio)

[bretonio](https://stackoverflow.com/users/11952222/bretonio)

1111 bronze badge

add a comment

<a id="57047147"></a>

0

Github gives you multiple choices where it takes it sources from. By default its the root of the master branch, which will use the `README.md` in case there is no `index.html`.

But you can also switch to the `docs/` folder in your repository settings. With that you can put the `index.html` under the `docs/` folder.

See [<img width="676" height="470" src="../../_resources/d20da988460340499d4041d7f62f8e07.png"/>](https://i.stack.imgur.com/4upKT.png)

[share](https://stackoverflow.com/a/57047147 "short permalink to this answer")|[improve this answer](https://stackoverflow.com/posts/57047147/edit)

answered Jul 15 at 21:02

[![](../../_resources/3fc742b08cbc4f4d8ed584c306997192.jpg)](https://stackoverflow.com/users/672008/oae)

[oae](https://stackoverflow.com/users/672008/oae)

75899 silver badges1313 bronze badges

add a comment

<a id="new-answer"></a>

## Your Answer

### Sign up or <a id="login-link"></a>[log in](https://stackoverflow.com/users/login?ssrc=question_page&returnurl=https%3a%2f%2fstackoverflow.com%2fquestions%2f48919200%2fgithub-pages-only-showing-readme-file%23new-answer)

Sign up using Google

Sign up using Facebook

Sign up using Email and Password

### Post as a guest

Name

Email

Required, but never shown

By clicking “Post Your Answer”, you agree to our <a id="tos"></a>[terms of service](https://stackoverflow.com/legal/terms-of-service/public), <a id="privacy"></a>[privacy policy](https://stackoverflow.com/legal/privacy-policy) and <a id="cookie"></a>[cookie policy](https://stackoverflow.com/legal/cookie-policy)

## Not the answer you're looking for? Browse other questions tagged [git](https://stackoverflow.com/questions/tagged/git "show questions tagged 'git'") [github](https://stackoverflow.com/questions/tagged/github "show questions tagged 'github'") or [ask your own question](https://stackoverflow.com/questions/ask).

Blog

*   [Stack Overflow Podcast #126 – The Pros and Cons of Programming with ADHD](https://stackoverflow.blog/2019/10/29/stack-overflow-podcast-126-pros-cons-programming-adhd/?cb=1)
    

*   [My Most Embarrassing Mistakes as a Programmer (so far)](https://stackoverflow.blog/2019/10/29/my-most-embarrassing-mistakes-as-a-programmer-so-far/?cb=1)
    

Featured on Meta

*   [Feedback post: Moderator review and reinstatement processes](https://meta.stackexchange.com/questions/336177/feedback-post-moderator-review-and-reinstatement-processes?cb=1)
    

*   [Post for clarifications on the updated pronouns FAQ](https://meta.stackexchange.com/questions/336366/post-for-clarifications-on-the-updated-pronouns-faq?cb=1)
    

*   [Feedback and suggestions for editable section of Help Center](https://meta.stackoverflow.com/questions/390769/feedback-and-suggestions-for-editable-section-of-help-center?cb=1)
    

*   [New Post Notices (Closed/On Hold/etc.) rolling out on Stack Overflow](https://meta.stackoverflow.com/questions/390887/new-post-notices-closed-on-hold-etc-rolling-out-on-stack-overflow?cb=1)
    

#### Linked

[134](https://stackoverflow.com/q/11577147?lq=1 "Vote score (upvotes - downvotes)")[How to fix HTTP 404 on Github Pages?](https://stackoverflow.com/questions/11577147/how-to-fix-http-404-on-github-pages?noredirect=1&lq=1)

[50](https://stackoverflow.com/q/41863484?lq=1 "Vote score (upvotes - downvotes)")[Clear git local cache](https://stackoverflow.com/questions/41863484/clear-git-local-cache?noredirect=1&lq=1)

[0](https://stackoverflow.com/q/51147493?lq=1 "Vote score (upvotes - downvotes)")[only readme.md is showing on github pages](https://stackoverflow.com/questions/51147493/only-readme-md-is-showing-on-github-pages?noredirect=1&lq=1)

#### Related

[6512](https://stackoverflow.com/q/61212?rq=1 "Vote score (upvotes - downvotes)")[How to remove local (untracked) files from the current Git working tree](https://stackoverflow.com/questions/61212/how-to-remove-local-untracked-files-from-the-current-git-working-tree?rq=1)

[4200](https://stackoverflow.com/q/215718?rq=1 "Vote score (upvotes - downvotes)")[How can I reset or revert a file to a specific revision?](https://stackoverflow.com/questions/215718/how-can-i-reset-or-revert-a-file-to-a-specific-revision?rq=1)

[2605](https://stackoverflow.com/q/1085162?rq=1 "Vote score (upvotes - downvotes)")[Commit only part of a file in Git](https://stackoverflow.com/questions/1085162/commit-only-part-of-a-file-in-git?rq=1)

[6572](https://stackoverflow.com/q/1125968?rq=1 "Vote score (upvotes - downvotes)")[How do I force “git pull” to overwrite local files?](https://stackoverflow.com/questions/1125968/how-do-i-force-git-pull-to-overwrite-local-files?rq=1)

[4795](https://stackoverflow.com/q/1274057?rq=1 "Vote score (upvotes - downvotes)")[How to make Git “forget” about a file that was tracked but is now in .gitignore?](https://stackoverflow.com/questions/1274057/how-to-make-git-forget-about-a-file-that-was-tracked-but-is-now-in-gitignore?rq=1)

[2852](https://stackoverflow.com/q/3040833?rq=1 "Vote score (upvotes - downvotes)")[Stash only one file out of multiple files that have changed with Git?](https://stackoverflow.com/questions/3040833/stash-only-one-file-out-of-multiple-files-that-have-changed-with-git?rq=1)

[1832](https://stackoverflow.com/q/3796927?rq=1 "Vote score (upvotes - downvotes)")[How to “git clone” including submodules?](https://stackoverflow.com/questions/3796927/how-to-git-clone-including-submodules?rq=1)

[3342](https://stackoverflow.com/q/7244321?rq=1 "Vote score (upvotes - downvotes)")[How do I update a GitHub forked repository?](https://stackoverflow.com/questions/7244321/how-do-i-update-a-github-forked-repository?rq=1)

[1632](https://stackoverflow.com/q/14494747?rq=1 "Vote score (upvotes - downvotes)")[Add images to README.md on GitHub](https://stackoverflow.com/questions/14494747/add-images-to-readme-md-on-github?rq=1)

[771](https://stackoverflow.com/q/18216991?rq=1 "Vote score (upvotes - downvotes)")[Create a tag in a GitHub repository](https://stackoverflow.com/questions/18216991/create-a-tag-in-a-github-repository?rq=1)

#### [Hot Network Questions](https://stackexchange.com/questions?tab=hot)

*   [identifying pin 1 of ref195](https://electronics.stackexchange.com/questions/465119/identifying-pin-1-of-ref195)
*   [How could Thanos survive this attack?](https://scifi.stackexchange.com/questions/222384/how-could-thanos-survive-this-attack)
*   [How to deal with a 6 year old who was "caught" cheating?](https://parenting.stackexchange.com/questions/39058/how-to-deal-with-a-6-year-old-who-was-caught-cheating)
*   [Locked out of my own server: getting "Too many authentication failures" right away when connecting via ssh](https://serverfault.com/questions/989678/locked-out-of-my-own-server-getting-too-many-authentication-failures-right-aw)
*   [Log user out after change of IP address?](https://security.stackexchange.com/questions/220364/log-user-out-after-change-of-ip-address)
*   [How do I complete the "A Brilliant Smile" triumph?](https://gaming.stackexchange.com/questions/359531/how-do-i-complete-the-a-brilliant-smile-triumph)
*   [How can I prevent side-channel attacks against authentication?](https://security.stackexchange.com/questions/220446/how-can-i-prevent-side-channel-attacks-against-authentication)
*   [Is it possible to save a (science) PhD in 10 months?](https://academia.stackexchange.com/questions/139194/is-it-possible-to-save-a-science-phd-in-10-months)
*   [Commercial satellite retrieval - possible?](https://space.stackexchange.com/questions/39657/commercial-satellite-retrieval-possible)
*   [What does "2 fingers to Scotland" mean in Peter Grant's statement about Johnson not listening to the SNP's Westminster leader speeches?](https://politics.stackexchange.com/questions/47187/what-does-2-fingers-to-scotland-mean-in-peter-grants-statement-about-johnson)
*   [How did composers "test" their music?](https://music.stackexchange.com/questions/91330/how-did-composers-test-their-music)
*   [Is it possible to be admitted to CS PhD programs (in US) with scholarship at age 18?](https://academia.stackexchange.com/questions/139259/is-it-possible-to-be-admitted-to-cs-phd-programs-in-us-with-scholarship-at-age)
*   [Does cashing a 3% share harm the company itself?](https://money.stackexchange.com/questions/116268/does-cashing-a-3-share-harm-the-company-itself)
*   [How to generate the following m-level n-particle state?](https://quantumcomputing.stackexchange.com/questions/8625/how-to-generate-the-following-m-level-n-particle-state)
*   [Players who play fast in longer time control games](https://chess.stackexchange.com/questions/26782/players-who-play-fast-in-longer-time-control-games)
*   [Security risks of user generated HTML?](https://security.stackexchange.com/questions/220447/security-risks-of-user-generated-html)
*   [Why was the Vulcan bomber used for the Falklands raid?](https://aviation.stackexchange.com/questions/71179/why-was-the-vulcan-bomber-used-for-the-falklands-raid)
*   [What is Trump's position on the whistle blower allegations? What does he mean by "witch hunt"?](https://politics.stackexchange.com/questions/47265/what-is-trumps-position-on-the-whistle-blower-allegations-what-does-he-mean-by)
*   [Dodging a Deathbeam travelling at speed of light](https://worldbuilding.stackexchange.com/questions/159685/dodging-a-deathbeam-travelling-at-speed-of-light)
*   [5e Path of Totem Barbarian, are Physical Totems considered magical items/accessories?](https://rpg.stackexchange.com/questions/158697/5e-path-of-totem-barbarian-are-physical-totems-considered-magical-items-accesso)
*   [In what way were Renaissance battles like chess matches?](https://history.stackexchange.com/questions/55169/in-what-way-were-renaissance-battles-like-chess-matches)
*   [Why is the air inside airliners so dry (low humidity)?](https://aviation.stackexchange.com/questions/71163/why-is-the-air-inside-airliners-so-dry-low-humidity)
*   [Usage of infinitive in instructions given by GPS](https://italian.stackexchange.com/questions/11216/usage-of-infinitive-in-instructions-given-by-gps)
*   [Fast symmetric key cryptography class](https://codereview.stackexchange.com/questions/231507/fast-symmetric-key-cryptography-class)

[Question feed](https://stackoverflow.com/feeds/question/48919200 "Feed of this question and its answers")

# Subscribe to RSS

Question feed

To subscribe to this RSS feed, copy and paste this URL into your RSS reader.

https://stackoverflow.com/feeds/question/48919200

[](#)

##### [Stack Overflow](https://stackoverflow.com)

*   [Questions](https://stackoverflow.com/questions)
*   [Jobs](https://stackoverflow.com/jobs)
*   [Developer Jobs Directory](https://stackoverflow.com/jobs/directory/developer-jobs)
*   [Salary Calculator](https://stackoverflow.com/jobs/salary)
*   [Help](https://stackoverflow.com/help)
*   Mobile
*   Disable Responsiveness

##### [Products](https://www.stackoverflowbusiness.com)

*   [Teams](https://stackoverflow.com/teams)
*   [Talent](https://www.stackoverflowbusiness.com/talent)
*   [Advertising](https://www.stackoverflowbusiness.com/advertising)
*   [Enterprise](https://stackoverflow.com/enterprise)

##### [Company](https://stackoverflow.com/company/about)

*   [About](https://stackoverflow.com/company/about)
*   [Press](https://stackoverflow.com/company/press)
*   [Work Here](https://stackoverflow.com/company/work-here)
*   [Legal](https://stackoverflow.com/legal)
*   [Privacy Policy](https://stackoverflow.com/legal/privacy-policy)
*   [Contact Us](https://stackoverflow.com/company/contact)

##### [Stack Exchange  <br>Network](https://stackexchange.com)

*   [Technology](#)
*   [Life / Arts](#)
*   [Culture / Recreation](#)
*   [Science](#)
*   [Other](#)

*   [Blog](https://stackoverflow.blog?blb=1)
*   [Facebook](https://www.facebook.com/officialstackoverflow/)
*   [Twitter](https://twitter.com/stackoverflow)
*   [LinkedIn](https://linkedin.com/company/stack-overflow)

site design / logo © 2019 Stack Exchange Inc; user contributions licensed under [cc by-sa 4.0](https://creativecommons.org/licenses/by-sa/4.0/) with [attribution required](https://stackoverflow.blog/2009/06/25/attribution-required/). rev 2019.10.31.35298