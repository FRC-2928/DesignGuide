# Strain Relief

Keep connectors from being the part that holds the wire in place.

## When you need this

Every time you finish a connection. **Strain relief** means fastening the wire to the robot near the connector, so that when the wire gets pulled, bumped or shaken, the force goes into the fastener and not into the crimp or terminal.

## Why connectors fail

A connector is built to carry current, not to hold weight or survive tugging. On a robot, wires get loaded in a few ways:

- **Pulls.** Someone grabs a wire to move it, or a mechanism snags it.
- **Vibration.** The robot shakes the whole match. A wire hanging loose swings back and forth, and every swing bends it right where it enters the connector.
- **Hits.** Collisions jolt everything. A heavy wire with nothing holding it yanks on its terminal.

Copper wire gets work-hardened when it's bent over and over in the same spot. It gets stiff, then it cracks, often inside the insulation where you can't see it. The robot works in the pit and cuts out on the field.

## Methods

### Zip ties and anchors

**Zip ties** are the main tool. Tie the wire to something solid within a few inches of each connector.

- Tie to a frame member, a mounting hole, or a **zip tie mount** (a small plastic base with a slot for the tie). Mounts can be screwed down or stuck down. Adhesive mounts tend to peel off on a hot, vibrating robot, so screw or rivet them when you can.
- Pull the tie snug, not crushing. Over-tightening can cut into the insulation.
- Cut the tail flush with flush cutters. A tail cut at an angle is sharp enough to cut skin.
- Leave a little slack between the tie and the connector so the connector itself isn't under tension.

## Where strain relief is required

The rules don't list every spot, so this is a list of places we treat as must-do:

- Both sides of every Powerpole or other inline connector.
- Every wire into a PDH terminal.
- Battery leads and main breaker leads.
- Motor controller power and motor leads.
- CAN wires at every device. CAN connectors are small and come apart easily. See [Crimping CAN Connectors](can-crimping.md#protecting-can-connectors-on-the-robot).
- The radio's Ethernet and power cables.
- Every wire that crosses a moving joint (see [Wire Routing](routing.md#wires-across-moving-joints)).
- Sensor cables at the sensor, especially on mechanisms that move or take hits.

Secure cables close to where they connect, with enough slack that the connector isn't under strain. Don't over-secure them either, which makes troubleshooting harder. Tie wires down, but don't cocoon them so tightly that nobody can reach a connector.

## Common mistakes

- Relying on the connector to hold the wire in place.
- A first zip tie a foot away from the connector, so the connector still takes all the swing.
- Pulling a wire tight between two ties, so it's already under tension before the robot moves.
- Zip ties cranked so tight they dent the insulation.
- Tie tails left long or cut sharp.
- Adhesive tie mounts on a surface that wasn't cleaned first.
- No service loop, so the first bad crimp means rewiring the whole run.

## Learn more

- [WPILib: Wiring Best Practices](https://docs.wpilib.org/en/stable/docs/hardware/hardware-basics/wiring-best-practices.html)
- [WPILib: Introduction to FRC Robot Wiring](https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-1/intro-to-frc-robot-wiring.html)
