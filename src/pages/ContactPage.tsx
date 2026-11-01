import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Scale,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    mail: "",
    phone: "",
    question: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (errorMsg) setErrorMsg("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.name.trim() ||
      !formData.mail.trim() ||
      !formData.phone.trim() ||
      !formData.question.trim()
    ) {
      setErrorMsg(
        "ದಯವಿಟ್ಟು ಎಲ್ಲಾ ವಿವರಗಳನ್ನು (ಹೆಸರು, ಇಮೇಲ್, ದೂರವಾಣಿ ಸಂಖ್ಯೆ ಮತ್ತು ಪ್ರಶ್ನೆ) ಭರ್ತಿ ಮಾಡಿ.",
      );
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  const handleReset = () => {
    setFormData({ name: "", mail: "", phone: "", question: "" });
    setSubmitted(false);
    setErrorMsg("");
  };

  return (
    <div className="space-y-16 pb-20">
      {/* SECTION 1: THANK YOU NOTE & INVITATION IN KANNADA (6-8 Lines) */}
      <section className="relative pt-6 sm:pt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 font-semibold shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>ನಂದಿ ಟ್ರೇಡರ್ಸ್ ಶಿರಸಿ ಮಂಡಿ ಡೆಸ್ಕ್</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            ನಿಮ್ಮ ಗೋಟು  -   ನಮ್ಮ ರೇಟು
          </h1>

          {/* 6-8 Lines of Thank You & Invitation text strictly in Kannada */}
          <div className="rounded-3xl bg-white p-6 sm:p-8 border border-emerald-200/90 shadow-sm text-left sm:text-center">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              ನಂದಿ ಟ್ರೇಡರ್ಸ್‌ನ ಜಾಲತಾಣಕ್ಕೆ ಭೇಟಿ ನೀಡಿದ ಪ್ರತಿಯೊಬ್ಬ ಕೃಷಿಕ ಬಂಧುಗಳು
              ಹಾಗೂ ಕೈಗಾರಿಕಾ ಗ್ರಾಹಕರಿಗೆ ನಮ್ಮ ಹೃದಯಪೂರ್ವಕ ಧನ್ಯವಾದಗಳು. ನೀವು ನಿಮ್ಮ
              ತೋಟದ ಹಸಿ ಅಥವಾ ಒಣ ಅಡಿಕೆಯನ್ನು ಶಿರಸಿ ಎಪಿಎಂಸಿಯ ಗರಿಷ್ಠ ಹರಾಜು ದರದಲ್ಲಿ
              ಮಾರಾಟ ಮಾಡಲು ಬಯಸುವ ಬೆಳೆಗಾರರಾಗಿರಲಿ, ಅಥವಾ ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಗ್ರೇಡೆಡ್
              ಸುಪಾರಿಯನ್ನು ನಿಯಮಿತವಾಗಿ ಕೊಳ್ಳಲು ಇಚ್ಛಿಸುವ ಪ್ರಮುಖ ಪಾನ್ ಮಸಾಲಾ ಹಾಗೂ
              ಎಫ್‌ಎಂಸಿಜಿ ಸಂಸ್ಥೆಯಾಗಿರಲಿ—ನಮ್ಮ ಶಿರಸಿ ಕಚೇರಿಯ ಬಾಗಿಲು ನಿಮಗೆ ಸದಾ
              ತೆರೆದಿರುತ್ತದೆ. ಕೆಳಗಿನ ಸರಳ ಅರ್ಜಿಯ ಮೂಲಕ ನಿಮ್ಮ ಪ್ರಶ್ನೆ ಅಥವಾ ಮಾರಾಟದ
              ವಿವರಗಳನ್ನು ಕಳುಹಿಸಿ ಅಥವಾ ನಮ್ಮ ಮಂಡಿ ಉಸ್ತುವಾರಿಗಳಿಗೆ ನೇರವಾಗಿ ಕರೆ ಮಾಡಿ.
              ಕಳೆದ ಮೂರೂವರೆ ದಶಕಗಳ ಪ್ರಾಮಾಣಿಕ ಕೃಷಿ ವಹಿವಾಟಿನ ಪರಂಪರೆಯೊಂದಿಗೆ ನಿಮ್ಮನ್ನು
              ಸ್ವಾಗತಿಸಲು ನಾವು ಸದಾ ಸಿದ್ಧರಿದ್ದೇವೆ.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: FORM AND SIDE SECTION WITH IDENTICAL HEIGHT & CLEANED UP */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left: Contact Form */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="h-full rounded-3xl bg-white p-8 sm:p-10 border border-emerald-200 shadow-md flex flex-col justify-between">
                <div>
                  <div className="mb-6 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200">
                      ನೇರ ವಿಚಾರಣಾ ಅರ್ಜಿ
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      ನಿಮ್ಮ ವಿವರ ಅಥವಾ ಪ್ರಶ್ನೆಯನ್ನು ಕಳುಹಿಸಿ
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500">
                      ನಮ್ಮ ಶಿರಸಿ ಮಂಡಿ ವಿಭಾಗವು ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ಪರಿಶೀಲಿಸಿ
                      ಶೀಘ್ರವೇ ಮರುಸಂಪರ್ಕಿಸುತ್ತದೆ.
                    </p>
                  </div>

                  {submitted ? (
                    <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 my-auto">
                      <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                        <CheckCircle className="w-8 h-8 text-emerald-600" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">
                        ಧನ್ಯವಾದಗಳು, {formData.name} ಅವರೇ!
                      </h3>
                      <p className="text-sm text-slate-700 leading-relaxed max-w-md mx-auto">
                        ನಿಮ್ಮ ವಿಚಾರಣೆಯು ನಮ್ಮ ಶಿರಸಿ ಎಪಿಎಂಸಿ ಕಚೇರಿಯಲ್ಲಿ ದಾಖಲಾಗಿದೆ.
                        ಶೀಘ್ರದಲ್ಲೇ ನಮ್ಮ ಪ್ರತಿನಿಧಿಗಳು ನಿಮ್ಮ ದೂರವಾಣಿ ಸಂಖ್ಯೆ{" "}
                        <strong className="text-emerald-900">
                          {formData.phone}
                        </strong>{" "}
                        ಅಥವಾ{" "}
                        <strong className="text-emerald-900">
                          {formData.mail}
                        </strong>{" "}
                        ಗೆ ಕರೆ ಮಾಡಲಿದ್ದಾರೆ:
                      </p>
                      <div className="p-3 bg-white rounded-xl border border-emerald-100 text-xs text-slate-600 italic text-left max-w-md mx-auto">
                        "{formData.question}"
                      </div>
                      <div className="pt-2">
                        <button
                          onClick={handleReset}
                          className="px-6 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
                        >
                          ಮತ್ತೊಂದು ವಿಚಾರಣೆ ಸಲ್ಲಿಸಿ
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {errorMsg && (
                        <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700">
                          {errorMsg}
                        </div>
                      )}

                      {/* Field 1: Name */}
                      <div className="space-y-1">
                        <label
                          htmlFor="name"
                          className="block text-xs font-bold uppercase tracking-wider text-slate-700"
                        >
                          ನಿಮ್ಮ ಪೂರ್ಣ ಹೆಸರು (Name){" "}
                          <span className="text-emerald-700">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="ಉದಾ: ಗಣಪತಿ ಹೆಗಡೆ / ಸುನಿಲ್ ಭಟ್"
                          required
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 focus:bg-white transition-colors text-sm"
                        />
                      </div>

                      {/* Field 2 & 3: Mail & Ph no */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label
                            htmlFor="mail"
                            className="block text-xs font-bold uppercase tracking-wider text-slate-700"
                          >
                            ಇಮೇಲ್ ವಿಳಾಸ (Mail){" "}
                            <span className="text-emerald-700">*</span>
                          </label>
                          <input
                            type="email"
                            id="mail"
                            name="mail"
                            value={formData.mail}
                            onChange={handleChange}
                            placeholder="farmer@example.com"
                            required
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 focus:bg-white transition-colors text-sm"
                          />
                        </div>

                        <div className="space-y-1">
                          <label
                            htmlFor="phone"
                            className="block text-xs font-bold uppercase tracking-wider text-slate-700"
                          >
                            ದೂರವಾಣಿ ಸಂಖ್ಯೆ (Ph No.){" "}
                            <span className="text-emerald-700">*</span>
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 94481 44520"
                            required
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 focus:bg-white transition-colors text-sm"
                          />
                        </div>
                      </div>

                      {/* Field 4: Question */}
                      <div className="space-y-1">
                        <label
                          htmlFor="question"
                          className="block text-xs font-bold uppercase tracking-wider text-slate-700"
                        >
                          ನಿಮ್ಮ ಪ್ರಶ್ನೆ ಅಥವಾ ಮಾರಾಟದ ವಿವರಗಳು (Question){" "}
                          <span className="text-emerald-700">*</span>
                        </label>
                        <textarea
                          id="question"
                          name="question"
                          rows={4}
                          value={formData.question}
                          onChange={handleChange}
                          placeholder="ಅಡಿಕೆ ಪ್ರಮಾಣ (ಕ್ವಿಂಟಾಲ್), ಬೆಟ್ಟೆ/ಚಾಲಿ ವಿಧ, ಅಥವಾ ದೈನಂದಿನ ಶಿರಸಿ ಎಪಿಎಂಸಿ ದರದ ಬಗ್ಗೆ ನಿಮ್ಮ ವಿಚಾರಣೆ ಬರೆಯಿರಿ..."
                          required
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 focus:bg-white transition-colors text-sm"
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 shadow-md transition-all duration-200 active:scale-95 disabled:opacity-50"
                      >
                        {submitting ? (
                          <span>ಕಳುಹಿಸಲಾಗುತ್ತಿದೆ...</span>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>ಪ್ರಶ್ನೆಯನ್ನು ನಂದಿ ಟ್ರೇಡರ್ಸ್‌ಗೆ ಕಳುಹಿಸಿ</span>
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>

            {/* Right: Sirsi Address & Mandi Details (Cleaned up and exactly matching height with left form) */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="h-full rounded-3xl bg-white p-8 sm:p-10 border border-emerald-200 shadow-md flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-emerald-700" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                        ಪ್ರಧಾನ ಕಚೇರಿ & ಸಂಸ್ಕರಣಾ ಅಂಗಳ
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                        ಶಿರಸಿ ವಿಳಾಸ ವಿವರಗಳು
                      </h3>
                    </div>
                  </div>

                  {/* Clean Exact Postal Address */}
                  <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-1.5 mb-6">
                    <p className="text-xs uppercase tracking-wider text-emerald-800 font-bold">
                      ಸಂಪೂರ್ಣ ಅಂಚೆ ಮತ್ತು ಮಂಡಿ ವಿಳಾಸ:
                    </p>
                    <p className="text-base font-extrabold text-slate-900">
                      ನಂದಿ ಟ್ರೇಡರ್ಸ್ (NANDI TRADERS)
                    </p>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      ಪ್ಲಾಟ್ ನಂ. ೧೮, ೧೯, ೨೦ & ೨೧, ಎಪಿಎಂಸಿ ಮಾರುಕಟ್ಟೆ ಪ್ರಾಂಗಣ,
                      <br />
                      ಹುಬ್ಬಳ್ಳಿ – ಶಿರಸಿ ರಾಷ್ಟ್ರೀಯ ಹೆದ್ದಾರಿ (NH-766E),
                      <br />
                      <strong className="text-emerald-900 font-bold">
                        ಶಿರಸಿ – ೫೮೧೪೦೧
                      </strong>
                      , ಉತ್ತರ ಕನ್ನಡ ಜಿಲ್ಲೆ, ಕರ್ನಾಟಕ.
                    </p>
                    <p className="text-xs text-slate-500 pt-1">
                      ಗುರುತು: ಕೇಂದ್ರ ತೂಕದ ಸೇತುವೆ & ಟಿಎಸ್‌ಎಸ್ ಗೇಟ್ ಎದುರುಗಡೆ
                    </p>
                  </div>

                  {/* Essential Communication Lines */}
                  <div className="space-y-4 text-sm text-slate-700">
                    <div className="flex items-start gap-3">
                      <Phone className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs text-slate-500 block">
                          ಮಂಡಿ ಸಹಾಯವಾಣಿ (Office):
                        </span>
                        <a
                          href="tel:+918384226500"
                          className="text-slate-900 hover:text-emerald-700 font-mono font-bold"
                        >
                          +91 (08384) 226500 / 226501
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs text-slate-500 block">
                          ಮೊಬೈಲ್ & ವಾಟ್ಸಾಪ್ (Auctions):
                        </span>
                        <a
                          href="tel:+919448144520"
                          className="text-slate-900 hover:text-emerald-700 font-mono font-bold"
                        >
                          +91 94481 44520 / +91 98452 77110
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs text-slate-500 block">
                          ಅಧಿಕೃತ ಇಮೇಲ್:
                        </span>
                        <a
                          href="mailto:contact@nanditraderssirsi.com"
                          className="text-slate-900 hover:text-emerald-700 font-medium"
                        >
                          contact@nanditraderssirsi.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs text-slate-500 block">
                          ಕಾರ್ಯಾಚರಣೆಯ ಸಮಯ:
                        </span>
                        <span className="text-slate-800 font-medium text-xs">
                          ಸೋಮವಾರ – ಶನಿವಾರ: ಬೆಳಗ್ಗೆ ೮:೦೦ ರಿಂದ ಸಂಜೆ ೭:೩೦ (ಹರಾಜು
                          ದಿನಗಳು)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spot weighment guarantee note */}
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 flex items-start gap-3">
                  <Scale className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    <strong>ಸ್ಥಳದಲ್ಲೇ ತೂಕದ ಖಾತರಿ:</strong> ನಿಮ್ಮ ಲಾರಿ ಅಥವಾ ಪಿಕಪ್
                    ವಾಹನವನ್ನು ನೇರವಾಗಿ ನಮ್ಮ ಶಿರಸಿ ಎಪಿಎಂಸಿ ಅಂಗಳಕ್ಕೆ ತನ್ನಿ.
                    ಕಂಪ್ಯೂಟರೀಕೃತ ತೂಕ, ತೇವಾಂಶ ಪರೀಕ್ಷೆ ಮತ್ತು ತಕ್ಷಣದ ಆರ್‌ಟಿಜಿಎಸ್
                    ಪಾವತಿ ರಸೀದಿ ಪಡೆಯಿರಿ.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
