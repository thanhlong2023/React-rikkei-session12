import { useState } from "react";
/**Tạo một class component đặt tên là Exercise03.tsx, bên trong component này tạo một state có giá trị khởi tạo là một mảng users
Mỗi đối tượng user sẽ gồm các trường: id, name, address
Sử dụng hàm map() để render danh sách users ra ngoài giao diện */

export default function Exercises03() {
  const [users] = useState([
    { id: 1, name: "Nguyen Van A", address: "HCM" },
    { id: 2, name: "Tran Thi B", address: "HN" },
    { id: 3, name: "Le Van C", address: "DN" },
  ]);
  return (
    <div>
      <h2>Danh sách Users</h2>
      <table border={1} cellPadding={8} cellSpacing={0}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Họ và tên</th>
            <th>Địa chỉ</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
