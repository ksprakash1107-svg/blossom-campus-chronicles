import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Initialize optional client-side services (analytics etc.)
import { initAnalytics } from "./lib/firebase";

// Start analytics (will no-op safely if not available)
initAnalytics();

createRoot(document.getElementById("root")!).render(<App />);
