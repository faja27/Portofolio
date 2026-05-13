// ─── LANGUAGE SWITCHER (ID / EN) ───────────────────────────────────────────

const TRANSLATIONS = {
  en: {
    // ── NAV ──────────────────────────────────────────────────────────────
    'nav.home':           '~/home',
    'nav.experience':     '~/experience',
    'nav.study':          '~/study',
    'nav.certifications': '~/certifications',
    'nav.projects':       '~/projects',
    'footer.copy':        `© ${new Date().getFullYear()} Mochammad Farhan · Built with passion & caffeine ☕`,

    // ── HOME ─────────────────────────────────────────────────────────────
    'home.greeting':             'Welcome to my portfolio',
    'home.hi':                   "Hi, I'm",
    'home.role':                 '<strong>AI Engineer</strong> &amp; <strong>Educator</strong> · Banten, Indonesia',
    'home.bio':                  'Passionate about <strong>machine learning, deep learning</strong>, and data science to solve real-world problems. Currently pursuing a Master\'s degree in <strong>AI/ML</strong> while actively teaching at multiple institutions and building end-to-end ML pipelines that bridge cutting-edge research with practical applications.',
    'home.info.location.label':  'Location',
    'home.info.location.value':  'Banten, Indonesia',
    'home.info.edu.label':       'Education',
    'home.info.edu.value':       'UNPAM — S2 AI/ML',
    'home.info.focus.label':     'Focus',
    'home.info.focus.value':     'AI & Machine Learning',
    'home.info.passion.label':   'Passion',
    'home.info.passion.value':   'Data Science',
    'home.btn.projects':         'View Projects',
    'home.btn.experience':       'My Experience',
    'home.stat.teaching':        'Years Teaching',
    'home.stat.lecturer':        'Guest Lecturer Roles',
    'home.stat.certs':           'Certifications',
    'home.stat.pub':             'Q1 Publication',
    'home.interests.title':      'Interests & Focus Areas',

    // ── EXPERIENCE ───────────────────────────────────────────────────────
    'exp.label':       'Background',
    'exp.title':       'Work <span class="accent">Experience</span>',
    'exp.desc':        'A journey across education, technology, and AI — shaping classrooms and systems alike.',
    'exp.col.teaching': 'Teaching &amp; Academic',
    'exp.col.industry': 'Industry',
    'exp.col.community':'Community',
    'exp.t1.role':  'Guest Lecturer',
    'exp.t1.desc':  'Delivered lectures covering topics in informatics and technology applications.',
    'exp.t2.role':  'Guest Lecturer',
    'exp.t2.desc':  'Contributed as a guest lecturer in informatics-related subjects, sharing industry and research perspectives.',
    'exp.t3.role':  'Guest Lecturer',
    'exp.t3.desc':  'Provided practical insights on technology and digital systems relevant to business and economics programs.',
    'exp.t4.role':  'Computer Lab Staff',
    'exp.t4.li1':   'Taught computer fundamentals to students directly',
    'exp.t4.li2':   'Handled administrative tasks and computer lab maintenance',
    'exp.t5.role':  'Teacher &amp; IT Staff',
    'exp.t5.li1':   'Taught Information Technology across multiple grade levels',
    'exp.t5.li2':   'Provided technical support for school IT operations',
    'exp.t5.li3':   'Improved classroom effectiveness through technology integration',
    'exp.t5.li4':   'Awarded Best Teacher 2022/2023 &amp; 2023/2024',
    'exp.i1.role':  'Marketing Staff',
    'exp.i1.li1':   'Offered financial products to prospective clients',
    'exp.i1.li2':   'Built strong customer relationships to support sales targets',
    'exp.i2.role':  'Domestic Staff',
    'exp.i2.li1':   'Coordinated domestic travel schedules and logistics',
    'exp.i2.li2':   'Ensured smooth tour operations and client satisfaction',
    'exp.c1.role':  'Contributor — Design &amp; Development',
    'exp.c1.li1':   'Contributed to community-based crypto projects',
    'exp.c1.li2':   'Designed visual assets and supported community activities',

    // ── STUDY ────────────────────────────────────────────────────────────
    'study.label':              'Academic Journey',
    'study.title':              'My <span class="accent">Study</span>',
    'study.desc':               'Formal education in informatics engineering combined with specialized non-formal training in AI and Data Science.',
    'study.formal':             'Formal Education',
    'study.nonformal':          'Non-Formal Education',
    'study.badge.graduate':     'Formal — Graduate',
    'study.badge.undergrad':    'Formal — Undergraduate',
    'study.badge.bootcamp':     'Bootcamp — Advanced',
    'study.badge.masterclass':  'Master Class — On Job Training',
    'study.ongoing':            'Ongoing',
    'study.unpam.degree':       'Master of Informatics Engineering',
    'study.unpam.li1':          'Focus: Artificial Intelligence — Machine Learning',
    'study.unpam.li2':          'Thesis: "Seismic Pattern Exploration Using Machine Learning Based on Spatiotemporal Data in Indonesia" (ongoing)',
    'study.unpam.li3':          'Research area: spatiotemporal data, clustering, LSTM forecasting',
    'study.stmik.degree':       'Bachelor of Informatics Engineering',
    'study.stmik.li1':          'Focus: Software Development &amp; Data Analysis',
    'study.stmik.li2':          'Developed strong foundations in algorithms, databases, and software engineering',
    'study.stmik.li3':          'Published research in Q1 Elsevier journal (Computers &amp; Geosciences)',
    'study.intelligo.degree':   'Bootcamp Artificial Intelligence',
    'study.intelligo.li1':      'Advanced AI program covering modern ML/DL techniques',
    'study.intelligo.li2':      'Online intensive bootcamp with hands-on project assignments',
    'study.bisaai.degree':      'Master Class On Job Training: Data Science',
    'study.bisaai.li1':         'Intensive Data Science on-the-job training program',
    'study.bisaai.li2':         'Verified by LPK &amp; LKP Bisa AI Academy',
    'study.bisaai.li3':         'Covered practical data science workflows and industry tools',

    // ── CERTIFICATIONS ───────────────────────────────────────────────────
    'cert.label':     'Credentials',
    'cert.title':     'Credentials &amp; <span class="accent">Certifications</span>',
    'cert.desc':      'Validated expertise through industry-recognized certifications and training programs.',
    'cert.clickhint': 'Click card to view certificate',

    // ── PROJECTS ─────────────────────────────────────────────────────────
    'proj.label':   'Portfolio',
    'proj.title':   'My <span class="accent">Projects</span>',
    'proj.desc':    'A collection of AI/ML systems, data pipelines, and applied research projects.',
  },

  id: {
    // ── NAV ──────────────────────────────────────────────────────────────
    'nav.home':           '~/beranda',
    'nav.experience':     '~/pengalaman',
    'nav.study':          '~/studi',
    'nav.certifications': '~/sertifikasi',
    'nav.projects':       '~/proyek',
    'footer.copy':        `© ${new Date().getFullYear()} Mochammad Farhan · Dibangun dengan semangat & kopi ☕`,

    // ── HOME ─────────────────────────────────────────────────────────────
    'home.greeting':             'Selamat datang di portofolio saya',
    'home.hi':                   "Halo, saya",
    'home.role':                 '<strong>AI Engineer</strong> &amp; <strong>Pendidik</strong> · Banten, Indonesia',
    'home.bio':                  'Bersemangat dalam <strong>machine learning, deep learning</strong>, dan ilmu data untuk memecahkan masalah nyata. Saat ini sedang menempuh gelar Magister di bidang <strong>AI/ML</strong> sambil aktif mengajar di berbagai institusi dan membangun pipeline ML end-to-end yang menjembatani riset mutakhir dengan aplikasi praktis.',
    'home.info.location.label':  'Lokasi',
    'home.info.location.value':  'Banten, Indonesia',
    'home.info.edu.label':       'Pendidikan',
    'home.info.edu.value':       'UNPAM — S2 AI/ML',
    'home.info.focus.label':     'Fokus',
    'home.info.focus.value':     'AI & Machine Learning',
    'home.info.passion.label':   'Minat',
    'home.info.passion.value':   'Ilmu Data',
    'home.btn.projects':         'Lihat Proyek',
    'home.btn.experience':       'Pengalaman Saya',
    'home.stat.teaching':        'Tahun Mengajar',
    'home.stat.lecturer':        'Peran Dosen Tamu',
    'home.stat.certs':           'Sertifikasi',
    'home.stat.pub':             'Publikasi Q1',
    'home.interests.title':      'Minat & Area Fokus',

    // ── EXPERIENCE ───────────────────────────────────────────────────────
    'exp.label':       'Latar Belakang',
    'exp.title':       'Pengalaman <span class="accent">Kerja</span>',
    'exp.desc':        'Perjalanan melintasi dunia pendidikan, teknologi, dan AI — membentuk kelas dan sistem yang berdampak.',
    'exp.col.teaching': 'Pengajaran &amp; Akademik',
    'exp.col.industry': 'Industri',
    'exp.col.community':'Komunitas',
    'exp.t1.role':  'Dosen Tamu',
    'exp.t1.desc':  'Menyampaikan kuliah yang mencakup topik informatika dan aplikasi teknologi.',
    'exp.t2.role':  'Dosen Tamu',
    'exp.t2.desc':  'Berkontribusi sebagai dosen tamu dalam mata kuliah berbasis informatika, berbagi perspektif industri dan riset.',
    'exp.t3.role':  'Dosen Tamu',
    'exp.t3.desc':  'Memberikan wawasan praktis tentang teknologi dan sistem digital yang relevan dengan program bisnis dan ekonomi.',
    'exp.t4.role':  'Staf Laboratorium Komputer',
    'exp.t4.li1':   'Mengajar dasar-dasar komputer langsung kepada siswa',
    'exp.t4.li2':   'Menangani tugas administratif dan perawatan lab komputer',
    'exp.t5.role':  'Guru &amp; Staf IT',
    'exp.t5.li1':   'Mengajar Teknologi Informasi di berbagai jenjang kelas',
    'exp.t5.li2':   'Memberikan dukungan teknis untuk operasional IT sekolah',
    'exp.t5.li3':   'Meningkatkan efektivitas kelas melalui integrasi teknologi',
    'exp.t5.li4':   'Meraih penghargaan Guru Terbaik 2022/2023 &amp; 2023/2024',
    'exp.i1.role':  'Staf Pemasaran',
    'exp.i1.li1':   'Menawarkan produk keuangan kepada calon nasabah',
    'exp.i1.li2':   'Membangun hubungan pelanggan yang kuat untuk mendukung target penjualan',
    'exp.i2.role':  'Staf Domestik',
    'exp.i2.li1':   'Mengkoordinasikan jadwal perjalanan domestik dan logistik',
    'exp.i2.li2':   'Memastikan kelancaran operasional tur dan kepuasan klien',
    'exp.c1.role':  'Kontributor — Desain &amp; Pengembangan',
    'exp.c1.li1':   'Berkontribusi pada proyek kripto berbasis komunitas',
    'exp.c1.li2':   'Mendesain aset visual dan mendukung kegiatan komunitas',

    // ── STUDY ────────────────────────────────────────────────────────────
    'study.label':              'Perjalanan Akademik',
    'study.title':              'Riwayat <span class="accent">Studi</span>',
    'study.desc':               'Pendidikan formal di bidang teknik informatika dikombinasikan dengan pelatihan non-formal khusus AI dan Data Science.',
    'study.formal':             'Pendidikan Formal',
    'study.nonformal':          'Pendidikan Non-Formal',
    'study.badge.graduate':     'Formal — Pascasarjana',
    'study.badge.undergrad':    'Formal — Sarjana',
    'study.badge.bootcamp':     'Bootcamp — Lanjutan',
    'study.badge.masterclass':  'Master Class — On Job Training',
    'study.ongoing':            'Sedang Berjalan',
    'study.unpam.degree':       'Magister Teknik Informatika',
    'study.unpam.li1':          'Fokus: Kecerdasan Buatan — Machine Learning',
    'study.unpam.li2':          'Tesis: "Eksplorasi Pola Seismik Menggunakan Machine Learning Berbasis Data Spatiotemporal di Indonesia" (sedang berjalan)',
    'study.unpam.li3':          'Area riset: data spatiotemporal, clustering, prediksi LSTM',
    'study.stmik.degree':       'Sarjana Teknik Informatika',
    'study.stmik.li1':          'Fokus: Pengembangan Perangkat Lunak &amp; Analisis Data',
    'study.stmik.li2':          'Membangun fondasi kuat dalam algoritma, basis data, dan rekayasa perangkat lunak',
    'study.stmik.li3':          'Mempublikasikan riset di jurnal Elsevier Q1 (Computers &amp; Geosciences)',
    'study.intelligo.degree':   'Bootcamp Kecerdasan Buatan',
    'study.intelligo.li1':      'Program AI lanjutan yang mencakup teknik ML/DL modern',
    'study.intelligo.li2':      'Bootcamp intensif online dengan tugas proyek langsung',
    'study.bisaai.degree':      'Master Class On Job Training: Data Science',
    'study.bisaai.li1':         'Program pelatihan on-the-job intensif di bidang Data Science',
    'study.bisaai.li2':         'Diverifikasi oleh LPK &amp; LKP Bisa AI Academy',
    'study.bisaai.li3':         'Mencakup alur kerja data science praktis dan alat industri',

    // ── CERTIFICATIONS ───────────────────────────────────────────────────
    'cert.label':     'Kredensial',
    'cert.title':     'Kredensial &amp; <span class="accent">Sertifikasi</span>',
    'cert.desc':      'Keahlian tervalidasi melalui sertifikasi dan program pelatihan yang diakui industri.',
    'cert.clickhint': 'Klik kartu untuk melihat sertifikat',

    // ── PROJECTS ─────────────────────────────────────────────────────────
    'proj.label':   'Portofolio',
    'proj.title':   'Proyek <span class="accent">Saya</span>',
    'proj.desc':    'Kumpulan sistem AI/ML, pipeline data, dan proyek riset terapan.',
  }
};

