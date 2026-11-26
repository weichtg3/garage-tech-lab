# Garage Tech Lab

A free, public, hands-on electronics and embedded systems course using a **2014 Ford F-150**, a **1997 Harley-Davidson Sportster 883 Hugger**, and a **Raspberry Pi with GPS and camera**.

The Docusaurus site includes a 12-week curriculum, practical vehicle labs, an interactive electrical calculator, quizzes, and safety-first bench experiments.

**Planned website:** https://weichtg3.github.io/garage-tech-lab/

## Get started

```bash
npm install
npm start
```

Build: `npm run build`

## Publish on GitHub Pages

1. Under **Settings → Pages**, select **GitHub Actions** as the source.
2. Push to `main`; the included deployment workflow publishes the built website.
3. View [Actions](https://github.com/weichtg3/garage-tech-lab/actions) for build and deploy status.

## Scope and safety

This is educational material, not a substitute for factory service manuals. Verify vehicle-specific wire IDs and ratings, and use current-limited bench supplies for initial experiments. Do not connect Raspberry Pi GPIO to automotive 12V circuits directly. Do not use a multimeter's resistance or current mode across an energized vehicle battery. Avoid SRS/airbag, live ignition-high-voltage, and vehicle CAN transmit experiments.

No GPS recordings, VINs, personal travel histories, credentials, or other personal telemetry belong in this public repository.

## Maintenance

Course content is in `docs/`; interactive tools are in `src/components/`. Follow `AGENTS.md` when adding lessons.
