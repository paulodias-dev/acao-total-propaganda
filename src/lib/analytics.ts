export type AnalyticsParams = Record<string, string | number | boolean | undefined>;
export type AnalyticsConsent = "accepted" | "rejected";

const measurementId = import.meta.env.VITE_GA4_MEASUREMENT_ID?.trim();
const CONSENT_STORAGE_KEY = "acao_total_cookie_consent";
let analyticsInitialized = false;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (command: string, ...args: unknown[]) => void;
  }
}

function sanitizeParams(params: AnalyticsParams) {
  return Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined),
  );
}

export function getAnalyticsConsent(): AnalyticsConsent | null {
  if (typeof window === "undefined") {
    return null;
  }

  const consent = window.localStorage.getItem(CONSENT_STORAGE_KEY);
  return consent === "accepted" || consent === "rejected" ? consent : null;
}

export function setAnalyticsConsent(consent: AnalyticsConsent) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(CONSENT_STORAGE_KEY, consent);

  if (consent === "accepted") {
    initializeAnalytics();
    window.gtag?.("consent", "update", { analytics_storage: "granted" });
  } else {
    window.gtag?.("consent", "update", { analytics_storage: "denied" });
  }
}

export function initializeAnalytics() {
  if (analyticsInitialized || !measurementId || !hasAnalyticsConsent() || typeof window === "undefined") {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || ((...args) => {
    window.dataLayer?.push(args);
  });

  if (!document.getElementById("ga4-script")) {
    const script = document.createElement("script");
    script.id = "ga4-script";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    document.head.appendChild(script);
  }

  window.gtag("js", new Date());
  window.gtag("config", measurementId, { send_page_view: false });
  analyticsInitialized = true;
}

export function hasAnalyticsConsent() {
  return getAnalyticsConsent() === "accepted";
}

export function trackEvent(name: string, params: AnalyticsParams = {}) {
  if (!hasAnalyticsConsent()) {
    return;
  }

  initializeAnalytics();

  if (!measurementId || !window.gtag) {
    return;
  }

  window.gtag("event", name, sanitizeParams(params));
}

export function trackPageView(page: string) {
  trackEvent("page_view", {
    page_name: page,
    page_title: document.title,
    page_location: window.location.href,
    page_path: `${window.location.pathname}${window.location.hash}`,
  });
}

export function trackNavigationClick({
  page,
  label,
  location,
}: {
  page: string;
  label: string;
  location: string;
}) {
  trackEvent("select_content", {
    content_type: "navigation",
    item_id: page,
    nav_item: label,
    nav_location: location,
  });
}
