import * as Sentry from "@sentry/nextjs";

/**
 * Custom error capture helper with extra contextual data.
 */
export function logErrorToSentry(
  error: unknown,
  context?: Record<string, unknown>
): void {
  if (context) {
    Sentry.withScope((scope) => {
      scope.setExtras(context);
      Sentry.captureException(error);
    });
  } else {
    Sentry.captureException(error);
  }
}

/**
 * Custom message logger for informational or warning events.
 */
export function logMessageToSentry(
  message: string,
  level: "info" | "warning" | "error" = "info",
  context?: Record<string, unknown>
): void {
  Sentry.withScope((scope) => {
    scope.setLevel(level);
    if (context) {
      scope.setExtras(context);
    }
    Sentry.captureMessage(message);
  });
}

export { Sentry };
