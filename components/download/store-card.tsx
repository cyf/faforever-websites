import React, { useMemo } from "react";
import Link from "next/link";
import { useTranslation } from "@/i18n/client";
import type { LngProps } from "@/types/i18next-lng";
import type { SystemOS } from "@/types/common";

export default function StoreCard({
  lng,
  platform,
}: LngProps & { platform: SystemOS }) {
  const { t } = useTranslation(lng, "download");

  const storeLinks = useMemo(() => {
    const links: Record<SystemOS, React.ReactNode> = {
      ios: (
        <>
          <Link
            className="mt-2"
            target="_blank"
            href="https://apps.apple.com/us/app/id6504818084"
          >
            <img
              width="220"
              alt="Get it on App Store"
              src="https://raw.githubusercontent.com/cyf/faforever/main/docs/assets/Download-on-the-App-Store.svg"
            />
          </Link>
        </>
      ),
      android: (
        <>
          <span className="mt-2 text-gray-600 dark:text-white/80">
            Google Play
          </span>
          <div className="mb-2 mt-2 flex flex-col px-2">
            <Link
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.chenyifaer.faforever"
            >
              <img
                width="220"
                alt="Get it on Google Play"
                src="https://raw.githubusercontent.com/cyf/faforever/main/docs/assets/Download-on-the-Google-Play.png"
              />
            </Link>
          </div>
          {/* <span className="mt-4 text-gray-600 dark:text-white/80">Amazon (TODO)</span>
          <div className="mb-2 mt-2 flex flex-col px-2">
            <Link
              target="_blank"
              href="https://www.amazon.com/dp/XXXXXX"
            >
              <img
                width="220"
                alt="Get it on Amazon App Store"
                src="https://raw.githubusercontent.com/cyf/faforever/main/docs/assets/Download-on-the-Amazon-App-Store.png"
              />
            </Link>
          </div>
          <span className="mt-4 text-gray-600 dark:text-white/80">F-Droid (TODO)</span>
          <div className="mb-2 mt-2 flex flex-col px-2">
            <Link
              target="_blank"
              href="https://f-droid.org/packages/com.chenyifaer.faforever"
            >
              <img
                width="220"
                alt="Get it on App Store"
                src="https://raw.githubusercontent.com/cyf/faforever/main/docs/assets/Download-on-the-F-Droid.svg"
              />
            </Link>
          </div> */}
        </>
      ),
      macos: (
        <>
          <Link
            className="mt-2"
            target="_blank"
            href="https://apps.apple.com/us/app/id6504817993?mt=12"
          >
            <img
              width="220"
              alt="Get it on Mac App Store"
              src="https://raw.githubusercontent.com/cyf/faforever/main/docs/assets/Download-on-the-Mac-App-Store.svg"
            />
          </Link>
        </>
      ),
      windows: (
        <>
          <Link
            className="mt-2"
            target="_blank"
            href="https://www.microsoft.com/store/apps/9P3TM634BKZ1?mode=full"
          >
            <img
              width="220"
              alt="Get it on Windows Store"
              src="https://get.microsoft.com/images/en-us%20dark.svg"
            />
          </Link>
        </>
      ),
      linux: (
        <>
          <span className="mt-2 text-gray-600 dark:text-white/80">
            Snap Store
          </span>
          <div className="mb-2 mt-2 flex flex-col px-2">
            <Link target="_blank" href="https://snapcraft.io/faforever">
              <img
                width="220"
                alt="Get it on Snap Store"
                src="https://snapcraft.io/static/images/badges/en/snap-store-black.svg"
              />
            </Link>
          </div>
          <span className="mt-4 text-gray-600 dark:text-white/80">FlatHub</span>
          <div className="mb-2 mt-2 flex flex-col px-2">
            <Link
              target="_blank"
              href="https://flathub.org/apps/details/com.chenyifaer.FaForever"
            >
              <img
                width="220"
                alt="Get it on Flathub"
                src="https://flathub.org/assets/badges/flathub-badge-en.png"
              />
            </Link>
          </div>
        </>
      ),
    };

    return links;
  }, []);

  return storeLinks[platform] ? (
    <div className="flex min-h-64 w-full max-w-screen-xl animate-fade-up flex-col rounded-xl border border-gray-200 p-4 hover:shadow-md dark:border-gray-700 dark:hover:shadow-gray-700">
      <span className="text-xl font-bold">{t("app-store")}</span>
      <span className="text-base text-gray-600 dark:text-white/80">
        {t("app-store-description")}
      </span>
      <div className="flex flex-col justify-center">{storeLinks[platform]}</div>
    </div>
  ) : null;
}
