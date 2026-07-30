import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";

try {
  createRoot(document.getElementById("root")!).render(<App />);
} catch (e) {
  document.getElementById("root")!.innerHTML = `
    <pre style="color:red;padding:20px;font-size:14px;background:#fef2f2;border:2px solid red;border-radius:8px;margin:20px;font-family:monospace;white-space:pre-wrap;word-break:break-all;">
      🚨 ERRO NA MONTAGEM DO REACT:

      ${e instanceof Error ? e.message : String(e)}
      ${e instanceof Error ? '\n\n' + e.stack : ''}
    </pre>
  `;
  console.error("🔥 ERRO CAPTURADO NO TRY/CATCH:", e);
}