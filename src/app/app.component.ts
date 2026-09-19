import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

export interface ProductItem {
  id: string;
  name: string;
  tamilName: string;
  category: string;
  description: string;
  highlight?: string;
  badge?: string;
  benefits?: string[];
  unitNote?: string;
}

export interface CartItem {
  product: ProductItem;
  quantity: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TJ HOMEMADE PRODUCTS';
  businessName = 'TJ HOMEMADE PRODUCTS';
  phone = '9944079453';
  phoneDisplay = '+91 9944079453';
  instagramHandle = 'dairy_of_d88';
  youtubeChannel = 'TJ Channel';
  activeCategory = 'all';
  isMobileMenuOpen = false;
  activeFlyerModal: string | null = null;
  showCartModal = false;

  cart: CartItem[] = [];

  purityBadges = [
    { title: '100% Pure', desc: 'Zero artificial preservatives or adulterants', icon: '🌿' },
    { title: 'Homemade with Love', desc: 'Lovingly hand-crafted in small hygienic batches', icon: '❤️' },
    { title: 'No Chemicals', desc: 'No synthetic colors, flavours, or chemicals', icon: '🚫' },
    { title: 'All State Delivery', desc: 'Safe doorstep delivery across all states in India', icon: '🚚' }
  ];

  categories = [
    {
      id: 'all',
      name: 'All Products',
      tamilName: 'அனைத்து பொருட்கள்',
      icon: '✨',
      badgeClass: 'badge-all',
      accentColor: '#1b4332'
    },
    {
      id: 'masalas',
      name: 'Homemade Masalas & Podis',
      tamilName: 'வீட்டு மசாலா & பொடிகள்',
      icon: '🌶️',
      badgeClass: 'badge-masala',
      accentColor: '#9e2a2b'
    },
    {
      id: 'health',
      name: 'Health & Taste',
      tamilName: 'ஆரோக்கியம் & சுவை',
      icon: '🥣',
      badgeClass: 'badge-health',
      accentColor: '#c67d0a'
    },
    {
      id: 'herbal',
      name: 'Herbal & Beauty Care',
      tamilName: 'மூலிகை & அழகு பராமரிப்பு',
      icon: '🌿',
      badgeClass: 'badge-herbal',
      accentColor: '#2d6a4f'
    },
    {
      id: 'pickles',
      name: 'All Type of Pickles',
      tamilName: 'பாரம்பரிய ஊறுகாய் வகைகள்',
      icon: '🫙',
      badgeClass: 'badge-pickle',
      accentColor: '#2c5e43'
    },
    {
      id: 'soaps',
      name: 'Homemade Soaps',
      tamilName: 'இயற்கை மூலிகை சோப்புகள்',
      icon: '🧼',
      badgeClass: 'badge-soap',
      accentColor: '#6a3875'
    }
  ];

