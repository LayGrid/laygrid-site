"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const sp = useSearchParams();
  const next = sp.get("next") || "/planer";
  const hasError = sp.get("error") === "1";
  const [submitting, setSubmitting] = useState(false);

  return (
    <main className="mx-auto w-full px-4 py-12" style={{ maxWidth: "var(--container)" }}>
      <div className="mx-auto max-w-sm rounded-xl border p-6">
        <h1 className="text-2xl font-bold mb-4">Login</h1>

        {hasError && (
          <div className="mb-4 rounded border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700">
            Benutzername oder Passwort falsch.
          </div>
        )}

        <form method="POST" action="/api/login" onSubmit={() => setSubmitting(true)} className="grid gap-3">
          <input type="hidden" name="next" value={next} />
          <input name="username" placeholder="Benutzername" required className="rounded-lg border px-3 py-2" />
          <input name="password" type="password" placeholder="Passwort" required className="rounded-lg border px-3 py-2" />
          <button disabled={submitting} className="rounded-lg bg-brand text-brand-foreground px-4 py-2 disabled:opacity-60">
            {submitting ? "Anmelden..." : "Anmelden"}
          </button>
        </form>

        <form method="POST" action="/api/logout" className="mt-4">
          <button className="text-sm text-gray-500 hover:underline" type="submit">
            Ausloggen
          </button>
        </form>
      </div>
    </main>
  );
}
