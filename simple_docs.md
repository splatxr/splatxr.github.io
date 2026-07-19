# Splat XR Toolkit

**Version:** 0.0.2  
**Unity Version:** 2022.0 or higher (tested in Unity 6.2) 
**Author:** Princeton PSI Lab  

---

## Overview
The **SplatXR Toolkit** provides tools for developing XR (AR/VR/MR) applications that integrate **Gaussian splatting** for rendering objects and environments with support for **physics-based interactions**.  

This package is designed to accelerate prototyping and research in XR experiences that leverage neural rendering methods for immersive, interactive spaces.  

---

## Features
- Integration of Gaussian splatting objects into XR scenes.  
- Physics-driven interactions with splatted environments.  
- Support for VR, AR, and mixed-reality projects.  
- Modular toolkit design for easy extension and customization.  

---

## Installation

1. Download and unzip the toolkit folder to a location on your computer.
2. Open your Unity project.
3. Go to **Window > Package Manager**.
4. Click the **+** button in the top-left corner.
5. Select **Add package from disk...**.
6. Navigate to the unzipped toolkit folder and select the **package.json** file.
7. Unity will import the package and it will appear in the Package Manager under **In Project**.

---

## Quick Start

To quickly import a Gaussian splat into your Unity scene:

1. Open **SplatXR > Building Blocks Panel** from the Unity menu.
2. Select the **Splat Renderer** building block from the panel.
3. In the **Object Name** field, enter a name for your splat object.
4. Keep **Renderer** set to **Base Renderer**.
5. Click the folder icon next to **Input Splat File (PLY)** and select your `.ply` file containing the Gaussian splat data.
6. Click **Add to Scene** to create the splat object in your scene.

Your splat object should now be rendered in the scene and ready for further additions using the other building blocks.

---

## Building Blocks Overview

The Splat XR Toolkit is built around a **modular building block system** that enables rapid prototyping of multi-layered reality experiences. Each building block encapsulates specific functionality that can be combined to create XR interactions or effects with Gaussian splats.

The building blocks fit into a **multi-layer reality framework** where:
- **Rendering layer** handles the GPU-optimized visualization of Gaussian splats
- **Physics layer** enables collision detection and physical interactions through mesh-augmented splats
- **Effects layer** provides visual enhancements like disintegration and distortion
- **Blending layer** creates portal like effects and compositing between virtual splat scenes and real spaces

Building blocks can be accessed through the **Splat XR Building Blocks Panel** (SplatXR > Building Blocks Panel) and applied to splat GameObjects individually or in combination.

---

## Building Blocks



### Splat Renderer Block
![Splat Renderer Block](TutorialReadMe/splatxr_renderer_tutorial.png)
**Purpose:** Core rendering component for displaying Gaussian splats with our stand-alone on-device rendering pipeline. Maximum recommended splat count per scene is under 200k for optimal performance, but may vary.

**Parameters:**
- **Object Name**: Name for the splat GameObject
- **Renderer**: Choose between **Base Renderer** (single PLY file) or **LoD Renderer** (multiple detail levels for distance-based optimization)
- **Input Splat File (PLY)**: (Base Renderer) Path to the splat `.ply` file
- **[LoD Renderer] High/Medium/Low Detail Splat**: Paths to different detail level PLY files

**Usage:** This is the foundational building block for splat rendering. Start with Base Renderer for single splats. Use LoD Renderer when working with large scenes where scenes need different detail levels at varying distances to maintain performance. Simply import a .ply file and our script will create a usplat csv file which will be automatically assigned to the renderer script.

---

### Splat Physics Block
![Splat Physics Block](TutorialReadMe/splatxr_physics_tutorial.png)

**Purpose:** Generates collision meshes from Gaussian splats to enable physics interactions, rigid body dynamics, and shadow casting.

