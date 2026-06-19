import { useUser } from '@clerk/clerk-react';

/**
 * Role resolution for the JD Productions SaaS.
 * Founder/admin is granted via Clerk publicMetadata.role === 'admin'
 * (set in the Clerk dashboard or via the admin API). Everyone else is a member.
 * Built to extend: add more roles/entitlements to publicMetadata over time.
 */
export default function useRole() {
  const { user, isLoaded } = useUser();
  const role = user?.publicMetadata?.role || 'member';
  const isAdmin = role === 'admin' || role === 'founder';
  const entitlements = user?.publicMetadata?.entitlements || {};
  return { isLoaded, role, isAdmin, entitlements, user };
}
