import { GraduationCap, Users } from "lucide-react";

const Navbar = ({ totalStudents = 0 }) => {
  return (
    <nav className="bg-[#0d1d34] text-white shadow-[0_8px_24px_rgba(15,23,42,0.18)]">
      <div className="mx-auto max-w-[1280px] px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3 sm:gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#2d5ee8] shadow-[0_6px_20px_rgba(45,94,232,0.45)] sm:h-12 sm:w-12">
              <GraduationCap className="h-6 w-6 text-white" strokeWidth={2.2} />
            </div>

            <h1 className="truncate text-base font-extrabold tracking-tight sm:text-2xl lg:text-3xl">
              Student Profile Card Manager
            </h1>
          </div>

          <div className="hidden items-center gap-2 rounded-xl border border-[#22345a] bg-[#122544] px-2.5 py-1.5 shadow-md sm:flex sm:gap-3 sm:px-3 sm:py-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2d5ee8]/20 sm:h-10 sm:w-10">
              <Users
                className="h-4 w-4 text-white sm:h-5 sm:w-5"
                strokeWidth={2.2}
              />
            </div>

            <div className="min-w-0 text-left">
              <p className="text-[8px] font-semibold uppercase tracking-[0.15em] text-slate-300 sm:text-[10px]">
                Total Students
              </p>
              <p className="mt-0.5 text-lg font-bold leading-none text-white sm:text-2xl">
                {totalStudents}
              </p>
            </div>
          </div>
        </div>

        <p className="mt-3 text-center text-sm text-slate-300 sm:text-base">
          Manage and view student profiles with ease
        </p>

        <div className="mt-3 flex justify-center sm:hidden">
          <div className="flex items-center gap-2 rounded-xl border border-[#22345a] bg-[#122544] px-2.5 py-1.5 shadow-md">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2d5ee8]/20">
              <Users className="h-4 w-4 text-white" strokeWidth={2.2} />
            </div>

            <div className="min-w-0 text-left">
              <p className="text-[8px] font-semibold uppercase tracking-[0.15em] text-slate-300">
                Total Students
              </p>
              <p className="mt-0.5 text-lg font-bold leading-none text-white">
                {totalStudents}
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
