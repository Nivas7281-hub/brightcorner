"use client";

import type { ReactNode } from "react";
import { useCurrentUser } from "@/hooks/useCurrentUser";

type RoleGuardProps = {
  allow: string[];
  children: ReactNode;
};

export function RoleGuard({ allow, children }: RoleGuardProps) {
  const { user, loading } = useCurrentUser();

  if (loading) return null;
  if (!user) return null;
  if (!allow.includes(user.role)) return null;

  return <>{children}</>;
}