import {
  AlertCircle,
  CheckCircle2,
  ExternalLink,
  Loader2,
  MessageCircle,
  Send,
  Star,
} from "lucide-react";
import { useState } from "react";

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || "";
const RECIPIENT_EMAIL =
  import.meta.env.VITE_FEEDBACK_GMAIL || "vijayfzd12300@gmail.com";

const ratingLabels = {
  1: "Poor",
  2: "Fair",
  3: "Good",
  4: "Very Good",
  5: "Excellent!",
};

function FeedbackSection() {
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState("");
  const [showWhatsAppFallback, setShowWhatsAppFallback] = useState(false);

  const activeRating = hoverRating || rating;

  // Pre-formatted WhatsApp text link
  const getWhatsAppLink = () => {
    const text = encodeURIComponent(
      `⭐ *New Feedback for VJ E-Commerce*\n\n` +
        `*Rating:* ${rating}/5 (${ratingLabels[rating] || ""})\n` +
        `*Name:* ${name.trim() || "Anonymous"}\n` +
        `*Contact:* ${contact.trim() || "Not provided"}\n` +
        `*Feedback:* ${message.trim()}`
    );
    return `https://wa.me/919897310047?text=${text}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!rating) {
      setStatus("error");
      setErrorMessage("Please select a star rating.");
      return;
    }

    if (!message.trim()) {
      setStatus("error");
      setErrorMessage("Please write a few words about your experience.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");
    setShowWhatsAppFallback(false);

    try {
      // Method 1: Web3Forms (Most reliable for Gmail delivery)
      if (WEB3FORMS_KEY) {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_KEY,
            subject: `⭐ New ${rating}-Star Feedback from ${name || "a Seller"} - VJ E-Commerce`,
            from_name: "VJ E-Commerce Feedback",
            Name: name.trim() || "Anonymous Seller",
            "Contact (Email/Phone)": contact.trim() || "Not provided",
            Rating: `${rating} / 5 (${ratingLabels[rating] || ""})`,
            Feedback: message.trim(),
            Submitted_At: new Date().toLocaleString(),
          }),
        });

        const data = await response.json();

        if (response.ok && data.success) {
          setStatus("success");
          setMessage("");
          setName("");
          setContact("");
          setRating(5);
          return;
        } else {
          throw new Error(data.message || "Web3Forms submission failed.");
        }
      }

      // Method 2: FormSubmit Fallback
      const response = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(RECIPIENT_EMAIL)}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            _subject: `⭐ New ${rating}-Star Feedback Received - VJ E-Commerce`,
            Rating: `${rating} / 5 (${ratingLabels[rating] || ""})`,
            Name: name.trim() || "Anonymous Seller",
            "Contact (Email/Phone)": contact.trim() || "Not provided",
            Feedback: message.trim(),
            Submitted_At: new Date().toLocaleString(),
            _template: "table",
            _captcha: "false",
          }),
        }
      );

      const data = await response.json();

      if (response.ok && (data.success === "true" || data.success === true || response.status === 200)) {
        setStatus("success");
        setMessage("");
        setName("");
        setContact("");
        setRating(5);
      } else {
        throw new Error(data.message || "Failed to send feedback.");
      }
    } catch (err) {
      console.error("Feedback submit error:", err);
      setStatus("error");
      setShowWhatsAppFallback(true);
      if (!WEB3FORMS_KEY) {
        setErrorMessage(
          "Email service requires a free Web3Forms Access Key to deliver directly to your Gmail without timeout errors."
        );
      } else {
        setErrorMessage(
          "Network connection issue. You can also send this feedback directly to our WhatsApp."
        );
      }
    }
  };

  const handleReset = () => {
    setStatus("idle");
    setErrorMessage("");
    setShowWhatsAppFallback(false);
  };

  return (
    <section
      id="feedback"
      className="scroll-mt-18 border-t border-[var(--color-border)] bg-[var(--color-background)]"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl">
          {/* Card Container */}
          <div className="relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-xl sm:p-10">
            {/* Header */}
            <div className="text-center">
              <span className="inline-block rounded-full bg-[var(--color-primary)]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">
                Feedback
              </span>

              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[var(--color-foreground)] sm:text-3xl">
                Rate your experience
              </h2>

              <p className="mt-3 text-sm leading-6 text-[var(--color-muted)] sm:text-base">
                We highly value your feedback! Kindly take a moment to rate your
                experience and provide us with your valuable feedback.
              </p>
            </div>

            {status === "success" ? (
              <div className="mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-6 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-md">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="mt-4 text-xl font-bold text-[var(--color-foreground)]">
                  Thank You for Your Feedback!
                </h3>
                <p className="mt-2 text-sm text-[var(--color-muted)]">
                  Your feedback has been sent directly to <strong>{RECIPIENT_EMAIL}</strong>. We appreciate
                  your time and support in helping us grow!
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-[var(--color-primary-foreground)] shadow-sm transition-all hover:bg-[var(--color-primary-hover)]"
                >
                  Submit Another Feedback
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                {/* Interactive Star Rating */}
                <div className="flex flex-col items-center justify-center">
                  <div
                    className="flex items-center gap-2"
                    onMouseLeave={() => setHoverRating(0)}
                  >
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
                        className="group p-1 transition-transform hover:scale-125 focus:outline-none"
                      >
                        <Star
                          size={36}
                          className={`transition-colors ${
                            star <= activeRating
                              ? "fill-[var(--color-primary)] text-[var(--color-primary)] filter drop-shadow-sm"
                              : "text-[var(--color-border)] fill-transparent"
                          }`}
                        />
                      </button>
                    ))}
                  </div>

                  {activeRating > 0 && (
                    <span className="mt-2 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">
                      {ratingLabels[activeRating]}
                    </span>
                  )}
                </div>

                {/* Name and Email/Phone fields */}
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="feedback-name"
                      className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]"
                    >
                      Your Name
                    </label>
                    <input
                      id="feedback-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ajay"
                      className="mt-1 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-3.5 py-2.5 text-sm text-[var(--color-foreground)] placeholder-[var(--color-muted)]/60 transition-colors focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="feedback-contact"
                      className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]"
                    >
                      Email or Phone
                    </label>
                    <input
                      id="feedback-contact"
                      type="text"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder="e.g. ajay@gmail.com"
                      className="mt-1 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-3.5 py-2.5 text-sm text-[var(--color-foreground)] placeholder-[var(--color-muted)]/60 transition-colors focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20"
                    />
                  </div>
                </div>

                {/* Feedback Textarea matching screenshot */}
                <div>
                  <label
                    htmlFor="feedback-message"
                    className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]"
                  >
                    Your Feedback <span className="text-[var(--color-primary)]">*</span>
                  </label>
                  <textarea
                    id="feedback-message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your experience!"
                    className="mt-1 w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-4 text-sm text-[var(--color-foreground)] placeholder-[var(--color-muted)]/60 shadow-inner transition-colors focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20"
                  />
                </div>

                {/* Error Banner */}
                {status === "error" && errorMessage && (
                  <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-3.5 text-xs text-red-600 dark:text-red-400">
                    <div className="flex items-start gap-2">
                      <AlertCircle size={16} className="mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold">{errorMessage}</p>
                      </div>
                    </div>

                    {showWhatsAppFallback && (
                      <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-red-500/20 pt-2.5">
                        <span className="text-xs">Or submit via WhatsApp directly:</span>
                        <a
                          href={getWhatsAppLink()}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white transition-all hover:bg-emerald-700"
                        >
                          <MessageCircle size={14} />
                          Send to WhatsApp
                          <ExternalLink size={12} />
                        </a>
                      </div>
                    )}
                  </div>
                )}

                {/* Submit Button */}
                <div className="flex justify-center pt-2">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="inline-flex min-w-[140px] items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-8 py-3 text-base font-bold text-[var(--color-primary-foreground)] shadow-md transition-all hover:-translate-y-0.5 hover:bg-[var(--color-primary-hover)] hover:shadow-lg disabled:opacity-60"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send
                      </>
                    )}
                  </button>
                </div>

                {/* Privacy / note */}
                <p className="text-center text-xs text-[var(--color-muted)]">
                  Feedback destination:{" "}
                  <span className="font-semibold text-[var(--color-foreground)]">
                    {RECIPIENT_EMAIL}
                  </span>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeedbackSection;
