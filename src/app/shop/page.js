import Link from 'next/link';
import { products } from '../../data/products';

export async function generateMetadata({ searchParams }) {
  const params = await searchParams;
  const category = params.category;
  
  if (category) {
    return {
      title: `${category} in Mumbai | Buy Online | Vape Shop Mumbai`,
      description: `Buy premium ${category} vapes and accessories in Mumbai. Fast delivery, 100% authentic products. Order now on Vape Shop Mumbai.`,
    };
  }
  
  return {
    title: "Shop All Vapes in Mumbai | Disposable Vapes & Pods | Vape Shop Mumbai",
    description: "Browse our complete collection of disposable vapes, pod systems, and nic salts in Mumbai. Shop top brands like Elf Bar, IGET, and Nasty with fast delivery.",
  };
}

export default async function ShopPage({ searchParams }) {
  const params = await searchParams;
  const activeCategory = params.category;
  const searchQuery = params.q;

  // Filter products by category or search query
  let filteredProducts = products;
  if (activeCategory) {
    filteredProducts = filteredProducts.filter(p => p.category === activeCategory);
  }
  if (searchQuery) {
    filteredProducts = filteredProducts.filter(p => 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      p.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  const categories = [
    { name: "ALL PRODUCTS", param: undefined },
    { name: "ELF BAR", param: "ELF BAR VAPE" },
    { name: "IGET VAPE", param: "IGET VAPE" },
    { name: "NIC SALTS", param: "NIC SALTS VAPE" },
    { name: "TERRA", param: "TERRA" },
  ];

  return (
    <main className="shop-page-wrapper">
      <div className="container">
        <div className="shop-header-banner">
          <span className="shop-badge">Explore Catalog 💎</span>
          <h1 className="shop-page-title">
            {searchQuery ? `Search: "${searchQuery}"` : activeCategory ? activeCategory : "All Products"}
          </h1>
          <p className="shop-subtitle">
            Browse premium authentic vapes, pod kits, and nic salts with same-day Mumbai delivery.
          </p>
        </div>

        <div className="shop-toolbar">
          <span className="showing-count">
            Showing <strong style={{ color: 'var(--accent)', fontSize: '1rem' }}>{filteredProducts.length}</strong> Premium Products
          </span>
        </div>

        <div className="shop-container">
          {/* Sidebar */}
          <aside className="shop-sidebar">
            <h3>Categories</h3>
            <ul className="shop-category-list">
              {categories.map(cat => {
                const isActive = activeCategory === cat.param || (!activeCategory && !cat.param);
                return (
                  <li key={cat.name}>
                    <Link 
                      href={cat.param ? `/shop?category=${encodeURIComponent(cat.param)}` : '/shop'}
                      className={`category-checkbox-item ${isActive ? 'active' : ''}`}
                    >
                      <div className={`checkbox-box ${isActive ? 'checked' : ''}`}>
                        {isActive && (
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        )}
                      </div>
                      <span className="category-name">{cat.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </aside>

          {/* Product Grid */}
          <section className="shop-products-area">
            <div className="shop-product-grid">
              {filteredProducts.map((product) => (
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
                      href={`https://wa.me/919394309383?text=${encodeURIComponent(`*NEW ORDER - Vape Shop Mumbai*\n----------------------------------------\n*Product:* ${product.title}\n*Price:* ${product.price}\n----------------------------------------\n\nPlease confirm availability and delivery details. Thank you!`)}`} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="whatsapp-buy-btn"
                    >
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" style={{ marginRight: '8px' }}>
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                      </svg>
                      Buy on WhatsApp
                    </a>
                  </div>
                </div>
              ))}
              
              {filteredProducts.length === 0 && (
                <p>No products found in this category.</p>
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
