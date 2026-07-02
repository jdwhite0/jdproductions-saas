/** Plan → feature entitlements. Single source for gating the member UI. */
export const PLAN_ORDER = ['launch', 'grow', 'scale'];

export const PLAN_META = {
  launch: { name: 'LAUNCH', price: 297 },
  grow: { name: 'GROW', price: 997 },
  scale: { name: 'SCALE', price: 5000 }
};

export const FEATURES = {
  jyson: { min: 'launch', title: 'JYSON' },
  the_mode: { min: 'launch', title: 'The Mode' },
  concierge: { min: 'launch', title: 'Concierge' },
  services: { min: 'launch', title: 'Managed services' },
  ai_os_template: { min: 'grow', title: 'JD AI OS Template' },
  automation: { min: 'grow', title: 'Workflow automation' },
  access_beta: { min: 'grow', title: 'ACCESS (beta)' },
  dedicated_manager: { min: 'scale', title: 'Dedicated account manager' },
  custom_architecture: { min: 'scale', title: 'Custom architecture' }
};

export function hasFeature(plan, featureId) {
  const f = FEATURES[featureId];
  if (!f) return false;
  const have = PLAN_ORDER.indexOf(plan);
  const need = PLAN_ORDER.indexOf(f.min);
  return have >= 0 && have >= need;
}

/** Lowest plan that unlocks a feature (for upgrade CTAs). */
export function planFor(featureId) {
  return PLAN_META[FEATURES[featureId]?.min]?.name || 'GROW';
}
