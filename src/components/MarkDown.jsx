import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const MarkDown = ({ content }) => {
  return <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />;
};
