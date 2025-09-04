type User = {
  name: string;
  sex: string;
  birthday: string;
  email: string;
  address: string;
};
export default function UserInfo() {
  const UserInfo: User = {
    name: "Nguyễn Văn A",
    sex: "Nam",
    birthday: "01/01/2000",
    email: "nva@gmail.com",
    address: "Hà Nội",
  };
  return (
    <>
      <hr />
      <h1>Bài 3</h1>
      <h1>Thông tin cá nhân</h1>
      <ul>
        <li>Họ và tên: {UserInfo.name}</li>
        <li>Giới tính: {UserInfo.sex}</li>
        <li>Ngày sinh: {UserInfo.birthday}</li>
        <li>Email: {UserInfo.email}</li>
        <li>Địa chỉ: {UserInfo.address}</li>
      </ul>
    </>
  );
}
