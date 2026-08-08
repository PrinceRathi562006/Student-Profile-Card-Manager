import { useState } from "react";
import { Eye, EyeOff, BookOpen, Code2 } from "lucide-react";

const StudentCard = ({ student = {}, buttonColor = "#2563EB" }) => {
  const [showDetails, setShowDetails] = useState(false);
  const skills = student.skills ?? [];

  const softBg = `${buttonColor}12`;
  const accentBorder = `${buttonColor}33`;
  const softBadge = `${buttonColor}1A`;

  return (
    <div className="w-full rounded-[22px] border border-slate-200 bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.06)]">
      <div className="flex justify-center pt-1">
        <div
          className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-full ring-4 ring-white shadow-[0_8px_22px_rgba(15,23,42,0.08)]"
          style={{ backgroundColor: `${buttonColor}1A` }}
        >
          <img
            src={student.image}
            alt={student.name || "Student profile"}
            className="h-full w-full rounded-full border-4 border-white object-cover object-center"
          />
        </div>
      </div>

      <div className="px-2 pt-4 text-center">
        <h2 className="text-2xl font-bold leading-tight text-slate-900">
          {student.name || "Unknown Student"}
        </h2>

        <p className="mt-2 text-base text-slate-500">
          Roll No:{" "}
          <span className="font-bold" style={{ color: buttonColor }}>
            {student.rollNo || "N/A"}
          </span>
        </p>

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-200"
          style={{
            border: `1.5px solid ${buttonColor}`,
            backgroundColor: showDetails ? buttonColor : "#ffffff",
            color: showDetails ? "#ffffff" : buttonColor,
            boxShadow: showDetails ? `0 8px 18px ${buttonColor}30` : "none",
          }}
        >
          {showDetails ? <EyeOff size={18} /> : <Eye size={18} />}
          {showDetails ? "Hide Details" : "Show Details"}
        </button>

        {showDetails && (
          <div
            className="mt-4 rounded-2xl border p-4 text-left"
            style={{
              backgroundColor: softBg,
              borderColor: accentBorder,
            }}
          >
            <div className="flex items-start gap-3">
              <div
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                style={{ backgroundColor: softBadge, color: buttonColor }}
              >
                <BookOpen size={16} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-slate-800">Course</p>
                <p className="mt-1 text-sm text-slate-700">
                  {student.course || "Not available"}
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-start gap-3">
              <div
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                style={{ backgroundColor: softBadge, color: buttonColor }}
              >
                <Code2 size={16} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-slate-800">Skills</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {skills.length ? (
                    skills.map((skill, index) => (
                      <span
                        key={`${student.id}-${skill}-${index}`}
                        className="rounded-full border px-2.5 py-1 text-[11px] font-medium"
                        style={{
                          backgroundColor: softBadge,
                          borderColor: accentBorder,
                          color: buttonColor,
                        }}
                      >
                        {skill}
                      </span>
                    ))
                  ) : (
                    <span className="text-sm text-slate-500">
                      No skills listed
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentCard;
