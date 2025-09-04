type User = {
  firstName: string;
  lastName: string;
};

export default function FormatName() {
  // Khai báo đối tượng user
  const user: User = {
    firstName: "Nguyễn Văn",
    lastName: "Nam",
  };

  // Hàm formatName
  function formatName(user: User): string {
    return `${user.firstName} ${user.lastName}`;
  }

  return (
    <div>
      <hr />
      <h1>Bài 5</h1>
      <h3>Họ và tên:</h3>
      <p>{formatName(user)}</p>
    </div>
  );
}
