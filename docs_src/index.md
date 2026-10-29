# SplatXR Toolkit

The SplatXR Toolkit provides building blocks for developing XR (AR/VR/MR) applications that integrate 3D Gaussian Splatting for rendering objects and environments, with support for physics-based interactions, visual effects, and reality blending.

<div class="tag-row" markdown>
<span class="tag-pill">v0.1.0</span>
<span class="tag-pill">Unity 2022.3+ (tested on 6.2)</span>
</div>

## What is SplatXR?

SplatXR accelerates prototyping and research for XR experiences that use 3D Gaussian Splatting (3DGS). It's built around four modular **building blocks**:

- **Splat Renderer**: GPU-optimized, on-headset visualization of Gaussian splats.
- **Splat Physics**: collision detection and physical interaction through mesh-augmented splats.
- **Splat Effects**: visual effects like disintegration and digital rain.
- **Splat Blending**: portal-like effects and compositing between virtual splat scenes and real spaces.

Building blocks can be accessed through the **SplatXR Building Blocks Panel** (**SplatXR > Building Blocks Panel** in the Unity Editor menu bar) and applied to splat GameObjects individually or in combination.

## Platform Support

SplatXR primarily targets and is developed for the **Meta Quest 3**. It has also been tested on **Apple Vision Pro**. It will likely work on other Unity-based XR headsets. We welcome contributions for support on other AR/VR platforms.

<div class="tag-row" markdown>
<span class="tag-pill">Meta Quest 3 — fully supported</span>
<span class="tag-pill">Apple Vision Pro — tested</span>
</div>

## Get Started

<div class="grid cards" markdown>

-   **[Installation](installation.md)**

    ---

    Import the toolkit into your Unity project via the Package Manager.

-   **[Quickstart](quickstart.md)**

    ---

    Import your first Gaussian splat.

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

    Disintegrate, radial reveal, and digital rain shader effects.

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

## License

The SplatXR Toolkit is released under the [MIT License](https://github.com/splatxr/SplatXR/blob/main/LICENSE).

Portions of the splat shaders are adapted from [GaussianSplats3D](https://github.com/mkkellogg/GaussianSplats3D) by Mark Kellogg (MIT License). See [THIRD_PARTY_NOTICES.md](https://github.com/splatxr/SplatXR/blob/main/THIRD_PARTY_NOTICES.md).

## Citation

If you use the SplatXR Toolkit in your research, please cite our [paper](https://splatxr.github.io/static/paper/splatxr_uist26_paper.pdf):

```bibtex
@inproceedings{vachha2026splatxr,
author = {Vachha, Cyrus and Kari, Mohamed and Abtahi, Parastoo},
title = {SplatXR: A Toolkit for Multi-Layered Extended Reality via On-Headset 3D Gaussian Splatting},
year = {2026},
publisher = {Association for Computing Machinery},
url = {https://doi.org/10.1145/3830398.3830681},
doi = {10.1145/3830398.3830681},
booktitle = {Proceedings of the 39th Annual ACM Symposium on User Interface Software and Technology},
series = {UIST '26}
}
```

## Contributors

### Paper

SplatXR is described in our UIST 2026 paper, [*SplatXR: A Toolkit for Multi-Layered Extended Reality via On-Headset 3D Gaussian Splatting*](https://splatxr.github.io/static/paper/splatxr_uist26_paper.pdf), by Cyrus Vachha, Mohamed Kari, and Parastoo Abtahi.

Corresponding author: Cyrus Vachha (cvachha[at]princeton.edu).

### Acknowledgements

We thank [Szymon Rusinkiewicz](https://www.cs.princeton.edu/~smr/) for advice and assistance with the object meshing algorithm, Simon Bethke for providing the [botanical garden dataset](https://www.kaggle.com/datasets/simonbethke/botanical-garden-america), and members of the PSI Lab for their advice. This research was supported by the Princeton NextG Innovation Grant.
