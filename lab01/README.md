# `lab-day-01-start` — โปรเจกต์ตั้งต้นของแล็บบ่าย วันที่ 1

## เกณฑ์ให้คะแนนวันนี้

**Lab A (pass/fail — ต้องผ่านครบทุกข้อ = ได้เต็ม 60% ของวันนี้ ไม่ผ่านแม้ข้อเดียว = 0)**

**Lab B (คุณภาพ — คิดเป็นสัดส่วนใน 40% ที่เหลือของวันนี้)**

- ความถูกต้องของ variant/theming ตาม props ที่เพิ่ม — **50%**
- โค้ดสะอาด ไม่ซ้ำซ้อน (DRY) — **25%**
- ตั้งชื่อ props/component สื่อความหมาย — **25%**

---

## ภาพโจทย์

`mockup-team-directory.png` — หน้าตาที่ต้องทำให้ได้ (ต้นฉบับคือ `mockup-team-directory.html` เปิดในเบราว์เซอร์เพื่อซูมดูรายละเอียดได้)

---

## ไฟล์ที่ต้องเขียน

```
src/
├── App.jsx                 ← ลบของเดิมทิ้ง แล้วประกอบ Layout + grid ของ ProfileCard
├── components/
│   ├── Layout.jsx          ← header + container  (ต้องใช้ children)
│   ├── ProfileCard.jsx     ← การ์ดพนักงาน 1 ใบ
│   ├── Badge.jsx           ← ป้ายสถานะ  (ต้องรับ children)
│   └── Avatar.jsx          ← วงกลมตัวอักษรย่อชื่อ
└── data/users.js           ← มีให้แล้ว 6 คน ไม่ต้องแก้
```

### Lab

- [x] ทุกอย่างขับด้วย `users.js` array เดียว — ไม่มีชื่อ/ตำแหน่ง hardcode ใน JSX
- [x] ใช้ `children` อย่างน้อย 1 ที่ (`<Badge>` และ/หรือ `<Layout>`)
- [x] Tailwind grid 3 คอลัมน์บนจอใหญ่ / 1 คอลัมน์บนมือถือ
- [x] `Avatar` แสดงตัวอักษรย่อถูกต้องทุกคน (ตัวแรกของชื่อ พิมพ์ใหญ่)
- [x] คนที่ `isLead: true` การ์ดเด่นกว่าใบอื่น
- [x] Console ไม่มี error และไม่มี warning เรื่อง `key`
- [x] `<Badge variant="online" | "away" | "offline">` สีต่างกันจริง (เขียว/เหลือง/เทา)
- [x] เพิ่ม `variant="lead"` (ม่วง) ได้โดยแก้แค่ **map เดียว** ไม่แตะ JSX ที่เรียก `<Badge>` ที่อื่น
- [x] `<Avatar size="sm" | "md" | "lg">` ขนาดเปลี่ยนจริง
- [x] `<Avatar color="blue" | "purple" | "emerald">` สีเปลี่ยนจริง
- [x] `ProfileCard` ส่ง `size="lg"` + `color="purple"` เฉพาะคนที่ `isLead: true`

---

## คำอธิบายเพิ่มเติม (Twists & Best Practices)

### Twist ข้อ 3: ความต่างระหว่าง `children` กับ prop เช่น `text`
- **การใช้ prop `text` (เช่น `<Badge text="ออนไลน์" />`)**: บังคับให้ส่งได้เฉพาะค่าชนิดสตริงหรือค่าเดี่ยว ทำให้คอมโพเนนต์ขาดความยืดหยุ่น หากในอนาคตต้องการใส่ icon จุดสถานะ, ข้อความตัวหนา/เอียง, หรือแทรก JSX element อื่นๆ เข้าไปด้านในจะไม่สามารถทำได้
- **การใช้ `children` (เช่น `<Badge variant="online">ออนไลน์</Badge>`)**: เป็นไปตามหลักการ **Component Composition** ใน React ทำให้ `<Badge>` กลายเป็น wrapper component ที่ยืดหยุ่นสูง สามารถห่อหุ้มสิ่งใดก็ได้ตามที่ caller ต้องการ โดยที่คอมโพเนนต์ Badge ทำหน้าที่เพียงจัดการเรื่อง visual style / variant เท่านั้น

### Twist ข้อ 2: `ProfileCard.jsx` กระชับไม่เกิน 35 บรรทัด
- แยกย่อยการทำงานด้านการแสดงผล avatar และ badge ออกเป็น `<Avatar />` และ `<Badge />` อย่างเป็นสัดส่วน (Single Responsibility Principle) ทำให้โค้ดของ `ProfileCard` มีความยาวเพียง 33 บรรทัด สะอาด และอ่านเข้าใจง่าย

### Twist ข้อ 4 & B1: Theming และ Variant Map
- สีและสไตล์ทั้งหมดของ Badge รวมอยู่ใน object เดียว `variantClasses` ใน `Badge.jsx` ทำให้ขยายการรองรับ variant ใหม่ๆ (เช่น `lead`) ได้ง่าย โดยแก้ไขเพียง object เดียว ไม่ต้องใช้ if/else หรือ nested ternary ใน JSX
