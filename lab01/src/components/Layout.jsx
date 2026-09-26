import { Link, useLocation } from 'react-router-dom';

export default function Layout({ children }) {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Dashboard' },
    { path: '/directory', label: 'Team Directory' },
    { path: '/manage', label: 'Add Employee' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-6 px-4 sm:py-11 sm:px-10">
      <div className="max-w-[1200px] mx-auto">
        <header className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b pb-4">
            <div>
              <div className="text-[13px] tracking-wider uppercase text-slate-500 font-bold mb-1">
                Assignment 1 · React SPA
              </div>
              <h1 className="text-3xl font-extrabold text-slate-900">
                Team Directory App
              </h1>
            </div>
            <nav className="mt-4 sm:mt-0 flex gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium ${
                    location.pathname === link.path
                      ? 'text-blue-600 underline underline-offset-4'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <main>{children}</main>
      </div>
    </div>
  );
}
