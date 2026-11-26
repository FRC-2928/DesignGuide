# How Different Materials Machine

What changes when you cut aluminum, steel, polycarbonate or plastics.

## When you need this

Before you cut a material you haven't cut before. The same drill or saw blade behaves very differently in aluminum, steel and plastic. Using steel settings on plastic melts it, and using aluminum settings on steel burns up the tool.

For which material to pick when you design a part, see [Rule 6: Real Materials](../cad/rules/06-materials.md) and [FRCDesign.org's materials page](https://frcdesign.org/design-handbook/structure/materials/).

## 6061 aluminum

Most of the robot is 6061-T6 aluminum: tube, plates, standoffs and spacers. It's light, strong enough, and easy to machine. "T6" is the heat treatment. It makes the aluminum harder, so it cuts cleanly instead of smearing.

How it machines:

- **Fast speeds.** Aluminum can be cut at a high cutting speed (about 250 SFM with HSS tools). Small drills run at the fastest speed the drill press has.
- **Chips stick.** Aluminum likes to weld itself to the cutting edge, which is called **built-up edge**. The tool then cuts rough and oversize. A little cutting fluid (WD-40 or a cutting fluid made for aluminum) prevents this.
- **Burrs everywhere.** Every cut leaves a sharp lip of metal called a **burr**. Plan to [deburr](deburring.md) every part.
- **Never on the grinding wheel.** Aluminum clogs a grinding wheel. See [Grinding Wheel](grinding-wheel.md).

Some off-the-shelf parts like hex shafts and gears are 7075 aluminum, which is stronger and a bit harder. It machines about the same way.

## Steel

FRC teams use little steel because it's heavy, but you'll still run into it occasionally, like a steel hex shaft, threaded rod, bolts and the occasional bracket.

How it machines:

- **Slow speeds.** Mild steel wants about 100 SFM with HSS tools, so roughly 40% of the aluminum RPM for the same drill.
- **Use cutting oil.** Steel gets hot. Oil keeps the drill or tap cool and sharp. Dry steel dulls bits quickly.
- **Firm, steady feed.** Steel can **work harden**: if a dull drill rubs instead of cutting, the surface gets harder and the next cut is even worse. Keep the tool cutting.
- **Hot chips.** Steel chips come off hot enough to burn skin. Let them cool before you brush them up.
- **Hardened steel won't cut.** Some shafts and tool steels are heat treated so hard that a normal drill just skates. If a new sharp drill won't bite, stop and ask a mentor.

## Polycarbonate

Polycarbonate (often sold as Lexan) is a clear, tough plastic. We use it for guards, panels and some plates when toughness is desired. It bends and springs back instead of shattering.

How it machines:

- **It melts.** Plastic doesn't carry heat away the way metal does, so heat stays at the cut. Too much speed or a dull tool melts the plastic, and the melted chips weld back into the cut. Use a sharp tool and keep it moving.
- **Coolant can crack it.** Petroleum-based cutting oils can cause stress cracking in polycarbonate. Cut it dry or with compressed air.
- **No threadlocker.** Loctite and similar products crack polycarbonate. Use nylon-insert lock nuts instead.
- **Drills grab.** A regular drill can grab polycarbonate as it breaks through and yank the sheet upward. Clamp the sheet and slow your feed as you break through.
- **Leave the film on.** Most sheet comes with a protective film. Leave it on while you cut and mark on the film.

## Nylon, Delrin and HDPE

These are softer plastics used for spacers, bushings, rollers and wear strips.

| Plastic | What it's like | How it machines |
|---|---|---|
| Delrin (acetal) | Hard, slippery, very stable. | The easiest plastic to machine. Cuts like soft aluminum, leaves a clean finish and holds size well. Good for lathe parts. |
| Nylon | Tough, a bit springy, absorbs water. | Gummy. Tends to leave stringy chips and fuzzy edges. Use a very sharp tool. Sizes can change slightly as it absorbs moisture. |
| HDPE and UHMW | Soft, waxy, slippery. | Easy to cut but melts and smears if the tool is dull or slow-feeding. Deburr with a blade. Holes come out slightly undersize because the plastic springs back. |

For all of them: sharp tools, no oil, and a steady feed so the tool makes chips instead of rubbing and melting.

## Quick reference table

| Material | Speed | Cutting fluid | Main problem | Deburr with |
|---|---|---|---|---|
| 6061 aluminum | Fast (about 250 SFM, HSS) | A little WD-40 or aluminum cutting fluid | Chips stick to the tool, burrs | Deburring blade, countersink, file |
| Mild steel | Slow (about 100 SFM, HSS) | Cutting oil, always | Heat, dull tools, work hardening | File, countersink, grinder |
| Polycarbonate | Medium, sharp tool | None or air (oil can crack it) | Melting, grabbing, cracking | Deburring blade, scraper |
| Delrin | Fast (about 250 SFM, HSS) | None | Few problems | Deburring blade |
| Nylon | Medium, sharp tool | None | Stringy chips, fuzzy edges | Sharp blade |
| HDPE / UHMW | Medium, sharp tool | None | Melting, springy undersize holes | Sharp blade |

The SFM numbers come from the [University of Florida speeds and feeds table](https://web.mae.ufl.edu/designlab/Advanced%20Manufacturing/Speeds%20and%20Feeds/Speeds%20and%20Feeds.htm). Use them with the RPM formula on [Machining Basics](machining-basics.md#speeds-and-feeds-in-plain-words).

## Common mistakes

- Using cutting oil on polycarbonate.
- Cutting steel dry and wondering why the drill went dull.
- Running a dull bit in plastic and getting melted, gummy holes.
- Assuming a "1/4 inch" sheet is exactly 0.250". Measure it.
- Putting aluminum on the grinding wheel.

## Learn more

- [FRCDesign.org: materials](https://frcdesign.org/design-handbook/structure/materials/), for what each material is used for in FRC
- [University of Florida: speeds and feeds](https://web.mae.ufl.edu/designlab/Advanced%20Manufacturing/Speeds%20and%20Feeds/Speeds%20and%20Feeds.htm)
- [Boedeker: plastic drilling guidelines](https://www.boedeker.com/Technical-Resources/Plastic-Machining-Guidelines/Plastic-Drilling-Machining-Guidelines)
- [Mitsubishi Chemical: machinist's toolkit for plastics](https://www.mcam.com/en/support/machinists-toolkit)
