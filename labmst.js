import React, { useState } from "react";

const CourseList = () => {
  // Sample data
  const [courses] = useState([
    { id: 1, name: "Computer Science", duration: "4 Years" },
    { id: 2, name: "Mechanical Engineering", duration: "4 Years" },
    { id: 3, name: "Civil Engineering", duration: "4 Years" },
    { id: 4, name: "Business Administration", duration: "3 Years" },
    { id: 5, name: "Data Science", duration: "2 Years" },
  ]);

  const [search, setSearch] = useState("");
  const [filteredCourses, setFilteredCourses] = useState(courses);

  // Function to filter courses by name
  const handleSearch = () => {
    const results = courses.filter(course =>
      course.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredCourses(results);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>College Courses</h2>

      {/* Search Box */}
      <input
        type="text"
        placeholder="Search course by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginRight: "10px", padding: "5px" }}
      />
      <button onClick={handleSearch}>Search</button>

      {/* Table */}
      <table border="1" cellPadding="10" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Course Name</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <tr key={course.id}>
                <td>{course.id}</td>
                <td>{course.name}</td>
                <td>{course.duration}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No courses found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CourseList;
