type Props = {
  navTitle: string;
  navLink: string;
  activeMenu: string;
};

const HeaderItem: React.FC<Props> = ({ navTitle, navLink, activeMenu }) => {
  return (
    <>
      {/* デスクトップ用 */}
      <li className="hidden mr-4 ml-4 sm:block">
        <a
          href={navLink}
          className={`inline-block  hover:text-black duration-200 ease-in-out ${navTitle === activeMenu ? "text-black dark:text-slate-50" : "text-gray-400"}`}
        >
          {navTitle}
        </a>
      </li>
      {/* モバイル用 */}
      <li className="pt-4 pb-4 text-center sm:hidden">
        <a
          href={navLink}
          className={`inline-block  hover:text-black duration-200 ease-in-out ${navTitle === activeMenu ? "text-black dark:text-slate-50" : "text-gray-400"}`}
        >
          {navTitle}
        </a>
      </li>
    </>
  );
};

export default HeaderItem;
