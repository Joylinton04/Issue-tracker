"use client";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type props = {
    content: string;
}

export default function MarkdownRenderer({ content }: props) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ node, ...props }) => (
          <h1 className="text-3xl font-bold text-gray-900 mb-2" {...props} />
        ),
        h2: ({ node, ...props }) => (
          <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2" {...props} />
        ),
        p: ({ node, ...props }) => (
          <p className="text-gray-700 leading-relaxed mb-3" {...props} />
        ),
        ul: ({ node, ...props }) => (
          <ul className="list-disc list-inside text-gray-700 mb-3" {...props} />
        ),
        ol: ({ node, ...props }) => (
          <ol className="list-decimal list-inside text-gray-700 mb-3" {...props} />
        ),
        li: ({ node, ...props }) => (
          <li className="mb-1" {...props} />
        ),
        strong: ({ node, ...props }) => (
          <strong className="font-semibold text-gray-900" {...props} />
        ),
        em: ({ node, ...props }) => (
          <em className="italic text-gray-700" {...props} />
        ),
        a: ({ node, ...props }) => (
          <a
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            {...props}
          />
        ),
        code: ({ node, inline, ...props }: any) =>
          inline ? (
            <code className="bg-gray-100 text-gray-800 px-1 rounded" {...props} />
          ) : (
            <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto">
              <code {...props} />
            </pre>
          ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