  products: ProductItem[] = [
    // Masalas
    {
      id: 'idli-podi',
      name: 'Idli Podi',
      tamilName: 'இட்லி பொடி (கன் பவுடர்)',
      category: 'masalas',
      highlight: 'Our Special ★',
      badge: 'Signature Special',
      description: 'Our signature roasted lentil & red chilli gun powder, freshly roasted to perfection with sesame & aromatic hing.',
      benefits: ['Traditional slow-roast method', 'Crunchy lentil texture', 'Perfect with warm gingelly oil or ghee'],
      unitNote: 'Fresh Batch Available'
    },
    {
      id: 'karuvapillai-podi',
      name: 'Karuvapillai Podi',
      tamilName: 'கருவேப்பிலை பொடி',
      category: 'masalas',
      highlight: 'Digestive & Hair Health',
      badge: 'Nutrient Rich',
      description: 'Shade-dried fresh curry leaves ground with medicinal spices. Rich in iron, promotes hair growth & smooth digestion.',
      benefits: ['High natural iron content', 'Aids gastrointestinal health', 'Mix with hot rice & ghee'],
      unitNote: '100% Herbal Blend'
    },
    {
      id: 'murungai-keerai-podi',
      name: 'Murungai Keerai Podi',
      tamilName: 'முருங்கை கீரை பொடி',
      category: 'masalas',
      highlight: 'Superfood Power',
      badge: 'Moringa Superfood',
      description: 'Organic moringa drumstick leaves ground with wholesome lentils. A rich source of plant iron, calcium, and vitality.',
      benefits: ['Boosts haemoglobin levels', 'Immunity supporting vitamins', 'Authentic homely aroma'],
      unitNote: 'Daily Health Podi'
    },
    {
      id: 'chilli-powder',
      name: 'Pure Chilli Powder',
      tamilName: 'தனி மிளகாய் தூள்',
      category: 'masalas',
      highlight: 'Sun-dried Guntur/Salem Chillies',
      description: 'Pure sun-cured red chillies pounded with zero synthetic color or adulteration. Imparts natural fiery color & taste.',
      benefits: ['No Sudan dye or chemicals', 'Vibrant natural red hue', 'Intense aromatic pungency'],
      unitNote: 'Pure & Unadulterated'
    },
    {
      id: 'coriander-powder',
      name: 'Pure Coriander Powder',
      tamilName: 'மல்லி தூள் (தனியா)',
      category: 'masalas',
      highlight: 'Aromatic Whole Dhaniya',
      description: 'Sun-dried whole coriander seeds gently roasted and milled for unmatched fresh aroma in everyday cooking.',
      benefits: ['Retains natural essential oils', 'Cooling digestive properties', 'Wholesome curry base'],
      unitNote: 'Freshly Milled'
    },
    {
      id: 'chicken-masala',
      name: 'Chicken Masala',
      tamilName: 'சிக்கன் மசாலா',
      category: 'masalas',
      highlight: 'Village Style Blend',
      badge: 'Non-Veg Special',
      description: 'Handcrafted Tamil village spices roasted in traditional iron pans for mouthwatering gravies, curries & roasts.',
      benefits: ['Balanced heat & fragrance', 'No MSG or taste boosters', 'Traditional hand-blended formula'],
      unitNote: 'Signature Masala'
    },
    {
      id: 'fish-curry-masala',
      name: 'Fish Curry Masala',
      tamilName: 'மீன் குழம்பு மசாலா',
      category: 'masalas',
      highlight: 'Tangy Coastal Flavor',
      description: 'Special coastal spice recipe curated for authentic Meen Kuzhambu and fish roasts with perfect tartness & kick.',
      benefits: ['Infused with pepper & cumin notes', 'Enhances seafood richness', 'Secret grandma recipe'],
      unitNote: 'Coastal Special'
    },
    {
      id: 'sambar-powder',
      name: 'Traditional Sambar Powder',
      tamilName: 'சாம்பார் பொடி',
      category: 'masalas',
      highlight: 'Authentic Homestyle Aroma',
      badge: 'Daily Essential',
      description: 'Roasted to golden brown perfection with premium lentils, fenugreek, coriander, and spices for fragrant south Indian sambar.',
      benefits: ['Homely aromatic aroma', 'Consistent daily flavor', 'Just 1-2 spoons is enough'],
      unitNote: 'Pure Homestyle'
    },

    // Health & Taste
    {
      id: 'sathu-maavu',
      name: 'Health Mix Drink (Sathu Maavu)',
      tamilName: 'சத்து மாவு கஞ்சி பவுடர்',
      category: 'health',
      highlight: 'Multi-grain Nutritional Powerhouse',
      badge: 'All-Age Nutrition',
      description: 'Wholesome blend of sprouted millets, pulses, cereals, nuts, and dry ginger. Ideal nutritious breakfast drink for toddlers to elders.',
      benefits: ['Sprouted grains for easy digestion', 'Rich in natural protein & fibre', 'Wholesome sustenance without refined sugars'],
      unitNote: 'Sprouted Multi-Grain'
    },
    {
      id: 'healthy-laddos',
      name: 'Healthy Laddos',
      tamilName: 'ஆரோக்கியமான பாரம்பரிய லட்டு',
      category: 'health',
      highlight: 'Made with Pure Ghee & Natural Jaggery',
      badge: 'Guilt-Free Sweet',
      description: 'Delicious nutrient-packed energy balls prepared with roasted millets, sesame, dry fruits, and pure organic jaggery. Zero white sugar.',
      benefits: ['Sweetened with pure nattu sakkarai / jaggery', 'Immunity & energy booster', 'Delicious healthy snack for children'],
      unitNote: 'Fresh Hand-rolled'
    },

    // Herbal & Beauty Care
    {
      id: 'shikakai-powder',
      name: 'Shikakai Powder',
      tamilName: 'பாரம்பரிய சிகக்காய் தூள்',
      category: 'herbal',
      highlight: '100% Herbal Hair Cleanser',
      badge: 'Chemical Free',
      description: 'Ancient Ayurvedic hair wash blend made of pure shikakai, soapnuts, fenugreek, green gram, and amla. Gentle on hair and scalp.',
      benefits: ['Promotes natural hair shine', 'Controls dandruff & itching', 'Replaces toxic chemical shampoos'],
      unitNote: 'Pure Botanical'
    },
    {
      id: 'nalangu-maavu',
      name: 'Nalangu Maavu',
      tamilName: 'நலங்கு மாவு (ஹெர்பல் பாத் பவுடர்)',
      category: 'herbal',
      highlight: 'Traditional Aromatic Herbal Bath Powder',
      badge: 'Glow Skincare',
      description: 'Aromatic bath powder enriched with wild turmeric, rose petals, avarampoo, vettiver, and sandalwood notes for radiant skin.',
      benefits: ['Natural glowing complexion', 'Calms body heat & removes blemishes', 'Safe for babies & adults alike'],
      unitNote: 'Aromatic Herbs'
    },
    {
      id: 'herbal-hair-wash',
      name: 'Herbal Hair Wash Powder',
      tamilName: 'மூலிகை தலைக்குளியல் பொடி',
      category: 'herbal',
      highlight: 'Deep Root Conditioning',
      description: 'Formulated with hibiscus leaves, curry leaves, bhringraj, and tulsi to strengthen hair follicles and prevent split ends.',
      benefits: ['Reduces excessive hair fall', 'Retains scalp moisture balance', 'Cooling effect on tired eyes'],
      unitNote: 'Handmade Herb Blend'
    },
    {
      id: 'herbal-oil',
      name: 'Herbal Hair Oil',
      tamilName: 'மூலிகை தலைமுடி எண்ணெய்',
      category: 'herbal',
      highlight: 'Cold-Infused Ayurvedic Elixir',
      badge: 'Special Formulation',
      description: 'Slow-boiled cold-pressed coconut & sesame oil infused with 18+ medicinal herbs like Amla, Bringraj, Aloe Vera, and Small Onions.',
      benefits: ['Deep follicle nourishment', 'Stimulates thick hair growth', 'Prevents premature greying'],
      unitNote: 'Pure Cold-Pressed'
    },

    // All Type of Pickles
    {
      id: 'traditional-pickles',
      name: 'All Type of Pickles',
      tamilName: 'கைவினை பாரம்பரிய ஊறுகாய்கள்',
      category: 'pickles',
      highlight: 'Sun-Cured in Pure Sesame Oil',
      badge: 'Zero Chemicals',
      description: 'Home-style artisanal pickles including Spicy Mango, Tender Lemon, Garlic (Poondu), and Citron/Mixed Veggies cured naturally in sunlight.',
      benefits: ['Prepared in cold-pressed gingelly oil', 'No vinegar, sodium benzoate, or chemicals', 'Authentic sharp grandma taste'],
      unitNote: 'Glass Jar Packaging'
    },

    // Homemade Soaps
    {
      id: 'herbal-soaps',
      name: 'Herbal & Natural Soaps',
      tamilName: 'மூலிகை மற்றும் இயற்கை சோப்புகள்',
      category: 'soaps',
      highlight: 'Handmade Artisan Bars',
      badge: 'Skin Friendly',
      description: 'Gentle, cold-processed soaps made with pure coconut oil, neem, turmeric, aloe vera, and natural essential oils.',
      benefits: ['Sulphate, paraben & cruelty free', 'Hydrates sensitive skin gently', 'Rich natural lather & subtle aroma'],
      unitNote: 'Natural Cold-Processed'
    }
  ];

