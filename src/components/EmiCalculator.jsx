import React, { useState } from 'react';
import { Calculator, ArrowRight } from 'lucide-react';

export default function EmiCalculator({ onOpenInquiry }) {
  const [amount, setAmount] = useState(20000000); // 2 Cr
  const [interest, setInterest] = useState(8.5); // 8.5%
  const [tenure, setTenure] = useState(20); // 20 years

  const calculateEmi = () => {
    const p = amount;
    const r = interest / 12 / 100;
    const n = tenure * 12;
    const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(emi);
  };

  const emiVal = calculateEmi();
  const formatCurrency = (val) => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    } else if (val >= 100000) {
      return `₹${(val / 100000).toFixed(2)} Lakhs`;
    }
    return `₹${val.toLocaleString('en-IN')}`;
  };

  return (
    <section className="calculator-section">
      <div className="container-custom">
        <div className="section-header-center" style={{ marginBottom: '50px' }}>
          <span className="section-badge" style={{ color: '#fbbf24' }}>Financial Planning</span>
          <h2 className="section-title" style={{ color: '#fff' }}>Home Loan EMI Calculator</h2>
          <p className="projects-subtitle" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            Plan your real estate investment effortlessly. Calculate your estimated monthly installments in real-time.
          </p>
        </div>

        <div className="calculator-card">
          <div>
            <div className="calc-slider-group">
              <label htmlFor="emi-loan-amount" className="calc-slider-header">
                <span>Loan Amount</span>
                <span className="calc-slider-val">{formatCurrency(amount)}</span>
              </label>
              <input
                id="emi-loan-amount"
                aria-label="Loan Amount Range Input"
                type="range"
                min="2000000"
                max="100000000"
                step="500000"
                value={amount}
                onChange={e => setAmount(Number(e.target.value))}
                className="calc-range-input"
              />
            </div>

            <div className="calc-slider-group">
              <label htmlFor="emi-interest-rate" className="calc-slider-header">
                <span>Interest Rate (% p.a.)</span>
                <span className="calc-slider-val">{interest}%</span>
              </label>
              <input
                id="emi-interest-rate"
                aria-label="Interest Rate Range Input"
                type="range"
                min="6.5"
                max="15.0"
                step="0.1"
                value={interest}
                onChange={e => setInterest(Number(e.target.value))}
                className="calc-range-input"
              />
            </div>

            <div className="calc-slider-group">
              <label htmlFor="emi-loan-tenure" className="calc-slider-header">
                <span>Loan Tenure</span>
                <span className="calc-slider-val">{tenure} Years</span>
              </label>
              <input
                id="emi-loan-tenure"
                aria-label="Loan Tenure Range Input"
                type="range"
                min="5"
                max="30"
                step="1"
                value={tenure}
                onChange={e => setTenure(Number(e.target.value))}
                className="calc-range-input"
              />
            </div>
          </div>

          <div className="calc-result-box">
            <Calculator size={36} style={{ color: '#fbbf24', marginBottom: '12px' }} />
            <span className="calc-emi-title">Estimated Monthly EMI</span>
            <div className="calc-emi-amount">₹{emiVal.toLocaleString('en-IN')}</div>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', marginBottom: '20px' }}>
              Calculated for {formatCurrency(amount)} loan over {tenure} years @ {interest}% interest.
            </p>
            <button
              onClick={() => onOpenInquiry()}
              className="btn-primary-custom"
              style={{ background: '#fbbf24', color: '#111827', width: '100%', justifyContent: 'center' }}
            >
              <span>Get Loan Assistance</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
