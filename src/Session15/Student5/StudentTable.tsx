// src/components/StudentTable.tsx

import React from "react";
import type { Student } from "./type";

interface StudentTableProps {
  students: Student[];
}

const StudentTable: React.FC<StudentTableProps> = ({ students }) => {
  return (
    <div className="student-management-container">
      <h2>Quản lý sinh viên</h2>

      <div className="table-header-controls">
        <button className="add-student-btn">Thêm mới sinh viên</button>
        <div className="search-sort-group">
          <select className="sort-dropdown">
            <option>Sắp xếp theo tuổi</option>
          </select>
          <input
            type="text"
            placeholder="Tìm kiếm theo tên hoặc email"
            className="search-input"
          />
        </div>
      </div>

      <table className="student-table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Mã sinh viên</th>
            <th>Tên sinh viên</th>
            <th>Ngày sinh</th>
            <th>Email</th>
            <th>Trạng thái</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.studentId}>
              <td>{student.stt}</td>
              <td>{student.studentId}</td>
              <td>{student.name}</td>
              <td>{student.dob}</td>
              <td>{student.email}</td>
              <td>
                <span
                  className={`status-${student.status.replace(/\s/g, "-")}`}
                >
                  {student.status}
                </span>
              </td>
              <td className="actions">
                <button className="action-btn-detail">Chi tiết</button>
                <button className="action-btn-edit">Sửa</button>
                <button className="action-btn-delete">Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        {/* Placeholder for pagination controls */}
        <span className="pagination-text">Danh sách sinh viên</span>
      </div>
    </div>
  );
};

export default StudentTable;
