We love new ideas that push this repository and design sprints forward. We are
using [GitHub issues][issues], and [GitHub projects][project] to track progress
for tracking our work on the repository. Here are the ways that you can contribute:

[issues]: https://github.com/thoughtbot/design-sprint-guide/issues/
[project]: https://github.com/orgs/thoughtbot/projects/9/views/1

We ask that you abide by our [code of conduct](https://thoughtbot.com/open-source-code-of-conduct)
when contributing to the guide.

## Structure

We use the following structure to store content:

```
├── _data
│   ├── faqs.json // add FAQs into here
│   ├── schedules // add new schedules into here
│   │   ├── *.json
├── _includes
│   ├── assets // static resources
│   │   ├── fonts
│   │   ├── images
│   │   ├── sass
│   ├── *.njk // reusable components
│   ├── layouts
│   │   ├── *.njk // reusable page layouts
├── _site // eleventy output, don't edit
├── admin
│   ├── config.yml // conifgure Netlify CMS
│   ├── index.html
├── css // SASS output, don't edit
├── exercises // add exercises here
│   ├── *.md // exercise
│   ├── exercises.json // apply layout to every exercise
│   ├── index // exercises index page
│   │   ├── _introduction.md // edit the index introduction
│   │   ├── index.njk
├── glossary // add new glossary here
│   ├── *.md
│   ├── glossary.json // apply layout and tags to every entry
│   ├── index.njk // lists whole glossary
├── phases // add new phases here
│   ├── [phase]
│   │   ├── _introduction.md // edit the index introduction
│   │   ├── index.njk
│   ├── phases.json // apply layout and tags to every phase
├── resources // add new resources here
│   ├── *.md
│   ├── index // resources index page
│   │   ├── _introduction.md // edit the index introduction
│   │   ├── index.njk
├── schedules // display new schedules here
│   ├── [schedule]
│   │   ├── _introduction.md // edit the index introduction
│   │   ├── index.njk
│   ├── index // schedule index page
│   │   ├── _introduction.md // edit the index introduction
│   │   ├── index.njk
│   ├── schedules.json // apply layout and tags to every schedule
├── .eleventy // configure eleventy
├── .eleventyignore // tell eleventy to ignore files
├── netlify.toml // configure netlify deploys
```

## Maintenance and Improvements

If you find a bug, misspelling or other problem with anything please add
a new [issue](https://github.com/thoughtbot/design-sprint-guide/issues/new).

Also we'd welcome you to submit a pull request to make fixes yourself. The
new content guides below should be helpful.

## New Content

- Add a new [exercise](https://github.com/thoughtbot/design-sprint-guide/blob/main/DOCS/adding-exercises.md)
- Add a new [schedule](https://github.com/thoughtbot/design-sprint-guide/blob/main/DOCS/adding-schedules.md)
- Add a new [glossary term](https://github.com/thoughtbot/design-sprint-guide/blob/main/DOCS/adding-glossary.md)
- Add a new [FAQ](https://github.com/thoughtbot/design-sprint-guide/blob/main/DOCS/adding-faq.md)

## Ideas

We welcome ideas for new features and enhancements, you can make suggestions or
start discussions by opening a new
[issue](https://github.com/thoughtbot/design-sprint-guide/issues/new).

---

## Deploy Previews

Netlify will automatically deploy previews when you push up new code, when you
open a pull request the integration will comment with a link that you can use
to view the deploy. You can also see the preview before opening a pull request
by logging into Netlify and navigating to the 'deploys' tab for the site, or
using the following format:

```
branch--yoursitename.netlify.app
```

## Deploy to Production

The site will deploy to production every time new commits are added to the `main` branch.
