# Wire Routing Best Practices

Plan wire paths so the robot is easy to inspect, repair and debug.

## When you need this

Before you run the first wire on a new robot, and any time you add a mechanism. **Routing** is deciding where each wire goes on its way from the PDH to the device. A good route is short, tied down, away from moving parts, and easy to follow by eye when something breaks.

## Plan routing in CAD

Electronics need room, and the time to find that room is in CAD, before the plates are cut.

1. Place every electronics part in the robot model: PDH, robot controller, radio, motor controllers, battery and main breaker. Use real models from the FRC Design App (see [Getting Started](../cad/getting-started.md)).
2. Leave space around the PDH and motor controllers for your hands, the wires and the connectors. A motor controller with a power lead and a CAN lead sticking out of it is a lot bigger than the box alone.
3. Put the main breaker where it can be reached from outside the robot and isn't next to a moving part. The rules require this (R612 in 2026).
4. Mark the main wire paths with sketch lines or simple tubes. Look for spots where a wire would cross a sharp edge, a chain, or a moving joint.
5. Add holes for wires to pass through plates, sized for a grommet (see [Chafe Protection](chafe-protection.md)), and holes for zip tie anchors along each path.
6. Keep the battery low and near the middle if you can. It's one of the heaviest single parts on the robot, so where it sits changes the center of mass.

The PDH, its wiring and every breaker must also be visible for inspection (R613). They don't have to be visible in starting configuration, but you need to be able to show them to an inspector.

!!! tip "Photo needed"
    A screenshot of our most recent robot's electronics layout in Onshape, next to a photo of the real belly pan after wiring.

## Separate power and signal

Motor power wires carry big, fast-changing currents. That creates electrical noise that can mess with the small signals on CAN and sensor wires.

- Run motor power wires and signal wires (CAN, encoders, limit switches) in separate bundles when you can. Where they have to cross, cross them at a right angle instead of running them side by side.
- Keep each red and black power pair together, and twist them loosely. That cancels out a lot of the noise.
- CAN wire comes as a twisted yellow and green pair. Keep it twisted all the way to the connector.
- Keep the radio and its Ethernet cable away from motors (R708 in the 2026 manual).

## Wires across moving joints

A wire that crosses a pivot, an elevator or a turret flexes every time the mechanism moves. These are where most wiring failures happen.

- **Cross at the pivot.** Route the wire as close to the pivot's axis as you can. Near the axis it twists a little. Far from the axis it has to stretch.
- **Leave a loop.** Give the wire a gentle loop with enough slack for the full range of motion, then tie it down on both sides of the joint. Check it at both ends of the motion: fully stowed and fully extended.
- **Use flexible wire.** Fine-strand silicone wire bends many more times than stiff wire before it cracks.
- **Use a cable carrier for long travel.** On an elevator or long linear slide, a **drag chain** (a plastic chain-link track that guides the wires) keeps the wires on a fixed path and stops them from bending too tightly.
- **Keep wires out of chain, belts and gears.** One loop of wire caught in a sprocket will be cut in a single match.

Move the mechanism through its full range by hand, slowly, before it's ever powered. Watch every wire.

## Labeling and color code

When something breaks at an event you have maybe ten minutes to fix it. Labels make that possible.

- **Label both ends of every wire** with what it connects to. One common method is a flag label or a labeled zip tie at each connector, reading "from" on one side and "to" on the other.
- **Label every device** with its name and CAN ID.
- **Label the PDH channels** with what each one powers.
- **Label the main breaker** so field staff can find it fast.
- **Keep a wiring list.** A simple table of PDH channel, breaker size, device and CAN ID is enough. A full wiring diagram is even better.

The rules already fix the power colors: red (or yellow, white, brown, black with stripe) for positive, black or blue for negative (R624).

## Keeping it serviceable

A robot that can't be fixed quickly is not a good robot. While you route, ask: "If this part died, how fast could I swap it?"

- Put connectors (Powerpoles, lever nuts) between the PDH and each motor so you can swap a motor without re-crimping.
- Don't bundle so many wires together that you have to cut ten zip ties to replace one wire.
- Keep wire lengths right. Extra wire is just more to manage.

Re-check the electrical system after the first match or two at an event, and check screw-type connections like the battery and PDH every few matches.

## Common mistakes

- Leaving electronics out of the CAD and finding out there's no room after the plates are cut.
- Main breaker buried where nobody can reach it in a hurry.
- Wires across a pivot pulled tight at one end of the motion.
- A wire loop that hangs into a chain or sprocket.
- No labels, so every repair starts with tracing wires by hand.
- Zip tie bundles so tight nobody can get one wire out.

## Learn more

- [WPILib: Wiring Best Practices](https://docs.wpilib.org/en/stable/docs/hardware/hardware-basics/wiring-best-practices.html)
- [2026 FRC Game Manual](https://firstfrc.blob.core.windows.net/frc2026/Manual/2026GameManual.pdf), section 8.6 Power Distribution (R612, R613, R624)
- [Team 3255 Wiring Cheat Sheet](https://frcteam3255.github.io/Wiki/Electrical/Wiring%20Cheat%20Sheet), an example of one team's labeling and wiring standard
