import React, { useMemo } from "react";
import { CopyBlock } from "react-code-blocks";
import { useTranslation } from "@/i18n/client";
import { useAppTheme } from "@/lib/hooks";
import type { LngProps } from "@/types/i18next-lng";
import type { SystemOS } from "@/types/common";

export default function PkgCard({
  lng,
  platform,
}: LngProps & { platform: SystemOS }) {
  const { t } = useTranslation(lng, "download");
  const { resolvedTheme: theme } = useAppTheme();

  const storeLinks = useMemo(() => {
    const links: Record<SystemOS, React.ReactNode> = {
      ios: null,
      android: null,
      macos: (
        <>
          <span className="mt-4 text-gray-600 dark:text-white/80">
            Homebrew
          </span>
          <div className="mb-2 mt-2 flex flex-col px-2">
            <CopyBlock
              text="brew install cyf/cyf/faforever"
              language="bash"
              theme={{ mode: theme as any }}
              showLineNumbers
              codeBlock
            />
          </div>
          <span className="mt-6 text-gray-600 dark:text-white/80">
            Nixpkgs (TODO)
          </span>
          <div className="mb-2 mt-2 flex flex-col px-2">
            <CopyBlock
              text="nix-shell -p faforever"
              language="bash"
              theme={{ mode: theme as any }}
              showLineNumbers
              codeBlock
            />
          </div>
        </>
      ),
      windows: (
        <>
          <span className="mt-4 text-gray-600 dark:text-white/80">
            WinGet (TODO)
          </span>
          <div className="mb-2 mt-2 flex flex-col px-2">
            <CopyBlock
              text="winget install --id Insco.FaForever"
              language="bash"
              theme={{ mode: theme as any }}
              showLineNumbers
              codeBlock
            />
          </div>
          <span className="mt-6 text-gray-600 dark:text-white/80">
            Chocolatey
          </span>
          <div className="mb-2 mt-2 flex flex-col px-2">
            <CopyBlock
              text="choco install faforever"
              language="bash"
              theme={{ mode: theme as any }}
              showLineNumbers
              codeBlock
            />
          </div>
          <span className="mt-6 text-gray-600 dark:text-white/80">Scoop</span>
          <div className="mb-2 mt-2 flex flex-col px-2">
            <CopyBlock
              text={`scoop bucket add scoop-bucket https://github.com/cyf/scoop-bucket\nscoop install scoop-bucket/faforever`}
              language="bash"
              theme={{ mode: theme as any }}
              showLineNumbers
              codeBlock
            />
          </div>
        </>
      ),
      linux: (
        <>
          <span className="mt-4 text-gray-600 dark:text-white/80">
            Flatpak (TODO)
          </span>
          <div className="mb-2 mt-2 flex flex-col px-2">
            <CopyBlock
              text="flatpak install com.chenyifaer.FaForever"
              language="bash"
              theme={{ mode: theme as any }}
              showLineNumbers
              codeBlock
            />
          </div>
          <span className="mt-6 text-gray-600 dark:text-white/80">
            Snap (TODO)
          </span>
          <div className="mb-2 mt-2 flex flex-col px-2">
            <CopyBlock
              text="sudo snap install faforever"
              language="bash"
              theme={{ mode: theme as any }}
              showLineNumbers
              codeBlock
            />
          </div>
          <span className="mt-6 text-gray-600 dark:text-white/80">
            Nixpkgs (TODO)
          </span>
          <div className="mb-2 mt-2 flex flex-col px-2">
            <CopyBlock
              text="nix-shell -p faforever"
              language="bash"
              theme={{ mode: theme as any }}
              showLineNumbers
              codeBlock
            />
          </div>
          <span className="mt-6 text-gray-600 dark:text-white/80">
            Arch/Manjaro (TODO)
          </span>
          <div className="mb-2 mt-2 flex flex-col px-2">
            <span className="mb-2 text-gray-600 dark:text-white/80">
              With pamac
            </span>
            <CopyBlock
              text="sudo pamac install faforever"
              language="bash"
              theme={{ mode: theme as any }}
              showLineNumbers
              codeBlock
            />
            <span className="mb-2 mt-4 text-gray-600 dark:text-white/80">
              With yay
            </span>
            <CopyBlock
              text="yay -Sy faforever"
              language="bash"
              theme={{ mode: theme as any }}
              showLineNumbers
              codeBlock
            />
          </div>
        </>
      ),
    };

    return links;
  }, [theme]);

  return storeLinks[platform] ? (
    <div className="flex w-full max-w-screen-xl animate-fade-up flex-col rounded-xl border border-gray-200 p-4 hover:shadow-md dark:border-gray-700 dark:hover:shadow-gray-700">
      <span className="text-xl font-bold">{t("package-managers")}</span>
      <span className="text-base text-gray-600 dark:text-white/80">
        {t("package-managers-description")}
      </span>
      <div className="flex flex-col justify-center">{storeLinks[platform]}</div>
    </div>
  ) : null;
}
