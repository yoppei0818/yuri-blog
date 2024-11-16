import React, { useState } from "react";
// コンポーネント
import HeaderItem from "@components/HeaderItem";
// ナビゲーション項目
import { navInfo } from "@/utils";
// ハンバーガーメニューアイコン
import hamburgerMenuOpenImage from "@images/hamburgerMenuOpenImage.svg";
import hamburgerMenuCloseImage from "@images/hamburgerMenuCloseImage.svg";

type Props = {
  activeMenu: string;
};

const HamburgerMenu: React.FC<Props> = ({ activeMenu }) => {
  const [toggle, setToggle] = useState<Boolean>(false);

  return (
    <div className="flex flex-col w-auto sm:hidden">
      <button className="relative py-2 px-2">
        {toggle ? (
          <img
            className="dark:invert"
            src={hamburgerMenuCloseImage.src}
            alt="メニューを閉じる"
            width="24px"
            height="24px"
            onClick={() => setToggle(prev => !prev)}
          />
        ) : (
          <img
            className="dark:invert"
            src={hamburgerMenuOpenImage.src}
            alt="メニューを開く"
            width="24px"
            height="24px"
            onClick={() => setToggle(prev => !prev)}
          />
        )}
      </button>
      {toggle && (
        <ul className="absolute top-20 flex flex-col w-4/5 mx-auto border rounded-lg bg-stone-50 dark:bg-zinc-900 dark:border-zinc-700">
          {navInfo.map(navItem => (
            <HeaderItem
              key={navItem.navTitle}
              navTitle={navItem.navTitle}
              navLink={navItem.navLink}
              activeMenu={activeMenu}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default HamburgerMenu;
