# Course authoring guidance

- Audience: hands-on learner with Node.js and React experience who wants practical electrical competency.
- Vehicles: 2014 Ford F-150 SuperCrew and 1997 Harley-Davidson XLH 883 Hugger.
- Hardware: existing Raspberry Pi with GPS and camera; exact models not verified.
- Modules follow theory, worked example, F-150 relevance, Sportster relevance, safe bench lab, knowledge check.
- Treat model-year wire colors, fuse locations, charging specs and controller behaviors as unverified until verified against service manuals and measurements.
- Never instruct direct 12V-to-GPIO connections, powered resistance tests, high-voltage ignition probing, airbag testing, or vehicle CAN message injection.
- Do not publish personal GPS history or credentials. Prefer simulations and current-limited isolated bench experiments.
- Keep documentation as Markdown/MDX in docs/, diagrams as SVG or Mermaid, widgets as React components.
- Preserve compatible Docusaurus 3 syntax; run npm ci and npm run build before merging.

- Use Node.js 24 for all development and CI. Keep .nvmrc and package.json engines aligned.

## Public learning resources — mandatory

- All referenced online documentation, courses, tutorials, articles, videos, and other learning resources must be free and publicly accessible without an account, login, registration, subscription, payment, or trial.
- Verify the exact linked resource is accessible while signed out before adding it; a free landing page does not qualify if the actual learning material is gated.
- Prefer official documentation and reputable educational sources. Replace unavailable, gated, or removed resources with equivalent openly accessible alternatives.
- If no suitable public resource exists, explain the gap and provide original educational material rather than linking to a restricted resource. Do not invent links or bypass access controls.
- Apply this policy to existing references whenever reviewing or updating course content.
