import ButtonSession from "../Session16/ButtonSession";
import ClickCounter from "../Session16/ClickCounter";
import LoginStatus from "../Session16/LoginStatus";
import ShoppingCart from "../Session16/ShoppingCart";
import SubjectList from "../Session16/SubjectList";
import ThemeSwitcher from "../Session16/ThemeSwitcher";
import UserForm from "../Session16/UserForm";

export default function Session16() {
  return (
    <div>
      <h1>Session 16</h1>
      <p>Bài 1</p>
      <SubjectList />
      <p>Bài 2</p>
      <LoginStatus />
      <p>Bài 3</p>
      <ButtonSession />
      <p>Bài 4</p>
      <ClickCounter />
      <p>Bài 5</p>
      <UserForm />
      <p>Bài 6</p>
      <ThemeSwitcher />
      <p>Bài 7</p>
      <ShoppingCart />
    </div>
  );
}
