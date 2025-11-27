import Image from "next/image";

export default function ProduktPage() {

  return (
<main className="min-h-screen bg-black text-zinc-50">

      {/* Hero */}
<section className="relative overflow-hidden border-b border-zinc-800">

        {/* Hintergrundbild */}
<div className="absolute inset-0 -z-10">
<Image

            src="/prod-hero.png" // liegt in /public

            alt="LayGrid Produktuebersicht"

            fill

            priority

            className="object-cover opacity-40"

          />
<div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />
</div>
<div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-24 md:flex-row md:items-center">
<div className="space-y-6 md:w-2/3">
<p className="text-sm font-medium uppercase tracking-[0.18em] text-[#FF6037]">

              Produkt
</p>
<h1 className="text-3xl font-semibold md:text-4xl lg:text-5xl">

              Physische Bausteine treffen digitalen Web-Planer
</h1>
<p className="max-w-xl text-base text-zinc-300">

              LayGrid verbindet greifbare 3D-Bausteine mit einem klaren, webbasierten

              Planer. So planen Sie Flaechen und Maschinen im Team – verstaendlich,

              schnell und sauber dokumentiert.
</p>
<div className="flex flex-wrap gap-3 text-sm">
<span className="rounded-full bg-white/5 px-3 py-1 text-zinc-200">

                Physische Bausteine im Massstab
</span>
<span className="rounded-full bg-white/5 px-3 py-1 text-zinc-200">

                Web-Planer mit STEP-Import
</span>
<span className="rounded-full bg-white/5 px-3 py-1 text-zinc-200">

                Export fuer Partner & Dokumentation
</span>
</div>
</div>
<div className="hidden md:block md:w-1/3">
<div className="rounded-2xl border border-zinc-800 bg-black/60 p-4 shadow-xl backdrop-blur">
<p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-zinc-400">

                Kurzuebersicht
</p>
<ul className="space-y-2 text-sm text-zinc-200">
<li>• Workshops mit physischen Modellen</li>
<li>• Web-Planer fuer Feintuning und Varianten</li>
<li>• Export fuer Partner, Offerten und BIM-Roadmap</li>
</ul>
</div>
</div>
</div>
</section>

      {/* Abschnitt: Physische Bausteine */}
<section className="border-b border-zinc-800 bg-zinc-950">
<div className="mx-auto grid max-w-5xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center">
<div className="space-y-4">
<h2 className="text-2xl font-semibold">Physische 3D-Bausteine</h2>
<p className="text-zinc-300">

              Wir vermessen Ihre Maschinen, erstellen Bausteine im Massstab und

              liefern ein robustes LayGrid Board fuer Workshops. So wird

              Betriebsplanung greifbar und diskutierbar – direkt am Tisch.
</p>
<ul className="space-y-2 text-sm text-zinc-300">
<li>• Massstabssichere Bausteine fuer Maschinen und Flaechen</li>
<li>• LayGrid Board als Grundlage fuer Team-Workshops</li>
<li>• Schnelle Iterationen ohne CAD-Kenntnisse</li>
<li>• Ideale Vorstufe fuer die digitale Planung</li>
</ul>
</div>
<div className="relative h-64 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
<Image

              src="/service-1.png" // Bild fuer die Bausteine

              alt="LayGrid Bausteine und Board"

              fill

              className="object-cover"

            />
</div>
</div>
</section>

      {/* Abschnitt: Web-Planer */}
<section className="border-b border-zinc-800 bg-black">
<div className="mx-auto grid max-w-5xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center">
<div className="relative order-2 h-64 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 md:order-1">
<Image

              src="/service-2.png" // Bild fuer den Web-Planer

              alt="LayGrid Web-Planer"

              fill

              className="object-cover"

            />
</div>
<div className="order-1 space-y-4 md:order-2">
<h2 className="text-2xl font-semibold">Web-Planer</h2>
<p className="text-zinc-300">

              Im Web-Planer uebertragen Sie Ihr Layout, verfeinern Details und

              schaffen eine saubere Basis fuer weitere Schritte – von STEP-Modellen

              bis zur BIM-Roadmap.
</p>
<ul className="space-y-2 text-sm text-zinc-300">
<li>• Browserbasiert – kein Installationsaufwand</li>
<li>• Import und Export von STEP-Dateien</li>
<li>• Anpassbare Raster, Abstaende und Snapping</li>
<li>• Export fuer Partner, Offerten und interne Dokumentation</li>
</ul>
</div>
</div>
</section>

      {/* Abschnitt: Ablauf / Paket */}
<section className="bg-zinc-950">
<div className="mx-auto max-w-5xl px-4 py-16">
<h2 className="mb-6 text-2xl font-semibold">Wie ein Projekt mit LayGrid ablaeuft</h2>
<div className="grid gap-6 md:grid-cols-3">
<div className="rounded-2xl border border-zinc-800 bg-black/70 p-5">
<p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-zinc-400">

                Schritt 1
</p>
<h3 className="mb-2 text-sm font-semibold">Bestandsaufnahme</h3>
<p className="text-sm text-zinc-300">

                Sie schicken uns Layouts, Maschinenliste und Zielbild. Gemeinsam

                definieren wir den Rahmen fuer Bausteine und Board.
</p>
</div>
<div className="rounded-2xl border border-zinc-800 bg-black/70 p-5">
<p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-zinc-400">

                Schritt 2
</p>
<h3 className="mb-2 text-sm font-semibold">Workshops mit LayGrid Board</h3>
<p className="text-sm text-zinc-300">

                Im Workshop legen Sie Varianten, diskutieren Wege und Puffer und

                halten das gemeinsame Zielbild fest.
</p>
</div>
<div className="rounded-2xl border border-zinc-800 bg-black/70 p-5">
<p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-zinc-400">

                Schritt 3
</p>
<h3 className="mb-2 text-sm font-semibold">Digitale Weiterverarbeitung</h3>
<p className="text-sm text-zinc-300">

                Das Ergebnis uebernehmen Sie in den Web-Planer, exportieren Daten

                fuer Partner oder gehen den naechsten Schritt Richtung BIM.
</p>
</div>
</div>
</div>
</section>
</main>

  );

}
 