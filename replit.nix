{ pkgs }: {
    deps = [
        pkgs.nodejs-16_x
		pkgs.nodePackages.typescript
		pkgs.nodePackages.parcel-bundler
    ];
}