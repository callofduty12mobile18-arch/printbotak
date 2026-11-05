import { useLayoutEffect, useRef, useCallback } from 'react';

/**
 * Custom hook that uses IntersectionObserver to add a `.revealed` class
 * to elements with `.reveal-on-scroll` when they enter the viewport.
 */
export function useScrollReveal(
  containerRef?: React.RefObject<HTMLElement>,
  refreshKey?: string,
  autoTagPageSections = false,
  enabled = true
) {
  const observerRef = useRef<IntersectionObserver | null>(null);

  const setupObserver = useCallback(() => {
    // Clean up previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
    if (!enabled) {
      observerRef.current = null;
      return;
    }

    const root = containerRef?.current || document;

    // Add scroll reveals to the main structural blocks on marketing pages so
    // each route gets the same motion treatment without hiding nested content.
    if (autoTagPageSections && root instanceof HTMLElement) {
      const page = root.querySelector(':scope > .w-full');
      const content = page?.firstElementChild;
      if (content) {
        const intro = content.firstElementChild;
        if (intro) {
          const eyebrow = intro.querySelector('[class*="rounded-full"]');
          const title = intro.querySelector('h1');
          const description = intro.querySelector('p');
          eyebrow?.classList.add('hero-entrance');
          title?.classList.add('hero-entrance', 'hero-entrance-delay');
          description?.classList.add('hero-entrance', 'hero-entrance-delay-2');
        }

        Array.from(content.children).forEach((block, index) => {
          const nestedSections = Array.from(block.children).filter((child) => child.tagName === 'SECTION');
          const gridChildren = block.classList.contains('grid') ? Array.from(block.children) : [];
          const targets = nestedSections.length ? nestedSections : gridChildren.length ? gridChildren : [block];

          targets.forEach((target, targetIndex) => {
            target.classList.add('reveal-on-scroll', 'revealed');
            if (index > 0) target.classList.add('page-section-enter');
            target.setAttribute('data-delay', String(((index + targetIndex) % 3) + 1));
            const delay = Math.min(0.12 + ((index - 1) * 0.07) + (targetIndex * 0.03), 0.54);
            if (index > 0 && target instanceof HTMLElement) {
              target.style.setProperty('--page-enter-delay', `${delay}s`);
            }
          });
        });
      }
    }

    const elements = root.querySelectorAll('.reveal-on-scroll');

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('revealed'));
      return;
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            // Once revealed, stop observing
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -20px 0px',
      }
    );

    elements.forEach((el) => {
      if (!el.classList.contains('revealed')) observerRef.current?.observe(el);
    });
  }, [containerRef, refreshKey, autoTagPageSections, enabled]);

  useLayoutEffect(() => {
    setupObserver();
    return () => {
      observerRef.current?.disconnect();
    };
  }, [setupObserver, refreshKey]);

  // Re-run setup when called (useful after dynamic content changes)
  return { refresh: setupObserver };
}
