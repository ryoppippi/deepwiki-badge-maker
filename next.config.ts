import type { NextConfig } from "next";
import withRspack from "next-rspack";

export default withRspack({
	output: "export",
	experimental: {
		reactCompiler: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	images: {
		unoptimized: true,
	},
});
