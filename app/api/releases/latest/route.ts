import httpStatus from "http-status";
import github from "@/lib/github";
import { NextResponse } from "next/server";

// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export async function GET() {
  try {
    const latestRelease = await github.repos.getLatestRelease({
      owner: process.env.GH_REPO_OWNER,
      repo: process.env.GH_REPO,
    });

    return NextResponse.json(
      { code: 0, data: latestRelease.data, timestamp: Date.now() },
      { status: httpStatus.OK },
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        code: -1,
        error: error.message || error.toString(),
        timestamp: Date.now(),
      },
      { status: httpStatus.INTERNAL_SERVER_ERROR },
    );
  }
}
