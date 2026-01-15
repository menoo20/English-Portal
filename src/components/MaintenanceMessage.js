"use client";

import Image from "next/image";

export default function MaintenanceMessage() {
    return (
        <div className="maintenance-container">
            <div className="maintenance-content">
                <div className="logo-wrapper">
                    <Image
                        src="/English-Portal/logo/image2.png"
                        alt="Blackgold Logo"
                        width={120}
                        height={120}
                        className="maintenance-logo"
                        priority
                    />
                </div>
                <h1 className="maintenance-title">Thank You</h1>
                <div className="divider"></div>
                <p className="maintenance-text">
                    Thank you all dear teachers for your contributions
                </p>
                <div className="decoration-stars">✨ ✨ ✨</div>
            </div>

            <style jsx>{`
        .maintenance-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #1a1a1a 0%, #000000 100%);
          color: white;
          padding: 2rem;
          text-align: center;
          direction: ltr; /* Ensure English text looks correct */
        }

        .maintenance-content {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          padding: 3rem 2rem;
          border-radius: 20px;
          border: 1px solid rgba(255, 215, 0, 0.2);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
          max-width: 600px;
          width: 100%;
          animation: fadeIn 0.8s ease-out;
        }

        .logo-wrapper {
          margin-bottom: 2rem;
          display: flex;
          justify-content: center;
        }

        .maintenance-logo {
          filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.3));
        }

        .maintenance-title {
          font-family: var(--font-outfit), sans-serif;
          font-size: 3rem;
          font-weight: 700;
          color: #FFD700; /* Gold */
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 2px;
          background: linear-gradient(to right, #FFD700, #FDB931, #FFD700);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .divider {
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.5), transparent);
          margin: 1.5rem auto;
          width: 60%;
        }

        .maintenance-text {
          font-family: var(--font-outfit), sans-serif;
          font-size: 1.5rem;
          line-height: 1.6;
          color: #e0e0e0;
          margin-bottom: 2rem;
          font-weight: 300;
        }

        .decoration-stars {
          font-size: 1.5rem;
          color: #FFD700;
          opacity: 0.8;
          letter-spacing: 1rem;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </div>
    );
}
