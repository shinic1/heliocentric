import React from 'react';

const TermsOfService = () => {
  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>Terms of Service</h1>
      
      <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
      
      <h2>1. Acceptance of Terms</h2>
      <p>By accessing and using this application, you accept and agree to be bound by the terms and provision of this agreement.</p>
      
      <h2>2. Description of Service</h2>
      <p>This application provides mobile services and functionality as described within the app.</p>
      
      <h2>3. User Responsibilities</h2>
      <p>Users are responsible for:</p>
      <ul>
        <li>Providing accurate information</li>
        <li>Maintaining the security of their account</li>
        <li>Using the service in compliance with applicable laws</li>
      </ul>
      
      <h2>4. Privacy</h2>
      <p>Your privacy is important to us. Please review our Privacy Policy to understand our practices.</p>
      
      <h2>5. Prohibited Uses</h2>
      <p>You may not use the service:</p>
      <ul>
        <li>For any unlawful purpose</li>
        <li>To violate any applicable laws or regulations</li>
        <li>To transmit harmful or offensive content</li>
      </ul>
      
      <h2>6. Limitation of Liability</h2>
      <p>The service is provided "as is" without warranties of any kind. We shall not be liable for any damages arising from the use of this service.</p>
      
      <h2>7. Changes to Terms</h2>
      <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting.</p>
      
      <h2>8. Contact Information</h2>
      <p>If you have any questions about these Terms of Service, please contact us through the app or our website.</p>
    </div>
  );
};

export default TermsOfService;