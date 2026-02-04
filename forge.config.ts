import type { ForgeConfig } from '@electron-forge/shared-types'
import { MakerZIP } from '@electron-forge/maker-zip';
import { MakerDeb } from '@electron-forge/maker-deb';

const config: ForgeConfig = {
    packagerConfig: {
        asar: true,
        ignore: [
            /^\/src/,
            /^\/index\.html$/,
            /^\/vite\.config\.ts$/,
            /^\/build\.ts$/,
            /^\/node_modules/,
            /^\/.git/,
            /^\/out/,
            // 不要忽略 .vite 目录（这是构建输出）
        ],
    },
    makers: [
        new MakerZIP({}, ['darwin']),
        new MakerDeb({}),
    ],
}

export default config