import Image from "next/image";

export default function UeberUnsPage() {

  return (
<main className="min-h-screen bg-black text-zinc-50">

      {/* Hero */}
<section className="relative overflow-hidden border-b border-zinc-800">
<div className="absolute inset-0 -z-10">
<Image

            src="/about-hero.jpg" // Bild fuer die Ueber-uns-Intro

            alt="LayGrid Hintergrund"

            fill

            priority

            className="object-cover opacity-40"

          />
<div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black" />
</div>
<div className="mx-auto max-w-5xl px-4 py-20">
<p className="text-sm font-medium uppercase tracking-[0.18em] text-[#FF6037]">

            Ueber uns
</p>
<h1 className="mt-3 text-3xl font-semibold md:text-4xl">

            Unsere Mission: Betriebsplanung verstaendlich machen
</h1>
<p className="mt-4 max-w-2xl text-base text-zinc-300">

            LayGrid ist aus der Praxis entstanden. Wir wollten ein Werkzeug, mit dem

            KMU Betriebsflaechen gemeinsam planen koennen – ohne dicke

            Konzeptdossiers, sondern mit verstaendlichen Modellen und einem

            klaren digitalen Planer.
</p>
</div>
</section>

      {/* Mission + Werte */}
<section className="border-b border-zinc-800 bg-zinc-950">
<div className="mx-auto grid max-w-5xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center">
<div className="space-y-4">
<h2 className="text-2xl font-semibold">Unsere Mission</h2>
<p className="text-zinc-300">

              Planung muss greifbar, transparent und kollaborativ sein. Mit

              physischen Bausteinen und einem klaren Web-Planer machen wir

              Layoutarbeit zugaenglich. So treffen Sie im Team fundierte

              Entscheidungen.
</p>
<ul className="space-y-2 text-sm text-zinc-300">
<li>• Einfachheit vor Komplexitaet</li>
<li>• Team statt Silos</li>
<li>• Praxisnahe Ergebnisse statt endloser Analysen</li>
</ul>
</div>
<div className="relative h-64 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
<Image

              src="/about-1.png" // Bild fuer Mission

              alt="Workshop mit LayGrid"

              fill

              className="object-cover"

            />
</div>
</div>
</section>

      {/* Warum LayGrid */}
<section className="border-b border-zinc-800 bg-black">
<div className="mx-auto max-w-5xl px-4 py-16">
<h2 className="mb-6 text-2xl font-semibold">Warum es LayGrid gibt</h2>
<div className="grid gap-6 md:grid-cols-3">
<div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
<h3 className="mb-2 text-sm font-semibold">Aus der Werkhalle</h3>
<p className="text-sm text-zinc-300">

                LayGrid ist aus realen Projekten entstanden, in denen klassische

                Layoutplaene nicht ausgereicht haben. Wir wollten etwas, das direkt

                am Tisch funktioniert.
</p>
</div>
<div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
<h3 className="mb-2 text-sm font-semibold">Fuer KMU gedacht</h3>
<p className="text-sm text-zinc-300">

                KMU brauchen verstaendliche Werkzeuge statt grosser

                Softwareprojekte. LayGrid ist bewusst schlank gehalten und laesst

                sich flexibel einsetzen.
</p>
</div>
<div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
<h3 className="mb-2 text-sm font-semibold">Bruecke zur Digitalisierung</h3>
<p className="text-sm text-zinc-300">

                Physische Bausteine und Web-Planer schliessen die Luecke zwischen

                Whiteboard und BIM. Sie koennen klein starten und schrittweise

                digital wachsen.
</p>
</div>
</div>
</div>
</section>

      {/* Kurzer Team-Abschnitt – ohne Namen, aber menschlich */}
<section className="bg-zinc-950">
<div className="mx-auto max-w-5xl px-4 py-16">
<div className="grid gap-10 md:grid-cols-[1.4fr,1fr] md:items-center">
<div className="space-y-4">
<h2 className="text-2xl font-semibold">Wer hinter LayGrid steckt</h2>
<p className="text-zinc-300">

                Hinter LayGrid steht ein kleines Team mit Hintergrund in

                Konstruktion, Produktionsplanung und Digitalisierung. Wir kennen den

                Alltag in Werkhallen und Projektraeumen – und bauen das Produkt so,

                wie wir es selbst gerne gehabt haetten.
</p>
<p className="text-sm text-zinc-400">

                Sie haben ein konkretes Projekt oder moechten LayGrid als Pilot

                testen? Schreiben Sie uns – wir freuen uns auf den Austausch.
</p>
</div>
<div className="relative h-56 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
<Image

                src="/team-1.jpg" // optionales Stimmungsbild / Team

                alt="Team hinter LayGrid"

                fill

                className="object-cover"

              />
</div>
</div>
</div>
</section>
</main>

  );

}
 