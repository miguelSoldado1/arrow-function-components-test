import { ClientComponent1 } from "@/components";

const Home = () => {
  return (
    <div className="border text-center p-8 m-4">
      Server Component
      <ClientComponent1 />
    </div>
  );
};

export default Home;
