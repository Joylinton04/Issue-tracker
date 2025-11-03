import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import MarkdownRenderer from "@/component/MarkdownRenderer";
import { prisma } from "@/prisma/client";
import { Card, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
  params: Promise<{ id: string }>;
}

const IssueDetailPage = async ({ params }: Props) => {
  const { id } = await params;

  if (!parseInt(id)) notFound();

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  });

  if (!issue) notFound();

  return (
    <div>
      <Heading>{issue.title}</Heading>
      <div className="flex items-center gap-2 my-2">
        <IssueStatusBadge status={issue.status} />
        <Text>{issue.createdAt.toDateString()}</Text>
      </div>
      <Card className="">
        <MarkdownRenderer content={issue.description} />
      </Card>
    </div>
  );
};

export default IssueDetailPage;
