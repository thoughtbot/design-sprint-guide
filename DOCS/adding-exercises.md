# Adding a New Exercise

### Option 1: Using the CMS

You can add new exercises using the CMS. See [Access the CMS](https://github.com/thoughtbot/design-sprint-guide#access-the-cms).

### Option 2: Manually

1. Create a new markdown file inside the `exercises` folder, for example `awesome-exercise.md`.
2. Add some front-matter:
  - tags: `exercise`, plus a phase e.g `diverge`
  - title: The title that will appear in lists, and at the top of the page.
  - (optional) child: see below regarding sub-exercises.
  - (optional) children: see below regarding sub-exercises.
3. Write your content!

**Example**

```
---
tags: ['exercise', 'diverge']
title: Four-Step Sketches
---

[content goes here]
```

#### Sub-Exercises

Sometimes exercises are a series of smaller exercises packaged together, it is
possible to show these as a nested list. Consider the following:

```
[Parent] Four-step sketches
└─── [Child] Mind-mapping
└─── [Child] Idea Doodles
└─── [Child] Rapid 8's
└─── [Child] Storyboards
```

**Step 1.** Add an array `children` to the front-matter of the parent,
containing a list of the child filenames, minus the `.md` file extension:

```
---
tags: ['exercise', 'diverge']
title: Four-Step Sketches
children: ['mind-mapping', 'idea-doodles', 'speedy-eights', '3-step-storyboards']
---

...
```

**Step 2.** Add `child: true` to the front-matter of every child markdown file,
this will prevent the exercises from appearing twice in the list of exercises:

```
---
tags: ['exercise', 'diverge']
title: Mind Mapping
child: true
---

...
```
