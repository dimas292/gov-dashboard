import { useEffect, useState } from "react";
import Dashboard from "./pages/Dashboard.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Topbar from "./components/Topbar.jsx";

export default function App() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("govassist-theme") || "light");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("govassist-theme", theme);
  }, [theme]);

  function toggleSidebar() {
    if (window.matchMedia("(max-width: 63.99rem)").matches) {
      setSidebarVisible((visible) => !visible);
    } else {
      setSidebarCollapsed((collapsed) => !collapsed);
    }
  }

  return (
    <div
      className={`app-shell ${sidebarVisible ? "is-sidebar-visible" : ""} ${sidebarCollapsed ? "is-sidebar-collapsed" : ""}`}
      data-stisla-app-shell
      data-stisla-app-shell-auto-collapse="true"
    >
      <Sidebar collapsed={sidebarCollapsed} />
      <main className="app-shell__main">
        <Topbar
          sidebarExpanded={!sidebarCollapsed || sidebarVisible}
          onToggleSidebar={toggleSidebar}
          theme={theme}
          onToggleTheme={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
        />
        <Dashboard theme={theme} />
      </main>
    </div>
  );
}
