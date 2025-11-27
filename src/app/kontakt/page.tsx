// src/app/kontakt/page.tsx

export const metadata = {

  title: "Kontakt – LayGrid",

  description:

    "Kontaktformular für Fragen, Projekte und Demos rund um LayGrid – Betriebsplanung mit physischen Bauklötzen und Web-Planer.",

};

export default function KontaktPage() {

  return (
<main className="mx-auto w-full max-w-4xl px-4 py-16">

      {/* Titel + Einleitung */}
<section className="mb-10">
<h1 className="text-3xl md:text-4xl font-bold mb-4">Kontaktformular</h1>
<p className="text-sm md:text-base text-white/80 mb-2">

          Haben Sie Fragen, ein konkretes Projekt oder moechten einfach mehr über

          LayGrid erfahren? Wir freuen uns auf den Austausch mit Ihnen!
</p>
<p className="text-xs md:text-sm text-white/60">

          Schreiben Sie uns oder rufen Sie an. Lassen Sie uns gemeinsam die beste

          Loesung für Ihre Anforderungen finden.
</p>
</section>

      {/* Formular */}
<section className="rounded-xl border border-white/10 bg-black/40 p-6 mb-16">
<form className="grid gap-4" method="POST" action="/api/contact">
<div className="grid gap-4 md:grid-cols-2">
<input

              name="firstName"

              placeholder="Vorname"

              required

              className="rounded-lg border border-white/20 bg-black/40 px-3 py-2 text-sm outline-none focus:border-[var(--color-accent)]"

            />
<input

              name="lastName"

              placeholder="Nachname"

              required

              className="rounded-lg border border-white/20 bg-black/40 px-3 py-2 text-sm outline-none focus:border-[var(--color-accent)]"

            />
</div>
<input

            name="company"

            placeholder="Firma"

            required

            className="rounded-lg border border-white/20 bg-black/40 px-3 py-2 text-sm outline-none focus:border-[var(--color-accent)]"

          />
<input

            type="email"

            name="email"

            placeholder="E-Mail"

            required

            className="rounded-lg border border-white/20 bg-black/40 px-3 py-2 text-sm outline-none focus:border-[var(--color-accent)]"

          />
<textarea

            name="message"

            placeholder="Nachricht"

            required

            rows={5}

            className="rounded-lg border border-white/20 bg-black/40 px-3 py-2 text-sm outline-none focus:border-[var(--color-accent)] resize-y"

          />
<label className="flex items-start gap-2 text-xs text-white/70">
<input

              type="checkbox"

              name="privacy"

              required

              className="mt-1 h-4 w-4 rounded border border-white/40 bg-black/40"

            />
<span>

              Sie erklaeren sich damit einverstanden, dass Ihre Daten zur Bearbeitung

              Ihres Anliegens verwendet werden. Weitere Informationen und

              Widerrufshinweise finden Sie in der Datenschutzerklaerung.
</span>
</label>
<button

            type="submit"

            className="mt-2 inline-flex justify-center rounded-lg bg-[var(--color-accent)] px-6 py-2 text-sm font-medium text-black hover:bg-[var(--color-secondary)] transition"
>

            Absenden
</button>
</form>
</section>

      {/* Adresse + Google Maps */}
<section className="grid gap-8 md:grid-cols-2 items-start">
<div>
<h2 className="text-xl font-semibold mb-3">Adresse</h2>
<p className="text-sm text-white/80">

            LayGrid
<br />

            Feldlistrasse 31
<br />

            9000 St. Gallen
<br />

            Schweiz
</p>
<p className="mt-4 text-sm text-white/80">

            Telefon:{" "}
<a

              href="tel:+41789401663"

              className="text-[var(--color-accent)] hover:underline"
>

              +41 78 940 16 63
</a>
<br />

            E-Mail:{" "}
<a

              href="mailto:laygrid@outlook.com"

              className="text-[var(--color-accent)] hover:underline"
>

              laygrid@outlook.com
</a>
</p>
</div>
<div className="w-full overflow-hidden rounded-xl border border-white/10 aspect-video">
<iframe

            title="LayGrid Standort"

            src="https://www.google.com/maps?q=Feldlistrasse%2031%2C%209000%20St.%20Gallen&output=embed"

            className="h-full w-full border-0"

            loading="lazy"

            referrerPolicy="no-referrer-when-downgrade"

          />
</div>
</section>
</main>

  );

}
