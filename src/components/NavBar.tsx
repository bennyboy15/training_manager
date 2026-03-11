import { useState } from "react";
import { Link } from "react-router-dom";
import { DynamicIcon } from "lucide-react/dynamic";

const menuItems = [
  { menuID: 1, menuTitle: "Dashboard", navigation: "/", menuIcon: "layout-dashboard" as const },
  { menuID: 2, menuTitle: "Worksheets", navigation: "/worksheet", menuIcon: "pickaxe" as const },
  { menuID: 3, menuTitle: "Schedule", navigation: "/schedule", menuIcon: "calendar-days" as const },
  { menuID: 4, menuTitle: "Parts", navigation: "/parts", menuIcon: "package" as const },
  { menuID: 5, menuTitle: "Admin", navigation: "/admin", menuIcon: "shield-user" as const },
  { menuID: 6, menuTitle: "Components", navigation: "/showcase", menuIcon: "component" as const },
];

function TopNav() {
  const [selectedMenu, setSelectedMenu] = useState<number>(1);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="z-50 w-full min-w-screen bg-white/80 backdrop-blur-lg shadow-sm">

      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-3 mx-auto max-w-7xl">

        {/* Logo */}
        <div className="text-lg font-semibold tracking-tight text-gray-800">
          My App
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-2">
          {menuItems.map((item) => {
            const selected = item.menuID === selectedMenu;

            return (
              <li key={item.menuID} onClick={() => setSelectedMenu(item.menuID)}>
                <Link
                  to={item.navigation}
                  className={`
                    relative flex items-center gap-2 px-4 py-2 rounded-lg
                    transition-all duration-200 ease-out
                    ${selected
                      ? "text-blue-600 bg-blue-50 font-semibold"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"}
                  `}
                >
                  <DynamicIcon
                    name={item.menuIcon}
                    size={20}
                    className="transition-transform duration-200 group-hover:scale-110"
                  />

                  {item.menuTitle}

                  {/* Active underline animation */}
                  {selected && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-blue-500 rounded-full animate-[fadeIn_.25s_ease]"></span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <DynamicIcon
            name={mobileOpen ? "x" : "menu"}
            size={26}
            className="transition-transform duration-200"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <ul className="flex flex-col px-4 pb-4 gap-1">
          {menuItems.map((item) => {
            const selected = item.menuID === selectedMenu;

            return (
              <li
                key={item.menuID}
                onClick={() => {
                  setSelectedMenu(item.menuID);
                  setMobileOpen(false);
                }}
              >
                <Link
                  to={item.navigation}
                  className={`
                    flex items-center gap-3 px-3 py-2 rounded-lg
                    transition-all duration-200
                    ${selected
                      ? "bg-blue-50 text-blue-600 font-semibold"
                      : "hover:bg-gray-100 text-gray-700"}
                  `}
                >
                  <DynamicIcon name={item.menuIcon} size={20} />
                  {item.menuTitle}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default TopNav;