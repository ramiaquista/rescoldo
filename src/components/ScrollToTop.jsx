import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// React Router doesn't reset scroll position on navigation by default —
// without this, clicking a link from a scrolled-down page leaves the next
// page scrolled to the same offset, cutting off its top content.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return; // let anchor links (e.g. #fogoneros) scroll to their target
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
