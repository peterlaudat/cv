# PersonalSite-PeterLaudat

This is my repository for [Project 1 Personal Web Page](https://course.ccs.neu.edu/cs5610su20-seattle/hw/su20wd/personal-web-page). This readme contains a description of [my self-developed personal site](https://morning-hollows-15096.herokuapp.com/).

---

## Landing page

I thought it redundant to use my name for anything besides the home link, so that's how I used it. Other than that, the navigation bar is a couple of flexboxes with 2 internal and 2 external links. A complete novice to HTML, CSS, JavaScript, and jQuery, I lost many days overaggressively trying to create a single page application with simple jQuery to reuse the navigation on various pages or to append various pages to one nav bar while also learning the above languages.

I finally gave up and created a nav bar, copied it to the other internal pages, tweaked the nav bars appropriately on the internal pages, and employed one css file for all three internal page nav bars for consistent look and feel.

The nav.css file changes the navigation link color slightly when you hover your mouse over them.

I wrote a little jQuery to turn the landing page paragraph fonts blue when you mouse over them, so please look for that.

![Image of index.png](readme_images\index.png)

---

## Three Internal Links

The resume link displays my resume.

![Image of resume.png](readme_images\resume.png)

As previously mentioned, I copied and pasted the index page nav bar to the bio and tech pages, tweaked the relative path names for the links or navigation to the other pages, and employed the same nav.css file. I put HTML tables on both of these pages and employed table.css to again ensure consistent look and feel. The rows in the these pages' tables highlight light gray when you mouse over them.

![Image of bio.png](readme_images\bio.png)

![Image of tech.png](readme_images\tech.png)

---

## One or more external links

The email link is a simple mailto: link an the work link takes you to Github.

![Image of email.png](https://github.ccs.neu.edu/PersonalSite-PeterLaudat/blob/master/readme_images/email.png)

![Image of work.png](https://github.ccs.neu.edu/PersonalSite-PeterLaudat/blob/master/readme_images/work.png)

---

## Responsiveness

I employed flexbox wherever possible, which seemed make responsiveness relatively easy to maintain once you get the hang of it, generally. Other than that, I used a media query in nav.css to have the left and right navigation containers center vertically when the screen width narrows.
