import { useState } from "react";

type Info = {
  id: number;
  name: string;
  dob: string;
  address: string;
};

export default function Exercises02() {
  const [info] = useState<Info>({
    id: 1,
    name: "Cao Thành Long",
    dob: "123",
    address: "HCM",
  });
  return (
    <div>
      <h1>Exercises02</h1>
      <p>ID: {info.id}</p>
      <p>Họ và tên: {info.name}</p>
      <p>Ngày sinh: {info.dob}</p>
      <p>Địa chỉ: {info.address}</p>
    </div>
  );
}
