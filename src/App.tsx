import { ShoppingCart, Instagram, MessageCircle, Star, Cake, Cookie, MapPin, Phone, ArrowRight, Heart, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const products = [
    {
      id: 1,
      name: "Bolo de Morango Supreme",
      description: "Massa amanteigada, creme aveludado de leite ninho e morangos frescos selecionados.",
      price: "R$ 85,00",
      image: "/images/strawberry-cake.png",
      tag: "Mais Vendido"
    },
    {
      id: 2,
      name: "Cento de Brigadeiros Gourmet",
      description: "Brigadeiros artesanais feitos com o mais puro chocolate belga e confeitos premium.",
      price: "R$ 120,00",
      image: "/images/brigadeiros.png",
      tag: "Favorito"
    },
    {
      id: 3,
      name: "Kit Festa Inesquecível",
      description: "A combinação perfeita: Bolo de 1,5kg, 30 brigadeiros e 12 cupcakes decorados.",
      price: "R$ 190,00",
      image: "/images/party-kit.png",
      tag: "Kit Completo"
    },
    {
      id: 4,
      name: "Torta de Limão",
      description: "Base crocante, recheio cremoso de limão e cobertura de merengue maçaricado.",
      price: "R$ 65,00",
      image: "/images/lemon-pie.png",
      tag: "Clássico"
    },
    {
      id: 5,
      name: "Cupcake Red Velvet",
      description: "Massa vermelha aveludada, cobertura de cream cheese e decoração especial.",
      price: "R$ 8,00 (unidade)",
      image: "/images/red-velvet-cupcake.png",
      tag: "Novidade"
    },
    {
      id: 6,
      name: "Brownie de Chocolate",
      description: "Brownie intenso de chocolate belga, com pedaços de nozes e cobertura de ganache.",
      price: "R$ 7,00 (unidade)",
      image: "/images/brownie.png",
      tag: "Irresistível"
    },
    {
      id: 7,
      name: "Trufa de Maracujá",
      description: "Trufa artesanal com recheio cremoso de maracujá e cobertura de chocolate branco.",
      price: "R$ 4,00 (unidade)",
      image: "/images/passionfruit-truffle.png",
      tag: "Gourmet"
    },
    {
      id: 8,
      name: "Palha Italiana",
      description: "Deliciosa mistura de brigadeiro com biscoito, finalizada com açúcar de confeiteiro.",
      price: "R$ 6,00 (unidade)",
      image: "/images/palha-italiana.png",
      tag: "Tradicional"
    }
  ];

  const handleOrder = (productName: string) => {
    const message = encodeURIComponent(`Olá! Adorei a sua página e gostaria de encomendar o ${productName}. Poderia me passar mais detalhes?`);
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen selection:bg-pink-200 selection:text-pink-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass py-4 px-6 md:px-12 flex justify-between items-center premium-shadow">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold flex items-center gap-2"
        >
          <span className="font-accent text-[var(--primary)] text-3xl">D</span>
          <span className="tracking-widest uppercase text-sm mt-1">oceria Gourmet</span>
        </motion.div>
        <div className="hidden md:flex gap-8 text-sm font-semibold tracking-wider uppercase text-[var(--text-muted)]">
          <a href="#menu" className="hover:text-[var(--primary)] transition-colors">Menu</a>
          <a href="#sobre" className="hover:text-[var(--primary)] transition-colors">Sobre</a>
          <a href="#contato" className="hover:text-[var(--primary)] transition-colors">Contato</a>
        </div>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleOrder("Geral")}
          className="bg-[var(--primary)] text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-pink-200 hover:bg-[var(--primary-hover)] transition-all flex items-center gap-2"
        >
          Pedir Agora
        </motion.button>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero.png" 
            alt="Hero" 
            className="w-full h-full object-cover brightness-[0.7] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[var(--bg-cream)]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="font-accent text-[var(--primary)] text-4xl mb-4 block">Feito com Amor</span>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 drop-shadow-2xl">
              Momentos <span className="text-[var(--primary)]">Doces</span><br />
              Que Encantam.
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Transformamos sonhos em açúcar. Bolos artesanais e doces gourmet 
              desenhados para tornar sua celebração uma obra de arte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleOrder("Cardápio")}
                className="bg-white text-[var(--secondary)] px-10 py-4 rounded-full font-bold text-lg shadow-2xl flex items-center justify-center gap-2"
              >
                Ver Menu Completo <ArrowRight size={20} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
          <motion.div {...fadeIn}>
            <div className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="text-[var(--primary)]" />
            </div>
            <h3 className="text-xl font-bold mb-3">Ingredientes Premium</h3>
            <p className="text-[var(--text-muted)]">Usamos apenas chocolate belga e frutas frescas selecionadas a dedo.</p>
          </motion.div>
          <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
            <div className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="text-[var(--primary)]" />
            </div>
            <h3 className="text-xl font-bold mb-3">Processo Artesal</h3>
            <p className="text-[var(--text-muted)]">Cada doce é feito individualmente, garantindo sabor e beleza únicos.</p>
          </motion.div>
          <motion.div {...fadeIn} transition={{ delay: 0.4 }}>
            <div className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Star className="text-[var(--primary)]" />
            </div>
            <h3 className="text-xl font-bold mb-3">Experiência Única</h3>
            <p className="text-[var(--text-muted)]">Levamos encantamento para sua mesa através de design e paladar.</p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section id="menu" className="py-24 bg-[var(--bg-cream)]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Nossas Delícias</h2>
            <div className="h-1.5 w-24 bg-[var(--primary)] mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {products.map((product, idx) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-[2rem] overflow-hidden premium-shadow group cursor-pointer"
              >
                <div className="h-72 overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-[var(--primary)]">
                    {product.tag}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-[var(--primary)] transition-colors">{product.name}</h3>
                  <p className="text-[var(--text-muted)] mb-6 line-clamp-2 leading-relaxed">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[var(--secondary)]">{product.price}</span>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleOrder(product.name)}
                      className="bg-[var(--secondary)] text-white p-3 rounded-full hover:bg-black transition-colors"
                    >
                      <ShoppingCart size={20} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto glass p-12 rounded-[3rem] premium-shadow border-none relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Star size={120} />
            </div>
            <div className="relative z-10 text-center">
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-2xl italic text-[var(--secondary)] leading-relaxed mb-8">
                "O bolo estava maravilhoso! Todo mundo na festa elogiou a massa e o recheio. 
                A apresentação é de outro mundo. Com certeza se tornou nossa doceria oficial!"
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-[var(--primary)] rounded-full flex items-center justify-center text-white font-bold">MS</div>
                <div className="text-left">
                  <span className="font-bold block">Maria Silva</span>
                  <span className="text-sm text-[var(--text-muted)]">Cliente há 2 anos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-[var(--secondary)] text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="text-3xl font-bold flex items-center gap-2 mb-6">
                <span className="font-accent text-[var(--primary)] text-4xl">D</span>
                <span className="tracking-widest uppercase text-base mt-1">oceria Gourmet</span>
              </div>
              <p className="text-gray-400 max-w-sm mb-8">
                Levando sofisticação e doçura para os seus momentos mais especiais. 
                Sediados em São Paulo, atendemos toda a região metropolitana.
              </p>
              <div className="flex gap-4">
                <motion.a whileHover={{ y: -3 }} href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-[var(--secondary)] transition-all">
                  <Instagram size={18} />
                </motion.a>
                <motion.a whileHover={{ y: -3 }} href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-[var(--secondary)] transition-all">
                  <MessageCircle size={18} />
                </motion.a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Contato</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-center gap-3"><Phone size={18} className="text-[var(--primary)]" /> (11) 99999-9999</li>
                <li className="flex items-center gap-3"><MapPin size={18} className="text-[var(--primary)]" /> São Paulo, SP</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Horários</h4>
              <ul className="space-y-4 text-gray-400">
                <li>Ter - Sex: 09h às 18h</li>
                <li>Sáb: 09h às 15h</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-center text-sm text-gray-500">
            &copy; 2024 Doceria Gourmet. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* Floating CTA */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => handleOrder("Suporte")}
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-5 rounded-full shadow-2xl z-50"
      >
        <MessageCircle size={30} />
      </motion.button>
    </div>
  );
}

export default App;
