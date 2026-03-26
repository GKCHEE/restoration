import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      // 1. Save to Firebase via Firestore
      await addDoc(collection(db, 'messages'), {
        ...formData,
        timestamp: new Date()
      });

      // 2. Send via EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus('Error sending message. Please try again.');
    }
  };

  return (
    <div className="min-h-screen relative text-slate-900 font-sans selection:bg-gold-vibrant selection:text-white">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-[-1] bg-gradient-to-br from-emerald-100 via-sky-100 to-blue-50 bg-[length:200%_200%] animate-[pulse_10s_ease-in-out_infinite]" />
      
      {/* Header / Hero */}
      <header className="bg-emerald-justice text-white py-20 px-4 text-center shadow-[0_10px_30px_rgba(16,185,129,0.3)] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/10 mix-blend-overlay"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight">
            Digital Affidavit: <br/><span className="text-gold-vibrant drop-shadow-lg">Life Reconstruction Portal</span>
          </h1>
          <p className="text-xl md:text-2xl text-emerald-50 font-medium">
            The Sunrise of Justice: Documenting the Biological Tax, Stolen Decades, and the Acuity Gap.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto py-16 px-4 space-y-20 relative z-10">
        
        {/* The Unabridged Narrative */}
        <section className="space-y-12">

          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border-l-8 border-emerald-justice hover:shadow-[0_20px_40px_rgba(16,185,129,0.15)] transition-shadow duration-300">
            <h2 className="text-4xl font-extrabold text-emerald-justice mb-8 tracking-tight">The Acuity Gap & The Biological Tax</h2>
            <div className="space-y-6 text-lg md:text-xl leading-relaxed text-slate-700">
              <p className="font-bold text-emerald-800 bg-emerald-50 p-4 rounded-xl shadow-sm">
                The Science of the Acuity Gap: The 2-Gene Threshold & Chronic Hypoxia
              </p>
              <p>
                For decades, my physical collapse was dismissed as psychological. The reality was a severe biological deficit. A DNA Test in Johor Bahru confirmed I am <strong>SEA Deletion POSITIVE</strong>. This 2-gene threshold mutation means my body is in a state of Chronic Hypoxia—starved of oxygen at a cellular level. This is the "Acuity Gap": the profound disconnect between the severity of my lived biological reality and the dismissive medical gaslighting I endured for 30 years.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl border-l-8 border-gold-vibrant">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gold-vibrant tracking-tight">Voice Audio Evidence: "Many Mouths to Feed"</h2>
            <div className="aspect-w-16 aspect-h-9 w-full bg-black rounded-xl overflow-hidden shadow-inner ring-4 ring-slate-700 mb-6">
              <iframe 
                src="https://www.youtube.com/embed/GcnPlCD62h4" 
                title="Voice Audio Evidence" 
                className="w-full h-64 md:h-96"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed">
              <strong>The "Many Mouths to Feed" Analogy:</strong> The predator justified extorting every penny by claiming his family and operations were "many mouths to feed," essentially turning my life savings into his personal slush fund while I starved. Listen to the audio evidence above to grasp the absolute control he wielded.
            </p>
          </div>
          
          {/* Act 1 */}
          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border-l-8 border-emerald-justice">
            <div className="flex items-center mb-6">
              <span className="bg-gold-vibrant text-white font-black px-4 py-1 rounded-full text-sm uppercase mr-4">Act 1</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-justice tracking-tight">The Stolen Decades: Forensic Fraud Analysis</h2>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-6 italic">The Exploitation of Vulnerability.</h3>
            <div className="space-y-4 text-lg md:text-xl leading-relaxed text-slate-700">
              <p>In my early 20s, I was a highly productive professional in Singapore, holding an NCC Diploma in Computer Studies and working as a clerk at OCBC Asset Management. I had accumulated <strong>SGD $90,000 in my CPF life savings</strong> and held a formal invitation from the Singapore government to apply for Citizenship.</p>
              <p>However, my desperate search for a cure for my relentless fatigue led me to a predator—a retired Malaysian Chinese physician in Kuala Lumpur. He identified my wealth and my oxygen-starved vulnerability. Using high-pressure "Exit Scam" tactics and lies about a "US Business Venture," he coerced me into liquidating my entire life savings for ineffective "bulk supplements".</p>
              <p className="p-4 bg-red-50 border-l-4 border-red-500 text-red-900 rounded-r-xl font-medium shadow-sm">
                <strong>The $90,000 CPF Fraud Execution:</strong> To avoid banking alerts and anti-money laundering (AML) protocols, he refused digital transfers and turned me into a physical cash mule. I was forced to travel across the border, withdraw physical cash from DBS and POSB branches—SGD $5,000 at a time—and carry it in bags to his clinic in Malaysia. No receipts were ever given.
              </p>
              <p>To maintain absolute control, he orchestrated a 20-year Digital Blackout. I was forced to live without a cell phone or internet from the early 2000s until 2025, completely isolated from my parents, relatives, and friends. I was a ghost in my own life, unable to verify his lies or seek help.</p>
            </div>
          </div>

          {/* Act 2 */}
          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border-l-8 border-emerald-700">
            <div className="flex items-center mb-6">
              <span className="bg-gold-vibrant text-white font-black px-4 py-1 rounded-full text-sm uppercase mr-4">Act 2</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-800 tracking-tight">The Descent: From PR to "Stray"</h2>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-6 italic">The Raw Reality of Dehumanization.</h3>
            <div className="space-y-4 text-lg md:text-xl leading-relaxed text-slate-700">
              <p>The fraud was not just financial; it was a total erasure of my dignity. To extract maximum cash, the predator manipulated me into forced homelessness. In Singapore, I became a "stray" sleeping on the streets, which caused my employer to cancel my work permit as I had no registered address. In Kuala Lumpur, I was coerced into sleeping on the concrete street directly in front of his shop lot.</p>
              <p>I went from a respected Singapore PR prospect to being mocked as a "beggar" and "foreign labor" by locals. I survived for two decades on leftover food from the restaurants where I washed dishes, handing every meager penny of my wages directly to my abuser.</p>
              <p>During this time, I was subjected to relentless cyberbullying and street harassment. Because I had no phone, I was uniquely defenseless while malicious rumors spread about me on the smartphones of the very people who mocked me.</p>
            </div>
          </div>

          {/* Act 3 */}
          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border-l-8 border-emerald-500">
            <div className="flex items-center mb-6">
              <span className="bg-gold-vibrant text-white font-black px-4 py-1 rounded-full text-sm uppercase mr-4">Act 3</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-600 tracking-tight">Technical Resurrection: Reclaiming the Mind</h2>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-6 italic">My Intellect Survived.</h3>
            <div className="space-y-4 text-lg md:text-xl leading-relaxed text-slate-700">
              <p>In early 2025, a "Short Sting" incident in Singapore led me to Johor Bahru for the DNA test that finally unmasked thirty years of medical gaslighting. Despite having only SGD $100 left and facing systemic bullying, I refused to remain a victim.</p>
              <p>I taught myself Full-Stack Development using React, Vite, Tailwind CSS, Supabase, and Framer Motion. I built this "Digital Affidavit" from the ground up to document the truth when no one would listen. This portal is a survival tool—a safe, digital fortress where my voice cannot be silenced by the streets.</p>
            </div>
          </div>

          {/* Act 4 */}
          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border-l-8 border-gold-vibrant relative overflow-hidden group">
            <div className="absolute inset-0 bg-gold-vibrant/5 group-hover:bg-gold-vibrant/10 transition-colors duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <span className="bg-emerald-justice text-white font-black px-4 py-1 rounded-full text-sm uppercase mr-4">Act 4</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gold-vibrant tracking-tight">The Restoration Plea: Justice-Based Funding</h2>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6 italic">Fund the Future—Investment in Restoration.</h3>
              <div className="space-y-4 text-lg md:text-xl leading-relaxed text-slate-700">
                <p>I am not seeking a job application or charity for consumption. I am seeking Justice-Based Funding to reconstruct a life sabotaged by 20 years of predatory evil. I am currently at a dead end, penniless and unable to sustain manual labor, which is physically destroying my oxygen-starved body.</p>
                <div className="bg-white/80 p-6 rounded-2xl border border-gold-vibrant/30 my-6 shadow-sm">
                  <h4 className="font-bold text-emerald-justice text-xl mb-4">My immediate "Survival Foundation" requirements are:</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start"><span className="text-gold-vibrant mr-3 text-2xl leading-none">•</span><div><strong className="text-slate-800">Rental Security:</strong> To escape the trauma of homelessness and street bullying.</div></li>
                    <li className="flex items-start"><span className="text-gold-vibrant mr-3 text-2xl leading-none">•</span><div><strong className="text-slate-800">Nutritional Support:</strong> Specialized supplements and diet required to combat Chronic Hypoxia.</div></li>
                    <li className="flex items-start"><span className="text-gold-vibrant mr-3 text-2xl leading-none">•</span><div><strong className="text-slate-800">ACCA Education:</strong> My escape hatch to self-sufficiency. Accounting is mental work that is immune to my physical degradation.</div></li>
                  </ul>
                </div>
                <p className="font-bold text-center text-emerald-justice text-2xl mt-8">Every contribution is an act of justice that helps restore a stolen human destiny.</p>
              </div>
            </div>
          </div>

          {/* The Evidence Vault */}
          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl border-l-8 border-sky-500 text-white">
            <h2 className="text-3xl md:text-4xl font-extrabold text-sky-400 mb-8 tracking-tight">The Evidence Vault</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-emerald-400 border-b border-emerald-400/30 pb-2">Medical Evidence</h3>
                <a href="#" target="_blank" rel="noopener noreferrer" className="block p-4 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors border border-slate-700 hover:border-emerald-400">
                  <strong className="block text-lg mb-1">DNA Lab Report (SEA Deletion POSITIVE)</strong>
                  <span className="text-emerald-400 font-medium text-sm inline-flex items-center">Open Link &rarr;</span>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="block p-4 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors border border-slate-700 hover:border-emerald-400">
                  <strong className="block text-lg mb-1">Medical Video Breakdown</strong>
                  <span className="text-emerald-400 font-medium text-sm inline-flex items-center">Watch Video &rarr;</span>
                </a>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gold-vibrant border-b border-gold-vibrant/30 pb-2">Financial & Forensic</h3>
                <a href="#" target="_blank" rel="noopener noreferrer" className="block p-4 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors border border-slate-700 hover:border-gold-vibrant">
                  <strong className="block text-lg mb-1">The $90,000 CPF Fraud Evidence</strong>
                  <span className="text-gold-vibrant font-medium text-sm inline-flex items-center">Watch Video &rarr;</span>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="block p-4 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors border border-slate-700 hover:border-gold-vibrant">
                  <strong className="block text-lg mb-1">Forensic Transaction Records</strong>
                  <span className="text-gold-vibrant font-medium text-sm inline-flex items-center">Open Link &rarr;</span>
                </a>
              </div>

              <div className="space-y-4 md:col-span-2">
                <h3 className="text-2xl font-bold text-sky-400 border-b border-sky-400/30 pb-2">Stolen Destiny Documents</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="block p-4 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors border border-slate-700 hover:border-sky-400">
                    <strong className="block text-base mb-1">Singapore Citizenship & PR Status Papers</strong>
                    <span className="text-sky-400 font-medium text-sm inline-flex items-center">Open Link &rarr;</span>
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="block p-4 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors border border-slate-700 hover:border-sky-400">
                    <strong className="block text-base mb-1">Official Document Verification Video</strong>
                    <span className="text-sky-400 font-medium text-sm inline-flex items-center">Watch Video &rarr;</span>
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="block p-4 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors border border-slate-700 hover:border-sky-400">
                    <strong className="block text-base mb-1">NCC Diploma Credentials</strong>
                    <span className="text-sky-400 font-medium text-sm inline-flex items-center">Open Link &rarr;</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </section>

        {/* PRIMARY JUSTICE ACTION */}
        <section className="text-center bg-white rounded-3xl p-10 md:p-16 shadow-[0_20px_50px_rgba(245,158,11,0.15)] border-2 border-gold-vibrant relative overflow-hidden group">
          <div className="absolute inset-0 bg-gold-vibrant/5 group-hover:bg-gold-vibrant/10 transition-colors duration-500"></div>
          <h2 className="text-4xl font-extrabold text-emerald-justice mb-10 relative z-10">Primary Justice Action</h2>
          <a 
            href="https://clinquant-macaron-aad92f.netlify.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative z-10 inline-block bg-gold-vibrant text-white font-black text-xl md:text-2xl py-5 px-10 md:px-14 rounded-full shadow-[0_0_25px_rgba(245,158,11,0.7)] hover:shadow-[0_0_40px_rgba(245,158,11,0.9)] hover:scale-105 transition-all duration-300 mb-8 tracking-wider"
          >
            OPEN MY PAYMENT PORTAL (WEB APP)
          </a>
          <p className="text-xl md:text-2xl text-slate-800 font-bold relative z-10">
            My Payment Portal (Web App): <a href="https://clinquant-macaron-aad92f.netlify.app/" target="_blank" rel="noopener noreferrer" className="underline text-emerald-600 hover:text-emerald-500 transition-colors uppercase decoration-4 underline-offset-4">Contribute</a>
          </p>
        </section>

        {/* Direct Contact Form */}
        <section className="bg-white/90 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-extrabold text-emerald-justice mb-4">Direct Contact Form</h2>
            <p className="text-slate-500 text-lg font-medium italic">Subtitle: "Send me a message."</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
            <div className="group">
              <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2 group-focus-within:text-emerald-justice transition-colors">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                value={formData.name}
                onChange={handleChange}
                className="w-full px-5 py-4 bg-slate-50 rounded-xl border border-slate-200 focus:ring-4 focus:ring-emerald-justice/20 focus:border-emerald-justice focus:bg-white transition-all outline-none"
                placeholder="Your legal or preferred name"
              />
            </div>
            <div className="group">
              <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2 group-focus-within:text-emerald-justice transition-colors">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                value={formData.email}
                onChange={handleChange}
                className="w-full px-5 py-4 bg-slate-50 rounded-xl border border-slate-200 focus:ring-4 focus:ring-emerald-justice/20 focus:border-emerald-justice focus:bg-white transition-all outline-none"
                placeholder="your.email@example.com"
              />
            </div>
            <div className="group">
              <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2 group-focus-within:text-emerald-justice transition-colors">Message</label>
              <textarea 
                id="message" 
                name="message" 
                required 
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-5 py-4 bg-slate-50 rounded-xl border border-slate-200 focus:ring-4 focus:ring-emerald-justice/20 focus:border-emerald-justice focus:bg-white transition-all outline-none resize-y"
                placeholder="Write your message here. Speak your truth..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-emerald-justice hover:bg-emerald-500 text-white font-bold text-lg py-5 rounded-xl transition-all shadow-[0_10px_20px_rgba(16,185,129,0.3)] hover:shadow-[0_15px_30px_rgba(16,185,129,0.4)] hover:-translate-y-1 active:translate-y-0"
            >
              Send Secure Message
            </button>
            {status && (
              <div className={`p-4 rounded-xl text-center font-bold ${status.includes('successfully') ? 'bg-emerald-50 text-emerald-600' : status.includes('Error') ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'}`}>
                {status}
              </div>
            )}
          </form>
        </section>

      </main>

      {/* Contribution Section / Footer */}
      <footer className="bg-slate-900 border-t-8 border-gold-vibrant text-white py-16 mt-20 relative z-10">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-extrabold text-white mb-10 tracking-wide uppercase">Support the Reconstruction</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            
            <div className="bg-slate-800 p-8 rounded-2xl hover:bg-slate-700 transition-colors border border-slate-600 group">
              <p className="font-bold text-lg text-slate-300 mb-4 group-hover:text-white transition-colors">Stripe (Justice Funding)</p>
              <a href="https://buy.stripe.com/7sY4gz6Rg2JAceZgpE7ok00" target="_blank" rel="noopener noreferrer" className="block w-full py-3 px-6 bg-slate-700 group-hover:bg-gold-vibrant text-white rounded-lg font-bold transition-colors underline decoration-2 underline-offset-4">Contribute</a>
            </div>
            
            <div className="bg-slate-800 p-8 rounded-2xl hover:bg-slate-700 transition-colors border border-slate-600 group">
              <p className="font-bold text-lg text-slate-300 mb-4 group-hover:text-white transition-colors">PayPal (International)</p>
              <a href="https://www.paypal.com/paypalme/CHINCHEONGGHEE" target="_blank" rel="noopener noreferrer" className="block w-full py-3 px-6 bg-slate-700 group-hover:bg-gold-vibrant text-white rounded-lg font-bold transition-colors underline decoration-2 underline-offset-4">Contribute</a>
            </div>
            
            <div className="bg-slate-800 p-8 rounded-2xl hover:bg-slate-700 transition-colors border border-slate-600 group">
              <p className="font-bold text-lg text-slate-300 mb-4 group-hover:text-white transition-colors">Universal Contact Portal</p>
              <a href="https://exquisite-gnome-13f3d9.netlify.app/" target="_blank" rel="noopener noreferrer" className="block w-full py-3 px-6 bg-slate-700 group-hover:bg-gold-vibrant text-white rounded-lg font-bold transition-colors underline decoration-2 underline-offset-4">Direct Message</a>
            </div>

          </div>
          
          <div className="pt-8 border-t border-slate-800">
            <p className="text-slate-500 font-medium tracking-wide">
              © {new Date().getFullYear()} Digital Affidavit: Life Reconstruction Portal. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
