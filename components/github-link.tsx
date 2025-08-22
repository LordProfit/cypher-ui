'use client'
import * as React from "react"
import Link from "next/link"

import { siteConfig } from "@/lib/config"
import { Icons } from "@/components/icons"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Skeleton } from "@/registry/new-york-v4/ui/skeleton"

export function GitHubLink() {
  return (
    <Button asChild size="sm" variant="ghost" className="h-8 shadow-none">
      <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
        <Icons.gitHub />
        <React.Suspense fallback={<Skeleton className="h-4 w-8" />}>
          <StarsCount />
        </React.Suspense>
      </Link>
    </Button>
  )
}

export async function StarsCount() {
  try {
    const data = await fetch("https://api.github.com/repos/cypher-ui-ui/ui", {
      next: { revalidate: 86400 }, // Cache for 1 day
    });
    const json = await data.json();

    const count = json?.stargazers_count ?? 0; // default to 0 if undefined

    return (
      <span className="text-muted-foreground w-8 text-xs tabular-nums">
        {count >= 1000
          ? `${(count / 1000).toFixed(1)}k`
          : count.toLocaleString()}
      </span>
    );
  } catch (err) {
    console.error("Error fetching GitHub stars:", err);
    return <span className="text-muted-foreground w-8 text-xs tabular-nums">0</span>;
  }
}
