import { useCallback, useEffect, useRef, useState } from 'react';

export function useActiveSection(sectionIds, defaultId = 'bab-1') {
  const [activeId, setActiveId] = useState(defaultId);
  const manualLockUntilRef = useRef(0);

  const selectSectionManually = useCallback((id) => {
    manualLockUntilRef.current = Date.now() + 700;
    setActiveId(id);
  }, []);

  useEffect(() => {
    if (
      typeof window === 'undefined' ||
      typeof IntersectionObserver === 'undefined'
    ) {
      return undefined;
    }

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        if (Date.now() < manualLockUntilRef.current) return;

        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visibleEntries.length > 0) {
          setActiveId(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: '-110px 0px -60% 0px',
        threshold: [0, 0.15, 0.4],
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [sectionIds]);

  return [activeId, selectSectionManually];
}
