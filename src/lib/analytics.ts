declare const window: Window['window'] & {
  dataLayer: Array<Record<string, unknown>>;
};

export const gtmTrigger = (identifier: string) =>
  window.dataLayer.push({
    event: identifier,
  });
