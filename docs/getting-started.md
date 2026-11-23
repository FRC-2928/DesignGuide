# 2. Getting Started

Before you model anything, do three things: get into the team's Onshape, install Origin Cube and the FRC Design App, and add the helper tools you'll use every day. This takes about 20 minutes.

## Step 1: Account and team access

1. Ask a design mentor to invite you to the 2928 team in Onshape. Use the email address they send the invite to.
2. Open the invitation email, click the link, and create your Onshape account (or sign in if you already have one). Use the education account so you get the full free plan.
3. Open the Onshape home page and confirm you can see the team's documents, including the 2026 robot document.
4. If you can't see the team documents, stop and ask a mentor. Don't make a second account.

The FRCDesign.org course has a [Course Setup section](https://frcdesign.org/learning-course/) covering account setup, performance tuning and the documents page for brand-new users.

## Step 2: Install the required tools

Two tools are required for every 2928 designer.

| Tool | What it is | What it is for |
|---|---|---|
| [Origin Cube](https://cad.onshape.com/documents/321c197a842fc5f1a29e6621/w/fc3cdd5ca7edcd93e02f13cc/e/c66db2b954da7f29d438195a) | A FeatureScript | Creates the shared origin every Part Studio starts from, and adds fastener hole size variables (tap, close fit, clearance, heat-set insert), belt and chain functions, and gear and sprocket diameter offsets. Rules 1 and 5. |
| FRC Design App | An app from the Onshape App Store, formerly called MKCad | A searchable library of FRC off-the-shelf parts (motors, wheels, bearings, extrusions) you insert into Part Studios and assemblies. |

### Install a FeatureScript (Origin Cube and the rest)

FeatureScripts only work inside Part Studios, not assemblies. You only need to add each one once. After that it appears in every Part Studio you open.

1. Open any document and open a Part Studio you're allowed to edit.
2. In the toolbar, click the custom features dropdown at the far right, then choose **Add custom features**.
3. Paste the link to the FeatureScript's document into the search bar. For Origin Cube, use the link in the table above.
4. Click the document when it appears. A list of the FeatureScripts inside it shows up.
5. Click each one you want. It turns blue when added.
6. Close the dialog. The tool now shows in the same dropdown.

!!! tip
    Press **S** in a Part Studio to open the shortcut toolbar, then add your favorite custom features there so they're one click away.

The [FeatureScript help page on FRCDesign.org](https://frcdesign.org/resources/featurescript-help/) and [Onshape's custom feature help](https://cad.onshape.com/help/Content/customfeature.htm) cover the same steps with more detail.

### Install the FRC Design App

1. In Onshape, open the App Store from your account or apps menu and search for **FRC Design App**.
2. Add it to your account. It's free.
3. Open a Part Studio or Assembly. The app appears as a panel on the right side of the screen.

If these steps look different on your screen, follow the current instructions in the Required Course Tools part of the [FRCDesign.org course setup](https://frcdesign.org/learning-course/). Tell a mentor so we can update this page.

## Step 3: Add the recommended FeatureScripts

These aren't required, but we use them constantly. Several come in bundles, so one install adds several tools. All are listed on [FRCDesign.org's FeatureScripts page](https://frcdesign.org/resources/featurescripts/).

| FeatureScript | What it does | Where to get it |
|---|---|---|
| Part Lighten (2471) | Removes weight from plates with control over ribs, depth and fillets, and estimates the weight saved. | [2471 bundle](https://cad.onshape.com/documents/028ca8fb10baf53e1f6fce96/w/b1250a450d0ba88f0a8b1811/e/a8b9e45297aac9f5688c871d) |
| Belt & Chain Gen | Builds belts and chains that use Origin Cube functions. Tooth count updates from the sketch. | [Belt & Chain Gen](https://cad.onshape.com/documents/53c0b14cad92676c14e04e97/w/1271c254ccb0a79563210195/e/7394c4a86d8d6c35c9a12041) |
| Robot Shaft and Robot Spacer (Alex's) | Generates shafts and spacers in hex, rounded hex and MAXSpline sizes. | [Alex's bundle](https://cad.onshape.com/documents/9cffa92db8b62219498f89af/w/06b332ccabc9d2e0aa0abf88/e/2e6e4b559832eeff8391e933) |
| Extrude Individual, Tube Converter, FilletXpert, Electronics Mounting (Julia's) | Extrudes regions as separate parts, converts extrusions to punched tube, fillets edges of a face, and drills electronics hole patterns. | [Julia's bundle](https://cad.onshape.com/documents/95c00401c440b44ad8799ef5/w/1f1ebce01a3b8eb6fa102975/e/7f62400703032fab9a7a3320) |
| Advanced Variables (2471) | Compound variables such as path length and chain center distance. | [2471 bundle](https://cad.onshape.com/documents/028ca8fb10baf53e1f6fce96/w/b1250a450d0ba88f0a8b1811/e/a8b9e45297aac9f5688c871d) |
| Dogbone and Corner Overcut | Makes cavities easier for a CNC router to cut. | [Dogbone and Corner Overcut](https://cad.onshape.com/documents/51695bc13e3d9fb286023c70/w/f1e387898ad3a323b9fd9a6b/e/3a9512753b299d5fefc39f46) |
| Auto Layout | Arranges plates onto sheets for routing or waterjetting. | [Auto Layout](https://cad.onshape.com/documents/576e01dbe4b0cc2e7f46a55d/w/b7cb6876d1121a6c249f59c7/e/887d6e2324589bfd2058c3e1) |
| 3D Printed Mass (Julia's) | Sets a printed part to a realistic mass from its material, infill and wall thickness. Used in Rule 6. | Julia's bundle, linked above |
| Set Materials (Abhi's) | Sets materials and appearances for many parts at once. Used in Rule 6. | Abhi's Features & Configs bundle on FRCDesign.org's FeatureScripts page |

Tube Converter can be slow, so put it at the end of the Part Studio's feature list.

## First-time notes

- **Check your branch before you edit.** The branch name shows in the Versions and history panel and at the top of the document. Never edit Main. See [Rule 2](rules/02-branching.md).
- **Start every Part Studio with Origin Cube.** See [Rule 1](rules/01-one-origin.md).
- **Look at the 2026 robot document first.** It's the best example of how we lay things out.
- **Ask early.** If a sketch turns red or an assembly looks wrong, ask a teammate before you delete anything. Onshape keeps history, so most mistakes can be undone.
- **Use a recent version of Chrome.** Big assemblies get slow, so close tabs you don't need.

**Next:** start with [3. Design Guidelines](rules/index.md).
