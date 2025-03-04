"use client";

import { usePathname } from "next/navigation";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "./ui/breadcrumb";
import React from "react";

export default function AppBreadcrumbs() {
  const path = usePathname();

  const directiories = path.split("/").filter((p) => p !== "");

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {directiories.map((dir, i) => (
          <React.Fragment key={i}>
            {i > 0 && <BreadcrumbSeparator/>}
            <BreadcrumbItem>
              {i === directiories.length - 1 ? (
                <BreadcrumbPage className="capitalize">{dir}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink className="capitalize" href={`/${dir}`}>
                  {dir}
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
