// タブタイトルを生成する関数
export const generateTitle = (title?: string) => {
  return title ? `Yuri's Blog | ${title}` : "Yuri's Blog";
};

export const navTitles = {
  home: "Home",
  about: "About",
  blog: "Blog",
  work: "Work",
};

// ナビゲーション情報を管理
export const navInfo = [
  {
    navTitle: navTitles.home,
    navLink: "/",
  },
  {
    navTitle: navTitles.about,
    navLink: "/about",
  },
  {
    navTitle: navTitles.blog,
    navLink: "/blog/page/1",
  },
  {
    navTitle: navTitles.work,
    navLink: "/work/page/1",
  },
];
