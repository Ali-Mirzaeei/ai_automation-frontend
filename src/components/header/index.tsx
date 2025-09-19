import { useTheme } from "@/core/hooks/useTheme";
import SunIcon from "../sunIcon";

function Header() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore

  const { toggleTheme } = useTheme();

  return (
    <div className=" mb-2 flex items-center w-full justify-between px-2">
      <h1 className="text-3xl font-bold text-textPrimary mb-2">Flowzy</h1>
      <div
        onClick={toggleTheme}
        className="p-3 rounded-full bg-surface border-textPrimary border"
      >
        <SunIcon className="w-5 h-5 text-textPrimary" />
      </div>
    </div>
  );
}

export default Header;
