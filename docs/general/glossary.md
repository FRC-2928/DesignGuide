# Glossary

Words you'll hear around the shop, and where to read more about each one. Use your browser's find (Ctrl+F) to jump to a term.

## CAD terms

| Term | What it means | More |
|---|---|---|
| Assembly | An Onshape tab where you position parts relative to each other with mates. | [CAD intro](../cad/index.md) |
| Block CAD | A quick, simplified model of a mechanism used to check sizes and fit before detailing it. | [Rule 4](../cad/rules/04-block-cad.md) |
| Branch (workspace) | A working copy of an Onshape document. You make changes on a branch, not in Main. | [Rule 2](../cad/rules/02-branching.md) |
| FeatureScript | A small program that adds a custom tool to Onshape. | [CAD intro](../cad/index.md) |
| Master sketch | One sketch that holds the key dimensions of a mechanism, which other parts reference. | [Rule 3](../cad/rules/03-master-sketches.md) |
| Merge | Bringing changes from your branch back into Main. | [Rule 2](../cad/rules/02-branching.md) |
| Origin | The 0,0,0 point a design is built around. We use one shared origin for the whole robot. | [Rule 1](../cad/rules/01-one-origin.md) |
| Part Studio | An Onshape tab where you model parts. | [CAD intro](../cad/index.md) |
| Version | A saved snapshot of an Onshape workspace that can't be changed. | [CAD intro](../cad/index.md) |

## Electrical terms

