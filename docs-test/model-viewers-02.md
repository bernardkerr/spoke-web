---
title: Model Viewer Embeds 02 - Bernard experiments
description: Demonstrates embedding the lightweight 3D model viewer inside markdown using MDX components.
---

## Multi-Model Scene with Animation

<ModelViewer02 toolsEnabled={true} height={420} expandedHeight={620} styleMode="STUDIO" backgroundMode="HORIZON" floatHeight={40}>

| name  | start                | exploded             | path                                              |
|-------|----------------------|----------------------|---------------------------------------------------|
| frame | 0, 0, 0, 0, 0, 0, 1  | 0, 0, 0, 0, 0, 0, 1  | Cuboid_96x_64_32_4mm_Frame.3mf |
| panel | 0, 0, 0, 0, 0, 0, 1  | 0, 0, 32, 0, 0, 0, 1 | RectPanel_64_32_4mm_1.3mf       |

| from    | to        |
|---------|-----------|
| start   | exploded  |
| exploded| start     |

</ModelViewer02>

## Simple Model Viewer

<ModelViewer02 src="CrudeFrame.stl" height={260} expandedHeight={480} name="CrudeFrame" toolsEnabled={true} />

## Small Viewer With Wrapped Text

<div style={{ display: 'flow-root' }}>
  {/* Float the viewer to the right so text wraps around it */}
  <div style={{ float: 'right', width: 220, margin: '0 0 12px 16px' }}>
    <ModelViewer02
      src="CrudeFrame.stl"
      height={180}
      expandedHeight={320}
      name="CrudeFrame-compact"
    />
  </div>

  [this is yada-yada text] Modern robotics teams iterate rapidly on chassis and actuator designs, and having an
  embedded model preview beside the documentation helps reviewers reason about clearances
  and mounting points without context switching. The compact viewer loads quickly,
  supports responsive orbit controls, and respects the site theme for visual consistency.

  CAD models often evolve across sprints, so keeping lightweight assets in docs reduces
  friction for non-CAD contributors. Authors can link to the heavier STEP sources when
  needed while using lightweight polygon formats for fast page loads. The inline viewer
  also makes it easy to call out specific assembly steps or tolerance considerations directly
  in the text.
</div>

## 3MF Models

<ModelViewer02 src="SpokeESP32DualMc.3mf" height={480} expandedHeight={640} name="SpokeESP32DualMc" toolsEnabled={true}  />

<ModelViewer02 src="Core_96x_64_32_topless.3mf" height={480} expandedHeight={640} name="Core_96x_64_32_topless" toolsEnabled={true}  />

<ModelViewer02 src="Cuboid_96x_64_32_4mm_Frame.3mf" height={480} expandedHeight={640} name="CoreFrame" toolsEnabled={true}  />

<ModelViewer02 src="RectPanel_96x_64_PcbMount_28_MagCon_4mm_.3mf" height={480} expandedHeight={640} name="CoreFrame" toolsEnabled={true}  />

## Customized View Defaults

<ModelViewer02
  src="CrudeFrame.stl"
  height={260}
  expandedHeight={520}
  name="GrayStudioGrid"
  spinMode="on"
  frameMode="LIGHT"
  shadingMode="WHITE"
  styleMode="STUDIO"
  backgroundMode="HORIZON"
  edgesMode="BLACK"
  outlineColorMode="AUTO"
  edgesLineWidth={2.5}
  ambientLevel={1.5}
  directionalLevel={2.5}
/>

