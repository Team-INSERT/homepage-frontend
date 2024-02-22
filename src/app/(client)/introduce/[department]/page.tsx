export default function Home({ params }: { params: { department: string } }) {
  return <div>{params.department}</div>;
}