| Term | What it means | More |
|---|---|---|
| AWG | American Wire Gauge. Smaller numbers are thicker wires. 6 AWG is the battery cable; 22 AWG is thin signal wire. | [Electronics Basics](../electrical/electronics-basics.md) |
| Brownout | When battery voltage drops so low that the controller shuts outputs off to protect itself. | [Electronics Basics](../electrical/electronics-basics.md) |
| CAN bus | The two-wire network (yellow and green) that motor controllers and sensors use to talk to the robot controller. | [Control System](../electrical/control-system.md) |
| CAN ID | The number that identifies each device on the CAN bus. No two devices of the same type can share one. | [Control System](../electrical/control-system.md) |
| Chafing | Insulation being worn through by rubbing on an edge or vibrating against a part. | [Chafe Protection](../electrical/chafe-protection.md) |
| Continuity | Whether electricity can flow from one point to another. A multimeter beeps when there's continuity. | [Electronics Basics](../electrical/electronics-basics.md) |
| CPA | Connector Position Assurance. An optional clip that locks the two halves of a Molex SL connector together. We don't use them. | [CAN Crimping](../electrical/can-crimping.md#tpa) |
| Crimp | A connection made by squeezing a metal terminal onto a wire with a crimping tool. | [Crimping](../electrical/crimping.md) |
| Ferrule | A small metal tube crimped onto the end of a stranded wire so it goes cleanly into a terminal. | [Crimping](../electrical/crimping.md) |
| Grommet | A rubber ring that lines a hole so wires passing through it don't rub on the edge. | [Chafe Protection](../electrical/chafe-protection.md) |
| Molex SL | The two-pin locking connector we use for CAN wiring. | [CAN Crimping](../electrical/can-crimping.md) |
| PDH | Power Distribution Hub. Takes power from the battery and splits it to each device through breakers. | [Control System](../electrical/control-system.md) |
| Powerpole | A common snap-together power connector (made by Anderson) used on FRC robots. | [Crimping](../electrical/crimping.md) |
| roboRIO | The robot controller FRC teams used through the 2026 season. | [Control System](../electrical/control-system.md) |
| Service loop | A little extra wire left near a connector so it can be unplugged or re-terminated without pulling. | [Strain Relief](../electrical/strain-relief.md) |
| Strain relief | Anything that holds a wire in place so the pull doesn't land on the connector. | [Strain Relief](../electrical/strain-relief.md) |
| Systemcore | The new robot controller that replaces the roboRIO starting in 2027. | [Control System](../electrical/control-system.md) |
| TPA | Terminal Position Assurance. A clip that locks crimped terminals into a Molex SL housing. | [CAN Crimping](../electrical/can-crimping.md#tpa) |
| Termination | A 120-ohm resistor at each end of the CAN bus. Without it, CAN messages get garbled. | [Control System](../electrical/control-system.md) |

## Machining terms

| Term | What it means | More |
|---|---|---|
| Burr | The sharp, rough edge left on a part after cutting or drilling. | [Deburring](../machining/deburring.md) |
| CAM | Computer-aided manufacturing. Software (we use Fusion 360) that turns a CAD part into a toolpath for a CNC machine. | [CAM in Fusion 360](../machining/cam-fusion.md) |
| Center punch | A pointed tool that makes a small dent so a drill bit starts in the right spot. | [Machining Basics](../machining/machining-basics.md) |
| Chip load | How thick a chip each cutting edge takes per turn. Too small rubs and melts; too big breaks the tool. | [CAM in Fusion 360](../machining/cam-fusion.md) |
| Chuck | The clamp that holds a part on the lathe, or a bit in the drill press. | [Lathe](../machining/lathe.md) |
| CNC | Computer numerical control. A machine that moves on its own by following a program. | [Laguna CNC Router](../machining/laguna-cnc.md) |
| Collet | A slotted sleeve that grips a cutter in the router spindle. | [Laguna CNC Router](../machining/laguna-cnc.md) |
| Dogbone | A small round notch added to inside corners so a round cutter can make a square part fit. | [CAM in Fusion 360](../machining/cam-fusion.md) |
| Facing | Cutting the end of a part flat on the lathe. | [Lathe](../machining/lathe.md) |
| Feed | How fast the tool moves through the material. | [Machining Basics](../machining/machining-basics.md) |
| Post processor | The setting in CAM that writes the program in the exact format our machine reads. | [CAM in Fusion 360](../machining/cam-fusion.md) |
| Spoilboard | The sacrificial board on the router table that you can cut into slightly. | [Laguna CNC Router](../machining/laguna-cnc.md) |
| Tab | A thin bridge of material CAM leaves so a part doesn't break loose while it's being cut. | [CAM in Fusion 360](../machining/cam-fusion.md) |
| Tap | A tool that cuts threads into a hole. | [Tapping](../machining/tapping.md) |
| Tap drill | The drill size you use before tapping. Each thread size has its own. | [Tapping](../machining/tapping.md) |
| TPI | Threads per inch on a screw, or teeth per inch on a saw blade. | [Tapping](../machining/tapping.md) |
| Zeroing | Telling a CNC machine exactly where the part's origin is. | [Laguna CNC Router](../machining/laguna-cnc.md) |

## Assembly terms

| Term | What it means | More |
|---|---|---|
| Arbor press | A hand-operated press used to push bearings and pins in straight. | [Pressing In Bearings](../assembly/bearings.md) |
| Ball-end hex key | A hex key with a rounded tip, so you can turn a bolt at an angle. Easier to strip than a straight end. | [Tools We Use](../assembly/tools.md) |
| Cross-threading | Starting a bolt crooked so its threads cut across the real ones and ruin them. | [Cross-Threading](../assembly/cross-threading.md) |
| Loctite (threadlocker) | A liquid put on threads so bolts don't vibrate loose. Blue can be removed with hand tools; red usually needs heat. | [Stripped Screws](../assembly/stripped-screws.md) |
| Master link | A removable chain link that lets you join or break chain without a chain tool. | [Chain](../assembly/chain.md) |
| Nylock nut | A nut with a nylon ring inside that grips the bolt so it doesn't back off. | [Torque Wrench](../assembly/torque-wrench.md) |
| Press fit | A fit so tight the part has to be pushed in with force. | [Pressing In Bearings](../assembly/bearings.md) |
| Screw extractor | A reverse-threaded bit that grips a stripped screw so you can back it out. | [Stripped Screws](../assembly/stripped-screws.md) |
| Slip fit | A fit loose enough to slide in by hand. | [Pressing In Bearings](../assembly/bearings.md) |
| Stripped | Threads or a screw head damaged so a tool or bolt can't grip. | [Stripped Screws](../assembly/stripped-screws.md) |
| Swerve module | One corner of a swerve drive: a wheel that can both drive and steer. | [Lubricating Swerve Modules](../assembly/swerve-lubrication.md) |
| Torque | How hard a bolt is tightened, measured in N·m or in-lb. | [Torque Wrench](../assembly/torque-wrench.md) |
| Torque stripe | A paint-pen line across a bolt and the part next to it that shows if the bolt has turned. | [Torque Striping](../assembly/torque-striping.md) |
