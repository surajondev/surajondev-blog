"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { supabase } from "@/lib/supabase";
import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js";
// import "highlight.js/styles/abyss.css"; // or your preferred theme
import "./dracula.css";

// Define a type for article data
interface ArticleData {
  image: string;
  title: string;
  created_at: string;
  markdown: string;
}

const Page = () => {
  const [articleData, setArticleData] = useState<ArticleData | null>(null);
  const pathname = usePathname();

  const fetchArticle = async () => {
    const slugArr = pathname.split("/");
    const slug = slugArr[slugArr.length - 1];

    const { data, error } = await supabase
      .from("article")
      .select()
      .eq("slug", slug);

    if (error) {
      console.error(error);
      return;
    }

    if (data) {
      setArticleData(data[0]);
    }
  };

  const marked = new Marked(
    markedHighlight({
      langPrefix: "```",
      highlight(code, lang) {
        const language = hljs.getLanguage(lang) ? lang : "plaintext";
        return hljs.highlight(code, { language }).value;
      },
    })
  );

  useEffect(() => {
    fetchArticle();
  }, [pathname]);

  return (
    <div className="container mx-auto w-6/12 mt-10">
      {articleData && (
        <div>
          <Image
            src={articleData.image}
            alt="Article image"
            width={1920}
            height={1080}
            loading="lazy"
            className="rounded w-full"
          />
          <p className="font-arcade heading1">{articleData.title}</p>
          <div>
            <p className="font-raleway text-xl">Suraj Vishwakarma</p>
            <p className="font-raleway text-xl">
              {articleData.created_at.slice(0, 10)}
            </p>
          </div>
          <hr className="border-gray-300 mt-10" />
          <article
            className="prose lg:prose-lg mt-10 font-raleway"
            dangerouslySetInnerHTML={{
              __html: marked.parse(articleData.markdown),
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Page;
