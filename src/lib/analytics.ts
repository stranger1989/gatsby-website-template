declare const window: Window['window'] & {
  dataLayer: Array<Record<string, unknown>>;
};

/**
 * dispatch gtm trigger
 * @module analytics
 * @param {string} identifier - gtm identifier
 * @return {null}
 */
export const gtmTrigger = (identifier: string) =>
  window.dataLayer.push({
    event: identifier,
  });
