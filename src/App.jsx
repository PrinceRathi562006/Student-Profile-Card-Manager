import Navbar from "./components/Navbar";
import StudentGrid from "./components/StudentGrid";
import students from "./data/students";

function App() {
  return (
    <div className="min-h-screen bg-[#edf3f7] text-slate-800">
      <Navbar totalStudents={students.length} />

      <main className="mx-auto max-w-7xl px-4 pb-10 pt-6 sm:px-6 lg:px-8">
        <StudentGrid students={students} />
      </main>
    </div>
  );
}

export default App;
