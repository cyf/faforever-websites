import React, { useMemo } from "react";
import Link from "next/link";
import { useTranslation } from "@/i18n/client";
import type { LngProps } from "@/types/i18next-lng";
import type { Asset } from "@/types/github";
import type { SystemOS } from "@/types/common";

export default function BinariesCard({
  lng,
  platform,
  assets,
}: LngProps & { platform: SystemOS; assets: Asset[] }) {
  const { t } = useTranslation(lng, "download");

  const binaryLinks = useMemo(() => {
    const links: Record<SystemOS, React.ReactNode> = {
      ios: (
        <>
          <ul className="mt-2">
            {assets.map((value: Asset) => {
              return (
                <li
                  key={value.id}
                  className="w-fit rounded-sm px-2 py-1.5 hover:bg-gray-200 dark:hover:bg-gray-400"
                >
                  <Link
                    className="text-gray-600 dark:text-white/80"
                    href={value.browser_download_url || ""}
                  >
                    {value.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </>
      ),
      android: (
        <>
          <ul className="mt-2">
            {assets.map((value: Asset) => {
              return (
                <li
                  key={value.id}
                  className="w-fit rounded-sm px-2 py-1.5 hover:bg-gray-200 dark:hover:bg-gray-400"
                >
                  <Link
                    className="text-gray-600 dark:text-white/80"
                    href={value.browser_download_url || ""}
                  >
                    {value.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </>
      ),
      macos: (
        <>
          <ul className="mt-2">
            {assets.map((value: Asset) => {
              return (
                <li
                  key={value.id}
                  className="w-fit rounded-sm px-2 py-1.5 hover:bg-gray-200 dark:hover:bg-gray-400"
                >
                  <Link
                    className="text-gray-600 dark:text-white/80"
                    href={value.browser_download_url || ""}
                  >
                    {value.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </>
      ),
      windows: (
        <>
          <div className="mb-2 mt-2 flex flex-col px-2">
            <span className="mb-2 text-gray-600 dark:text-white/80">x64</span>
            <ul>
              {assets
                .filter((value: Asset) => value.name?.includes("x64"))
                .map((value: Asset) => {
                  return (
                    <li
                      key={value.id}
                      className="w-fit rounded-sm px-2 py-1.5 hover:bg-gray-200 dark:hover:bg-gray-400"
                    >
                      <Link
                        className="text-gray-600 dark:text-white/80"
                        href={value.browser_download_url || ""}
                      >
                        {value.name}
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
        </>
      ),
      linux: (
        <>
          <div className="mb-2 mt-2 flex flex-col px-2">
            <span className="mb-2 text-gray-600 dark:text-white/80">x64</span>
            <ul>
              {assets
                .filter((value: Asset) => value.name?.includes("amd64"))
                .map((value: Asset) => {
                  return (
                    <li
                      key={value.id}
                      className="w-fit rounded-sm px-2 py-1.5 hover:bg-gray-200 dark:hover:bg-gray-400"
                    >
                      <Link
                        className="text-gray-600 dark:text-white/80"
                        href={value.browser_download_url || ""}
                      >
                        {value.name}
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className="mb-2 mt-2 flex flex-col px-2">
            <span className="mb-2 text-gray-600 dark:text-white/80">arm64</span>
            <ul>
              {assets
                .filter((value: Asset) => value.name?.includes("aarch64"))
                .map((value: Asset) => {
                  return (
                    <li
                      key={value.id}
                      className="w-fit rounded-sm px-2 py-1.5 hover:bg-gray-200 dark:hover:bg-gray-400"
                    >
                      <Link
                        className="text-gray-600 dark:text-white/80"
                        href={value.browser_download_url || ""}
                      >
                        {value.name}
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
        </>
      ),
    };

    return links;
  }, [assets]);

  return (
    <div className="flex w-full max-w-screen-xl animate-fade-up flex-col rounded-xl border border-gray-200 p-4 hover:shadow-md dark:border-gray-700 dark:hover:shadow-gray-700">
      <span className="text-xl font-bold">{t("binaries")}</span>
      <span className="text-base text-gray-600 dark:text-white/80">
        {t("binaries-description")}
      </span>
      <div className="flex flex-col justify-center">
        {binaryLinks[platform]}
      </div>
    </div>
  );
}
