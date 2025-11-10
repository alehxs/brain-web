// src/app/components/thrusts/ResearchThrustMatrix.tsx
import Image from "next/image";

export type ThrustColumn = {
  id: string;
  label: string;
  colorClass: string;
};

export type LabRow = {
  name: string;
  thrustIds: string[];
};

type ResearchThrustMatrixProps = {
  universityName: string;
  logoSrc: string;
  logoAlt: string;
  columns: ThrustColumn[];
  labs: LabRow[];
};

export function ResearchThrustMatrix({
  universityName,
  logoSrc,
  logoAlt,
  columns,
  labs,
}: ResearchThrustMatrixProps) {
  return (
    <div className="rounded-xl bg-white shadow-md border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-slate-50 border-b border-slate-200">
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-16 flex-shrink-0">
            <Image
              src={logoSrc}
              alt={logoAlt}
              fill
              className="object-contain"
            />
          </div>
          <h2 className="text-xl font-semibold text-slate-900">
            {universityName}
          </h2>
        </div>
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
          Research Thrusts
        </div>
      </div>

      {/* Compact table - fits without scrolling */}
      <div className="overflow-hidden">
        <table className="w-full border-collapse table-fixed">
          <colgroup>
            <col className="w-[28%]" />
            {columns.map((col) => (
              <col key={col.id} className="w-[6%]" />
            ))}
          </colgroup>
          <thead>
            <tr>
              <th className="bg-white border-b-2 border-r border-slate-300 px-3 py-2 text-left">
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-700">
                  Laboratories
                </span>
              </th>
              <th
                colSpan={columns.length}
                className="border-b-2 border-slate-300 px-2 py-1 text-center"
              >
                <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-600">
                  Research Thrusts
                </span>
              </th>
            </tr>
            <tr>
              <th className="bg-slate-50 border-b border-r border-slate-300"></th>
              {columns.map((col) => (
                <th
                  key={col.id}
                  className="border-b border-l border-slate-200 bg-slate-50 px-1 py-2"
                >
                  <div className="flex h-full items-end justify-center">
                    <span
                      className="text-[10px] font-medium text-slate-700 leading-tight"
                      style={{
                        writingMode: "vertical-rl",
                        transform: "rotate(180deg)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {col.label}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {labs.map((lab, idx) => (
              <tr
                key={lab.name}
                className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"}
              >
                <td className="border-r border-slate-200 px-3 py-2 text-xs font-medium text-slate-900">
                  {lab.name}
                </td>
                {columns.map((col) => {
                  const isActive = lab.thrustIds.includes(col.id);
                  return (
                    <td
                      key={col.id}
                      className="border-l border-slate-200 px-1 py-2 text-center"
                    >
                      {isActive && (
                        <div className="flex justify-center">
                          <div
                            className={`h-4 w-4 rounded ${col.colorClass}`}
                          />
                        </div>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}