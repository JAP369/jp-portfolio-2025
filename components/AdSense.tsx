"use client";

import { useEffect } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// Replace NEXT_PUBLIC_ADSENSE_PUBLISHER_ID in .env.local with your real ID:
//   NEXT_PUBLIC_ADSENSE_PUBLISHER_ID=ca-pub-XXXXXXXXXXXXXXXX
// Get yours at: https://adsense.google.com
// ─────────────────────────────────────────────────────────────────────────────

interface AdSenseProps {
  /** Your ad-unit slot ID from the AdSense dashboard */
  slot: string;
  /** Display format – defaults to "auto" */
  format?: string;
  /** Whether to use full-width responsive mode */
  responsive?: boolean;
  /** Extra Tailwind / CSS classes on the wrapper */
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export default function AdSense({
  slot,
  format = "auto",
  responsive = true,
  className = "",
}: AdSenseProps) {
  const publisherId = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID;

  useEffect(() => {
    if (!publisherId) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, [publisherId]);

  if (!publisherId) {
    // Show placeholder in dev so layout is visible
    if (process.env.NODE_ENV === "development") {
      return (
        <div
          className={`flex items-center justify-center rounded-xl border border-dashed border-white/10 text-gray-600 text-xs py-6 ${className}`}
        >
          [Ad Placeholder — Configure NEXT_PUBLIC_ADSENSE_PUBLISHER_ID]
        </div>
      );
    }
    return null;
  }

  return (
    <div className={className}>
      <ins
        className='adsbygoogle'
        style={{ display: "block" }}
        data-ad-client={publisherId}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </div>
  );
}
