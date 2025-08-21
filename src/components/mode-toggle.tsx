import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/theme-provider";
import { MdDarkMode } from "react-icons/md";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="translate-y-0.5"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <MdDarkMode />
        </button>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
}
