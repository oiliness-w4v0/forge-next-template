import Bun from 'bun'

Bun.build({
    entrypoints: ["./src/main.ts", "./src/preload.ts"],
    outdir: './.vite/build',
    sourcemap: "external",
    external: ['electron'],
    target: 'node'
})
