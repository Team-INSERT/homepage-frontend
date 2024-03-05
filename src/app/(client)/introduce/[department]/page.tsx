import Maru from "@/components/@common/Maru/page";

export default function Home({ params }: { params: { department: string } }) {
  return (
    <div>
      {params.department}

      <Maru />
    </div>
  );
}
