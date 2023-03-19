const DefaultLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-green-500 p-4 text-center text-white">
        <h1> HEADER - TeacherAI - Lesson Plan Assistant</h1>
      </header>
      <main className="flex-grow p-8">{children}</main>
      <footer className="bg-indigo-400 p-4 text-center">
        <p>© 2023 TeacherAI. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default DefaultLayout;
