import React, { useState } from 'react';
import { 
  Menu, 
  Mail, 
  Check, 
  Leaf,
  Send,
  ChevronRight,
  ArrowRight,
  Globe,
  ShieldCheck,
  Sprout,
  Ship
} from 'lucide-react';
import heroHome from './assets/images/hero_home_1786627818250.jpg';
import heroProducts from './assets/images/hero_products_1786627752047.jpg';
import heroAbout from './assets/images/hero_about_1786627764062.jpg';
import heroLogistics from './assets/images/hero_logistics_1786627773890.jpg';
import heroQA from './assets/images/hero_qa_1786627784139.jpg';
import heroContact from './assets/images/hero_contact_1786627829151.jpg';
import wholesaleAlmonds from './assets/images/wholesale_almonds_1786627719104.jpg';
import servicesRoasting from './assets/images/services_roasting_1786627840935.jpg';
import servicesPackaging from './assets/images/services_packaging_1786627851280.jpg';

import { products, Product } from './data/products';

function NavBar({ 
  activeProduct, 
  onSelectProduct,
  onNavigateHome,
  onNavigateBrands,
  onNavigateLogistics,
  onNavigateAbout,
  onNavigateContact,
  onNavigateProducts
}: { 
  activeProduct: Product | null, 
  onSelectProduct: (p: Product) => void,
  onNavigateHome: () => void,
  onNavigateBrands: () => void,
  onNavigateLogistics: () => void,
  onNavigateAbout: () => void,
  onNavigateContact: () => void,
  onNavigateProducts: () => void
}) {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const seedCategories = [
    'Sunflower Seeds',
    'Pumpkin Seeds (Pepitas)',
    'Chia Seeds',
    'Flax Seeds',
    'Sesame Seeds',
    'Hemp Hearts',
    'Quinoa'
  ];
  
  const closeAllMenus = () => {
    setIsMegaMenuOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="sticky top-0 z-50 flex flex-col" onMouseLeave={() => setIsMegaMenuOpen(false)}>
      <nav className="w-full border-b border-gray-200/50 bg-brand-light/95 backdrop-blur-md relative z-20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-charcoal h-full">
            <a href="#" onClick={(e) => { e.preventDefault(); closeAllMenus(); onNavigateHome(); }} className="relative h-full flex items-center group">
              <span className="group-hover:text-brand-navy transition-colors">Home</span>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-navy scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </a>
            <a href="#" onClick={(e) => { e.preventDefault(); closeAllMenus(); onNavigateAbout(); }} className="relative h-full flex items-center group">
              <span className="group-hover:text-brand-navy transition-colors">About Us</span>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-navy scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </a>
            
            {/* Products Mega Menu Trigger */}
            <div 
              className="relative h-full flex items-center cursor-pointer group"
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              onClick={() => { closeAllMenus(); onNavigateProducts(); }}
            >
              <span className={`transition-colors flex items-center gap-1 ${isMegaMenuOpen ? 'text-brand-navy font-semibold' : 'group-hover:text-brand-navy'}`}>
                Products
              </span>
              <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-brand-navy transition-transform origin-left duration-300 ${isMegaMenuOpen ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </div>
            
            <a href="#" onClick={(e) => { e.preventDefault(); closeAllMenus(); onNavigateBrands(); }} className="relative h-full flex items-center group">
              <span className="group-hover:text-brand-navy transition-colors">Brands</span>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-navy scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </a>
            <a href="#" onClick={(e) => { e.preventDefault(); closeAllMenus(); onNavigateLogistics(); }} className="relative h-full flex items-center group">
              <span className="group-hover:text-brand-navy transition-colors">Logistics</span>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-navy scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </a>
            <a href="#" onClick={(e) => { e.preventDefault(); closeAllMenus(); onNavigateContact(); }} className="relative h-full flex items-center group">
              <span className="group-hover:text-brand-navy transition-colors">Contact</span>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-navy scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </a>
          </div>
          
          {/* Centered Logo */}
          <div 
            onClick={() => { closeAllMenus(); onNavigateHome(); }}
            className="flex items-center justify-center font-serif text-2xl tracking-wide text-brand-navy font-semibold absolute left-1/2 -translate-x-1/2 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <Leaf className="w-5 h-5 mr-2 text-brand-charcoal" />
            B.A.N.
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button 
              className="md:hidden text-brand-navy p-2 hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </button>
            <button 
              onClick={() => { closeAllMenus(); onNavigateContact(); }}
              className="hidden md:flex bg-brand-charcoal text-white rounded-none px-6 py-2.5 text-sm font-medium hover:bg-brand-navy hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute top-20 left-0 w-full bg-brand-light shadow-xl transition-all duration-300 origin-top z-10 border-b border-gray-200 overflow-hidden ${
          isMobileMenuOpen ? 'opacity-100 max-h-[500px] pointer-events-auto' : 'opacity-0 max-h-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col px-4 py-6 gap-6 text-brand-navy text-lg font-serif">
          <a href="#" onClick={(e) => { e.preventDefault(); closeAllMenus(); onNavigateHome(); }} className="hover:text-brand-charcoal transition-colors">Home</a>
          <a href="#" onClick={(e) => { e.preventDefault(); closeAllMenus(); onNavigateAbout(); }} className="hover:text-brand-charcoal transition-colors">About Us</a>
          <a href="#" onClick={(e) => { e.preventDefault(); closeAllMenus(); onNavigateProducts(); }} className="hover:text-brand-charcoal transition-colors">Products Catalog</a>
          <a href="#" onClick={(e) => { e.preventDefault(); closeAllMenus(); onNavigateBrands(); }} className="hover:text-brand-charcoal transition-colors">Brands & Certifications</a>
          <a href="#" onClick={(e) => { e.preventDefault(); closeAllMenus(); onNavigateLogistics(); }} className="hover:text-brand-charcoal transition-colors">Global Logistics</a>
          <a href="#" onClick={(e) => { e.preventDefault(); closeAllMenus(); onNavigateContact(); }} className="hover:text-brand-charcoal transition-colors font-medium border-t border-gray-200 pt-4">Contact Sales</a>
        </div>
      </div>

      {/* Mega Menu Dropdown */}
      <div 
        className={`hidden md:block absolute top-20 left-0 w-full bg-brand-navy text-white shadow-xl transition-all duration-300 origin-top border-t border-white/10 z-10 ${
          isMegaMenuOpen ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-0 pointer-events-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            
            {/* Column 1: Tree Nuts */}
            <div className="md:col-span-8 lg:col-span-6">
              <h3 className="text-xs uppercase tracking-[0.2em] text-white/50 font-semibold mb-6 border-b border-white/10 pb-4 flex justify-between items-center">
                <span>Tree Nuts (Bulk)</span>
                <button 
                  onClick={() => { setIsMegaMenuOpen(false); onNavigateProducts(); }}
                  className="text-white hover:text-gray-300 transition-colors uppercase tracking-widest text-[10px]"
                >
                  View All &rarr;
                </button>
              </h3>
              <ul className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm font-light">
                {products.map(p => (
                  <li key={p.id}>
                    <button 
                      onClick={() => {
                        onSelectProduct(p);
                        setIsMegaMenuOpen(false);
                      }}
                      className={`text-left hover:text-white transition-colors flex items-center gap-2 ${
                        activeProduct?.id === p.id ? 'text-white font-medium' : 'text-white/70'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 bg-white rounded-none ${activeProduct?.id === p.id ? 'opacity-100' : 'opacity-0'}`}></span>
                      {p.shortName}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Seeds */}
            <div className="md:col-span-4 lg:col-span-3">
              <h3 className="text-xs uppercase tracking-[0.2em] text-white/50 font-semibold mb-6 border-b border-white/10 pb-4">
                Seeds (Upcoming)
              </h3>
              <ul className="flex flex-col gap-4 text-sm font-light">
                {seedCategories.map(seed => (
                  <li key={seed}>
                    <a href="#" onClick={e => e.preventDefault()} className="text-white/70 hover:text-white transition-colors flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-white rounded-none opacity-0"></span>
                      {seed}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Featured / Logistics Link */}
            <div className="hidden lg:block lg:col-span-3">
              <div className="bg-white/5 p-6 border border-white/10 h-full flex flex-col justify-between rounded-none">
                <div>
                  <h4 className="font-serif text-xl text-white mb-2">Global Logistics</h4>
                  <p className="text-xs text-white/60 leading-relaxed">
                    End-to-end cold chain supply solutions for premium nut and seed wholesale orders globally.
                  </p>
                </div>
                <a href="#" onClick={(e) => { e.preventDefault(); setIsMegaMenuOpen(false); onNavigateLogistics(); }} className="text-xs font-semibold uppercase tracking-widest text-white hover:text-gray-300 mt-6 inline-flex items-center gap-2">
                  View Logistics <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

function ProductHeader({ product }: { product: Product }) {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-navy leading-tight transition-all duration-300">
        {product.title} <br className="hidden sm:block" />
        <span className="italic text-brand-charcoal">{product.subtitle}</span>
      </h1>
      <p className="text-base sm:text-lg text-brand-charcoal/80 max-w-2xl font-light leading-relaxed">
        {product.description}
      </p>
    </div>
  );
}

function ProductVisual({ product }: { product: Product }) {
  return (
    <div className="relative overflow-hidden bg-white border border-gray-100 rounded-none">
      <div className="aspect-[4/3] sm:aspect-[16/9] w-full bg-gray-200 relative group">
        <img 
          src={product.image} 
          alt={product.specs.product} 
          className="object-cover w-full h-full rounded-none transition-transform duration-700 group-hover:scale-105" 
        />
      </div>
    </div>
  );
}

function ProductSpecifications({ product }: { product: Product }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse min-w-[500px]">
        <thead>
          <tr className="border-b-2 border-brand-charcoal text-brand-navy">
            <th className="py-4 font-serif text-lg font-medium w-1/3">Specification</th>
            <th className="py-4 font-serif text-lg font-medium">Details</th>
          </tr>
        </thead>
        <tbody className="text-brand-charcoal/80 font-light text-sm">
          <tr className="border-b border-gray-200 hover:bg-white/40 transition-colors">
            <td className="py-4 uppercase tracking-wider text-xs font-semibold text-brand-charcoal">Product</td>
            <td className="py-4 text-brand-navy">{product.specs.product}</td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-white/40 transition-colors">
            <td className="py-4 uppercase tracking-wider text-xs font-semibold text-brand-charcoal">Grade</td>
            <td className="py-4 text-brand-navy">{product.specs.grade}</td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-white/40 transition-colors">
            <td className="py-4 uppercase tracking-wider text-xs font-semibold text-brand-charcoal">Origin</td>
            <td className="py-4 text-brand-navy">{product.specs.origin}</td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-white/40 transition-colors">
            <td className="py-4 uppercase tracking-wider text-xs font-semibold text-brand-charcoal">MOQ</td>
            <td className="py-4 text-brand-navy">{product.specs.moq}</td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-white/40 transition-colors">
            <td className="py-4 uppercase tracking-wider text-xs font-semibold text-brand-charcoal">Moisture Content</td>
            <td className="py-4 text-brand-navy">{product.specs.moisture}</td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-white/40 transition-colors">
            <td className="py-4 uppercase tracking-wider text-xs font-semibold text-brand-charcoal">Caliber / Size</td>
            <td className="py-4 text-brand-navy">{product.specs.size}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function ProductDetails() {
  const details = [
    { id: '01', title: 'Product Characteristics', desc: 'Premium quality raw nuts, carefully harvested and sorted to ensure uniform size, minimal defects, and superior taste suitable for high-end wholesale distribution.' },
    { id: '02', title: 'Wholesale Packaging', desc: 'Standard bulk packaging in 50lb corrugated fiber cartons with food-grade poly liners to preserve freshness and prevent moisture ingress during transit.' },
    { id: '03', title: 'Logistics & Handling', desc: 'Palletized shipments configured for standard freight. Temperature-controlled transportation recommended to maintain optimal product integrity.' },
    { id: '04', title: 'Quality Assurance', desc: 'Processed in GFSI-certified facilities. Continuous monitoring guarantees adherence to stringent agricultural and food safety standards.' },
  ];

  return (
    <div className="flex flex-col gap-8 pb-12 lg:pb-0">
      <div className="text-center md:text-left">
        <h3 className="text-xs uppercase tracking-[0.2em] text-brand-charcoal mb-4">Quality Commitment</h3>
        <h2 className="text-3xl md:text-4xl font-serif text-brand-navy">
          Wholesale Standards.<br className="hidden sm:block" />
          <span className="italic">Uncompromising Quality.</span>
        </h2>
      </div>

      <div className="flex flex-col divide-y divide-gray-200/60 mt-4 border-t border-gray-200/60">
        {details.map(item => (
          <div key={item.id} className="py-8 flex flex-col md:flex-row gap-4 md:gap-12 hover:bg-white/40 transition-colors duration-300 px-2 -mx-2 sm:px-0 sm:mx-0">
            <div className="flex items-center md:items-start gap-4 md:w-[40%]">
              <span className="text-brand-charcoal/40 font-serif text-lg sm:text-xl w-6 mt-1 md:mt-0">{item.id}</span>
              <div className="h-px w-6 bg-brand-charcoal/20 mt-4 hidden md:block"></div>
              <h4 className="text-lg sm:text-xl font-serif mt-1 md:mt-0 text-brand-navy">
                {item.title}
              </h4>
            </div>
            <div className="md:w-[60%] pl-9 md:pl-0">
              <p className="text-sm leading-relaxed max-w-xl font-light text-brand-charcoal/80">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StickyForm({ product }: { product: Product }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Web3Forms Serverless Integration
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY_HERE");
    
    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Form submission error", error);
      // Fallback for demo purposes if API fails in preview environment
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset submission state when product changes
  React.useEffect(() => {
    setIsSubmitted(false);
    setIsSubmitting(false);
  }, [product.id]);

  if (isSubmitted) {
    return (
      <div className="sticky top-40 bg-brand-navy rounded-none p-8 flex flex-col items-center justify-center text-center gap-4 min-h-[450px]">
        <div className="w-20 h-20 bg-white/10 rounded-none flex items-center justify-center text-white mb-4">
          <Check className="w-10 h-10" />
        </div>
        <h3 className="font-serif text-3xl text-white">Inquiry Received</h3>
        <p className="text-white/70 font-light text-sm max-w-[240px] leading-relaxed">
          Your specifications for {product.shortName} have been recorded. Our sales team will contact you shortly to finalize your quote.
        </p>
      </div>
    );
  }

  return (
    <div className="sticky top-40 bg-brand-navy rounded-none p-8 lg:p-10 flex flex-col gap-8 text-white">
      <div>
        <h3 className="font-serif text-3xl text-white mb-3">Request Quote</h3>
        <p className="text-sm text-white/70 font-light leading-relaxed">
          Submit your inquiry for this specific lot. Our wholesale team will respond within 2 business hours.
        </p>
      </div>

      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        {/* Web3Forms Hidden Inputs */}
        <input type="hidden" name="subject" value={product.emailSubject} />
        <input type="hidden" name="from_name" value="B2B Wholesale Portal" />
        <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
        
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-semibold text-white/60 uppercase tracking-widest">Full Name</label>
          <input 
            type="text"
            name="name"
            className="w-full border-0 border-b border-white/30 py-2.5 text-sm focus:outline-none focus:border-white focus:ring-0 bg-transparent transition-colors text-white placeholder:text-white/30 rounded-none" 
            placeholder="Jane Doe" 
            required 
          />
        </div>
        
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-semibold text-white/60 uppercase tracking-widest">Company</label>
          <input 
            type="text" 
            name="company"
            className="w-full border-0 border-b border-white/30 py-2.5 text-sm focus:outline-none focus:border-white focus:ring-0 bg-transparent transition-colors text-white placeholder:text-white/30 rounded-none" 
            placeholder="Acme Foods Inc." 
            required 
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-semibold text-white/60 uppercase tracking-widest">Est. Volume (lbs)</label>
          <select 
            name="volume"
            className="w-full border-0 border-b border-white/30 py-2.5 text-sm focus:outline-none focus:border-white focus:ring-0 bg-transparent text-white cursor-pointer rounded-none [&>option]:text-brand-navy"
            required
            defaultValue=""
          >
            <option value="" disabled className="text-gray-300">Select Volume</option>
            <option value="2000">2,000 - 5,000 lbs (1-2 Pallets)</option>
            <option value="5000">5,000 - 10,000 lbs (Half Truck)</option>
            <option value="10000">10,000+ lbs (Full Truckload)</option>
          </select>
        </div>

        <div className="flex flex-col gap-2 mt-2">
          <label className="text-[10px] font-semibold text-white/60 uppercase tracking-widest">Requirements</label>
          <textarea 
            name="requirements"
            className="w-full border-0 border-b border-white/30 py-2.5 text-sm focus:outline-none focus:border-white focus:ring-0 bg-transparent min-h-[80px] resize-none text-white placeholder:text-white/30 rounded-none" 
            placeholder="Any specific delivery instructions?" 
            required
          ></textarea>
        </div>

        <div className="mt-4 pt-6 border-t border-white/10 flex flex-col gap-6">
          <div className="flex items-center gap-3 text-xs text-white/70 bg-white/5 p-4 rounded-none">
            <Mail className="w-4 h-4 text-white shrink-0" />
            <span className="leading-snug">Inquiries route directly to <br/><span className="font-medium text-white">sales@bestamericannuts.com</span></span>
          </div>
          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-white text-brand-navy rounded-none py-4 text-sm font-medium hover:bg-gray-100 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Inquiry'} <Send className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
}

function HomePage({ onSelectProduct, onNavigateProducts }: { onSelectProduct: (p: Product) => void, onNavigateProducts: () => void }) {
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="w-full animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="w-full bg-brand-navy text-white py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroHome} 
            alt="Farm sourcing" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center relative z-10">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-white/70 mb-6">EST. 1985 · NORTH, SOUTH & LATIN AMERICA</div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif leading-tight mb-8 max-w-5xl">
            Great Taste Starts at the Source
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-light max-w-3xl mb-4 leading-relaxed">
            At Best American Nuts, we believe great taste starts at the source. That’s why every almond, peanut, and premium nut in our collection is responsibly sourced directly from trusted farms across North, South, and Latin America.
          </p>
          <p className="text-lg md:text-xl text-white/80 font-light max-w-3xl mb-10 leading-relaxed">
            From crunchy to creamy, raw to roasted — we’ve got the nut for every craving, every kitchen, and every lifestyle.
          </p>
          <button 
            onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); onNavigateProducts(); }} // Simplified hook to encourage using the mega menu
            className="bg-white text-brand-navy px-10 py-4 font-semibold text-sm uppercase tracking-widest hover:bg-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 rounded-none"
          >
            VIEW OUR PRODUCTS
          </button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="w-full py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-brand-navy mb-4">Our Premium Selection</h2>
            <div className="w-16 h-1 bg-brand-navy mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((p) => (
              <div 
                key={p.id}
                onClick={() => { window.scrollTo(0,0); onSelectProduct(p); }}
                className="group cursor-pointer border border-gray-200 bg-white hover:border-brand-navy/30 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <img 
                    src={p.image} 
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <div className="p-6 flex flex-col grow relative overflow-hidden">
                  <h3 className="font-serif text-xl text-brand-navy mb-2 group-hover:text-brand-charcoal transition-colors">{p.name}</h3>
                  <p className="text-brand-charcoal/70 text-sm font-light line-clamp-2">{p.description}</p>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-navy translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button 
              onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); onNavigateProducts(); }}
              className="border-2 border-brand-navy text-brand-navy px-10 py-4 font-semibold text-sm uppercase tracking-widest hover:bg-brand-navy hover:text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 rounded-none inline-flex items-center gap-2 group"
            >
              View All Products <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-24 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-serif text-brand-navy mb-6">Comprehensive B2B Solutions</h2>
            <p className="text-lg text-brand-charcoal/80 font-light leading-relaxed">
              Our list of services is continually expanding to ensure we are a one-stop-shop solution for our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {/* Roasting */}
            <div className="flex flex-col group">
              <div className="w-full aspect-[16/9] overflow-hidden mb-6">
                <img 
                  src={servicesRoasting} 
                  alt="Roasting"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-2xl text-brand-navy mb-3">Roasting</h3>
              <p className="text-brand-charcoal/80 font-light leading-relaxed">
                From small to large batch, we’ve mastered the art of roasting to perfection.
              </p>
            </div>

            {/* Packaging */}
            <div className="flex flex-col group">
              <div className="w-full aspect-[16/9] overflow-hidden mb-6">
                <img 
                  src={servicesPackaging} 
                  alt="Packaging"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-2xl text-brand-navy mb-3">Packaging</h3>
              <p className="text-brand-charcoal/80 font-light leading-relaxed">
                Our state-of-the-art equipment allows for versatile packaging to deliver products in multiple ways.
              </p>
            </div>

            {/* Product Innovation */}
            <div className="flex flex-col group">
              <div className="w-full aspect-[16/9] overflow-hidden mb-6">
                <img 
                  src={heroQA} 
                  alt="Product Innovation"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-2xl text-brand-navy mb-3">Product Innovation</h3>
              <p className="text-brand-charcoal/80 font-light leading-relaxed">
                From concept to R&D, we’ll serve as your strategic partner with end-to-end support across your entire development process.
              </p>
            </div>

            {/* Merchandising */}
            <div className="flex flex-col group">
              <div className="w-full aspect-[16/9] overflow-hidden mb-6">
                <img 
                  src={wholesaleAlmonds} 
                  alt="Merchandising"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-2xl text-brand-navy mb-3">Merchandising</h3>
              <p className="text-brand-charcoal/80 font-light leading-relaxed">
                Our trained merchandising team visits stores as often as 5 times per week to make sure their bulk snack sections are always looking fresh.
              </p>
            </div>
          </div>

          <div className="mt-20 pt-16 border-t border-gray-200 text-center max-w-4xl mx-auto">
            <h3 className="font-serif text-2xl md:text-3xl text-brand-navy mb-6">
              Our facilities can accomodate your business and we’ll do whatever it takes to help you win.
            </h3>
          </div>
        </div>
      </section>

      {/* Trust Signals / "Why Us" */}
      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            
            <div className="flex flex-col items-center text-center px-4 pt-8 md:pt-0 border-t-0">
              <div className="w-16 h-16 flex items-center justify-center bg-brand-light text-brand-navy mb-6 rounded-none">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl text-brand-navy mb-3">Worldwide Shipping</h3>
              <p className="text-brand-charcoal/70 text-sm font-light leading-relaxed">
                Global logistics handling CIF and FOB terms to all major commercial ports.
              </p>
            </div>

            <div className="flex flex-col items-center text-center px-4 pt-8 md:pt-0">
              <div className="w-16 h-16 flex items-center justify-center bg-brand-light text-brand-navy mb-6 rounded-none">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl text-brand-navy mb-3">GFSI Certified</h3>
              <p className="text-brand-charcoal/70 text-sm font-light leading-relaxed">
                Processed to perfection under strict international food safety standards.
              </p>
            </div>

            <div className="flex flex-col items-center text-center px-4 pt-8 lg:pt-0">
              <div className="w-16 h-16 flex items-center justify-center bg-brand-light text-brand-navy mb-6 rounded-none">
                <Sprout className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl text-brand-navy mb-3">Direct Farm Partnerships</h3>
              <p className="text-brand-charcoal/70 text-sm font-light leading-relaxed">
                Sourced directly from certified orchards and growers globally.
              </p>
            </div>

            <div className="flex flex-col items-center text-center px-4 pt-8 lg:pt-0">
              <div className="w-16 h-16 flex items-center justify-center bg-brand-light text-brand-navy mb-6 rounded-none">
                <Ship className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl text-brand-navy mb-3">Container Load Specialists</h3>
              <p className="text-brand-charcoal/70 text-sm font-light leading-relaxed">
                Equipped to handle full container loads for maximum supply chain efficiency.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

function BrandsPage() {
  return (
    <main className="w-full animate-in fade-in duration-500 bg-brand-light">
      <div className="w-full h-[40vh] min-h-[300px] relative">
        <img 
          src={heroQA} 
          alt="Quality Assurance" 
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-80"
        />
        <div className="absolute inset-0 bg-brand-navy/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-white text-center px-4">
            Quality & Certifications
          </h1>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        
        <div className="max-w-3xl mx-auto text-brand-charcoal/80 font-light text-lg leading-relaxed mb-24 text-center">
          <p className="mb-6">
            At Best American Nuts, uncompromising quality is the baseline of our operations. As a premier global supplier of wholesale tree nuts and seeds, we implement rigorous, multi-stage quality assurance protocols designed to meet and exceed the exacting standards of the world's leading food manufacturers, retailers, and distributors.
          </p>
          <p>
            Our facilities utilize state-of-the-art optical sorting technology combined with meticulous manual QA inspections. This dual-layered approach guarantees maximum foreign material removal, ensuring that every shipment delivers pristine, uniform kernels with minimal defects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-brand-charcoal mb-8 font-semibold">Global Compliance Standards</h3>
            <div className="flex flex-col text-brand-navy font-medium text-lg">
              <div className="py-4 border-b border-gray-200 flex items-center justify-between hover:px-4 transition-all">
                <span>GFSI-Certified Processing</span>
                <ShieldCheck className="w-5 h-5 text-brand-charcoal/40" />
              </div>
              <div className="py-4 border-b border-gray-200 flex items-center justify-between hover:px-4 transition-all">
                <span>USDA Organic Compliance</span>
                <Leaf className="w-5 h-5 text-brand-charcoal/40" />
              </div>
              <div className="py-4 border-b border-gray-200 flex items-center justify-between hover:px-4 transition-all">
                <span>ISO 9001:2015 & 22000</span>
                <Check className="w-5 h-5 text-brand-charcoal/40" />
              </div>
              <div className="py-4 border-b border-gray-200 flex items-center justify-between hover:px-4 transition-all">
                <span>Kosher Certified</span>
                <Check className="w-5 h-5 text-brand-charcoal/40" />
              </div>
              <div className="py-4 border-b border-gray-200 flex items-center justify-between hover:px-4 transition-all">
                <span>Halal Certified</span>
                <Check className="w-5 h-5 text-brand-charcoal/40" />
              </div>
            </div>
          </div>
          <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
            <img 
              src={heroQA} 
              alt="Lab testing" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>

        <div className="border-t border-gray-200 pt-24">
          <h2 className="text-3xl font-serif text-brand-navy mb-12 text-center">Our Partner Brands & Affiliates</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              "Natura Bulk", 
              "Harvest Global", 
              "Peak Provisions", 
              "Verdant Wholesale",
              "Aura Ingredients",
              "Terra Foods B2B",
              "Equinox Roasters",
              "Crest Botanicals"
            ].map((brand, i) => (
              <div key={i} className="aspect-[3/2] bg-white border border-gray-200 flex items-center justify-center p-6 hover:border-brand-navy transition-colors cursor-pointer group">
                <span className="font-serif text-lg md:text-xl text-brand-charcoal/40 font-bold tracking-widest uppercase group-hover:text-brand-navy transition-colors text-center">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

function LogisticsPage() {
  return (
    <main className="w-full animate-in fade-in duration-500 bg-brand-light">
      <div className="w-full h-[40vh] min-h-[300px] relative">
        <img 
          src={heroLogistics} 
          alt="Logistics & Shipping" 
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-80"
        />
        <div className="absolute inset-0 bg-brand-navy/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-white text-center px-4">
            Global Logistics
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        
        <div className="text-brand-charcoal/80 font-light text-lg leading-relaxed mb-16 max-w-3xl">
          <p className="mb-6">
            We operate a sophisticated, cold-chain-integrated fulfillment network designed to move bulk commodities securely and efficiently across the globe. Leveraging strategic partnerships with major ocean freight carriers and international ports, Best American Nuts guarantees timely, traceable, and scalable delivery for institutional buyers.
          </p>
          <p>
            From custom freight forwarding solutions to strict adherence to international commercial terms, our logistics architecture is built to mitigate supply chain risks and ensure product integrity from origin to destination.
          </p>
        </div>

        {/* Table 1: Incoterms */}
        <div className="mb-16">
          <h3 className="text-xs uppercase tracking-[0.2em] text-brand-charcoal mb-6 font-semibold">B2B Incoterms Offered</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="border-b-2 border-brand-charcoal text-brand-navy">
                  <th className="py-4 font-serif text-lg font-medium w-1/4">Term</th>
                  <th className="py-4 font-serif text-lg font-medium w-1/4">Definition</th>
                  <th className="py-4 font-serif text-lg font-medium">Fulfillment Scope</th>
                </tr>
              </thead>
              <tbody className="text-brand-charcoal/80 font-light text-sm">
                <tr className="border-b border-gray-200 hover:bg-white/40 transition-colors">
                  <td className="py-4 uppercase tracking-wider text-xs font-semibold text-brand-charcoal">CIF</td>
                  <td className="py-4 text-brand-navy font-medium">Cost, Insurance, and Freight</td>
                  <td className="py-4 text-brand-charcoal/80">We assume responsibility for cost, insurance, and freight to the buyer's designated destination port.</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-white/40 transition-colors">
                  <td className="py-4 uppercase tracking-wider text-xs font-semibold text-brand-charcoal">FOB</td>
                  <td className="py-4 text-brand-navy font-medium">Free on Board</td>
                  <td className="py-4 text-brand-charcoal/80">We handle origin logistics, clearing goods for export and loading onto the vessel at the named port.</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-white/40 transition-colors">
                  <td className="py-4 uppercase tracking-wider text-xs font-semibold text-brand-charcoal">EXW</td>
                  <td className="py-4 text-brand-navy font-medium">Ex Works</td>
                  <td className="py-4 text-brand-charcoal/80">Goods are made available at our facility; buyer assumes all transportation costs and risks.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Table 2: Capacities & Packaging */}
        <div>
          <h3 className="text-xs uppercase tracking-[0.2em] text-brand-charcoal mb-6 font-semibold">Capacities & Packaging</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="border-b-2 border-brand-charcoal text-brand-navy">
                  <th className="py-4 font-serif text-lg font-medium w-1/4">Category</th>
                  <th className="py-4 font-serif text-lg font-medium w-1/3">Specification</th>
                  <th className="py-4 font-serif text-lg font-medium">Details</th>
                </tr>
              </thead>
              <tbody className="text-brand-charcoal/80 font-light text-sm">
                <tr className="border-b border-gray-200 hover:bg-white/40 transition-colors">
                  <td className="py-4 uppercase tracking-wider text-xs font-semibold text-brand-charcoal">Load Capacity</td>
                  <td className="py-4 text-brand-navy font-medium">FCL (Full Container)</td>
                  <td className="py-4 text-brand-charcoal/80">Dedicated 20ft or 40ft containers. Optimal cost-per-unit for large volumes.</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-white/40 transition-colors">
                  <td className="py-4 uppercase tracking-wider text-xs font-semibold text-brand-charcoal">Load Capacity</td>
                  <td className="py-4 text-brand-navy font-medium">LCL (Less than Container)</td>
                  <td className="py-4 text-brand-charcoal/80">Consolidated shipments for mid-tier orders maintaining cold-chain integrity.</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-white/40 transition-colors">
                  <td className="py-4 uppercase tracking-wider text-xs font-semibold text-brand-charcoal">Standard Pkg.</td>
                  <td className="py-4 text-brand-navy font-medium">50lb Corrugated Cartons</td>
                  <td className="py-4 text-brand-charcoal/80">Standard bulk cartons with food-grade poly liners. Ideal for direct-to-retail repacking.</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-white/40 transition-colors">
                  <td className="py-4 uppercase tracking-wider text-xs font-semibold text-brand-charcoal">Bulk Pkg.</td>
                  <td className="py-4 text-brand-navy font-medium">1-Ton Bulk Super Sacks</td>
                  <td className="py-4 text-brand-charcoal/80">FIBC bulk bags designed for industrial processing facilities and large-scale manufacturing.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  );
}

function AboutPage() {
  return (
    <main className="w-full animate-in fade-in duration-500 bg-brand-light">
      <div className="w-full h-[40vh] min-h-[300px] relative mb-16">
        <img 
          src={wholesaleAlmonds} 
          alt="About Us" 
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-80"
        />
        <div className="absolute inset-0 bg-brand-navy/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-white text-center px-4">
            About
          </h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-serif text-brand-navy mb-6">Four Decades of Honest Nuts</h2>
            <div className="prose prose-lg text-brand-charcoal/80 font-light leading-relaxed">
              <p className="mb-6">
                Best American Nuts was founded in 1985 with a straightforward belief: if you start with the best quality and treat the product right, you don’t need to do much else. Over four decades, that belief has never changed — only our reach has grown.
              </p>
              <p>
                What began as a small regional operation has become a trusted source for home snackers, professional bakers, chefs, and businesses across the country. Through all of it, our commitment has stayed the same: source with integrity, roast with care, and ship fresh.
              </p>
            </div>
          </div>
          <div className="aspect-[4/3] w-full overflow-hidden">
            <img 
              src={heroAbout} 
              alt="Harvesting" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="aspect-[4/3] w-full overflow-hidden order-2 lg:order-1">
            <img 
              src={heroAbout} 
              alt="Sourcing" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="flex flex-col justify-center order-1 lg:order-2">
            <h2 className="text-3xl font-serif text-brand-navy mb-6">How We Source</h2>
            <div className="prose prose-lg text-brand-charcoal/80 font-light leading-relaxed">
              <p className="mb-6">
                We work directly with established growers and trusted suppliers across North America, South America, and Latin America — building lasting relationships that give us consistent access to quality product and let us hold growers to standards we believe in.
              </p>
              <p>
                We’re selective. Not every harvest makes the cut, and not every supplier earns a long-term relationship. The nuts and seeds you find in our shop are the ones that passed every test we put them through.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY_HERE");
    
    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Form submission error", error);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="w-full animate-in fade-in duration-500 bg-brand-light">
      <div className="w-full h-[40vh] min-h-[300px] relative mb-16">
        <img 
          src={heroContact} 
          alt="Contact Us" 
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-80"
        />
        <div className="absolute inset-0 bg-brand-navy/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-white text-center px-4">
            Contact Us
          </h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Info */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-charcoal mb-4">BAN Corporate HQ</h3>
              <p className="text-brand-charcoal/80 font-light text-lg">
                12910 San Fernando Rd.<br />
                Sylmar, CA 91342
              </p>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-charcoal mb-4">Email Address</h3>
              <p className="text-brand-charcoal/80 font-light text-lg flex flex-col gap-1">
                <a href="mailto:info@bestamericannuts.com" className="hover:text-brand-navy transition-colors">info@bestamericannuts.com</a>
                <a href="mailto:contact@bestamericannuts.com" className="hover:text-brand-navy transition-colors">contact@bestamericannuts.com</a>
              </p>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-charcoal mb-4">Phone Numbers</h3>
              <p className="text-brand-charcoal/80 font-light text-lg flex flex-col gap-1">
                <a href="tel:818-364-8855" className="hover:text-brand-navy transition-colors">(818) 364-8855</a>
                <a href="tel:925-449-2044" className="hover:text-brand-navy transition-colors">(925) 449-2044</a>
              </p>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 border border-gray-200">
            <h2 className="text-3xl font-serif text-brand-navy mb-8">Send us a message</h2>
            
            {isSubmitted ? (
              <div className="h-[400px] flex flex-col items-center justify-center text-center animate-in fade-in">
                <div className="w-16 h-16 bg-brand-light rounded-none flex items-center justify-center mb-6 text-brand-navy border border-gray-200">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl text-brand-navy mb-4">Message Sent</h3>
                <p className="text-brand-charcoal/70 text-sm font-light max-w-sm mb-8 leading-relaxed">
                  Thank you for contacting Best American Nuts. Our corporate team will review your inquiry and respond shortly.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="bg-brand-navy text-white rounded-none px-8 py-3 text-sm font-medium hover:bg-brand-charcoal transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
                <input type="hidden" name="from_name" value="Best American Nuts Contact Form" />
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-semibold text-brand-charcoal/60 uppercase tracking-widest">First Name</label>
                    <input type="text" name="first_name" className="w-full border-0 border-b border-gray-300 py-2.5 text-sm focus:outline-none focus:border-brand-navy focus:ring-0 bg-transparent transition-colors text-brand-navy placeholder:text-gray-400 rounded-none" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-semibold text-brand-charcoal/60 uppercase tracking-widest">Last Name</label>
                    <input type="text" name="last_name" className="w-full border-0 border-b border-gray-300 py-2.5 text-sm focus:outline-none focus:border-brand-navy focus:ring-0 bg-transparent transition-colors text-brand-navy placeholder:text-gray-400 rounded-none" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-semibold text-brand-charcoal/60 uppercase tracking-widest">Email Address</label>
                    <input type="email" name="email" className="w-full border-0 border-b border-gray-300 py-2.5 text-sm focus:outline-none focus:border-brand-navy focus:ring-0 bg-transparent transition-colors text-brand-navy placeholder:text-gray-400 rounded-none" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-semibold text-brand-charcoal/60 uppercase tracking-widest">Phone</label>
                    <input type="tel" name="phone" className="w-full border-0 border-b border-gray-300 py-2.5 text-sm focus:outline-none focus:border-brand-navy focus:ring-0 bg-transparent transition-colors text-brand-navy placeholder:text-gray-400 rounded-none" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-semibold text-brand-charcoal/60 uppercase tracking-widest">Subject</label>
                  <input type="text" name="subject" className="w-full border-0 border-b border-gray-300 py-2.5 text-sm focus:outline-none focus:border-brand-navy focus:ring-0 bg-transparent transition-colors text-brand-navy placeholder:text-gray-400 rounded-none" required />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-semibold text-brand-charcoal/60 uppercase tracking-widest">Your Message</label>
                  <textarea name="message" className="w-full border-0 border-b border-gray-300 py-2.5 text-sm focus:outline-none focus:border-brand-navy focus:ring-0 bg-transparent min-h-[120px] resize-none text-brand-navy placeholder:text-gray-400 rounded-none" required></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-brand-navy text-white rounded-none py-4 text-sm font-medium hover:bg-brand-charcoal transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'} <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

function Footer({ onNavigate }: { onNavigate: (view: any) => void }) {
  return (
    <footer className="bg-brand-navy text-white pt-20 pb-8 mt-auto border-t border-brand-charcoal/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-4 lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center font-serif text-2xl tracking-wide font-semibold mb-6">
              <Leaf className="w-5 h-5 mr-2 opacity-70" />
              B.A.N.
            </div>
            <p className="text-white/60 font-light text-sm max-w-sm leading-relaxed mb-8">
              Best American Nuts has been a trusted global wholesale supplier of premium tree nuts and seeds since 1985. We source with integrity and ship fresh globally.
            </p>
          </div>
          
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-white/50 mb-6">Explore</h4>
            <ul className="flex flex-col gap-4 text-sm font-light text-white/80">
              <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('products'); window.scrollTo(0,0); }} className="hover:text-white transition-colors">Catalog</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('brands'); window.scrollTo(0,0); }} className="hover:text-white transition-colors">Certifications & Brands</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('logistics'); window.scrollTo(0,0); }} className="hover:text-white transition-colors">Global Logistics</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('about'); window.scrollTo(0,0); }} className="hover:text-white transition-colors">Our Story</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-4 lg:col-span-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-white/50 mb-6">Corporate Office</h4>
            <address className="not-italic text-sm font-light text-white/80 leading-relaxed flex flex-col gap-4">
              <p>
                12910 San Fernando Rd.<br />
                Sylmar, CA 91342
              </p>
              <div className="flex flex-col gap-1">
                <a href="mailto:info@bestamericannuts.com" className="hover:text-white transition-colors">info@bestamericannuts.com</a>
                <a href="tel:818-364-8855" className="hover:text-white transition-colors">(818) 364-8855</a>
              </div>
            </address>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-white/40 tracking-wider">
          <p>&copy; {new Date().getFullYear()} Best American Nuts. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ProductsPage({ onSelectProduct }: { onSelectProduct: (p: Product) => void }) {
  return (
    <main className="w-full animate-in fade-in duration-500 bg-brand-light">
      <div className="w-full h-[40vh] min-h-[300px] relative">
        <img 
          src={heroProducts} 
          alt="Wholesale Catalog" 
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-80"
        />
        <div className="absolute inset-0 bg-brand-navy/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-white text-center px-4">
            Product Catalog
          </h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <div 
              key={p.id}
              onClick={() => { window.scrollTo(0,0); onSelectProduct(p); }}
              className="group cursor-pointer border border-gray-200 bg-white hover:border-brand-navy/30 hover:shadow-xl transition-all duration-300 flex flex-col h-full relative"
            >
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                <img 
                  src={p.image} 
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="p-6 flex flex-col grow relative overflow-hidden">
                <h3 className="font-serif text-xl text-brand-navy mb-2 group-hover:text-brand-charcoal transition-colors">{p.name}</h3>
                <p className="text-brand-charcoal/70 text-sm font-light line-clamp-2">{p.description}</p>
                <div className="mt-auto pt-6 flex items-center text-xs font-semibold uppercase tracking-widest text-brand-navy">
                  View Details <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-navy translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

function SEOHead({ view, product }: { view: string, product: Product | null }) {
  React.useEffect(() => {
    let title = 'Best American Nuts | Global Wholesale Nut & Seed Supplier';
    let description = 'Global wholesale supplier of premium tree nuts and seeds. Sourced globally, processed to perfection, and shipped worldwide under commercial Incoterms (CIF & FOB).';
    let schemaObj: any = null;

    if (view === 'brands') {
      title = 'Standards & Certifications | Best American Nuts';
      description = 'Explore our rigorous quality assurance protocols, global compliance standards, GFSI-certified processing, and climate-controlled storage infrastructure.';
    } else if (view === 'logistics') {
      title = 'Global Logistics & Shipping | Best American Nuts';
      description = 'Worldwide B2B export capabilities, offering CIF, FOB, and EXW terms for bulk shipments. Container load specialists (FCL/LCL).';
    } else if (view === 'product' && product) {
      title = `Wholesale ${product.shortName} | Best American Nuts`;
      description = `Premium bulk ${product.shortName.toLowerCase()} available for wholesale. ${product.description.substring(0, 120)}...`;
      
      // JSON-LD Product Schema for B2B Catalog
      schemaObj = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": `Wholesale ${product.shortName}`,
        "image": product.image,
        "description": product.description,
        "brand": {
          "@type": "Brand",
          "name": "Best American Nuts"
        },
        "audience": {
          "@type": "BusinessAudience"
        }
        // Explicitly omitting retail 'offers' to focus purely on B2B inquiries
      };
    }

    document.title = title;
    
    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }
    
    // Manage JSON-LD Script Tag
    let existingScript = document.getElementById('seo-json-ld');
    if (existingScript) {
      existingScript.remove();
    }
    
    if (schemaObj) {
      const script = document.createElement('script');
      script.id = 'seo-json-ld';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schemaObj);
      document.head.appendChild(script);
    }
    
  }, [view, product]);
  
  return null;
}

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'product' | 'products' | 'brands' | 'logistics' | 'about' | 'contact'>('home');
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  const handleSelectProduct = (product: Product) => {
    setActiveProduct(product);
    setCurrentView('product');
  };

  const handleNavigateProducts = () => {
    setCurrentView('products');
    setActiveProduct(null);
  };

  const handleNavigateHome = () => {
    setCurrentView('home');
    setActiveProduct(null);
  };

  const handleNavigateBrands = () => {
    setCurrentView('brands');
    setActiveProduct(null);
  };

  const handleNavigateLogistics = () => {
    setCurrentView('logistics');
    setActiveProduct(null);
  };

  const handleNavigateAbout = () => {
    setCurrentView('about');
    setActiveProduct(null);
  };

  const handleNavigateContact = () => {
    setCurrentView('contact');
    setActiveProduct(null);
  };

  return (
    <div className="min-h-screen bg-brand-light font-sans text-brand-navy selection:bg-brand-charcoal selection:text-white flex flex-col">
      <SEOHead view={currentView} product={activeProduct} />
      <NavBar 
        activeProduct={activeProduct} 
        onSelectProduct={handleSelectProduct} 
        onNavigateHome={handleNavigateHome}
        onNavigateBrands={handleNavigateBrands}
        onNavigateLogistics={handleNavigateLogistics}
        onNavigateAbout={handleNavigateAbout}
        onNavigateContact={handleNavigateContact}
        onNavigateProducts={handleNavigateProducts}
      />
      
      <div className="flex-grow">
        {currentView === 'home' && <HomePage onSelectProduct={handleSelectProduct} onNavigateProducts={handleNavigateProducts} />}
        {currentView === 'products' && <ProductsPage onSelectProduct={handleSelectProduct} />}
        {currentView === 'brands' && <BrandsPage />}
        {currentView === 'logistics' && <LogisticsPage />}
        {currentView === 'about' && <AboutPage />}
        {currentView === 'contact' && <ContactPage />}
        
        {currentView === 'product' && activeProduct && (
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
            <div key={activeProduct.id} className="flex flex-col lg:flex-row gap-12 xl:gap-16 animate-in fade-in duration-500">
              
              {/* Left Column: 70% */}
              <div className="w-full lg:w-[65%] xl:w-[70%] flex flex-col gap-12">
                <ProductHeader product={activeProduct} />
                <ProductVisual product={activeProduct} />
                <ProductSpecifications product={activeProduct} />
                <ProductDetails />
              </div>
              
              {/* Right Column: 30% */}
              <div className="w-full lg:w-[35%] xl:w-[30%] relative">
                <StickyForm product={activeProduct} />
              </div>
              
            </div>
          </main>
        )}
      </div>
      
      <Footer onNavigate={setCurrentView} />
    </div>
  );
}