// ── Core engine ────────────────────────────────────────────────────────────

function getLang() {
  return localStorage.getItem('mf_lang') || 'en';
}

function setLang(lang) {
  localStorage.setItem('mf_lang', lang);
  applyTranslations(lang);
  updateLangButtons(lang);
  document.documentElement.lang = lang;
}

function applyTranslations(lang) {
  const T = TRANSLATIONS[lang] || TRANSLATIONS['en'];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (T[key] !== undefined) el.innerHTML = T[key];
  });
}

function updateLangButtons(lang) {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// Tombol EN/ID sudah diinjeksikan oleh nav.js — cukup wire event di sini
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
  applyTranslations(getLang());
  updateLangButtons(getLang());
});

// ── PATCH: tambahkan terjemahan cert & projects ke TRANSLATIONS ──────────────
(function() {
  const patch = {
    en: {
      // certifications cards
      'cert.featured': 'Featured',
      'cert.genaibiz.name': 'GenAIBIZ',
      'cert.genaibiz.desc': 'Internationally recognized certification validating proficiency in Generative AI fundamentals and business applications, issued by CertNexus — a globally accredited IT certification body recognized across industries.',
      'cert.intelligo.name': 'Bootcamp Artificial Intelligence — Advanced Program',
      'cert.intelligo.score': 'Score: 82.75 · Grade: Good',
      'cert.bisaai.name': 'Master Class On Job Training: Data Science',
      'cert.bisaai.desc': 'Government-verified on-the-job training certification in Data Science, accredited by Lembaga Pelatihan Kerja (LPK) and Lembaga Kursus dan Pelatihan (LKP) Bisa AI Academy, covering end-to-end data science workflows and industry-standard tools.',
      'cert.itpm.name': 'IT Project Management',
      'cert.itpm.desc': 'Professional training certification in Software Project Management Lifecycle and Knowledge Areas, issued by PT Caturindo Sukses Raya — covering project management frameworks, integration management, and professional responsibility with an average assessment score of 80.5.',
      'cert.pub.name': 'Research Publication — Q1 Journal',
      'cert.pub.desc': 'Published peer-reviewed research in Computers &amp; Geosciences, a Q1-ranked international journal indexed in Scopus, demonstrating applied AI/ML in geoscience data analysis.',
      'cert.dta1.name': 'Associate Data Scientist + Python',
      'cert.dta1.desc': 'Official government-issued training certification under the Digital Talent Scholarship 2026 program, organized by Pusat Pengembangan Talenta Digital, Kementerian Komunikasi dan Digital — covering Python programming, data processing, and applied data science fundamentals.',
      'cert.dta2.name': 'Data Scientist Supervisor',
      'cert.dta2.desc': 'Advanced government-issued certification under Digital Talent Scholarship 2026, validating competencies in data modeling strategy, model implementation, and systematic evaluation — issued by Kementerian Komunikasi dan Digital (Komdigi).',
      // projects
      'proj.desc': 'A collection of AI/ML systems, data pipelines, and applied research projects.',
      'proj.filter.all': 'All Projects',
      'proj.filter.completed': 'Completed',
      'proj.filter.inprogress': 'In Progress',
      'proj.filter.python': 'Python',
      'proj.filter.typescript': 'TypeScript',
      'proj.count.suffix': 'projects',
      'proj.status.inprogress': 'In Progress',
      'proj.status.completed': 'Completed',
      'proj.link.code': 'Code',
      'proj.link.soon': 'Coming Soon',
      // project titles & descs
      'proj.seismic.title': 'Seismic Gap Indonesia',
      'proj.seismic.desc': 'A full reproducible pipeline for spatiotemporal seismic gap analysis along the Indonesian subduction zone using KMeans clustering and LSTM-based forecasting.',
      'proj.mysql.title': 'MySQL Learn',
      'proj.mysql.desc': 'An interactive platform designed for mastering MySQL, focusing on efficient database management and advanced query optimization.',
      'proj.aurum.title': 'AurumBot — Gold Trading Bot',
      'proj.aurum.desc': 'An automated trading bot specifically designed for the XAUUSD (Gold) instrument, leveraging algorithmic strategies for systematic trade execution.',
      'proj.asl.title': 'ASL Alphabet Recognition',
      'proj.asl.desc': 'A real-time American Sign Language (ASL) alphabet recognition system using computer vision and deep learning for accessibility applications.',
      'proj.skin.title': 'Classification of Skin Diseases',
      'proj.skin.desc': 'An image classification system to detect and categorize various types of skin conditions using convolutional neural networks.',
      'proj.batik.title': 'Know Your Batik',
      'proj.batik.desc': 'CNN-based batik pattern recognition system that classifies 28 Indonesian batik motifs from images, complete with a web interface for upload, prediction, and batik cultural exploration.',
    },
    id: {
      // certifications cards
      'cert.featured': 'Unggulan',
      'cert.genaibiz.name': 'GenAIBIZ',
      'cert.genaibiz.desc': 'Sertifikasi bertaraf internasional yang memvalidasi kompetensi dalam dasar-dasar Generative AI dan penerapannya di dunia bisnis, diterbitkan oleh CertNexus — badan sertifikasi teknologi informasi yang diakui secara global di berbagai industri.',
      'cert.intelligo.name': 'Bootcamp Kecerdasan Buatan — Program Lanjutan',
      'cert.intelligo.score': 'Nilai: 82.75 · Grade: Good',
      'cert.bisaai.name': 'Master Class On Job Training: Data Science',
      'cert.bisaai.desc': 'Sertifikasi pelatihan berbasis praktik kerja yang diverifikasi oleh lembaga resmi pemerintah — Lembaga Pelatihan Kerja (LPK) dan Lembaga Kursus dan Pelatihan (LKP) Bisa AI Academy — mencakup alur kerja data science secara menyeluruh dan penguasaan alat industri yang relevan.',
      'cert.itpm.name': 'Manajemen Proyek IT',
      'cert.itpm.desc': 'Sertifikasi pelatihan profesional dalam Siklus Hidup dan Area Pengetahuan Manajemen Proyek Perangkat Lunak, diterbitkan oleh PT Caturindo Sukses Raya — mencakup kerangka manajemen proyek, manajemen integrasi, dan tanggung jawab profesional dengan nilai rata-rata asesmen sebesar 80.5.',
      'cert.pub.name': 'Publikasi Riset — Jurnal Q1',
      'cert.pub.desc': 'Mempublikasikan riset peer-reviewed di Computers &amp; Geosciences, jurnal internasional berperingkat Q1 yang terindeks di Scopus, mendemonstrasikan penerapan AI/ML dalam analisis data geosains.',
      'cert.dta1.name': 'Associate Data Scientist + Python',
      'cert.dta1.desc': 'Sertifikat pelatihan resmi pemerintah dalam program Digital Talent Scholarship 2026 yang diselenggarakan oleh Pusat Pengembangan Talenta Digital, Kementerian Komunikasi dan Digital — mencakup pemrograman Python, pengolahan data, dan penerapan dasar-dasar ilmu data.',
      'cert.dta2.name': 'Data Scientist Supervisor',
      'cert.dta2.desc': 'Sertifikasi lanjutan resmi pemerintah dalam program Digital Talent Scholarship 2026 yang memvalidasi kompetensi dalam perancangan strategi model, penerapan pemodelan, dan evaluasi hasil secara sistematis — diterbitkan oleh Kementerian Komunikasi dan Digital (Komdigi).',
      // projects
      'proj.desc': 'Kumpulan sistem AI/ML, pipeline data, dan proyek riset terapan.',
      'proj.filter.all': 'Semua Proyek',
      'proj.filter.completed': 'Selesai',
      'proj.filter.inprogress': 'Dalam Proses',
      'proj.filter.python': 'Python',
      'proj.filter.typescript': 'TypeScript',
      'proj.count.suffix': 'proyek',
      'proj.status.inprogress': 'Dalam Proses',
      'proj.status.completed': 'Selesai',
      'proj.link.code': 'Kode',
      'proj.link.soon': 'Segera Hadir',
      // project titles & descs
      'proj.seismic.title': 'Celah Seismik Indonesia',
      'proj.seismic.desc': 'Pipeline reprodusibel penuh untuk analisis celah seismik spatiotemporal di sepanjang zona subduksi Indonesia menggunakan clustering KMeans dan prediksi berbasis LSTM.',
      'proj.mysql.title': 'MySQL Learn',
      'proj.mysql.desc': 'Platform interaktif yang dirancang untuk menguasai MySQL, berfokus pada manajemen database yang efisien dan optimasi kueri tingkat lanjut.',
      'proj.aurum.title': 'AurumBot — Bot Trading Emas',
      'proj.aurum.desc': 'Bot trading otomatis yang dirancang khusus untuk instrumen XAUUSD (Emas), memanfaatkan strategi algoritmik untuk eksekusi perdagangan yang sistematis.',
      'proj.asl.title': 'Pengenalan Alfabet ASL',
      'proj.asl.desc': 'Sistem pengenalan alfabet American Sign Language (ASL) secara real-time menggunakan computer vision dan deep learning untuk aplikasi aksesibilitas.',
      'proj.skin.title': 'Klasifikasi Penyakit Kulit',
      'proj.skin.desc': 'Sistem klasifikasi gambar untuk mendeteksi dan mengkategorikan berbagai jenis kondisi kulit menggunakan jaringan saraf konvolusional.',
      'proj.batik.title': 'Know Your Batik',
      'proj.batik.desc': 'Sistem pengenalan motif batik berbasis CNN yang mengklasifikasikan 28 motif batik Indonesia dari gambar, dilengkapi antarmuka web untuk upload, prediksi, dan eksplorasi budaya batik.',
    }
  };
  // merge into existing TRANSLATIONS
  Object.keys(patch).forEach(lang => {
    Object.assign(TRANSLATIONS[lang], patch[lang]);
  });
})();
