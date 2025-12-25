"use client";

import React, { useEffect, useState } from "react";

type HeadingItem = {
  text: string;
  id: string;
};

type OnThisPageProps = {
  htmlContent: string;
};

const OnThisPage = ({ htmlContent }: OnThisPageProps) => {
  const [headings, setHeadings] = useState<HeadingItem[]>([]);

  useEffect(() => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlContent;

    const h2Elements = tempDiv.querySelectorAll("h2");

    const h2Data: HeadingItem[] = Array.from(h2Elements).map((h2) => ({
      text: h2.textContent ?? "",
      id: h2.id,
    }));

    setHeadings(h2Data);
  }, [htmlContent]);

  return (
    <div className="on-this-page fixed top-32 lg:right-32 hidden lg:block">
      <h2 className="text-md font-bold my-2">On This Page</h2>

      <ul className="text-sm space-y-1">
        {headings.map((heading, index) => (
          <li key={index}>
            <a className="text-text-color" href={`#${heading.id}`}>{heading.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OnThisPage;
