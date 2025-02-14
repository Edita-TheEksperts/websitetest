import { useState } from "react";

const ContactForm = () => {
 const [formData, setFormData] = useState({
   unternehmen: "",
   email: "",
   message: "",
   name: "",
   telefon: "",
   nachricht:"",
   dienstleistung: [], // Stores selected checkboxes
   customService: "",
   starten: [], // Stores custom input text
 });

  const [errors, setErrors] = useState({
    name: "",
    unternehmen: "",
    email: "",
    telefon: "",
    nachricht: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error message when user starts typing
    if (value.trim() !== "") {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleInvalid = (e) => {
    e.preventDefault(); // Prevent default browser tooltip
    setErrors({ ...errors, [e.target.name]: "Bitte füllen Sie das Feld aus." });
  };
const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const response = await fetch("/api/sendMailFunnel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        setFormData({
          unternehmen: "",
          email: "",
          dienstleistung: [],
          message: "",
          name: "",
          telefon: "",
          nachricht: "",
          starten: [],
          customService: "",
        });
  
        // Ensure state updates and triggers re-render
        setShowThankYou(true);
        setIsModalOpen(false); // Close modal if needed
      } else {
        throw new Error("Error sending email.");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    
    <form onSubmit={handleSubmit} className="lg:space-y-4 space-y-2 w-full max-w-4xl">
      {/* Name & Unternehmen */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:gap-4 gap-2 mb-4">
        <div className="flex flex-col border border-blue-400 w-full">
          <label className="hidden">Name</label>
          <input
            type="text"
            placeholder="NAME"
            name="name"
            required
            onInvalid={handleInvalid}
            onInput={(e) => e.target.setCustomValidity("")}
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 text-center text-[14px] lg:text-[18px] placeholder-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:text-blue-500"
          />
          {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name}</span>}
        </div>

        <div className="flex flex-col border border-blue-400 w-full">
          <label className="hidden">Unternehmen</label>
          <input
            type="text"
            placeholder="UNTERNEHMEN"
            name="unternehmen"
            required
            onInvalid={handleInvalid}
            onInput={(e) => e.target.setCustomValidity("")}
            value={formData.unternehmen}
            onChange={handleChange}
            className="w-full border p-2 text-center text-[14px] lg:text-[18px] placeholder-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:text-blue-500"
          />
          {errors.unternehmen && <span className="text-red-500 text-sm mt-1">{errors.unternehmen}</span>}
        </div>
      </div>

      {/* Email & Telefon */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:gap-4 gap-2 mb-8">
        <div className="flex flex-col border border-blue-400 w-full">
          <label className="hidden">E-Mail</label>
          <input
            type="email"
            placeholder="E-MAIL"
            name="email"
            required
            onInvalid={handleInvalid}
            onInput={(e) => e.target.setCustomValidity("")}
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 text-center text-[14px] lg:text-[18px] placeholder-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:text-blue-500"
          />
          {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email}</span>}
        </div>

        <div className="flex flex-col border border-blue-400 w-full">
          <label className="hidden">Telefon</label>
          <input
            type="tel"
            placeholder="TELEFON"
            name="telefon"
            required
            onInvalid={handleInvalid}
            onInput={(e) => e.target.setCustomValidity("")}
            value={formData.telefon}
            onChange={handleChange}
            className="w-full border p-2 text-center text-[14px] lg:text-[18px] placeholder-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:text-blue-500"
          />
          {errors.telefon && <span className="text-red-500 text-sm mt-1">{errors.telefon}</span>}
        </div>
      </div>

      {/* Nachricht */}
      <div className="flex flex-col border border-blue-400 w-full">
        <label className="hidden">Nachricht</label>
        <textarea
          placeholder="NACHRICHT („Gibt es noch etwas, das wir wissen sollten?“)"
          name="nachricht"
          type="text"
          required
          onInvalid={handleInvalid}
          onInput={(e) => e.target.setCustomValidity("")}
          value={formData.nachricht}
          onChange={handleChange}
          className="w-full border p-2 text-center text-[14px] lg:text-[18px] placeholder-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:text-blue-500"
        />
        {errors.nachricht && <span className="text-red-500 text-sm mt-1">{errors.nachricht}</span>}
      </div>

      {/* Buttons */}
      <div className="flex lg:justify-start justify-center mt-2">
        <button
          type="submit"
          className="px-4 py-3 bg-[#0009FF] text-white rounded-[30px] md:text-[25px] md:leading-[37px] font-extrabold hover:bg-blue-800"
        >
          SENDEN
        </button>
      </div>

      <div className="flex lg:justify-start justify-center mt-2 lg:mt-0 lg:ml-2">
        <button onClick={() => console.log("Back button clicked")}>
          <svg width="79" height="33" viewBox="0 0 79 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.726643 16.4727L2.44922 14.7501L4.1718 16.4727L2.44922 18.1952L0.726643 16.4727Z" fill="#5A585A" stroke="#5A585A"/>
            <path d="M8.49113 12.1133L5.20939 15.395L4.55116 14.7368C3.96391 14.1495 3.96272 13.1965 4.55116 12.6081L6.76855 10.3907L8.49113 12.1133Z" fill="#5A585A" stroke="#5A585A"/>
          </svg>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
