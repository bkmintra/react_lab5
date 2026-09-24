export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-11 px-6 sm:px-10">
      <div className="max-w-[1200px] mx-auto">
        <header className="text-center mb-8">
          <div className="text-[13px] tracking-wider uppercase text-slate-500 font-bold mb-2.5">
            Mockup · Lab Day 1
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 mb-1.5">
            ทีมของเรา
          </h1>
          <p className="text-[15px] text-slate-500">
            การ์ดทุกใบมาจาก{' '}
            <code className="bg-slate-200/70 text-slate-800 px-1.5 py-0.5 rounded text-sm font-mono">
              src/data/users.js
            </code>{' '}
            array เดียว — เพิ่มคนที่ 7 ในไฟล์นั้นแล้วการ์ดต้องโผล่เอง
          </p>
        </header>

        <main>{children}</main>

        <footer className="mt-8 text-xs text-slate-400 text-center">
          Avatar = ตัวอักษรแรกของชื่อ · Badge = children ไม่ใช่ prop ชื่อ text · การ์ดหัวหน้าทีม = ขอบหนา + วงกลมใหญ่กว่า + ป้ายม่วงเพิ่ม 1 ใบ · จอเล็กเหลือ 1 คอลัมน์
        </footer>
      </div>
    </div>
  )
}