  testimonials = [
    {
      name: 'Meenakshi Sundaram',
      location: 'Coimbatore',
      rating: 5,
      comment: 'The Idli Podi is literally the best I have ever tasted! You can immediately smell the purity and aroma of the roasted lentils. My kids love it with hot idlis.',
      tag: 'Verified Order'
    },
    {
      name: 'Kavitha Ramachandran',
      location: 'Bengaluru',
      rating: 5,
      comment: 'Ordered Sathu Maavu and Nalangu Maavu. The bath powder makes skin glowing and smooth, and the health mix is so authentic. God bless your small dream business!',
      tag: 'Repeat Customer'
    },
    {
      name: 'Anand & Revathi',
      location: 'Chennai',
      rating: 5,
      comment: 'We received delivery in perfect packaging. The pure chilli powder and sambar powder took our daily cooking back to our village home taste. Highly recommended!',
      tag: 'Regular Buyer'
    }
  ];

  faqs = [
    {
      question: 'Are there really no chemicals or preservatives used?',
      answer: 'Yes, 100%! We strictly avoid chemical preservatives, synthetic colors, MSG, and artificial flavours. Everything is made in clean, hygienic home batches using ingredients we feed our own family.'
    },
    {
      question: 'Do you deliver outside Tamil Nadu?',
      answer: 'Yes! We offer pan-India courier delivery across all states. Products are safely packed in protective food-grade packs to ensure freshness during transit.'
    },
    {
      question: 'How can I get the updated price list & place an order?',
      answer: 'Simply tap the WhatsApp button or DM us at +91 9944079453. We will immediately share the complete price list with gram/kg options and help you place your order!'
    },
    {
      question: 'How should the powders and masalas be stored?',
      answer: 'Keep them in an airtight container in a cool, dry place. Using a dry spoon ensures maximum freshness and shelf life for months.'
    }
  ];

