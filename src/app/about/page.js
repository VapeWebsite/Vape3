import Link from 'next/link';

export const metadata = {
  title: "About Us | Vape Shop Gurugram - Premium Vapes & Express Delivery in Gurgaon",
  description: "Discover Vape Shop Gurugram (Gurgaon) – #1 online vape store for 100% authentic disposable vapes, Elf Bar, IGET, Terra, and nic salts in Gurugram, Haryana. 24/7 WhatsApp ordering with express delivery across Gurgaon.",
  keywords: "vape shop gurugram, vape shop gurgaon, buy vapes online gurugram, elf bar gurugram, iget vape gurgaon, disposable vape delivery gurugram, vape store gurgaon",
};

export default function AboutPage() {
  return (
    <main className="about-page" style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* Dynamic Glow Backgrounds */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(255, 51, 102, 0.15) 0%, rgba(0, 198, 255, 0.08) 50%, transparent 80%)',
        filter: 'blur(80px)',
        pointerEvents: 'none',
        zIndex: 0
      }}></div>

      <div className="container" style={{ padding: '60px 20px 80px', maxWidth: '1100px', position: 'relative', zIndex: 1 }}>
        
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'linear-gradient(135deg, rgba(255, 51, 102, 0.12), rgba(0, 198, 255, 0.12))',
            border: '1px solid rgba(255, 51, 102, 0.3)',
            borderRadius: '30px',
            padding: '6px 18px',
            fontSize: '0.85rem',
            fontWeight: '700',
            color: '#ff3366',
            letterSpacing: '1.2px',
            textTransform: 'uppercase',
            marginBottom: '20px',
            boxShadow: '0 0 20px rgba(255, 51, 102, 0.2)'
          }}>
            <span>✨ Gurugram's #1 Premium Vape Hub</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2.4rem, 5vw, 3.5rem)',
            fontWeight: '900',
            background: 'linear-gradient(135deg, #ffffff 30%, #a0a0a0 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: '1.2',
            letterSpacing: '-0.5px'
          }}>
            Redefining Vaping Experience <br />
            <span style={{
              background: 'linear-gradient(135deg, #ff3366, #00c6ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>in Gurugram (Gurgaon)</span>
          </h1>

          <p style={{
            color: 'var(--text-muted, #a0a0a0)',
            fontSize: '1.15rem',
            maxWidth: '720px',
            margin: '22px auto 0',
            lineHeight: '1.7'
          }}>
            Your trusted local destination for 100% authentic disposable vapes, pod systems, and nicotine salts—delivered to your doorstep with express speed.
          </p>
        </div>

        {/* Highlight Stats Bar */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          marginBottom: '60px'
        }}>
          {[
            { value: '100%', label: 'Authentic Guarantee', sub: 'Original QR Code Verified' },
            { value: '24 / 7', label: 'WhatsApp Support', sub: 'Instant Local Ordering' },
            { value: 'Express', label: 'Local Delivery', sub: 'Across All Gurgaon' },
            { value: '40,000+', label: 'Max Puff Capacity', sub: 'Latest Tech Disposables' },
          ].map((stat, idx) => (
            <div key={idx} style={{
              background: 'rgba(20, 22, 29, 0.7)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '20px',
              padding: '26px 20px',
              textAlign: 'center',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
              transition: 'all 0.3s ease'
            }}>
              <div style={{
                fontSize: '2rem',
                fontWeight: '900',
                background: 'linear-gradient(135deg, #ff3366, #00c6ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '4px'
              }}>
                {stat.value}
              </div>
              <div style={{ color: '#ffffff', fontWeight: '700', fontSize: '1rem', marginBottom: '2px' }}>
                {stat.label}
              </div>
              <div style={{ color: '#888888', fontSize: '0.82rem' }}>
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Core Story Banner */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(20, 22, 29, 0.9), rgba(15, 17, 23, 0.95))',
          border: '1px solid rgba(255, 51, 102, 0.2)',
          borderRadius: '24px',
          padding: '40px 35px',
          marginBottom: '50px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.4), 0 0 30px rgba(255, 51, 102, 0.05)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <h2 style={{
            fontSize: '1.8rem',
            fontWeight: '800',
            color: '#ffffff',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <span style={{ color: '#ff3366' }}>🔥</span> Welcome to Vape Shop Gurugram
          </h2>
          <p style={{ color: '#cccccc', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '16px' }}>
            At <strong>Vape Shop Gurugram</strong>, we are committed to revolutionizing how Gurugram vapes. Located right in the heart of Haryana’s bustling Millennium City, we bring you the world’s most acclaimed disposable vape devices, pod kits, and e-liquids without the hassle of long waits or doubtful quality.
          </p>
          <p style={{ color: '#cccccc', fontSize: '1.05rem', lineHeight: '1.8' }}>
            We handpick every product in our lineup—from high-puff <strong>Elf Bar</strong> models and long-lasting <strong>IGET</strong> disposables to premium <strong>Terra</strong> kits and smooth <strong>Nic Salts</strong>—ensuring maximum flavor, genuine quality, and complete vaping satisfaction.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          marginBottom: '60px'
        }}>
          <div style={{
            background: 'rgba(20, 22, 29, 0.6)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '20px',
            padding: '32px 28px',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease'
          }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, rgba(255, 51, 102, 0.2), rgba(255, 51, 102, 0.05))',
              border: '1px solid rgba(255, 51, 102, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.6rem',
              marginBottom: '20px'
            }}>
              ⚡
            </div>
            <h3 style={{ fontSize: '1.35rem', color: '#ffffff', fontWeight: '700', marginBottom: '12px' }}>
              Rapid Local Delivery
            </h3>
            <p style={{ color: '#a0a0a0', fontSize: '0.96rem', lineHeight: '1.65' }}>
              Enjoy express local delivery straight to your doorstep across Gurugram. Fast, reliable, and packaged with ultimate privacy.
            </p>
          </div>

          <div style={{
            background: 'rgba(20, 22, 29, 0.6)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '20px',
            padding: '32px 28px',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease'
          }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, rgba(0, 198, 255, 0.2), rgba(0, 198, 255, 0.05))',
              border: '1px solid rgba(0, 198, 255, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.6rem',
              marginBottom: '20px'
            }}>
              🛡️
            </div>
            <h3 style={{ fontSize: '1.35rem', color: '#ffffff', fontWeight: '700', marginBottom: '12px' }}>
              100% Genuine & Verified
            </h3>
            <p style={{ color: '#a0a0a0', fontSize: '0.96rem', lineHeight: '1.65' }}>
              Zero counterfeits guaranteed. Every product comes directly from verified manufacturers with original QR authenticity checks.
            </p>
          </div>

          <div style={{
            background: 'rgba(20, 22, 29, 0.6)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '20px',
            padding: '32px 28px',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease'
          }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, rgba(37, 211, 102, 0.2), rgba(37, 211, 102, 0.05))',
              border: '1px solid rgba(37, 211, 102, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.6rem',
              marginBottom: '20px'
            }}>
              💬
            </div>
            <h3 style={{ fontSize: '1.35rem', color: '#ffffff', fontWeight: '700', marginBottom: '12px' }}>
              1-Click WhatsApp Order
            </h3>
            <p style={{ color: '#a0a0a0', fontSize: '0.96rem', lineHeight: '1.65' }}>
              No tedious signups or checkout forms. Pick your flavor, tap 'Buy on WhatsApp', and chat directly with our team for instant confirmation.
            </p>
          </div>
        </div>

        {/* Top Product Showcase */}
        <div style={{
          background: 'rgba(20, 22, 29, 0.7)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '24px',
          padding: '40px 35px',
          marginBottom: '60px'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '35px' }}>
            <span style={{
              background: 'rgba(0, 198, 255, 0.1)',
              color: '#00c6ff',
              border: '1px solid rgba(0, 198, 255, 0.3)',
              padding: '4px 14px',
              borderRadius: '20px',
              fontSize: '0.8rem',
              fontWeight: '700',
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}>
              CURATED INVENTORY
            </span>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#ffffff', marginTop: '10px' }}>
              Top Vaping Brands in Stock
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px'
          }}>
            {[
              { title: 'Elf Bar Disposables', desc: 'Raya D1, Raya D3 Pro 30K, Ice King 30K & MoonNight Series' },
              { title: 'IGET Vapes', desc: 'IGET Flare B10000 & long-lasting rechargeable disposables' },
              { title: 'Nicotine Salts', desc: 'Smooth, authentic salt nic liquids in premium fruit & mint flavors' },
              { title: 'Terra Vapes', desc: 'Sleek pod kits & high-performance modern vape devices' }
            ].map((cat, i) => (
              <div key={i} style={{
                background: 'rgba(10, 11, 16, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '16px',
                padding: '24px 20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <h4 style={{ color: '#00c6ff', fontSize: '1.1rem', fontWeight: '700', marginBottom: '8px' }}>
                    {cat.title}
                  </h4>
                  <p style={{ color: '#999999', fontSize: '0.88rem', lineHeight: '1.5' }}>
                    {cat.desc}
                  </p>
                </div>
                <div style={{ marginTop: '16px', fontSize: '0.85rem', color: '#ff3366', fontWeight: '600' }}>
                  ✓ Available Now
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sexy Call To Action (CTA) */}
        <div style={{
          background: 'linear-gradient(135deg, #151a26 0%, #07090e 100%)',
          border: '1px solid rgba(255, 51, 102, 0.3)',
          borderRadius: '30px',
          padding: '50px 30px',
          textAlign: 'center',
          position: 'relative',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 40px rgba(255, 51, 102, 0.15)'
        }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: '900', color: '#ffffff', marginBottom: '12px' }}>
            Ready to Elevate Your Vaping?
          </h2>
          <p style={{ color: '#aaaaaa', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto 30px', lineHeight: '1.6' }}>
            Browse our full catalog of premium disposable vapes and pod systems with instant WhatsApp ordering and express Gurugram delivery.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/shop" className="whatsapp-buy-btn" style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 'auto',
              padding: '16px 36px',
              fontSize: '1.05rem',
              fontWeight: '700',
              borderRadius: '50px',
              background: 'linear-gradient(135deg, #ff3366, #ff0044)',
              boxShadow: '0 10px 25px rgba(255, 51, 102, 0.4)'
            }}>
              🔥 Explore All Vapes in Gurugram
            </Link>
            
            <a href="https://wa.me/919394309383" target="_blank" rel="noreferrer" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '16px 32px',
              fontSize: '1.05rem',
              fontWeight: '700',
              color: '#ffffff',
              borderRadius: '50px',
              background: 'rgba(37, 211, 102, 0.15)',
              border: '1px solid rgba(37, 211, 102, 0.4)',
              transition: 'all 0.3s ease'
            }}>
              💬 Order on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
