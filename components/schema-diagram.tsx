import type { DatabaseModel } from "@/data/projects";

type SchemaDiagramProps = {
  models?: DatabaseModel[];
  highlights?: string[];
  relationships?: string[];
};

export default function SchemaDiagram({
  models,
  highlights,
  relationships,
}: SchemaDiagramProps) {
  if (!models?.length && !highlights?.length && !relationships?.length) {
    return null;
  }

  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-lg shadow-primary/5">
      <h2 className="mb-4 text-2xl font-bold text-foreground">
        Database Schema Notes
      </h2>

      {models?.length ? (
        <div className="grid gap-3 md:grid-cols-3">
          {models.map((model) => (
            <div
              key={model.name}
              className="rounded-2xl border border-border bg-background/70 p-4"
            >
              <p className="font-bold text-primary">{model.name}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {model.fields.map((field) => (
                  <span
                    key={field}
                    className="rounded-md bg-secondary px-2 py-1 text-xs text-secondary-foreground"
                  >
                    {field}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : null}

      {highlights?.length ? (
        <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
          {highlights.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {relationships?.length ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {relationships.map((relationship) => (
            <span
              key={relationship}
              className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
            >
              {relationship}
            </span>
          ))}
        </div>
      ) : null}
    </section>
  );
}

