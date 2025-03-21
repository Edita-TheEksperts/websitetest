import { useState } from "react";

const ContactFormStartup = () => {
  const [form2Data, setForm2Data] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm2Data({ ...form2Data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};
    if (!form2Data.fullName) newErrors.fullName = "Bitte Auswählen";
    if (!form2Data.email) newErrors.email = "Bitte Auswählen";
    if (!form2Data.subject) newErrors.subject = "Bitte Auswählen";
    if (!form2Data.message) newErrors.message = "Bitte Auswählen";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch("/api/sendContactMessage", {  
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form2Data),
      });

      const data = await response.json();
      if (response.ok) {
        setIsSubmitted(true);
        setForm2Data({ fullName: "", email: "", subject: "", message: "" });
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  };

  return (
    <section
      className="custom-1024 flex justify-center items-center bg-cover bg-center w-full mb-[160px] lg:mb-[300px] lg:w-[1280px] lg:h-[563.947px] object-cover rounded-[12px] px-4 md:px-8"
      style={{ backgroundImage: "url('/images/the-eksperts-contact-bg.png')" }}
    >            
      <div className="custom-1025 w-full max-w-[551px] h-auto flex flex-col items-start gap-2 bg-transparent ml-0 md:ml-[170px] lg:ml-[400px] p-6 md:p-8">
        {!isSubmitted && (
          <h2 className="text-white font-matt mb-2 text-[32px] md:text-[40px] lg:text-[48px] font-extrabold leading-[40px] md:leading-[50px] lg:leading-[60px] text-center md:text-left">
            Hinterlasse Sie uns eine Nachricht
          </h2>
        )}

        {isSubmitted ? (
          <div className="text-center lg:text-left">
            <h1 className="text-white font-[700] text-[48px] font-matt leading-[60px]">
              Vielen Dank.
            </h1>
            <p className="text-white font-[700] text-[48px] font-matt leading-[60px] mt-10 lg:mt-[45px]">
              Wir melden uns so<br></br> schnell wie möglich.
            </p>
          </div>
        ) : (
          <form className="w-full flex flex-col gap-3" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-3">
              <div className="w-full md:w-1/2">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Vorname Nachname"
                  value={form2Data.fullName}
                  onChange={handleInputChange}
                  className="w-full p-4 border border-[#E7E7E7] rounded-[12px] bg-transparent text-white placeholder-white text-[18px] md:text-[20px]"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm">{errors.fullName}</p>
                )}
              </div>
              <div className="w-full md:w-1/2">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form2Data.email}
                  onChange={handleInputChange}
                  className="w-full p-4 border border-[#E7E7E7] rounded-[12px] bg-transparent text-white placeholder-white text-[18px] md:text-[20px]"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
            </div>
            <div className="w-full">
              <input
                type="text"
                name="subject"
                placeholder="Betreff"
                value={form2Data.subject}
                onChange={handleInputChange}
                className="w-full p-4 border border-[#E7E7E7] rounded-[12px] bg-transparent text-white placeholder-white text-[18px] md:text-[20px]"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm">{errors.subject}</p>
              )}
            </div>
            <div className="w-full">
              <textarea
                name="message"
                placeholder="Ihre Nachricht"
                value={form2Data.message}
                onChange={handleInputChange}
                rows="4"
                className="w-full lg:h-[120px] p-4 border border-[#E7E7E7] rounded-[12px] bg-transparent text-white placeholder-white text-[18px] md:text-[20px]"
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full flex justify-center items-center px-6 py-4 bg-white text-[#0009FF] text-[18px] md:text-[20px] font-bold leading-[28px] rounded-lg mt-2"
            >
              Say hi to us!
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactFormStartup;