  get filteredProducts(): ProductItem[] {
    if (this.activeCategory === 'all') {
      return this.products;
    }
    return this.products.filter(item => item.category === this.activeCategory);
  }

  get cartTotalCount(): number {
    return this.cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  setActiveCategory(catId: string) {
    this.activeCategory = catId;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  openFlyerModal(poster: string) {
    this.activeFlyerModal = poster;
  }

  closeFlyerModal() {
    this.activeFlyerModal = null;
  }

  toggleCartModal() {
    this.showCartModal = !this.showCartModal;
  }

  addToCart(product: ProductItem) {
    const existing = this.cart.find(c => c.product.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      this.cart.push({ product, quantity: 1 });
    }
  }

  removeFromCart(productId: string) {
    this.cart = this.cart.filter(item => item.product.id !== productId);
  }

  updateQuantity(productId: string, delta: number) {
    const item = this.cart.find(c => c.product.id === productId);
    if (item) {
      item.quantity += delta;
      if (item.quantity <= 0) {
        this.removeFromCart(productId);
      }
    }
  }

  isInCart(productId: string): boolean {
    return this.cart.some(c => c.product.id === productId);
  }

  getCartItemQuantity(productId: string): number {
    const item = this.cart.find(c => c.product.id === productId);
    return item ? item.quantity : 0;
  }

  sendWhatsAppCart() {
    if (this.cart.length === 0) {
      this.orderGeneralViaWhatsApp();
      return;
    }

    const itemsText = this.cart
      .map((item, index) => `${index + 1}. *${item.product.name}* (${item.product.tamilName}) - Qty: ${item.quantity}`)
      .join('%0A');

    const message = `Hello *TJ Homemade Products*! 🌿%0A%0AI would like to order / enquire about the following products from your website:%0A%0A${itemsText}%0A%0APlease share the price list, payment options and delivery details for my pincode. Thank you!`;
    const url = `https://wa.me/91${this.phone}?text=${message}`;
    window.open(url, '_blank');
  }

  orderProductViaWhatsApp(product: ProductItem) {
    const message = `Hello *TJ Homemade Products*! 🌿%0A%0AI would like to enquire about: *${product.name}* (${product.tamilName}).%0APlease send me the price list and quantity options.`;
    const url = `https://wa.me/91${this.phone}?text=${message}`;
    window.open(url, '_blank');
  }

  orderGeneralViaWhatsApp() {
    const message = `Hello *TJ Homemade Products*! 🌿%0A%0AI saw your launch poster on the website. Please share the complete price list and order details. Support your small dream! ❤️`;
    const url = `https://wa.me/91${this.phone}?text=${message}`;
    window.open(url, '_blank');
  }
}
