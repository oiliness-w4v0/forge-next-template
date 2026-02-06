import type { ForgeConfig } from '@electron-forge/shared-types'
import { MakerDeb } from '@electron-forge/maker-deb'
import { MakerZIP } from '@electron-forge/maker-zip'

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
    new MakerZIP(), // 所有平台都生成 ZIP
    new MakerDeb({}),
  ],
}

export default config
