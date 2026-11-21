# Contributing

This guide grows. If a rule is unclear, wrong, or missing, tell a design mentor or open a pull request.

## Open items for mentors

- [ ] Rule 1: confirm the axis directions (Z up, X toward the front, Y toward the robot's left) match the 2026 files.
- [ ] Rule 2: decide who reviews each subsystem's merges and how long a branch can stay open.
- [ ] Rule 4: decide whether blocks live in the Master Sketches studio or a separate Block CAD studio.
- [ ] Rule 5: list the exact belt and chain function names, and add a screenshot from the Origin Cube example document.
- [ ] Rule 5: check that `CloseFit_M5` and `ClearanceFit_M5` should both be 5.25 mm, and that the M8.5 tap size is named `TapSize_M85`.
- [ ] Rules 1 to 5: replace each "Screenshot to add" note with a real screenshot or video.
- [ ] Rule 6: set up the team material library (PLA, Nylon, TPU, polycarbonate).

## Adding a rule

Copy a file in `docs/rules/` and keep the same four parts:

1. **The rule:** one or two sentences you can remember.
2. **What it means:** the rule in plain words.
3. **Why:** the reasoning, so people can judge edge cases.
4. **How:** the steps, with pictures or video.

Add it to `nav:` in `mkdocs.yml` and to the table in `rules/index.md`. Group rules into sections when there are more than about eight, and run the draft past a mentor before it becomes a rule.
