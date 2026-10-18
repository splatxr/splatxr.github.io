# Installation

1. Download the latest release of the toolkit from the [SplatXR Releases page](https://github.com/splatxr/splatxr/releases) and unzip it.
2. Open your Unity project.
3. Go to **Window > Package Management > Package Manager**.
4. Click the **+** button in the top-left corner.
5. Select **Install package from disk...**.
6. Navigate to the unzipped toolkit folder and select the **package.json** file.
7. Unity will import the package and it will appear in the Package Manager under **In Project**.
8. In the menu bar at the top of the Unity Editor, click **SplatXR > Building Blocks Panel** to open the SplatXR panel.

<a id="meshing-tool"></a>

!!! warning "Install the meshing tool"
    The [Splat Physics](building-blocks/physics.md) building block needs the SplatXR meshing tool to generate collision meshes. The tool may already be bundled in the release: check for `splatxr_meshing.exe` (Windows) or `splatxr_meshing_mac` (macOS) in the toolkit's `SplatXRPlugin/Runtime/SplatXRBuildingBlocks/Physics` folder. If it isn't there, download the file for your platform from the [SplatXR Releases page](https://github.com/splatxr/splatxr/releases).

    Place the downloaded file in the toolkit's `SplatXRPlugin/Runtime/SplatXRBuildingBlocks/Physics` folder, and keep its file name: `splatxr_meshing.exe` on Windows or `splatxr_meshing_mac` on macOS. You can also put it directly in your project's `Assets` folder.

    **macOS security warning:** the first time the tool runs, macOS may block it because it's from an unidentified developer. Go to **System Settings > Privacy & Security**, scroll to the message about `splatxr_meshing_mac`, and click **Open Anyway**. Then run the Splat Physics block again.

!!! tip "Next"
    Head to the [Quickstart](quickstart.md) to import your first Gaussian splat.
