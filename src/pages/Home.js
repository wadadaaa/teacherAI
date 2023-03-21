import DefaultLayout from "../layouts/DefaultLayout";
import Generate from "../components/Generate/index.js";
import Disclaimer from "../components/Disclamer/index.js";

const Home = () => {
  return (
    <main className="container mt-32 mb-16 flex flex-col items-center justify-center gap-14">
      <Disclaimer />
      <Generate />
    </main>
  );
};

export default Home;

Home.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>;
