import React from 'react';

const Footer = () => (
  <footer className="bg-[#0a0a0a] border-t border-white/[0.04] py-6">
    <div className="container-default flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
      <span>
        © {new Date().getFullYear()}{' '}
        <span className="text-gray-400 font-semibold">Evolution Fitness</span>
        . Todos os direitos reservados.
      </span>
      <span>Ambientes fitness de alto padrão · Brasil</span>
    </div>
  </footer>
);

export default Footer;
