"use client";

import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Profile() {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin");
    },
  });

  return "Hello";
}
