import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>Privacy Policy</h1>
      
      <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
      
      <h2>1. Information We Collect</h2>
      <p>We may collect the following types of information:</p>
      <ul>
        <li>Information you provide directly to us</li>
        <li>Usage information and analytics</li>
        <li>Device information</li>
      </ul>
      
      <h2>2. How We Use Your Information</h2>
      <p>We use collected information to:</p>
      <ul>
        <li>Provide and improve our services</li>
        <li>Communicate with you</li>
        <li>Ensure security and prevent fraud</li>
        <li>Comply with legal obligations</li>
      </ul>
      
      <h2>3. Information Sharing</h2>
      <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except:</p>
      <ul>
        <li>To comply with legal requirements</li>
        <li>To protect our rights and safety</li>
        <li>With your explicit consent</li>
      </ul>
      
      <h2>4. Data Security</h2>
      <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
      
      <h2>5. Data Retention</h2>
      <p>We retain your information only as long as necessary to fulfill the purposes outlined in this policy or as required by law.</p>
      
      <h2>6. Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access your personal information</li>
        <li>Correct inaccurate data</li>
        <li>Request deletion of your data</li>
        <li>Withdraw consent</li>
      </ul>
      
      <h2>7. Children's Privacy</h2>
      <p>Our service is not intended for children under 13. We do not knowingly collect personal information from children under 13.</p>
      
      <h2>8. Changes to This Policy</h2>
      <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>
      
      <h2>9. Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, please contact us through the app or our website.</p>
    </div>
  );
};

export default PrivacyPolicy;