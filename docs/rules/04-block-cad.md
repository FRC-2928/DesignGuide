# Rule 4: Model in High Fidelity Blocks

**The rule:** Model each subsystem as a simple, accurate "block" before modeling its detailed parts. Blocks use real dimensions and real locations, and the detailed parts are built inside and from them.

We follow the method FRC 3005 RoboChargers calls **high fidelity block CAD**. Before you work on this rule, read the [slides](https://docs.google.com/presentation/d/1xWj62HjiANdADNsP5ZN-zCswwD9ZUl7yibvG5EnrUBg/edit) or watch the [video](https://www.youtube.com/watch?v=GBdY-TMNkeI), a 50-minute talk from the 2024 FIRST Mentor Conference.

## What it means

**Block CAD** is a simplified 3D robot. Each subsystem is one solid, colored part that has the real size, the real material thickness, the real locations of shafts, pulleys and motors, and the real center distances for gears, belts and chains. It is not a pretty model. It is an accurate one.

```mermaid
flowchart LR
    L["Layout sketches<br/>(master sketches)"] --> B["Block CAD parts<br/>simple 3D shapes"]
    B --> A["Block assembly<br/>mates with limits"]
    A -- Derive --> D["Detailed CAD<br/>plates, brackets, spacers"]
```

The pieces fit together like this:

- **Layout sketches** are the 2D skeleton of the mechanisms, usually side views. These are our master sketches ([Rule 3](03-master-sketches.md)).
- **Block CAD parts** are the simple 3D shapes built from those sketches.
- **A block assembly** puts the blocks together with mates that have limits, so you can see how far each subsystem moves.
- **Detailed CAD** is the real parts, such as plates, brackets and spacers. Each subsystem document brings in the blocks it needs with Derive and builds on them.


## Why

- **Solve "how do we build this" early.** Questions like "tube or plate?" and "where does the gearbox go?" get answered before detailed work hardens around them.
- **Get a robot model fast.** A block model helps everyone picture the robot, gives software people something to use for kinematics and simulation, and gives rough geometry for wiring plans.
- **New designers can succeed.** The blocks record the design intent, the critical locations and the keep-out zones. A newer student can focus on modeling a part well instead of guessing what it is supposed to do.
- **Big changes become small changes.** Moving an upright, changing a plate thickness or relocating a pivot means editing the blocks, and the subsystems update.

## How

1. **Name design leads.** Experienced designers and CAD mentors own the block CAD. Others can edit it, especially during prototyping.
2. **Set up the documents.** Keep a separate document for each robot concept. After kickoff, make a template with the field elements, the drivetrain and the extension limits.
3. **Order the feature list.** Layout sketches go first, then the block CAD features grouped by subsystem.
4. **Build layout sketches.** Split them by field elements, drivetrain and extension limits, and subsystems. Fully constrain them, draw mechanisms in more than one position, and put the origin on the floor at the robot center, facing the correct way ([Rule 1](01-one-origin.md)).
5. **Draw the blocks.**  Make new sketches for the blocks instead of extruding the layout sketches directly. Name each part and give each subsystem its own color.
6. **Keep the geometry simple.**
    - Model tubes as solid rectangular blocks.
    - Leave out most brackets.
    - Show motors and gears as cylinders.
    - Make belts and gears as wide as their pulleys and bosses.
    - A rounded end on a block tells people where a pivot is.
7. **Build the block assembly.** Add mate connectors and set mate limits to show each subsystem's range of motion. Use configurations and the Named Positions tab for key poses.
8. **Decide what to include.** Include every subsystem, the main structure, the drivetrain, the bumpers and the electronics, including the battery. Add detail where parts move, where space is tight, and for new or complicated powertrains. Skip faraway parts, brackets, shafts and spacers that are implied, and tiny parts.
9. **Derive only what you need.** Bring in the blocks your subsystem needs plus neighbors for checking interference. Give the derived blocks a distinct color, keep their names, and turn visibility on and off often.
10. **Model the detailed parts.** Keep parts inside the block envelope and extrude up to a face instead of typing distances.
11. **Adjust as you go.** Use the season's goals and the team's time to decide how much detail to add. It is fine to bend the process later in the season.

!!! note "Screenshots and video to add"
    - The block CAD of the 2026 robot with each subsystem in its own color.
    - The block assembly with a mate limit being moved.

### Common mistakes

- Jumping to detailed parts while the blocks are still moving.
- Making blocks too detailed. They should be simple.
- Attaching detailed parts to layout sketch lines instead of to the blocks.
- Deriving every block into every document. Bring in only what you need.

### More to read

- [High Fidelity Block CAD slides, FRC 3005 RoboChargers](https://docs.google.com/presentation/d/1xWj62HjiANdADNsP5ZN-zCswwD9ZUl7yibvG5EnrUBg/htmlpresent)
- [High Fidelity Block CAD, FIRST Mentor Conference presentation by Orion DeYoe (video)](https://www.youtube.com/watch?v=GBdY-TMNkeI)

**Next:** [Rule 5: Smart Dimensions](05-smart-dimensions.md)
