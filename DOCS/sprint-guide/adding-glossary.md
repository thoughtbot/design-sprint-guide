# Adding a New Glossary Term

### Option 1: Using the CMS

You can add new glossary terms using the CMS. See [Access the CMS](https://github.com/thoughtbot/design-sprint-guide#access-the-cms).

### Option 2: Manually

1. Open the `_data/sprint_guide/glossary.json` file.
2. Add a new FAQ in the following format:

```json
[
  ...other terms
  {
    "title": "Bike Shed",
    "definition": "A situation where the team wastes time on something trivial, at the cost of more important things. e.g. people arguing over what color to paint the bike shed while the house is not finished"
  }
]
```

## Tips

- The glossary is a list of terms that people who aren't a designer, or developer, or have never taken part in a sprint may not know.
- Try to define the term as succinctly as you can.
