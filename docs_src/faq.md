# FAQ / Known Issues

### Splat count limitations

There is a performance limitation of approximately **200,000 splats** per scene. Exceeding this limit may cause performance degradation. When working with large splat files, consider:

- Decimating your source splat data.
- Using the LoD Renderer to swap lower-detail versions at distance.

The limitation is primarily the number/FOV/layering of visible splats in a scene's rendered view. Further optimizations are under development.

### Possible slow-down in in-editor viewing

When viewing splats in the Unity editor, it's recommended to enable the **"Remove Outline"** option in the in-editor viewer for better rendering performance while selecting the splat in the editor.

### Scene-based meshing detail

Scene-based meshing (when using Splat Type: **Space** in physics generation) may not produce highly detailed meshes. For objects requiring detailed collision meshes, use Splat Type: **Object** instead.

### Splats drawing in the wrong order

Splats within one object are sorted automatically, but separate splat objects (and other transparent objects) are drawn in the order of their material's **Render Queue**. If one splat incorrectly shows through or covers another, change the **Render Queue** at the bottom of the splat material's Inspector. Materials with a higher value are drawn later, on top of lower ones. New splat materials start at `3001`. See [Splat Renderer](building-blocks/renderer.md#material-and-color-controls) for more on splat materials.

!!! warning "Camera distance and performance"
    Avoid keeping the camera/headset extremely close to splat surfaces/objects — close proximity can cause rendering slowdowns and stuttering due to the high density of splats being processed. Maintain a reasonable viewing distance from splat objects for optimal performance.
