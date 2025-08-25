export default function TeacherDashboard() {
  const subjects = ["Mathematics", "English", "Biology", "Geography", "History"];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">
        🎓 Student Dashboard
      </h1>

      <p className="mb-4 text-gray-700">
        Welcome back, <span className="font-semibold">Student</span>!  
        Here are your registered subjects:
      </p>

      <ul className="list-disc pl-6 space-y-1 text-gray-800">
        {subjects.map((subj) => (
          <li key={subj} className="hover:text-blue-500 cursor-pointer">
            {subj}
          </li>
        ))}
      </ul>

      <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        View Grades
      </button>
    </div>
  );
}
