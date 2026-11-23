# 3. 2928 Design Guidelines

These are the rules we follow in every 2928 Onshape document. Before any branch gets merged into Main, go through the checklist at the bottom of this page.

## The rules

| Rule | In one line | Read it when |
|---|---|---|
| [Rule 1: One Origin](01-one-origin.md) | Every Part Studio and Assembly starts with Origin Cube, so everything shares one origin at robot center on the floor. | You make a new Part Studio or Assembly. |
| [Rule 2: Branching](02-branching.md) | Never edit Main. Work on a named branch, get it reviewed, then merge. | Before you change anything. |
| [Rule 3: Master Sketches](03-master-sketches.md) | Draw the robot's layout in well-named master sketches before building 3D parts. | You start a new mechanism. |
| [Rule 4: High Fidelity Blocks](04-block-cad.md) | Build simple, accurate blocks for each subsystem before detailed parts. | You plan a subsystem, or move from layout to parts. |
| [Rule 5: Smart Dimensions](05-smart-dimensions.md) | Dimension with Origin Cube variables and functions. Never type a power train diameter. | You dimension a sketch. |
| [Rule 6: Materials](06-materials.md) | Assign each part its real material as soon as it exists, so weight and center of mass stay accurate. | You create a new part. |

## How each rule is written

Every rule page is split into the same four parts:

- **The rule:** one or two sentences you can remember.
- **What it means:** the rule in plain words.
- **Why:** the reasoning, so you can judge edge cases.
- **How:** the steps, with pictures and video.

## Before you merge: checklist

The reviewer and the author go through this together.

- [ ] Branch name says the subsystem and the job, and the work is only that job.
- [ ] Every new Part Studio has Origin Cube as its first feature.
- [ ] Parts are modeled in place, not built at the origin and moved.
- [ ] New geometry is in named master sketches or derives from them.
- [ ] Sketch names are meaningful, not "Sketch 7."
- [ ] Power train and hole dimensions use Origin Cube variables or functions, not typed numbers.
- [ ] Blocks are updated if the layout changed, and detailed parts still fit inside them.
- [ ] Every new part has its real material assigned (FRC Design Library parts keep their own masses).
- [ ] A version was created on the branch before merging.

## Adding a new rule

This list will grow. See [Contributing](../contributing.md).
