"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

export const ArticleList = () => {
  const [articleData, setArticleData] = useState<any>(null);

  const fetchData = async () => {
    const { data, error } = await supabase
      .from("article")
      .select()
      .order("created_at", { ascending: false });
    setArticleData(data);
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto mt-10 lg:w-6/12 md:w-8/12 w-10/12">
      {articleData !== null &&
        articleData.map((item: any) => {
          return (
            <ArticleCard
              title={item.title}
              description={item.description}
              date={item.created_at}
              tag={item.tag}
              slug={item.slug}
              key={item.slug}
            />
          );
        })}
    </div>
  );
};

const ArticleCard = ({ title, description, date, tag, slug }: any) => {
  console.log(title);
  return (
    <div className="cursor-pointer mt-10">
      <Link className="flex justify-between" href={`/${slug}`}>
        <div className="w-9/12">
          <p className="font-arcade text-2xl hover:text-purple-400 ">{title}</p>
          <p className="flex">
            {tag.map((item: string) => (
              <p
                className="font-raleway underline mr-2 decoration-purple-300 decoration-2"
                key={item}
              >
                {item}
              </p>
            ))}
          </p>
          <p className="font-raleway text-sm cursor-pointer md:block hidden">{description}</p>
        </div>
        <p className="font-raleway">{date.slice(0, 10)}</p>
      </Link>
    </div>
  );
};
