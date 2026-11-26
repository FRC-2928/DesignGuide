# Avoiding Cross-Threading

!!! note "Coming soon"
    This page is still being written.

<!--
Starting bolts straight so the threads aren't ruined.

## When you need this

Every time you put a bolt into a nut or a tapped hole. **Cross-threading** means the bolt's threads start in the wrong groove, usually because the bolt is tilted. Instead of following the threads in the hole, the bolt cuts new, crooked ones. It feels tight early, it never seats properly, and it can wreck the hole.

Robot parts are mostly aluminum, and steel bolts cut aluminum easily. One cross-threaded #10-32 bolt can ruin a tapped hole in a gearbox plate that took an hour to machine.

## How it happens

- **The bolt is tilted.** It's started at an angle, often because you can't see the hole or you're reaching around something.
- **A drill or impact driver started it.** Power tools push the bolt in with enough force that you don't feel it bind.
- **The threads don't match.** A #10-24 bolt in a #10-32 hole, or a metric M5 in a #10-32 hole, will go in a turn or two and then jam.
- **The hole is dirty or damaged.** Chips left from tapping, dried Loctite, or a dinged first thread.
- **The parts aren't lined up.** The bolt goes through one plate at an angle because the holes in the two parts don't line up, so it hits the tapped hole crooked.

The sign is always the same: **the bolt gets hard to turn before the head is near the part.** A good bolt spins in easily by hand until the head touches.

## Starting a bolt correctly

1. **Check the bolt matches the hole.** Same size and same thread count. If you're not sure, try a known-good bolt from the parts bin, or a thread gauge.
2. **Line up the parts first.** Get all the holes lined up before you put any bolt in. If you're bolting a plate with several bolts, start all of them a few turns before tightening any.
3. **Hold the bolt straight**, in line with the hole. Look at it from two sides if you can.
4. **Turn it backward first.** With light pressure, turn the bolt counterclockwise (loosening direction). You'll feel a small click or drop when the end of the bolt's thread falls into the start of the hole's thread. That's where it wants to start.
5. **Now turn it forward by hand** (clockwise). It should spin easily with just your fingers or a hex key held loosely.
6. **If it binds in the first few turns, stop.** Back it out, look at the threads, and start again. Don't push through it.
7. Once it's in a few turns and still spinning freely, you can use a T-handle or driver to run it down. Finish with a [torque wrench](torque-wrench.md) if it needs one.

!!! tip
    For a bolt in a spot you can't see, put a little piece of tape or a dab of grease on the hex key to hold the bolt. Or drop the bolt in a short length of tubing that fits over the head.

## Fixing damaged threads

First, figure out what got damaged. Look at the bolt. If the threads are flattened or have aluminum stuck in them, throw the bolt away. Never reuse a cross-threaded bolt, because it will damage the next hole too.

### Clean up the threads with a tap

If the hole's threads are only slightly damaged, run a tap of the same size back through it. This is called **chasing** the threads. (A **thread chaser** is a tool made just for this. It reshapes threads without cutting much new metal. A regular tap works too if you're gentle.)

1. Use the exact same tap size as the hole (a #10-32 tap for a #10-32 hole).
2. Start it straight, by hand, in a tap wrench. See [Tapping](../machining/tapping.md).
3. Turn it in slowly. Back it out a half turn every turn or so to break the chips.
4. Blow out or vacuum the chips, then test with a new bolt.

If the bolt still won't hold torque, the threads are gone and you need one of the fixes below.

### Thread inserts

A **thread insert** is a steel sleeve with threads inside and outside. You drill the bad hole bigger, tap it with a special tap, and install the insert. The bolt then threads into the insert instead of the aluminum. Inserts are often stronger than the original aluminum threads.

| Insert | What it is | Notes |
|---|---|---|
| Helical coil (Heli-Coil) | A coil of diamond-shaped wire | Needs the kit's drill, tap and install tool. You snap off a small tang at the bottom after installing. |
| Key-locking insert (Keensert) | A solid sleeve with small keys you hammer down to lock it | Very strong. Needs more wall thickness around the hole. |
| Heat-set insert | Brass, pressed in with a soldering iron | For 3D-printed plastic only. Not for aluminum. |

The basic Heli-Coil steps are drill, tap, install, and break off the tang. Follow the kit's instructions exactly, because the drill and tap sizes are special.

### Other options

- **Go up a size.** If the part allows it, drill and tap the hole for the next size up (a #10-32 hole becomes 1/4-20). Check with the designer first.
- **Drill it through and use a nut.** If the back side is reachable, drill a clearance hole all the way through and use a bolt and nylock nut.
- **Remake the part.** Sometimes this is the right call, especially for a drivetrain part.

!!! question "2928: fill in"
    Do we stock a thread repair kit (Heli-Coil or similar), and in which sizes? Where are the taps and thread gauges kept?

## Common mistakes

- Starting a bolt with a drill.
- Forcing a bolt that's getting tight early, "because it'll loosen up."
- Mixing up #10-24 and #10-32 bolts. They look almost identical. Keep them in separate bins.
- Reusing a bolt that cross-threaded.
- Tightening the first bolt on a plate all the way before the others are started, which pulls the rest of the holes out of line.
- Running a tap into a hole crooked while trying to fix it, which makes it worse.

## Learn more

- [NAPA Know How: What does cross-threaded mean?](https://knowhow.napaonline.com/what-does-cross-threaded-mean/)
- [Accu: How to avoid cross-threading](https://accu-components.com/us/p/154-how-to-avoid-crossthreading)
- [NAPA Know How: How to install a Helicoil insert](https://knowhow.napaonline.com/how-to-install-a-helicoil-insert-and-fix-stripped-threads/)
-->
