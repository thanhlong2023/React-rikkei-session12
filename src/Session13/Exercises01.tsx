/**Tạo Class component đặt tên là Exercises01.tsx, khởi tạo một state lấy tên của bản thân
Truy cập vào state và render dữ liệu ra ngoài giao diện */
import { useState } from "react";

export default function Exercises01() {
  const [name] = useState<string>("Nguyễn Văn A");
  return <div>Họ và tên: {name}</div>;
}
