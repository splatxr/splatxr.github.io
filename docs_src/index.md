# SplatXR Toolkit

The SplatXR Toolkit provides building blocks for developing XR (AR/VR/MR) applications that integrate 3D Gaussian Splatting for rendering objects and environments, with support for physics-based interactions, visual effects, and reality blending.

<div class="tag-row" markdown>
<span class="tag-pill">v0.0.2</span>
<span class="tag-pill">Unity 2022.0+ (tested on 6.2)</span>
</div>

## What is SplatXR?

SplatXR accelerates prototyping and research for XR experiences that leverage 3D Gaussian Splatting (3DGS) for immersive, interactive spaces. It's built around a **modular building block system** spanning four layers of a multi-layer reality framework:

- **Rendering layer** — GPU-optimized, on-headset visualization of Gaussian splats.
- **Physics layer** — collision detection and physical interaction through mesh-augmented splats.
- **Effects layer** — visual enhancements like disintegration and distortion.
- **Blending layer** — portal-like effects and compositing between virtual splat scenes and real spaces.

Building blocks can be accessed through the **SplatXR Building Blocks Panel** (`SplatXR > Building Blocks Panel`) and applied to splat GameObjects individually or in combination.

## Platform Support

SplatXR primarily targets and is developed for the **Meta Quest 3**. It has also been tested on **Apple Vision Pro** and **Samsung Galaxy XR**. It will likely work on other Unity-based XR headsets, but those haven't been tested yet.

<div class="tag-row" markdown>
<span class="tag-pill">Meta Quest 3 — primary target</span>
<span class="tag-pill">Apple Vision Pro — tested</span>
<span class="tag-pill">Samsung Galaxy XR — tested</span>
</div>

## Get Started

<div class="grid cards" markdown>

-   **[Installation](installation.md)**

    ---

    Import the toolkit into your Unity project via the Package Manager.

-   **[Quickstart](quickstart.md)**

    ---

    Import your first Gaussian splat in five minutes.

-   **[FAQ / Known Issues](faq.md)**

    ---

    Splat count limits, editor performance tips, and known limitations.

</div>

## Building Blocks

Jump into a specific building block to see its parameters and usage:

<div class="grid cards" markdown>

-   **[Splat Renderer](building-blocks/renderer.md)**

    ---

    Core rendering for Gaussian splats, with Base and LoD modes.

-   **[Splat Physics](building-blocks/physics.md)**

    ---

    Collision meshes, rigid bodies, and shadow casting from splats.

-   **[Splat Effects](building-blocks/effects.md)**

    ---

    Disintegrate, radial reveal, and distortion shader effects.

-   **[Splat Blending](building-blocks/blending.md)**

    ---

    Portal windows blending splat spaces with passthrough reality.

</div>

## Contributing

We welcome contributions from the community! Technical support and maintenance from the original authors will be limited. We encourage the community to:

- Contribute features or improvements via pull requests.
- Improve or add to the documentation.
- Answer questions and help triage issues on GitHub.

Head over to the [SplatXR repository](https://github.com/splatxr/SplatXR) to open an issue, start a discussion, or submit a pull request.

## Acknowledgements

We thank [Szymon Rusinkiewicz](https://www.cs.princeton.edu/~smr/) for advice and assistance with the object meshing algorithm, Simon Bethke for providing the [botanical garden dataset](https://www.kaggle.com/datasets/simonbethke/botanical-garden-america), and members of the PSI Lab for their advice. This research was supported by the Princeton NextG Innovation Grant.
