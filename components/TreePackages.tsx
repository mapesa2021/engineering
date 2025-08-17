'use client';
import { useState, useEffect } from 'react';
import { getTreePackages, TreePackage } from '../utils/adminData';
import AnimatedCard from './AnimatedCard';
import PaymentModal from './PaymentModal';

const TreePackages = () => {
  const [packages, setPackages] = useState<TreePackage[]>([]);
  const [paymentModal, setPaymentModal] = useState<{
    isOpen: boolean;
    amount: number;
    title: string;
    description: string;
  }>({
    isOpen: false,
    amount: 0,
    title: '',
    description: ''
  });

  useEffect(() => {
    // Load tree packages from admin data
    const loadPackages = () => {
      const data = getTreePackages();
      console.log('TreePackages: Loaded packages:', data);
      setPackages(data.sort((a, b) => a.order - b.order));
    };

    loadPackages();

    // Listen for storage changes (when admin updates packages)
    const handleStorageChange = () => {
      loadPackages();
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleDonateClick = (treePackage: TreePackage) => {
    console.log('TreePackages: Donate button clicked for package:', treePackage);
    console.log('TreePackages: Current paymentModal state before update:', paymentModal);
    
    const newModalState = {
      isOpen: true,
      amount: treePackage.price,
      title: `${treePackage.name} - ${treePackage.treeCount} Trees`,
      description: `${treePackage.description} - Plant ${treePackage.treeCount} trees for ${treePackage.currency} ${treePackage.price.toLocaleString()}`
    };
    
    console.log('TreePackages: Setting new modal state:', newModalState);
    setPaymentModal(newModalState);
    
    // Force a re-render check
    setTimeout(() => {
      console.log('TreePackages: PaymentModal state after 100ms:', paymentModal);
    }, 100);
  };

  // Test function to manually open modal
  const testOpenModal = () => {
    console.log('TreePackages: Test function called');
    setPaymentModal({
      isOpen: true,
      amount: 50000,
      title: 'Test Package - 10 Trees',
      description: 'This is a test package for debugging'
    });
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Plant a Tree, Grow a Future
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose your package and help restore our planet.
          </p>
          
          {/* Test Button for Debugging */}
          <button
            onClick={testOpenModal}
            className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-300"
          >
            🧪 Test Modal (Debug)
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((treePackage, index) => (
            <AnimatedCard key={treePackage.id} delay={0.1 + index * 0.1}>
              <div className={`bg-white rounded-xl shadow-lg border-2 hover:shadow-xl transition-all duration-300 ${
                treePackage.isPopular 
                  ? 'border-eco-light transform hover:-translate-y-1' 
                  : 'border-eco-pale hover:border-eco-green'
              }`}>
                <div className="p-8 text-center">
                  {/* Popular Badge */}
                  {treePackage.isPopular && (
                    <div className="mb-4">
                      <span className="inline-block bg-yellow-100 text-yellow-800 text-sm font-semibold px-3 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  {/* Tree Icon */}
                  <div className="text-6xl mb-4">🌳</div>
                  
                  {/* Package Name */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {treePackage.name}
                  </h3>
                  
                  {/* Tree Count */}
                  <div className="text-4xl font-bold text-eco-green mb-2">
                    {treePackage.treeCount} Trees
                  </div>
                  
                  {/* Price */}
                  <div className="text-3xl font-bold text-gray-700 mb-6">
                    {treePackage.currency} {treePackage.price.toLocaleString()}
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {treePackage.description}
                  </p>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <ul className="text-left space-y-2">
                      {treePackage.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="text-eco-green mr-2 mt-1">✓</span>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Donate Button */}
                  <button
                    onClick={() => handleDonateClick(treePackage)}
                    className="w-full bg-eco-green text-white py-3 px-6 rounded-lg font-semibold hover:bg-eco-dark transition-colors duration-300"
                  >
                    Donate Now
                  </button>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {packages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No tree packages available yet.</p>
          </div>
        )}
        
        {/* Debug Info */}
        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
          <h3 className="font-semibold mb-2">Debug Info:</h3>
          <p>Packages loaded: {packages.length}</p>
          <p>Modal isOpen: {paymentModal.isOpen ? 'true' : 'false'}</p>
          <p>Modal amount: {paymentModal.amount}</p>
          <p>Modal title: {paymentModal.title}</p>
          <p>Modal description: {paymentModal.description}</p>
        </div>
      </div>
      <PaymentModal
        isOpen={paymentModal.isOpen}
        onClose={() => setPaymentModal({ ...paymentModal, isOpen: false })}
        amount={paymentModal.amount}
        title={paymentModal.title}
        description={paymentModal.description}
      />
    </section>
  );
};

export default TreePackages; 