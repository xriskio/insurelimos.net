import { useEffect, useRef } from "react";
import { useLocation } from "wouter";

function generateSessionId(): string {
  return 'sess_' + Math.random().toString(36).substring(2) + Date.now().toString(36);
}

function getSessionId(): string {
  let sessionId = localStorage.getItem('visitor_session_id');
  if (!sessionId) {
    sessionId = generateSessionId();
    localStorage.setItem('visitor_session_id', sessionId);
  }
  return sessionId;
}

function parseUserAgent(ua: string) {
  let browser = 'Unknown';
  let os = 'Unknown';
  let deviceType = 'Desktop';

  if (/Mobile|Android|iPhone|iPad/i.test(ua)) {
    deviceType = /iPad|Tablet/i.test(ua) ? 'Tablet' : 'Mobile';
  }

  if (/Chrome/i.test(ua) && !/Edge|Edg/i.test(ua)) browser = 'Chrome';
  else if (/Safari/i.test(ua) && !/Chrome/i.test(ua)) browser = 'Safari';
  else if (/Firefox/i.test(ua)) browser = 'Firefox';
  else if (/Edge|Edg/i.test(ua)) browser = 'Edge';
  else if (/MSIE|Trident/i.test(ua)) browser = 'IE';

  if (/Windows/i.test(ua)) os = 'Windows';
  else if (/Mac OS/i.test(ua)) os = 'macOS';
  else if (/Linux/i.test(ua)) os = 'Linux';
  else if (/Android/i.test(ua)) os = 'Android';
  else if (/iOS|iPhone|iPad/i.test(ua)) os = 'iOS';

  return { browser, os, deviceType };
}

function getUtmParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    utmSource: params.get('utm_source') || undefined,
    utmMedium: params.get('utm_medium') || undefined,
    utmCampaign: params.get('utm_campaign') || undefined,
  };
}

export function PageTracker() {
  const [location] = useLocation();
  const lastTrackedPath = useRef<string>("");

  useEffect(() => {
    if (location === lastTrackedPath.current) return;
    lastTrackedPath.current = location;

    const sessionId = getSessionId();
    const userAgent = navigator.userAgent;
    const { browser, os, deviceType } = parseUserAgent(userAgent);
    const { utmSource, utmMedium, utmCampaign } = getUtmParams();

    const trackData = {
      sessionId,
      pagePath: location,
      pageTitle: document.title,
      referrer: document.referrer || undefined,
      utmSource,
      utmMedium,
      utmCampaign,
      userAgent,
      deviceType,
      browser,
      os,
      screenWidth: String(window.screen.width),
      screenHeight: String(window.screen.height),
    };

    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(trackData),
    }).catch(() => {});
  }, [location]);

  return null;
}
