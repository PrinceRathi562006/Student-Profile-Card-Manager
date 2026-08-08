import StudentCard from "./Card";

const StudentGrid = ({ students = [] }) => {
  return (
    <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {students.map((student, index) => (
        <StudentCard
          key={student.id ?? index}
          student={student}
          buttonColor={student.buttonColor || "#2563EB"}
        />
      ))}
    </div>
  );
};

export default StudentGrid;
