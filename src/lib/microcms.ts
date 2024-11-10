import type { MicroCMSQueries } from "microcms-js-sdk";
import { createClient } from "microcms-js-sdk";

// microCMSへの呼び出しクライアント設定
const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

// microCMS自動作成項目　型
type SystemCreatedContent = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

// 全コンテンツ共通型
type BaseContent = SystemCreatedContent & {
  eyecatch: {
    url: string;
    height: number;
    width: number;
  };
  eyecatch_alt: string;
  title: string;
  content: string;
  tags: Tag[];
};
type BaseResponse<T> = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: T[];
};

// ブログ　型
export type Blog = BaseContent;
export type BlogResponse = BaseResponse<Blog>;

// 開発物　型
export type Work = BaseContent & {
  work_url: string;
};
export type WorkResponse = BaseResponse<Work>;

// タグ　型
export type Tag = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
};
export type TagResponse = BaseResponse<Tag>;

//!　endpoint：blogs
// ブログ一覧取得
export const getBlogs = async (queries?: MicroCMSQueries) => {
  return await client.get<BlogResponse>({ endpoint: "blogs", queries });
};
// ブログ詳細取得
export const getBlogDetail = async (
  blogId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<Blog>({
    endpoint: "blogs",
    contentId: blogId,
    queries,
  });
};

//!　endpoint：works
// 開発物一覧取得
export const getWorks = async (queries?: MicroCMSQueries) => {
  return await client.get<WorkResponse>({ endpoint: "works", queries });
};
// 開発物詳細取得
export const getWorkDetail = async (
  workId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<Work>({
    endpoint: "works",
    contentId: workId,
    queries,
  });
};

//!　endpoint：tags
// タグ一覧取得
export const getTags = async (queries?: MicroCMSQueries) => {
  return await client.get<TagResponse>({ endpoint: "tags", queries });
};
// タグ詳細取得
export const getTagDetail = async (
  tagId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<Tag>({
    endpoint: "tags",
    contentId: tagId,
    queries,
  });
};
