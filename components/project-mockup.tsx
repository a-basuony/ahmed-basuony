import Image from "next/image";

type ProjectMockupProps = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes: string;
  aspect?: "video" | "card" | "hero";
  overlayLabel?: string;
};

const aspectClass = {
  video: "aspect-video",
  card: "aspect-[16/10]",
  hero: "aspect-[4/3]",
};

export default function ProjectMockup({
  src,
  alt,
  priority = false,
  sizes,
  aspect = "card",
  overlayLabel = "Live Preview",
}: ProjectMockupProps) {
  return (
    <div className="group/mockup rounded-3xl border border-border bg-card p-3 shadow-xl shadow-primary/10">
      <div className="mb-3 flex items-center gap-1.5 px-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        <span className="ml-2 h-2 w-24 rounded-full bg-muted md:w-28" />
      </div>
      <div
        className={`relative ${aspectClass[aspect]} overflow-hidden rounded-2xl bg-muted`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover transition-transform duration-700 group-hover/mockup:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-transparent via-white/0 to-white/10 opacity-0 transition-opacity duration-500 group-hover/mockup:opacity-100" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-4 bg-linear-to-t from-background/85 to-transparent p-4 opacity-0 transition-all duration-300 group-hover/mockup:translate-y-0 group-hover/mockup:opacity-100">
          <span className="rounded-full border border-border bg-card/90 px-3 py-1 text-xs font-semibold text-foreground shadow-sm">
            {overlayLabel}
          </span>
        </div>
      </div>
    </div>
  );
}

