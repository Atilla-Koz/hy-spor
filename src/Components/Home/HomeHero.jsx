export default function HomeHero() {
  return (
    <div className="bg-custom-bg bg-cover bg-center h-screen flex flex-col  justify-center">
      <h1 className="text-4xl font-bold p-4 stroke-orange text-black">
        Welcome to Tailwind CSS
      </h1>
      <h2 className="text-white text-2xl font-bold p-4">
        & UNITE YOUR STRENGTH
      </h2>

      <p className="text-white  font-bold p-4">
        lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </p>

      <button className="bg-custom-orange text-white p-2 m-4 rounded-lg w-[150px]">
        JOİN US >
      </button>
    </div>
  );
}
