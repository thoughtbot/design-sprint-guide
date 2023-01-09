# Adding a New Schedule

### Option 1: Using the CMS

You can add new schedules using the CMS. See [Access the CMS](https://github.com/thoughtbot/design-sprint-guide#access-the-cms). To display the new schedule follow the [display instructions](#display-the-new-schedule) below.

### Option 2: Manually

1. Create a new JSON file inside `_data/schedules`, for example: `my_new_schedule.json`.
2. Add the new schedule using the format below as a guide.
3. To display the new schedule follow the [display instructions](#display-the-new-schedule) below.

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

### Display the new schedule

1. Add a new folder under `schedules`, for example: `my-new-schedule`.
2. Inside that folder add an `index.njk` containing:

```
---
title: My New Schedule
---
<h1>{{ title }}</h1>

<!-- Optional -->
<article class="measure">
  {% renderFile './sprint-guide/schedules/my-new-schedule/_introduction.md' %}
</article>

<!-- schedules.[name] must match the file name in _data/schedules -->
{% set schedule = schedules.my_new_schedule %}
{% include "schedule.njk" %}
```
