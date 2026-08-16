import Link from 'next/link';
import { products } from '../data/products';

export const metadata = {
  title: "Vape Shop Gurugram | #1 Store for Premium Disposable Vapes & Pods Gurgaon",
  description: "Welcome to Vape Shop Gurugram. We offer the best disposable vapes, e-liquids, and nic salts with fast delivery across Gurugram (Gurgaon). Shop top brands like Elf Bar, IGET, and Terra.",
};

export default function Home() {
  const elfBarProducts = products.filter(p => p.category === 'ELF BAR VAPE');
  const igetProducts = products.filter(p => p.category === 'IGET VAPE');
  const nicSaltsProducts = products.filter(p => p.category === 'NIC SALTS VAPE');

  const renderGrid = (items) => (
    <div className="product-grid">
      {items.map((product) => (
        <div key={product.slug} className="product-card" style={{ display: 'flex', flexDirection: 'column' }}>
          <Link href={`/product/${product.slug}`} style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}>
            <div className="card-image-wrap">
              <img src={product.image.startsWith('/') ? product.image : '/' + product.image} alt={product.title} />
              <div className="card-overlay"><button className="quick-add-btn">VIEW PRODUCT</button></div>
            </div>
            <div className="card-details">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-price">{product.price}</p>
            </div>
          </Link>
          <div style={{ padding: '0 15px 15px' }}>
            <a 
              href={`https://wa.me/919394309383?text=${encodeURIComponent(`*NEW ORDER - Vape Shop Gurugram*\n----------------------------------------\n*Product:* ${product.title}\n*Price:* ${product.price}\n----------------------------------------\n\nPlease confirm availability and delivery details. Thank you!`)}`} 
              target="_blank" 
              rel="noreferrer" 
              className="whatsapp-buy-btn"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" style={{ marginRight: '8px' }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
              Buy on WhatsApp
            </a>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <img src="/assets/img_11.jpg" alt="Premium Vapes Background" className="hero-image" />
      </section>

      {/* Dual Angled Marquee Section */}
      <div className="dual-marquee-wrapper">
        <div className="marquee-bar marquee-black">
          <div className="marquee-content marquee-content-right">
            <span className="marquee-item">DISPOSABLE VAPES 🛒</span>
            <span className="marquee-item">◆</span>
            <span className="marquee-item">VAPE KITS & PODS 💎</span>
            <span className="marquee-item">◆</span>
            <span className="marquee-item">FAST SHIPPING 🚀</span>
            <span className="marquee-item">◆</span>
            <span className="marquee-item">TRUSTED IN GURUGRAM 📍</span>
            <span className="marquee-item">◆</span>
            {/* Duplicates for infinite scroll */}
            <span className="marquee-item">DISPOSABLE VAPES 🛒</span>
            <span className="marquee-item">◆</span>
            <span className="marquee-item">VAPE KITS & PODS 💎</span>
            <span className="marquee-item">◆</span>
            <span className="marquee-item">FAST SHIPPING 🚀</span>
            <span className="marquee-item">◆</span>
            <span className="marquee-item">TRUSTED IN GURUGRAM 📍</span>
            <span className="marquee-item">◆</span>
            <span className="marquee-item">DISPOSABLE VAPES 🛒</span>
            <span className="marquee-item">◆</span>
            <span className="marquee-item">VAPE KITS & PODS 💎</span>
            <span className="marquee-item">◆</span>
            <span className="marquee-item">FAST SHIPPING 🚀</span>
            <span className="marquee-item">◆</span>
            <span className="marquee-item">TRUSTED IN GURUGRAM 📍</span>
            <span className="marquee-item">◆</span>
          </div>
        </div>

        <div className="marquee-bar marquee-blue">
          <div className="marquee-content marquee-content-left">
            <span className="marquee-item">48-HOUR DELIVERY ⚡</span>
            <span className="marquee-item">◆</span>
            <span className="marquee-item">SAME DAY DELIVERY 🚚</span>
            <span className="marquee-item">◆</span>
            <span className="marquee-item">CASH ON DELIVERY 💵</span>
            <span className="marquee-item">◆</span>
            <span className="marquee-item">PREMIUM VAPES 💎</span>
            <span className="marquee-item">◆</span>
            {/* Duplicates for infinite scroll */}
            <span className="marquee-item">48-HOUR DELIVERY ⚡</span>
            <span className="marquee-item">◆</span>
            <span className="marquee-item">SAME DAY DELIVERY 🚚</span>
            <span className="marquee-item">◆</span>
            <span className="marquee-item">CASH ON DELIVERY 💵</span>
            <span className="marquee-item">◆</span>
            <span className="marquee-item">PREMIUM VAPES 💎</span>
            <span className="marquee-item">◆</span>
            <span className="marquee-item">48-HOUR DELIVERY ⚡</span>
            <span className="marquee-item">◆</span>
            <span className="marquee-item">SAME DAY DELIVERY 🚚</span>
            <span className="marquee-item">◆</span>
            <span className="marquee-item">CASH ON DELIVERY 💵</span>
            <span className="marquee-item">◆</span>
            <span className="marquee-item">PREMIUM VAPES 💎</span>
            <span className="marquee-item">◆</span>
          </div>
        </div>
      </div>

      {/* Product Category Section: ELF BAR */}
      <section className="category-section">
        <div className="container">
          <div className="section-header-wrap">
            <span className="section-badge-pill">PREMIUM DISPOSABLES</span>
            <h2 className="section-title">ELF BAR VAPE</h2>
          </div>
          {renderGrid(elfBarProducts)}
        </div>
      </section>

      {/* Top Collections Slider */}
      <section className="category-section collections-section">
        <div className="container">
          <div className="section-header-wrap">
            <span className="section-badge-pill">CATEGORIES</span>
            <h2 className="section-title">TOP COLLECTIONS</h2>
          </div>
          <div className="product-grid">
            <Link href="/shop?category=ELF+BAR+VAPE" className="collection-card">
              <img src="/assets/collection_elfbar.jpeg" alt="Elf Bar Collection" />
              <div className="collection-overlay">
                <h3>Elf Bar</h3>
              </div>
            </Link>
            <Link href="/shop?category=IGET+VAPE" className="collection-card">
              <img src="/assets/collection_iget.jpeg" alt="IGET Vape Collection" />
              <div className="collection-overlay">
                <h3>IGET Vape</h3>
              </div>
            </Link>
            <Link href="/shop?category=NIC+SALTS+VAPE" className="collection-card">
              <img src="/assets/collection_nic_salts.jpeg" alt="Nic Salts Collection" />
              <div className="collection-overlay">
                <h3>Nic Salts</h3>
              </div>
            </Link>
            <Link href="/shop?category=TERRA" className="collection-card">
              <img src="/assets/collection_terra.jpeg" alt="Terra Collection" />
              <div className="collection-overlay">
                <h3>Terra</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* IGET VAPE Section */}
      <section className="category-section">
        <div className="container">
          <div className="section-header-wrap">
            <span className="section-badge-pill">POPULAR VAPES</span>
            <h2 className="section-title">IGET VAPE</h2>
          </div>
          {renderGrid(igetProducts)}
        </div>
      </section>

      {/* NIC SALTS VAPE Section */}
      <section className="category-section">
        <div className="container">
          <div className="section-header-wrap">
            <span className="section-badge-pill">SALT NICOTINE</span>
            <h2 className="section-title">NIC SALTS VAPE</h2>
          </div>
          {renderGrid(nicSaltsProducts)}
        </div>
      </section>

      {/* Content Sections */}
      <section className="info-section">
        <div className="container">
          <div className="info-card-container">
            <div className="section-header-wrap">
              <span className="section-badge-pill">ABOUT OUR STORE</span>
              <h2 className="info-heading">Vape Shop Gurugram – Premium Disposable Vapes, Nic Salts & Vape Devices</h2>
            </div>
            <p className="info-text">Welcome to Vape Shop Gurugram (Gurgaon), your trusted destination for premium vaping products in Haryana. We offer an extensive collection of disposable vapes, pod systems, e-liquids, nic salts, and vape accessories from leading international brands. Whether you are a beginner or an experienced vaper, our store provides high-quality products to suit every preference.</p>

            <div className="section-header-wrap" style={{ marginTop: '40px' }}>
              <span className="section-badge-pill">OUR ADVANTAGES</span>
              <h3 className="info-heading-sub">Why Choose Vape Shop Gurugram?</h3>
            </div>
            
            <ul className="info-list">
              <li>
                <div className="info-icon-badge">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>Premium and 100% authentic vape products.</span>
              </li>
              <li>
                <div className="info-icon-badge">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>Wide range of disposable vapes and vape kits.</span>
              </li>
              <li>
                <div className="info-icon-badge">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>Popular brands including Elf Bar, IGET, Terra, and more.</span>
              </li>
              <li>
                <div className="info-icon-badge">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>Competitive pricing on all products.</span>
              </li>
              <li>
                <div className="info-icon-badge">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>Fast and secure express delivery across Gurugram (Gurgaon).</span>
              </li>
              <li>
                <div className="info-icon-badge">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>Dedicated customer support for all enquiries.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