**Parameters:**
- **Target Splat**: Existing splat GameObject with a Splat Renderer component
- **Splat Type**: **Object** (detailed mesh for props/items) or **Space** (simplified mesh for rooms/environments)
- **Mesh Threshold**: (Object type) Density threshold for mesh generation (0-1, default: 0.5)
- **Gaussian Mesh Scale**: (Object type) Scale factor for individual gaussians  during meshing. Larger values are useful for splats with sparser gaussians. (0-2, default: 1.5)
- **Mesh Base Flattening**: Enable to flatten the bottom of the mesh (useful for placing objects on surfaces)
- **Flatten Percentage**: (If flattening enabled) Amount to flatten (0-1, default: 0.05)
- **Flatten Axis**: (If flattening enabled) Axis direction for flattening generally the base (X, Y, Z, -X, -Y, -Z)

**Usage:** Apply this building block to an existing splat renderer object when you need collision detection, physics collisions, or shadow casting. Object meshing type creates more detailed meshes suitable for interactive props, while Space meshing type creates simplified meshes for environment boundaries.

---

### Splat Effects Block
![Splat Effects Block](TutorialReadMe/splatxr_effects_tutorial.png)

**Purpose:** Visual effects system for applying shader-based effects to Gaussian splats including disintegration, radial reveal, and distortion.

**Parameters:**
- **Target Splat**: GameObject with Splat Renderer component to apply effects to
- **Effect Selection**: Choose from:
  - **Disintegrate**: Particle-based disintegration effect
  - **Radial Reveal**: Spherical reveal/hide effect from a point
  - **Distortion**: Spatial distortion effect
  - **Custom Effect**: Placeholder for custom shader effects

**Usage:** Add this building block to the parent splat GameObject create dynamic visual effects on splat objects. Useful for transitions, interactions, or stylized appearances. The effects modify the material shader on the splat renderer to achieve the visual changes. A script for controlling the effects is added to the splat object which allows for looping, or specifying the timestep of the effect (each shader runs the effect across a timeline from 0-1).


---

### Splat Blending Block

![Splat Effects Block](TutorialReadMe/splatxr_blending_tutorial.png)

**Purpose:** System for creating portal effects where splat spaces can be viewed through virtual windows blending reality with the splat spaces.

**Parameters:**
- **XR Platform**: Choose **Meta SDK** or **Apple Vision Pro (under development)**
- **Camera Rig**: Reference to the XR camera rig (e.g., [Building Block] Camera Rig for Meta Quest SDK)

**Usage:** Use this building block to create portal effects where users can look through a virtual window into a different splat space. The system sets up additional cameras under the CenterEyeAnchor and creates a "BlendingWorld" layer. Objects placed in the BlendingWorld layer are only visible through the portal material. Apply the generated Blending Portal material to a mesh to create the portal window surface. All objects visible through the portal would need to be on the "BlendingWorld" layer. There is a conrollable "Edge Softness" parameter in the material shader to create a viggnette effect along the border of the portal window.

---

## FAQ / Known Issues

### Splat Count Limitations
There is a performance limitation of approximately **200,000 splats** per scene. Exceeding this limit may cause performance degradation. When working with large splat files, consider:
- Decimating your source splat data
- Using LoD Renderer to swap lower-detail versions at distance

The limitation is primarily the number/fov/layering of visible splats in a scene rendered view. Further optimizations are under development.

### Possible Slow-down in In-Editor Viewing
When viewing splats in the Unity editor, it's recommended to enable the **"Remove Outline"** option in the in-editor viewer for better rendering performance while selecting the splat in the editor.

### Scene-Based Meshing Detail
Scene-based meshing (when using Splat Type: **Space** in physics generation) may not produce highly detailed meshes. For objects requiring detailed collision meshes, use Splat Type: **Object** instead.


### Camera Distance and Performance
Avoid keeping the camera/headset extremely close to splat surfaces/objects since close proximity can cause rendering slowdowns and stuttering due to the high density of splats being processed. Maintain a reasonable viewing distance from splat objects for optimal performance.
