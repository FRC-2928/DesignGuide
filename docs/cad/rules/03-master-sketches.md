# Rule 3: Start With Master Sketches

**The rule:** Start with master sketches. Put as much of the robot's geometry as possible into one set of well-named sketches before anyone builds 3D parts. Split into more than one master sketch only when a single one gets too cluttered, and don't split further than you need.

## What it means

A **master sketch** is a 2D sketch that lays out the robot: the frame perimeter, axle centers, bearing locations, pivot points, belt and chain paths, and the space set aside for electronics and the battery. You draw it before modeling any parts.

Master sketches live together in one Part Studio. Each subsystem's master sketch is turned into **block CAD**: simple, accurate 3D shapes for that subsystem ([Rule 4](04-block-cad.md)). The blocks, not the sketches, are what other Part Studios derive and build their detailed parts on. That way most geometry on the robot still traces back to the master sketches, through the blocks.

```mermaid
flowchart LR
    M["Master Sketches studio<br/>Frame, Drivetrain, Intake, Elevator sketches"]
    M --> BI["Intake block cad"]
    M --> BE["Elevator blocks cad"]
    M --> BD["Drivetrain blocks cad"]
    BI -- Derived --> I["Intake studio<br/>detailed parts built on the blocks"]
    BE -- Derived --> E["Elevator studio<br/>detailed parts built on the blocks"]
    BD -- Derived --> D["Drivetrain studio<br/>detailed parts built on the blocks"]
```

The [2026 robot document](https://cad.onshape.com/documents/c41e5b5e0489e0e9413cd997/w/2ffbdb1c9cd280eb809d5198/e/99871744b623f46b84ba0ae9) is the model to follow. Open it and look at how the layout is drawn first and the parts come second.

## Why

- **One place for the truth.** If the intake axle is at one spot in the master sketch, every part that uses that axle agrees on it. Without this, two people place the same axle in two slightly different places and the parts don't fit.
- **Conflicts show up early.** When all subsystems are drawn together, you can see that the elevator and the intake want the same space before any 3D work is wasted.
- **A starting point for everyone.** When a new teammate begins a part, the master sketch tells them where it goes and how big it can be.
- **Updates are easy.** Move something in the master sketch and the blocks and parts built from it move too.
- **It's standard practice.** FRCDesign.org teaches the same idea as top-down design: lay out the whole robot first, then design the parts.

## How

1. **Make a Part Studio called "Master Sketches."** Put Origin Cube first ([Rule 1](01-one-origin.md)).
2. **Sketch the big things first.** Start with the frame perimeter and the major axle and pivot centers. Sketch in 2D on the standard planes, for example a side view on the Front plane and a top view on the Top plane. The Front plane shows the robot's side because our robot faces +X ([Rule 1](01-one-origin.md)).
3. **Use the Origin Cube functions for dimensions.** Use them for gear, pulley and center distance values so the sketch carries meaning ([Rule 5](05-smart-dimensions.md)).
4. **Name every sketch.** Click the name in the feature list and rename it. A teammate should be able to read the name and know what the sketch shows without opening it.
    - Good: "shooter hood plates", "shooter to indexer path", "intake roller axes".
    - Not useful: "Sketch 14", "new sketch", "test".
    - You don't need to repeat the subsystem in every name if the sketch is already in that subsystem's folder.
5. **Group them.** Put each subsystem's sketches in a folder in the feature list so the list stays readable.

    ![A well-organized feature list](../images/rule3-feature-tree.png){ width="320" }

    *A feature list with good naming: reference planes named for what they mark, a folder per subsystem, a layout sketches folder inside the subsystem, and every sketch named for what it shows.*

6. **Fully define each sketch.** If a sketch still has loose lines that can move, finish constraining it before others rely on it. Leave fillets out of master sketches; add them to the 3D part at the end.
7. **Build blocks from them.** Turn each subsystem's master sketch into block CAD, as described in [Rule 4](04-block-cad.md). Subsystem Part Studios add Origin Cube first, then use **Derived** to bring in the **blocks** they need and build detailed parts on them. Derive a master sketch directly only when there's no block that carries the geometry you need.
8. **Split carefully.** If one master sketch is so crowded you can't select anything, split it, usually by subsystem or by view. Stop there. Each extra master sketch can't be constrained to the others as easily, so the more you split, the more of the benefit you lose.

!!! note "Screenshots and video to add"
    - The Derived feature dialog pulling the intake blocks into the Intake studio.

### Common mistakes

- Starting 3D parts before the layout exists.
- Drawing the same feature again in a subsystem studio instead of deriving it.
- Sketches named "Sketch 3" and "Sketch 4".
- Splitting into one sketch per part, which defeats the point.

### More to read

- [FRCDesign.org Learning Course](https://frcdesign.org/learning-course/), Stage 1 section D: Top Down Design and Layout Sketch
- [FRC design slides: robot organization and primary sketches](https://docs.google.com/presentation/d/1r39MTWGvlD8HhafLA1El1IUdSItXruq4xSPc8Zk4OFY/htmlpresent)

**Next:** [Rule 4: High Fidelity Blocks](04-block-cad.md)
