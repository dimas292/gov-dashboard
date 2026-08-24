export const stats = [
  { label: "Total Ticket", value: "128", detail: "Bulan ini", tone: "primary" },
  { label: "Baru", value: "32", detail: "Perlu verifikasi", tone: "warning" },
  { label: "Diproses", value: "71", detail: "Sedang ditangani", tone: "info" },
  { label: "Selesai", value: "25", detail: "Sudah ditutup", tone: "success" },
];

export const categorySummary = [
  { label: "MBG", value: 46 },
  { label: "Infrastruktur", value: 34 },
  { label: "Umum", value: 20 },
];

export const statusSummary = [
  { label: "Baru", value: 32 },
  { label: "Diproses", value: 71 },
  { label: "Selesai", value: 25 },
];

export const trend = {
  labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu"],
  values: [18, 24, 21, 32, 28, 41, 37, 52],
};

export const tickets = [
  {
    id: "#GA-1028",
    reporter: "Siti Aminah",
    summary: "Distribusi MBG belum merata di sekolah.",
    category: "MBG",
    status: "Baru",
    date: "24 Agu 2026",
  },
  {
    id: "#GA-1027",
    reporter: "Budi Santoso",
    summary: "Jalan lingkungan rusak dan berlubang.",
    category: "Infrastruktur",
    status: "Diproses",
    date: "24 Agu 2026",
  },
  {
    id: "#GA-1026",
    reporter: "Rina Kurnia",
    summary: "Permintaan informasi jadwal bantuan warga.",
    category: "Umum",
    status: "Diproses",
    date: "23 Agu 2026",
  },
  {
    id: "#GA-1025",
    reporter: "Ahmad Fauzi",
    summary: "Penerima MBG perlu pembaruan data.",
    category: "MBG",
    status: "Selesai",
    date: "22 Agu 2026",
  },
  {
    id: "#GA-1024",
    reporter: "Dewi Lestari",
    summary: "Lampu jalan mati selama tiga hari.",
    category: "Infrastruktur",
    status: "Baru",
    date: "22 Agu 2026",
  },
];

export const activities = [
  { text: "Ticket #GA-1028 masuk kategori MBG", time: "5 menit lalu", tone: "warning" },
  { text: "Ticket #GA-1026 mulai diproses instansi terkait", time: "18 menit lalu", tone: "primary" },
  { text: "Ticket #GA-1019 selesai ditangani", time: "1 jam lalu", tone: "success" },
];
