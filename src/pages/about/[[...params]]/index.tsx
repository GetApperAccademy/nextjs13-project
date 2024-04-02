import React, { memo } from "react";
import { AppHead } from "@/components/AppHead";
import { GetStaticPropsResult, GetStaticPropsContext } from "next";
import { GetStaticPathsResult } from "next";

type MultipleParamsProps = {
  newsID: string;
  newsType: string;
  newsSort: string;
};

const MultipleParams = memo(
  ({ newsID, newsType, newsSort }: MultipleParamsProps) => {
    return (
      <>
        <AppHead title="MultipleParams" description="" />
        <div>{newsID}</div>
        <div>{newsType}</div>
        <div>{newsSort}</div>
      </>
    );
  },
);
MultipleParams.displayName = "MultipleParams";

export default MultipleParams;

export async function getStaticPaths(): Promise<GetStaticPathsResult<{}>> {
  return {
    paths: [
      {
        params: {
          params: ["3", "latest", "sortByName"],
        },
      },
    ],
    fallback: true,
  };
}

export async function getStaticProps({
  params: { params },
}: GetStaticPropsContext<{ params: string[] }>): Promise<
  GetStaticPropsResult<MultipleParamsProps>
> {
  const newsID = params[0];
  const newsType = params[1];
  const newsSort = params[2];
  return {
    props: {
      newsID,
      newsType,
      newsSort,
    },
  };
}
