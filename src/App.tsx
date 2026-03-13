import React from 'react';
import { ShoppingCart, Instagram, MessageCircle, Star, Cake, Cookie, Coffee } from 'lucide-react';

function App() {
  const products = [
    {
      id: 1,
      name: "Bolo de Morango Supreme",
      description: "Massa fofinha, creme de ninho e muitos morangos frescos.",
      price: "R$ 85,00",
      icon: <Cake className="w-8 h-8 text-pink-500" />
    },
    {
      id: 2,
      name: "Cento de Brigadeiros",
      description: "Brigadeiros gourmet feitos com chocolate belga.",
      price: "R$ 120,00",
      icon: <Cookie className="w-8 h-8 text-brown-600" />
    },
    {
      id: 3,
      name: "Kit Festa Compacto",
      description: "Bolo 1kg + 20 docinhos + 10 cupcakes.",
      price: "R$ 150,00",
      icon: <ShoppingCart className="w-8 h-8 text-purple-500" />
    }
  ];

  const handleOrder = (productName: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de encomendar o ${productName}. Poderia me passar mais informações?`);
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FFFDD0] text-[#3D1C02]">
      {/* Hero Section */}
      <header className="relative h-[500px] flex items-center justify-center text-center px-4 bg-[#FFB7C5]">
        <div className="z-10 bg-white/30 backdrop-blur-md p-8 rounded-2xl shadow-xl">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-md">Doces que Encantam</h1>
          <p className="text-xl mb-6 max-w-lg mx-auto">Tornamos sua festa inesquecível com bolos e doces artesanais feitos com amor.</p>
          <button 
            onClick={() => handleOrder("Geral")}
            className="bg-[#FF69B4] hover:bg-[#FF1493] text-white font-bold py-3 px-8 rounded-full transition-all flex items-center gap-2 mx-auto"
          >
            <MessageCircle size={20} />
            Pedir no WhatsApp
          </button>
        </div>
      </header>

      {/* Products Section */}
      <section className="max-w-6xl mx-auto py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Nosso Menu de Festas</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-6 rounded-2xl shadow-lg border-2 border-[#FFB7C5] hover:scale-105 transition-transform">
              <div className="mb-4 flex justify-center">{product.icon}</div>
              <h3 className="text-2xl font-bold mb-2 text-center">{product.name}</h3>
              <p className="text-gray-600 mb-4 text-center">{product.description}</p>
              <p className="text-2xl font-bold text-[#FF69B4] text-center mb-6">{product.price}</p>
              <button 
                onClick={() => handleOrder(product.name)}
                className="w-full bg-[#3D1C02] text-white py-2 rounded-xl hover:bg-black transition-colors"
              >
                Fazer Pedido
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">O que nossos clientes dizem</h2>
          <div className="flex flex-col gap-8">
            <div className="italic text-lg text-gray-700">
              <Star className="inline text-yellow-500 fill-yellow-500 mr-1" />
              <Star className="inline text-yellow-500 fill-yellow-500 mr-1" />
              <Star className="inline text-yellow-500 fill-yellow-500 mr-1" />
              <Star className="inline text-yellow-500 fill-yellow-500 mr-1" />
              <Star className="inline text-yellow-500 fill-yellow-500 mr-1" />
              <p className="mt-4">"O bolo estava maravilhoso! Todo mundo na festa elogiou a massa e o recheio. Com certeza vou pedir de novo!"</p>
              <span className="font-bold block mt-2">- Maria Silva</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3D1C02] text-white py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="text-2xl font-bold text-[#FFB7C5]">Doceria Gourmet</h3>
            <p>Adoçando seus melhores momentos.</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#FFB7C5] transition-colors flex items-center gap-2">
              <Instagram size={24} /> Instagram
            </a>
            <a href="#" className="hover:text-[#FFB7C5] transition-colors flex items-center gap-2">
              <MessageCircle size={24} /> (11) 99999-9999
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
