import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/

const port = process.env.PORT || 5173;

export default defineConfig({
	plugins: [react()],
	server: {
		host: "0.0.0.0",
		port: port,
	},
});
