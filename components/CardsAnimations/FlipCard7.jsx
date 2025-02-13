import { useState } from "react";

const ProjectForm = ({ handleSubmit }) => {
  const [formData, setFormData] = useState({
    unternehmen: "",
    email: "",
    dienstleistung: "",
    startdatum: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // 🔹 Validate Form Fields
  const validateForm = () => {
    const newErrors = {};

    if (!formData.unternehmen || formData.unternehmen.trim() === "") newErrors.unternehmen = "Bitte Auswählen.";
    if (!formData.email || formData.email.trim() === "") newErrors.email = "Bitte Auswählen.";
    if (!formData.dienstleistung) newErrors.dienstleistung = "Bitte Auswählen.";
    if (!formData.startdatum) newErrors.startdatum = "Bitte Auswählen.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 🔹 Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔹 Handle Form Submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return; // Prevent API call if validation fails

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage("✅ Email erfolgreich gesendet!");
        setFormData({
          unternehmen: "",
          email: "",
          dienstleistung: "",
          startdatum: "",
        });
        setErrors({});
      } else {
        setMessage(`❌ Fehler: ${result.message}`);
      }
    } catch (error) {
      setMessage("❌ Etwas ist schiefgelaufen!");
    }

    setLoading(false);
  };

  return (
    <div className="flipcard flex flex-col max-w-[390px] h-[557px] md:max-w-[740px] md:h-[557px] justify-center items-center bg-[#0009FF] text-white p-8 lg:p-6 rounded-[8px]">
      <h2 className="text-white text-[16px] lg:mb-[32px] lg:text-[28px] font-[500] lg:font-[900] uppercase leading-[37px] text-center font-matt mb-6">
        SIE MÖCHTEN EIN PROJEKT STARTEN?
      </h2>

      <form onSubmit={handleFormSubmit} className="flex flex-col space-y-4 lg:space-y-6 lg:w-[512px] h-[430px] justify-center">
        
        {/* Unternehmen */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-[20px] w-full">
          <label className="text-[#FFFF] w-[300px] ml-[20px] md:ml-0 lg:ml-0 text-[14px] lg:text-[20px] font-[300] leading-[33px] font-matt md:w-[200px] text-left">
            Firmenname
          </label>
          <div>
          <input 
            type="text" 
            name="unternehmen"
            value={formData.unternehmen}
            onChange={(e) => setFormData({ ...formData, unternehmen: e.target.value })}
            placeholder="Firmenname" 
            className={`bg-white w-[300px] ml-[20px] md:ml-0 lg:ml-0 md:w-[300px] md:h-[58px] text-gray-900 placeholder-gray-500 text-[16px] lg:text-[24px] px-4 py-2 rounded-[8px] font-[500] leading-[20px] border ${errors.unternehmen ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.unternehmen && <p className="text-red-500 text-sm mt-0 ml-[20px]">{errors.unternehmen}</p>}
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-[20px] w-full">
          <label className="text-[#FFFF] w-[300px] ml-[20px] md:ml-0 lg:ml-0 text-[14px] lg:text-[20px] font-[300] leading-[33px] font-matt md:w-[115px] lg:w-[200px] text-left">
            Email
          </label>
          <div>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="Ihre Email" 
            className={`bg-white w-[300px] ml-[20px] md:ml-0 lg:ml-0 md:w-[300px] md:h-[58px] text-gray-500 placeholder-gray-500 text-[16px] lg:text-[24px] px-4 py-2 rounded-[8px] font-[500] leading-[20px] border ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-0 ml-[20px]">{errors.email}</p>}
          </div>
        </div>

        {/* Welche Dienstleistung */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-[20px] w-full">
          <label className="text-[#FFFF] w-[300px] ml-[20px] md:ml-0 lg:ml-0 text-[14px] lg:text-[20px] font-[300] leading-[33px] font-matt md:w-[220px] lg:w-[200px] text-left">
            Welche Dienstleistung
          </label>
          <div>
          <select
            name="dienstleistung"
            value={formData.dienstleistung}
            onChange={(e) => setFormData({ ...formData, dienstleistung: e.target.value })}
            className={`bg-white w-[300px] ml-[20px] md:ml-10 lg:ml-0 md:w-[300px] md:h-[58px] text-gray-500 placeholder-gray-900  text-[16px] lg:text-[24px] px-4 py-2 rounded-[8px] font-[500] leading-[20px] border ${errors.dienstleistung ? 'border-red-500' : 'border-gray-300'}`}
          >
            <option value="" disabled hidden>Dienstleistung</option>
            <option value="SalesForce">Salesforce</option>
            <option value="Website">Website</option>
            <option value="Custom Development">Custom Development</option>
            <option value="Graphic Design">Graphic Design</option>
            <option value="Book your Ekspert">Book your Ekspert</option>
          </select>
          {errors.dienstleistung && <p className="text-red-500 text-sm lg:mt-0 ml-[20px]">{errors.dienstleistung}</p>}
          </div>
        </div>

        {/* Startdatum */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-[20px] w-full">
          <label className="text-[#FFFF] w-[300px] ml-[20px] md:ml-0 lg:ml-0 text-[14px] lg:text-[20px] font-[300] leading-[33px] font-matt md:w-[170px] lg:w-[200px] text-left">
            Startdatum
          </label>
          <div>
          <input
            type="date"
            name="startdatum"
            value={formData.startdatum}
            min={new Date().toISOString().split("T")[0]} 
            onChange={(e) => setFormData({ ...formData, startdatum: e.target.value })}
            onKeyDown={(e) => e.preventDefault()}
            className={`bg-white w-[300px] ml-[20px] md:ml-0 lg:ml-0 md:w-[300px] md:h-[58px] text-gray-500 text-[16px] lg:text-[24px] px-4 py-2 rounded-[8px] font-[500] leading-[20px] border ${errors.startdatum ? 'border-red-500' : 'border-gray-300'}`}
          />
                  {errors.startdatum && <p className="text-red-500 text-sm md:mt-0">{errors.startdatum}</p>}
                  </div>
        </div>

 {/* Submit Button */}
 <div className="flex justify-center">
 <button 
            type="submit" 
            className="mt-2 bg-transparent text-white text-[18px] font-bold flex items-center justify-center w-[330px] md:w-[369px] h-[44px]"
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="369" height="44" viewBox="0 0 369 44" fill="none">
                <path d="M1.5 42V17.7007L22.8814 2H366.876V42H1.5Z" stroke="white" strokeWidth="3"/>
            </svg>
            <span className="absolute font-[900] leading-[37px] text-[28px] font-matt">
                START PROJECT!
            </span>
        </button>

        </div>

        {/* Success or Error Message */}
        {message && <p className="text-white text-center text-[18px] font-bold mt-4">{message}</p>}
      </form>
    </div>

  );
};

export default ProjectForm;
