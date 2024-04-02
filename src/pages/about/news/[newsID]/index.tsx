import React, { memo } from "react";
import { AppHead } from "@/components/AppHead";
import { GetStaticPropsResult, GetStaticPropsContext } from "next";
import { GetStaticPathsResult } from "next";

type NewsDetailsProps = {
  news: {
    id: string;
    title: string;
  };
};

const NewsDetails = memo(({ news }: NewsDetailsProps) => {
  return (
    <>
      <AppHead title="NewsDetails" description="" />
      <div>
        <h1>NewsDetails</h1>
        <p>{news.id}</p>
        <p>{news.title}</p>
      </div>
    </>
  );
});
NewsDetails.displayName = "NewsDetails";

export default NewsDetails;

export async function getStaticPaths(): Promise<
  GetStaticPathsResult<{
    newsID: string;
  }>
> {
  const newsList = [
    {
      id: "1",
    },
    {
      id: "2",
    },
    {
      id: "3",
    },
    {
      id: "4",
    },
  ];

  return {
    paths: newsList.map((news) => ({
      params: {
        newsID: news.id,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({
  params: { newsID },
}: GetStaticPropsContext<{ newsID: string }>): Promise<
  GetStaticPropsResult<NewsDetailsProps>
> {
  const news = {
    id: newsID,
    title: `Titolo della news ${newsID}`,
  };
  return {
    props: { news },
  };
}
