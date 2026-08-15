import { products } from '../../../data/products';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ProductActions from '../../ProductActions';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = products.find(p => p.slug === slug);
  
  if (!product) {
    return {
      title: "Product Not Found | Vape Shop Mumbai",
    };
  }
  
  // Extracting plain text from the description for the meta description
  // If the product doesn't have a specific description, use a generic one
  const cleanDescription = product.description 
    ? product.description.substring(0, 150) + "..."
    : `Buy ${product.title} online in Mumbai. Fast delivery, premium quality, and 100% authentic products. Order now on Vape Shop Mumbai.`;

  return {
    title: `${product.title} | Buy Online in Mumbai | Vape Shop Mumbai`,
    description: cleanDescription,
    openGraph: {
      title: `${product.title} | Vape Shop Mumbai`,
      description: cleanDescription,
      images: [product.image],
    },
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = products.find(p => p.slug === slug);

  if (!product) {
    notFound();
  }

  // Get 2 random recommendations from the same category or all products
  const recommendations = products.filter(p => p.slug !== slug).slice(0, 2);

  return (
    <main className="product-page-main">
      <div className="container product-page-container">
        {/* Left Column: Image */}
        <div className="product-image-column">
          <img src={product.image.startsWith('/') ? product.image : '/' + product.image} alt={product.title} />
        </div>

        {/* Right Column: Details */}
        <div className="product-details-column">
          <div className="product-category-pill">
            ⚡ {product.category || 'PREMIUM VAPE'}
          </div>
          <h1 className="product-page-title">{product.title}</h1>
          <div className="product-price-wrapper">
            <span className="product-page-price">{product.price}</span>
            <span className="product-stock-tag">In Stock & Ready To Ship 🚀</span>
          </div>
          
          <hr className="product-divider" />
          
          <ProductActions product={product} />

          {/* Product Guarantee Badges Bar */}
          <div className="product-trust-badges">
            <div className="trust-badge-item">
              <span>🚚 Express Same Day Mumbai</span>
            </div>
            <div className="trust-badge-item">
              <span>💎 100% Authentic Guaranteed</span>
            </div>
            <div className="trust-badge-item">
              <span>💵 Cash On Delivery</span>
            </div>
          </div>

          <hr className="product-divider" />

          {/* Accordions */}
          <details className="product-accordion" open>
            <summary>Product Description <span className="accordion-icon">+</span></summary>
            <div className="accordion-content">
              {product.description.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </details>

          {product.specs && product.specs.length > 0 && (
            <details className="product-accordion" open>
              <summary>Specifications <span className="accordion-icon">+</span></summary>
              <div className="accordion-content">
                <ul className="product-specs-list">
                  {product.specs.map((spec, i) => (
                    <li key={i}>{spec}</li>
                  ))}
                </ul>
              </div>
            </details>
          )}

          {product.highlights && product.highlights.length > 0 && (
            <details className="product-accordion" open>
              <summary>Highlights <span className="accordion-icon">+</span></summary>
              <div className="accordion-content">
                <ul className="product-highlights-list">
                  {product.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            </details>
          )}

          <details className="product-accordion">
            <summary>Return Policy <span className="accordion-icon">+</span></summary>
            <div className="accordion-content">
              <p>We do not accept returns on disposable vapes or e-liquids due to health and safety regulations. If your device is defective upon arrival, please contact us within 24 hours.</p>
            </div>
          </details>

          <details className="product-accordion">
            <summary>Shipping Policy <span className="accordion-icon">+</span></summary>
            <div className="accordion-content">
              <p>Orders are processed within 24 hours. We offer fast shipping across Mumbai and standard shipping to other major cities.</p>
            </div>
          </details>
          
          <details className="product-accordion">
            <summary>Privacy Policy <span className="accordion-icon">+</span></summary>
            <div className="accordion-content">
              <p>Your privacy is important to us. We securely store your information and will never share your personal details with third parties without your explicit consent.</p>
            </div>
          </details>
        </div>
      </div>

      {/* Features Bar */}
      <section className="features-bar">
        <div className="container features-grid">
          <div className="feature-item">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#e74c3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13"></rect>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                <circle cx="5.5" cy="18.5" r="2.5"></circle>
                <circle cx="18.5" cy="18.5" r="2.5"></circle>
              </svg>
            </div>
            <h4>Free Shipping</h4>
            <p>On each & every orders</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#e67e22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="1 4 1 10 7 10"></polyline>
                <polyline points="23 20 23 14 17 14"></polyline>
                <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>
              </svg>
            </div>
            <h4>Easy Returns</h4>
            <p>Free returns until 7 days of delivery</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#3498db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2" ry="2"></rect>
                <line x1="3" y1="10" x2="21" y2="10"></line>
                <path d="M7 15h.01M11 15h2"></path>
                {/* Checkmark badge */}
                <circle cx="19" cy="19" r="5" fill="#2ecc71" stroke="#2ecc71" />
                <path d="M17 19l1.5 1.5 2.5-2.5" stroke="#fff" strokeWidth="2" />
              </svg>
            </div>
            <h4>Secure Payment</h4>
            <p>Safe and hassle free checkout</p>
          </div>
        </div>
      </section>

      {/* You may also like Section */}
      <section className="category-section recommendations-section">
        <div className="container">
          <h2 className="section-title">You may also like</h2>
          <div className="product-grid">
            {recommendations.map(rec => (
              <div key={rec.slug} className="product-card" style={{ display: 'flex', flexDirection: 'column' }}>
                <Link href={`/product/${rec.slug}`} style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}>
                  <div className="card-image-wrap">
                    <img src={rec.image.startsWith('/') ? rec.image : '/' + rec.image} alt={rec.title} />
                    <div className="card-overlay"><button className="quick-add-btn">VIEW PRODUCT</button></div>
                  </div>
                  <div className="card-details">
                    <h3 className="product-title">{rec.title}</h3>
                    <p className="product-price">{rec.price}</p>
                  </div>
                </Link>
                <div style={{ padding: '0 15px 15px' }}>
                  <a href="https://wa.me/919394309383" target="_blank" rel="noreferrer" className="whatsapp-buy-btn">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" style={{ marginRight: '8px' }}>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                    </svg>
                    Buy on WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
