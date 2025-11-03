import { Card, Heading, Text } from "@radix-ui/themes";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const loadingIssuesDetailPage = async () => {

  return (
    <div>
      <Heading>
        <Skeleton width={80} />
      </Heading>
      <div className="flex items-center gap-2 my-2">
        <Skeleton width={'4rem'} />
        <Skeleton width={'4rem'}/>
      </div>
      <Card className="space-y-4">
        <Skeleton count={4}/>
      </Card>
    </div>
  );
};

export default loadingIssuesDetailPage;
