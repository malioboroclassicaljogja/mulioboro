# Malioboro Classical Jogja - Website Komunitas

Website resmi Malioboro Classical Jogja - Komunitas sosial, seni, dan budaya di Jalan Malioboro, Yogyakarta sejak tahun 1992.

## 🎨 Features

- ✨ Modern dark theme dengan desain professional
- 🎭 Hero section dengan background komunitas asli
- 📸 Interactive gallery dengan lightbox
- 🎬 Events & Activities section
- 👥 Team structure display
- 💬 Contact form yang fungsional
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🚀 SEO optimized
- ⚡ Fast loading dengan Vite
- 🎯 Smooth animations & transitions

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Package Manager**: npm
- **Hosting**: Vercel

## 📦 Installation

### 1. Clone Repository
```bash
git clone https://github.com/malioboroclassicaljogja/mulioboro.git
cd mulioboro
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

## 🚀 Deployment

### Deploy ke Vercel (Recommended)

1. **Login ke Vercel**
   ```bash
   npm install -g vercel
   vercel login
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Production URL**: Vercel akan memberikan URL domain Anda

### Atau Via GitHub

1. Push code ke repository
2. Buka [vercel.com](https://vercel.com)
3. Import repository
4. Deploy otomatis!

## 📁 Project Structure

```
mulioboro/
├── src/
│   ├── components/
│   │   ├── MalioboroClassicalJogja.jsx
│   │   └── sections/
│   │       ├── HeroSection.jsx
│   │       ├── AboutSection.jsx
│   │       ├── VisionSection.jsx
│   │       ├── EventsSection.jsx
│   │       ├── GallerySection.jsx
│   │       ├── TeamSection.jsx
│   │       ├── ContactSection.jsx
│   │       ├── QuoteSection.jsx
│   │       └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## 🎯 Menggunakan Foto Komunitas

Untuk menambah/mengganti foto di website:

### 1. Upload Foto ke Google Drive
- Upload foto ke folder shared: [MCJ Photos](https://drive.google.com/drive/folders/1TAcU2C5U-wbjkMMBJTWx38lgUYosjNXq?usp=sharing)
- Pastikan folder bersifat public/shareable

### 2. Get Share Link
- Klik kanan foto → Get link
- Ubah permission ke "Anyone with the link"
- Copy file ID dari URL

### 3. Format URL untuk Website
```
https://drive.google.com/uc?export=view&id=FILE_ID
```

### 4. Update di Component
Edit file di `src/components/sections/` dan ganti URL gambar:

```jsx
<img
  src="https://drive.google.com/uc?export=view&id=YOUR_FILE_ID"
  alt="Description"
/>
```

## 📝 Customization

### Mengubah Social Media Links
Edit `src/components/sections/Footer.jsx`:
```jsx
<a href="https://instagram.com/your-handle" target="_blank">
  Instagram
</a>
```

### Mengubah Contact Info
Edit `src/components/sections/ContactSection.jsx`:
```jsx
<a href="https://wa.me/62812345678">+62 812 345 678</a>
```

### Menambah Event Baru
Edit `src/components/sections/EventsSection.jsx`:
```jsx
const events = [
  {
    date: 'Your Date',
    title: 'Event Title',
    description: 'Event Description',
    category: 'Category'
  },
  // ...
];
```

## 🌐 Domain Custom

Untuk menambahkan domain custom:

1. Di Vercel Dashboard, buka project
2. Settings → Domains
3. Add domain Anda
4. Update DNS records sesuai instruksi Vercel

## 📧 Contact Form

Contact form saat ini menampilkan pesan sukses. Untuk integrasi backend:

1. Setup backend API (Node.js, Python, dll)
2. Update endpoint di `ContactSection.jsx`:
   ```jsx
   const response = await fetch('YOUR_API_ENDPOINT', {
     method: 'POST',
     body: JSON.stringify(formData)
   });
   ```

## 🔍 SEO

Website sudah dioptimasi untuk SEO dengan:
- Meta tags yang lengkap
- Open Graph tags
- Twitter Card tags
- Structured headings
- Semantic HTML

Untuk better rankings:
1. Add sitemap.xml
2. Submit ke Google Search Console
3. Maintain regular content updates

## 📱 Mobile Optimization

Website sudah fully responsive. Test di berbagai device:
- Desktop (1920px, 1440px, 1024px)
- Tablet (768px, 834px)
- Mobile (375px, 414px)

## 🐛 Troubleshooting

### Port sudah terpakai
```bash
npm run dev -- --port 3001
```

### Build error
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Image tidak muncul
Pastikan link Google Drive:
1. File bersifat public
2. Format URL benar: `https://drive.google.com/uc?export=view&id=FILE_ID`

## 📄 License

© 2024 Malioboro Classical Jogja. All rights reserved.

## 🤝 Contributing

Untuk kontribusi atau saran:
1. Fork repository
2. Buat branch baru
3. Commit changes
4. Push dan buat Pull Request

## 📞 Support

- 📧 Email: info@mcjogja.com
- 💬 WhatsApp: [Link WhatsApp Group]
- 🔗 Instagram: [@malioboro_classical_jogja]

---

**Made with ❤️ by Malioboro Classical Jogja Community**