type ChildrenProps = {
  userName: string;
};

export default function Children({ userName }: ChildrenProps) {
  return <div>Children: {userName}</div>;
}
