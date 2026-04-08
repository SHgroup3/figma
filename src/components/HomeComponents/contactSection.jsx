import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const ContactSection = () => {
  const [date, setDate] = useState(new Date());
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    services: [],
    message: ''
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      const updatedServices = checked 
        ? [...formData.services, value] 
        : formData.services.filter(s => s !== value);
      setFormData({ ...formData, services: updatedServices });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
 const handleSubmit = (e) => {
  e.preventDefault();
  if (!formData.name || !formData.email || !formData.phone || !formData.message.trim()) {
    alert("Please fill all required fields (*) including a message.");
    return;
  }
  if (formData.services.length === 0) {
    alert("Please select at least one service you are looking for.");
    return;
  }
  if (!formData.email.includes("@")) {
    alert("Please enter a valid email");
    return;
  }
  const phoneRegex = /^[0-9]+$/;
  if (!phoneRegex.test(formData.phone)) {
    alert("Phone number should only contain digits.");
    return;
  }
  console.log("Form Submitted Successfully:", formData);
  alert(`Thank you ${formData.name}! We will get in touch with you in 24h.`);
  setFormData({ name: '', email: '', phone: '', company: '', services: [], message: '' });
};

 // ... baqi state aur functions wahi rahengi

  return (
    <section className="w-full min-h-screen bg-[#EA2451] flex justify-center items-center py-16 px-6 md:px-16 lg:px-20 font-sans">
      {/* 1. mx-auto aur max-w-7xl ensures centering.
          2. w-full ensures it takes available space up to the limit.
          3. rounded-sm maintains your design style.
      */}
      <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row shadow-2xl rounded-sm overflow-hidden min-h-[600px] bg-white">
        
        {/* Left Section (Calendar & Info) */}
        <div className="flex-[1.2] bg-white p-6 md:p-10 lg:p-12 flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-[40%] flex flex-col gap-6">
            <img src="/logos/wp.png" alt="Logo" className="h-8 md:h-10 w-auto object-contain self-start" />
            <div className="text-gray-400 text-[14px] font-normal flex flex-col gap-1">
              <p>🕒 30 min</p>
              <p>📞 Phone call</p>
            </div>
            <p className="text-[#EA2451] font-bold text-[20px] md:text-[22px] leading-tight">
              You can call us at any convenient time to discuss the details of cooperation.
            </p>
          </div>

          <div className="w-full md:w-[60%] md:border-l border-gray-100 md:pl-8">
            <h2 className="text-[22px] md:text-[26px] font-bold text-black mb-6">Select a Date & Time</h2>
            <div className="calendar-container bg-white">
              <Calendar onChange={setDate} value={date} locale="en-GB" className="w-full border-none custom-cal" />
            </div>
            <div className="mt-8">
              <p className="text-[13px] text-gray-800 mb-6 font-semibold">
                Time zone: <span className="font-normal text-gray-500">🌍 Central European Time</span>
              </p>
              <button className="w-full bg-[#EA2451] text-white py-4 rounded-sm font-bold text-[16px] hover:bg-[#c91f45] transition-all active:scale-95">
                Continue
              </button>
            </div>
          </div>
        </div>

        {/* Right Section (Form) */}
        {/* Background color wahi rakha hai jo original tha, bas padding symmetrical ki hai */}
        <div className="flex-1 bg-[#EA2451] lg:bg-white/10 backdrop-blur-sm p-6 md:p-10 lg:p-12 flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h2 className="text-[28px] md:text-[34px] lg:text-[38px] font-bold leading-[1.1] text-white">
              Drop us a message and we will get in touch in 24h.
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-bold uppercase text-white/80">Name *</label>
              <input name="name" value={formData.name} onChange={handleChange} type="text" className="bg-white/20 border border-white/30 rounded-sm p-3 text-white outline-none focus:bg-white/30 transition-all" required/>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-bold uppercase text-white/80">Email Address *</label>
              <input name="email" value={formData.email} onChange={handleChange} type="email" className="bg-white/20 border border-white/30 rounded-sm p-3 text-white outline-none focus:bg-white/30 transition-all" required/>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-bold uppercase text-white/80">Phone Number *</label>
              <input name="phone" value={formData.phone} onChange={handleChange} type="tel" className="bg-white/20 border border-white/30 rounded-sm p-3 text-white outline-none focus:bg-white/30 transition-all" required/>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-bold uppercase text-white/80">Company</label>
              <input name="company" value={formData.company} onChange={handleChange} type="text" className="bg-white/20 border border-white/30 rounded-sm p-3 text-white outline-none focus:bg-white/30 transition-all"/>
            </div>
            <div className="md:col-span-2 mt-2">
              <label className="text-[13px] font-bold mb-3 block text-white">What service are you looking for? *</label>
              <div className="grid grid-cols-2 gap-y-2">
                {['Architecture', 'Development', 'Deployment', 'UI/UX', 'Tech audit'].map(service => (
                  <label key={service} className="flex items-center gap-2 cursor-pointer group">
                    <input type="checkbox" value={service} checked={formData.services.includes(service)} onChange={handleChange} className="w-4 h-4 accent-white cursor-pointer" />
                    <span className="text-[13px] text-white/90 group-hover:text-white transition-colors">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="md:col-span-2 flex flex-col gap-1 mt-2">
              <label className="text-[11px] font-bold uppercase text-white/80">Message *</label>
              <textarea name="message" value={formData.message} onChange={handleChange} rows="3" className="bg-white/20 border border-white/30 rounded-sm p-3 text-white outline-none focus:bg-white/30 transition-all" required></textarea>
            </div>

            <button type="submit" className="md:col-span-2 bg-white text-[#EA2451] py-4 rounded-sm font-bold text-[16px] hover:bg-gray-100 transition-all uppercase mt-2 shadow-lg active:scale-[0.98]">
              Send Message
            </button>
          </form>
        </div>
      </div>
      
      {/* Styles wahi hain jo aapke code mein thay */}
      <style jsx="true">{`
        .react-calendar { border: none !important; width: 100% !important; background: white; font-family: inherit; }
        .react-calendar__tile--active { background: #EA2451 !important; color: white !important; border-radius: 4px; }
        .react-calendar__tile--now { background: #fee2e2 !important; color: #EA2451; font-weight: bold; border-radius: 4px; }
        .react-calendar__navigation button { font-weight: bold; font-size: 16px; color: black; }
        .react-calendar__month-view__weekdays__weekday abbr { text-decoration: none; color: #9ca3af; font-size: 12px; }
      `}</style>
    </section>
  );
};

export default ContactSection;
