# Adding a New Resource

1. Open the `_data/resources/[type].json` file. The resources are split by:
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
    "icon": "/images/resources/tb-blog_cover.svg",
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
