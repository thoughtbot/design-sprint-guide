# Curating the hompage lists

### Option 1: Using the CMS

You can curate the homepage lists using the CMS. See [Access the CMS](https://github.com/thoughtbot/design-sprint-guide#access-the-cms).

### Option 2: Manually

1. Open the `_data/pages/home.json` file.
2. Under the list you want to curate move or add items in the following format:

Note: that `slug` must match the file name of the exercises minus the fiel extension.

```json
[
  ...other exercises
  {
    "slug": "lightning-demos"
  }
]
```

### Tips

- Exercises added to lists must be tagged to match the list that it's being added to.
- Collections can be filtered using the JSON using the `curateCollection` filter.

