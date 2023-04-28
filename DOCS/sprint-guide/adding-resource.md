# Adding a New Resource

### Option 1: Using the CMS

You can add new exercises using the CMS. See [Access the CMS](https://github.com/thoughtbot/design-sprint-guide#access-the-cms).

#### Adding new tags to the CMS

1. Open `admin/config.yml`.
2. Find the `select` widget which defines your resource tags:

```yml
...
- name: "tags"
    widget: "select"
    multiple: true
    options: ["Blog", "Book", "Wiki"]
    default: ["Book"]
...
```

Finally add a new tag to the `options` array.

### Option 2: Manually

1. Open the `_data/sprint_guide/resources/[type].json` file. The resources are split by:
    - Reading: Things that are mostly text based e.g. blog posts and books
    - Software: This can be either downloadable apps or web apps.
    - Templates: Things that people can base their own work on or modifiy freely.
2. Add a new Resource in the following format:

```json
[
  ...other resources
  {
    "title": "thoughtbot Blog",
    "description": "Our very own blog that covers all...",
    "url": "https://thoughtbot.com/blog/design",
    "icon": "/_includes/assets/images/resources/tb-blog_cover.svg",
    "tags": [
      "Blog"
    ]
  },
]
```

## Tips

- You can add more than one tag.
- Prefer SVG images as they are generally smaller and responsive.
- Optimise any new images added as much as you can.
