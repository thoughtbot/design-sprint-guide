# Adding a New Schedule

### Option 1: Using the CMS

You can add new schedules using the CMS. See [Access the CMS](https://github.com/thoughtbot/design-sprint-guide#access-the-cms).

### Option 2: Manually

1. Create a new JSON file inside `_data/sprint_guide/schedules`, for example: `my_new_schedule.json`.
2. Add the new schedule using the format below as a guide.

```json
{
  "title": "Classic (GV Flavor)",
  "phases": [
    {
      "title": "Understand",
      "end_time": "4:00pm",
      "exercise": [
        {
          "title": "Introduction",
          "time": "10:00am"
        },
        {
          "title": "Problem Statement",
          "time": "10:15am",
          "slug": "problem-statement" // Must match the filename of the exercise
        },
        ...more exercises
      ]
    }
    ... more phases
  ]
}
```
