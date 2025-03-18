import { useState } from "react";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    vorname: "",
    nachname: "",
    unternehmen: "",
    email: "",
    position: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate Fields
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) newErrors[key] = "Bitte Auswählen";
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch("/api/sendMailStartup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          vorname: "",
          nachname: "",
          unternehmen: "",
          email: "",
          position: "",
        });
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  };

  return (
    <section className="custom-1026 flex flex-col p-4 lg:p-1 items-center lg:gap-[40px] justify-center lg:flex-row-reverse">
      {/* Left Side - Video */}
        {/* Heading */}

      <div className="w-full lg:w-1/2 mb-[40px] lg:mb-0 flex justify-center lg:max-w-[588px] lg:h-[571px] lg:flex lg:flex-col lg:justify-center lg:items-start flex-shrink-0">
        <video
          className="w-full custom-1020 max-w-md lg:min-w-[588px] lg:min-h-[618px] rounded-[12px] object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/images/the-eksperts-Checklist for-Web-Analysis-Website.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 lg:min-w-[522px]">
        <form className="space-y-[15px]" onSubmit={handleSubmit}>
          {[
            { label: "Vorname", name: "vorname", placeholder: "Ihre Vorname", required: true },
            { label: "Nachname", name: "nachname", placeholder: "Ihre Name", required: true },
            { label: "Unternehmen", name: "unternehmen", placeholder: "Ihre Unternehmen", required: true },
            { label: "Email", name: "email", placeholder: "Email", required: true },
            { label: "Position", name: "position", placeholder: "Position", required: true },
          ].map((field, index) => (
            <div key={index} className="flex flex-col">
              <label className="text-[20px] font-[500] text-black leading-normal">
                {field.label}
                {field.required && <span className="text-red-500">*</span>}
              </label>
              <input
                type="text"
                name={field.name}
                value={formData[field.name] || ""}
                onChange={handleInputChange}
                placeholder={field.placeholder}
                className="mt-1 w-full border text-[20px] font-[400] placeholder:text-black text-black rounded-[12px] p-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors[field.name] && <p className="text-red-500 text-sm">{errors[field.name]}</p>}
            </div>
          ))}

          {/* Download Button */}
          <button
            type="submit"
            className="w-full px-6 py-[14px] text-white bg-[#152DFF] rounded-lg font-[700] text-[20px] leading-[28px]"
          >
            Download
          </button>

          {/* Success Message */}
          {isSubmitted &&  <p className="text-center text-[20px] font-[300] max-w-[600px] mx-auto">
    Vielen Dank für Ihr Vertrauen in the eksperts – wir werden Sie nicht enttäuschen.
    </p>}
        </form>
      </div>
    </section>
  );
};

export default FormComponent;
