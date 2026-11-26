# FRC 2928 Robot Guides

How Team 2928 designs, wires, machines and builds the robot. One site with a tab for each area: CAD, Electrical, Machining and Assembly.

Read it at **https://frc-2928.github.io/DesignGuide/**

## Edit the guide

Every page is a Markdown file in `docs/`. To add or fix something:

1. Create a branch (do not commit straight to `main`, same idea as Rule 2 in the guide).
2. Edit the files in `docs/`.
3. Open a pull request. When it merges, the site rebuilds automatically.

To preview on your computer:

```
pip install -r requirements.txt
python -m mkdocs serve
```

then open http://127.0.0.1:8000.

## Adding videos

Put screen recordings in `docs/cad/videos/` and see `docs/cad/videos/README.md` for the snippet that embeds them.

## Adding a rule

Copy an existing file in `docs/cad/rules/`, keep the same four parts (The rule, What it means, Why, How), and add it to `nav:` in `mkdocs.yml` and to the table in `docs/cad/rules/index.md`.
