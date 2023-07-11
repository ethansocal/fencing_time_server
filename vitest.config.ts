import swc from "unplugin-swc"
import { defineConfig } from "vitest/config"

export default defineConfig({
    test: {
        globals: true,
        root: "./",
    },
    plugins: [
        // This is required to build the test files with SWC
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        swc.vite({
            // Explicitly set the module type to avoid inheriting this value from a `.swcrc` config file
            module: { type: "es6" },
        }),
    ],
})
