export default function Home({ params }: { params: { id: number } }) {
  return <div>{params.id} 번째 게시글</div>;
}
