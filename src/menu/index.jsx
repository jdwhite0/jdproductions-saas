// @project
import memberGroups from './user';
import adminGroup from './admin';
import other from './other';

/***************************  MENU ITEMS (role-aware)  ***************************/

// Member sees workspace + account + support. Founder/admin additionally sees the Founder group.
export function getMenuItems(isAdmin) {
  const items = [...memberGroups];
  if (isAdmin) items.push(adminGroup);
  items.push(other);
  return { items };
}

// Default export = member menu (safe fallback for any consumer before role resolves).
const menuItems = { items: [...memberGroups, other] };

export default menuItems;
