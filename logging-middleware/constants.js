// constants.js
export const STACKS = ['backend', 'frontend'];
export const LEVELS = ['debug', 'info', 'warn', 'error', 'fatal'];

export const PACKAGES = {
  backendOnly: ['cache', 'controller', 'cron_job', 'db', 'domain', 'handler', 'repository', 'route', 'service'],
  frontendOnly: ['api', 'component', 'hook', 'page', 'state', 'style'],
  both: ['auth', 'config', 'middleware', 'utils'],
};

export function isValidStack(stack) {
  return STACKS.includes(stack);
}

export function isValidLevel(level) {
  return LEVELS.includes(level);
}

export function isValidPackage(stack, pkg) {
  if (PACKAGES.both.includes(pkg)) return true;
  if (stack === 'backend') return PACKAGES.backendOnly.includes(pkg);
  if (stack === 'frontend') return PACKAGES.frontendOnly.includes(pkg);
  return false;
}
