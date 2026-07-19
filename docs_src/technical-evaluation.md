# Technical Evaluation Suite

SplatXR ships with a companion evaluation suite used to benchmark the toolkit across a range of splat types and scene conditions on standalone headsets.

<div class="tag-row" markdown>
<span class="tag-pill">Standalone Meta Quest 3</span>
<span class="tag-pill">4 evaluation components</span>
</div>

## What the suite covers

The evaluation suite exercises four components of the toolkit end to end:

- **Runtime renderer** — performance across splat objects, indoor scenes, and outdoor scenes at multiple splat counts and viewpoints.
- **Splat-to-mesh conversion** — meshing time for both the Object and Space algorithms.
- **Splat import** — import and CSV conversion time for loading raw splat files into SplatXR-ready assets.
- **Object reconstruction** — end-to-end timing for the on-headset capture-to-splat reconstruction pipeline.

All benchmarks were run on-device on a standalone Meta Quest 3 across repeated trials to check reproducibility and robustness.

!!! note "Full results are in the paper"
    Detailed metrics, methodology, and results tables for each component are reported in the accompanying paper rather than duplicated here.

## Run it yourself

The evaluation suite is open-source and available separately from the main toolkit repository, so you can reproduce these benchmarks or run them against your own splats and hardware.

[:fontawesome-brands-github: splatxr/splatxr-evals](https://github.com/splatxr/splatxr-evals){ .md-button .md-button--primary }
