# [Water Monitoring System](https://vinitshahdeo.github.io/Water-Monitoring-System/) - IoT Project
---
> ## :mask: [COVID-19](http://corona-cases-india.netlify.com/) | Stay Home, Stay Safe! :house:  <br> :mag_right: Checkout [this](http://corona-cases-india.netlify.com/) web app for live CORONA updates. 
> ### :incoming_envelope: Read my open letter [here](https://github.com/vinitshahdeo/Water-Monitoring-System/issues/236). :heart:
> ## :bar_chart: Checkout the [COVID-19 Tracker :mask: | INDIA](https://indiafightscorona.netlify.app/) :india: 
> ### :point_right: You can find the repo [here](https://github.com/vinitshahdeo/COVID19/). :star:

---

[![first-timers-only](https://img.shields.io/badge/first--timers--only-friendly-tomato.svg?style=flat&logo=git)](https://github.com/vinitshahdeo/Water-Monitoring-System/issues?q=is%3Aissue+is%3Aopen+label%3Afirst-timers-only) [![GitHub license](https://img.shields.io/github/license/vinitshahdeo/Water-Monitoring-System.svg?logo=github)](https://github.com/vinitshahdeo/Water-Monitoring-System/blob/master/LICENSE) [![GitHub stars](https://img.shields.io/github/stars/vinitshahdeo/Water-Monitoring-System.svg?logo=github)](https://github.com/vinitshahdeo/Water-Monitoring-System/stargazers) [![GitHub forks](https://img.shields.io/github/forks/vinitshahdeo/Water-Monitoring-System.svg?logo=github&color=teal)](https://github.com/vinitshahdeo/Water-Monitoring-System/network/members) [![GitHub top language](https://img.shields.io/github/languages/top/vinitshahdeo/Water-Monitoring-System?color=yellow&logo=javascript)](https://github.com/vinitshahdeo/Water-Monitoring-System) [![Open Source Helpers](https://www.codetriage.com/vinitshahdeo/water-monitoring-system/badges/users.svg)](https://www.codetriage.com/vinitshahdeo/water-monitoring-system)

> **You can view the demo [here](https://vinitshahdeo.github.io/Water-Monitoring-System/src/home.html).**

[![Water Monitoring System](https://img.shields.io/badge/Water Monitoring-System-teal.svg?colorA=teal&colorB=orange&style=for-the-badge)](https://github.com/vinitshahdeo/Water-Monitoring-System/) [![IoT](https://img.shields.io/badge/IoT-Project-teal.svg?colorA=blue&colorB=red&style=for-the-badge)](https://github.com/vinitshahdeo/Water-Monitoring-System/)

Water Monitoring System is an IOT based Liquid Level Monitoring system that has the mechanism to keep the user alerted in case of liquid overflow or when tank depletes. The water tanks can be fixed with ultrasonic sensors that is placed over the container. Ultrasonic sensor is used to measure, compare container depth and liquid level.

The status of the system could be monitored by an LCD screen or a web page that provides a brilliant graphical representation. Colours are used to depict various scenarios with respect to the amount of liquid in the tanks or containers and the buzzer buzzes when the limit exceeds the permissible quantity of fill.

### Goals of this project :

- **_To reduce the wastage of water across the city_**
- **_To provide better water supply to the people_**

```js
  ____                   __        __    _
 / ___|  __ ___   _____  \ \      / /_ _| |_ ___ _ __
 \___ \ / _` \ \ / / _ \  \ \ /\ / / _` | __/ _ \ '__|
  ___) | (_| |\ V /  __/   \ V  V / (_| | ||  __/ |
 |____/ \__,_| \_/ \___|    \_/\_/ \__,_|\__\___|_|
  ____                    _     _  __
 / ___|  __ ___   _____  | |   (_)/ _| ___
 \___ \ / _` \ \ / / _ \ | |   | | |_ / _ \
  ___) | (_| |\ V /  __/ | |___| |  _|  __/
 |____/ \__,_| \_/ \___| |_____|_|_|  \___|

```

> **Click [here](https://github.com/vinitshahdeo/Water-Monitoring-System/blob/master/docs/Water%20level%20monitoring%20system.pdf?raw=true) to download the report.**

The IoT(Hardware) components required are:

- **AVR family microcontroller**
- **LCD screen**
- **Wifi modem**
- **A buzzer**
- **12V transformer**

## Getting Started

[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/vinitshahdeo/Water-Monitoring-System?logo=github)](https://vinitshahdeo.github.io/Water-Monitoring-System/) [![GitHub commit activity](https://img.shields.io/github/commit-activity/m/vinitshahdeo/Water-Monitoring-System?color=bluevoilet&logo=github)](https://github.com/vinitshahdeo/Water-Monitoring-System/commits/) [![GitHub repo size](https://img.shields.io/github/repo-size/vinitshahdeo/Water-Monitoring-System?logo=github)](https://vinitshahdeo.github.io/Water-Monitoring-System/)

**1.** Fork [this](https://github.com/vinitshahdeo/Water-Monitoring-System/) repository.
Click on the <a href="https://github.com/vinitshahdeo/Water-Monitoring-System/"><img src="https://img.icons8.com/ios/24/000000/code-fork.png"></a> symbol at the top right corner.

**2.** Clone the forked repository.

```bash
git clone https://github.com/<your-github-username>/Water-Monitoring-System
```

**3.** Navigate to the project directory.

```bash
cd Water-Monitoring-System
```

**4.** Create a new branch.

```bash
git checkout -b <your_branch_name>
```

**5.** Make changes in source code.

**6.** Stage your changes and commit

```bash
#Add changes to Index
git add .

#Commit to the local repo
git commit -m "<your_commit_message>"
```

>CAUTION: Synch up your local repo with [original repo](https://github.com/vinitshahdeo/Water-Monitoring-System) (Upstream) before pushing your commits.
>This avoids unnecessary conflicts during the merge.

>NOTE: You can do so by adding a [remote handler](https://www.atlassian.com/de/git/tutorials/syncing) reference to the original repo and pull the changes from the respective branch.
>Resolve the [merge-conflicts](https://www.atlassian.com/de/git/tutorials/using-branches/merge-conflicts) if any.

>TIPS: [Workflow diagram](git-workflow.svg)
>```bash
>#Add upstream repo
>git remote add upstream https://github.com/vinitshahdeo/Water-Monitoring-System.git
>
>#Disable accidental push to the upstream
>git remote set-url --push upstream DISABLE
>
>#List the remote repo and fetch references
>git remote -v && git fetch upstream
>
>#Check for any new commits in the upstream branch
>git log HEAD..upstream/master #No output indicates, upstream has not moved ahead
>
>#See the patch difference between local and upstream branch
>git diff -p HEAD..upstream/master
>
>```

>CAUTION: If the upstream has moved ahead, rebase your commit and resolve conflicts if any. [Skip otherwise]
>```bash
>git rebase upstream/master
>```
>

**7.** Push your local commits to the remote repo.

```bash
git push -u origin <your_branch_name>
```

**8.** Create a [PR](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) !

**9.** **Congratulations!** Sit and relax, you've made your contribution to [Water Monitoring System](https://vinitshahdeo.github.io/Water-Monitoring-System/) project.

## Issues

[![GitHub issues](https://img.shields.io/github/issues/vinitshahdeo/Water-Monitoring-System?logo=github)](https://github.com/vinitshahdeo/Water-Monitoring-System/issues) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat&logo=git&logoColor=white)](https://github.com/vinitshahdeo/Water-Monitoring-System/pulls) [![GitHub last commit](https://img.shields.io/github/last-commit/vinitshahdeo/Water-Monitoring-System?logo=github)](https://github.com/vinitshahdeo)

| TITLE                                                                                                          | LEVEL       |
| -------------------------------------------------------------------------------------------------------------- | ----------- |
| [UI Enhancements](https://github.com/vinitshahdeo/Water-Monitoring-System/issues/2)                            | `EASY`      |
| [Project Documentation](https://github.com/vinitshahdeo/Water-Monitoring-System/issues/3)                      | `VERY EASY` |
| [Setting up Cloud APIs to send/receive data](https://github.com/vinitshahdeo/Water-Monitoring-System/issues/4) | `MEDIUM`    |
| [Admin Dashboard ](https://github.com/vinitshahdeo/Water-Monitoring-System/issues/5)                           | `HARD`      |
| [Notify stakeholders](https://github.com/vinitshahdeo/Water-Monitoring-System/issues/6)                        | `ADVANCED`  |

**NOTE**: **Feel free to [open issues](https://github.com/vinitshahdeo/Water-Monitoring-System/issues/new/choose)**. Make sure you follow the Issue Template provided.

## Contribution Guidelines

[![GitHub pull requests](https://img.shields.io/github/issues-pr-raw/vinitshahdeo/Water-Monitoring-System?logo=git&logoColor=white)](https://github.com/vinitshahdeo/Water-Monitoring-System/compare) [![GitHub contributors](https://img.shields.io/github/contributors/vinitshahdeo/Water-Monitoring-System?logo=github)](https://github.com/vinitshahdeo/Water-Monitoring-System/graphs/contributors) [![Vinit Shahdeo](https://img.shields.io/badge/Author-@vinitshahdeo-gray.svg?colorA=gray&colorB=dodgerblue&logo=github)](https://github.com/vinitshahdeo/)

- Write clear meaningful git commit messages (Do read [this](http://chris.beams.io/posts/git-commit/)).

- Make sure your PR's description contains GitHub's special keyword references that automatically close the related issue when the PR is merged. (Check [this](https://github.com/blog/1506-closing-issues-via-pull-requests) for more info)

- When you make very very minor changes to a PR of yours (like for example fixing a text in button, minor changes requested by reviewers) make sure you squash your commits afterward so that you don't have an absurd number of commits for a very small fix. (Learn how to squash at [here](https://davidwalsh.name/squash-commits-git))

- When you're submitting a PR for a UI-related issue, it would be really awesome if you add a screenshot of your change or a link to a deployment where it can be tested out along with your PR. It makes it very easy for the reviewers and you'll also get reviews quicker.

- Please follow the [PR Template](https://github.com/vinitshahdeo/Water-Monitoring-System/blob/master/.github/PULL_REQUEST_TEMPLATE.md) to create the PR.

- Always create PR to `develop` branch.

- Please read our [Code of Conduct](./CODE_OF_CONDUCT.md).

- Refer [this](https://github.com/vinitshahdeo/Water-Monitoring-System/blob/master/CONTRIBUTING.md) for more.


## Open Source Programs

This project is part of the following Open Source programs:

- [GirlScript Summer of Code 2020](https://www.gssoc.tech/)
- [Rails Girls Summer of Code 2020](http://railsgirlssummerofcode.org/)
- [Student Code In](https://scodein.tech/)
- [Leapcode](https://www.leapcode.io/)
- [JGEC Winter of Code 2020](https://jwoc.tech/)
- [Hacktoberfest 2020](https://hacktoberfest.digitalocean.com/)
- [Script Winter Of Code](https://swoc.tech/)

## Frequently Asked Questions(FAQs) for [GSSoC'20](https://www.gssoc.tech/)

> This project is accepting contributions under [GirlScript Summer of Code 2020](https://www.gssoc.tech/) - three months long Open Source program conducted by [GirlScript Foundation](https://www.gssoc.tech/).

[![GSSoC](https://raw.githubusercontent.com/GirlScriptSummerOfCode/MentorshipProgram/master/GSsoc%20Type%20Logo%20Black.png)](https://www.gssoc.tech/)

#### _1. How to start as a beginner so as to contribute to the project?_

_There are many beginner level issues to begin with, which include documentation, development and design. Also, feel free to make issues for features as well as for reporting bugs.Participants can claim an issue by commenting that they are interested in it. We are also open to new ideas and suggestions._




#### _3. How to communicate with us?_

_All communication will happen on the Slack channel for this particular projects. Mentors can also be reached through GitHub. Avoid DMs and unnecessary mentions on slack and GitHub both. Checkout [this](https://github.com/vinitshahdeo/Water-Monitoring-System/issues/15) issue for more._

#### _4. What is the Tech Stack for this project?_

- **Frontend:** React

- **Backend:** Django, Node.js

#### _5. What is the deadline for any task submission?_

_Mentors can assign issues to participants and also mention a deadline before which the issue is to be resolved. They can reassign issues in case of any delay, so be active and complete your tasks within the negotiated duration._


## Shared experiences on [GSSoC'20](https://www.gssoc.tech/) :pencil:

| Article                                               | Author                                          |
|-------------------------------------------------------|---------------------------------------------------|
| [GirlScript Summer of Code 2020 Mentor Experience](https://medium.com/girlscript-summer-of-code/girlscript-summer-of-code-2020-mentor-experience-28daec399b1e) | [@PragatiVerma18](https://github.com/PragatiVerma18)|
| [GSSOC 2020-A journey to explore the “UNEXPLORED”](https://medium.com/@swara.shukla65/gssoc-2020-a-journey-to-explore-the-unexplored-f25a6ade8288) | [@Swarnimashukla](https://github.com/Swarnimashukla)            |

## About [RGSoC'20](https://railsgirlssummerofcode.org/)


<a href="https://github.com/vinitshahdeo/Water-Monitoring-System/issues/141" target="_blank"><img src="./assets/rgsoc2020.png" width="30%" height="30%"/></a>


```javascript
/**
 * 
 * Let's fight for Corona together!
 */
function stayAtHome() {
  eat();
  sleep();
  code();
  repeat();
}


```


1. **HANDS**: Wash them often
2. **ELBOW**: Cough into it
3. **FACE**: Don't touch it
4. **SPACE**: Keep safe distance
5. **HOME**: Stay if you can

### :x: Avoid Handshakes :handshake: 
### :heavy_check_mark: Do Namastey :pray:

<br>

<sup>**PS: I know it's off-topic but **Yes**, COVID-19 everyone's talking about. Please stay safe at your home and enjoy contributing to your projects.**</sup>


_Your friend,_ <br>
_**[Vinit](https://www.instagram.com/vinitshahdeo/) :)**_

---

```javascript
/**
 *
 * {thisRepo.url} = https://github.com/vinitshahdeo/Water-Monitoring-System/
 *
 */
if (thisRepo.isAwesome()) {
  thisRepo.fork(); // waiting for your awesome contributions :)
  thisRepo.star(); // thanks in advance :p
  thisRepo.watch(bug => {
    if (!doesIssueExists(bug)) {
      createNewIssue(bug); // wow, that's a nice catch
    } else {
      checkIssueTracker(bug); // comment there
    }
  });
  thisRepo.share(); // sharing is caring :D
}
```

---

[![built with love](https://forthebadge.com/images/badges/built-with-love.svg)](https://github.com/vinitshahdeo/) [![powered by water](https://forthebadge.com/images/badges/powered-by-water.svg)](https://github.com/vinitshahdeo/) [![smile please](https://forthebadge.com/images/badges/makes-people-smile.svg)](https://github.com/vinitshahdeo/)

<p align="center"><strong><sup>:hugs: <br>Check out my other projects <a href="./PROJECTS.md">here</a>!</sup></strong></p>

