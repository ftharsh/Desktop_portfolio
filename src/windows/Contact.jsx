import React, { useEffect, useState } from "react";
import { Coffee } from "lucide-react";
import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls } from "#components";
import useWindowStore from "#store/window";
import { FORMSPREE_URL, CONTACT_META, CONTACT_ACTIONS } from "#constants";

const ActionIcons = {
  email: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  ),
  github: () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  ),
  linked: () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  twitter: () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  ),
};

const IDLE = "idle";
const SENDING = "sending";
const SUCCESS = "success";
const ERROR = "error";

const FEEDBACK_TIMEOUT_MS = 5000;

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(IDLE);
  const [fieldErrors, setFieldErrors] = useState({});
  const firstErrorRef = React.useRef(null);

  const isOpen = useWindowStore((s) => s.windows.contact.isOpen);

  useEffect(() => {
    if (status !== SUCCESS) return;
    const t = setTimeout(() => setStatus(IDLE), FEEDBACK_TIMEOUT_MS);
    return () => clearTimeout(t);
  }, [status]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) setFieldErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const errors = {};
    if (!form.name.trim()) errors.name = "Name is required.";
    if (!form.email.trim()) errors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = "Enter a valid email.";
    if (!form.message.trim()) errors.message = "Message is required.";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setTimeout(() => firstErrorRef.current?.focus(), 0);
      return;
    }
    setStatus(SENDING);
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus(SUCCESS);
        setForm({ name: "", email: "", message: "" });
        setFieldErrors({});
      } else {
        setStatus(ERROR);
      }
    } catch {
      setStatus(ERROR);
    }
  };

  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact</h2>
      </div>

      <div className="cc-body">
        <div className="cc-content-row">
          {/* ── Left column: avatar + identity ── */}
          <div className="cc-left-col">
            <div className="cc-avatar-wrap">
              <div className="cc-avatar">
                <img src="/images/Harsh.png" alt={CONTACT_META.name} />
              </div>
              <span className="cc-online-dot" aria-label="Online" />
            </div>
            <p className="cc-eyebrow">{CONTACT_META.eyebrow}</p>
            <h2 className="cc-name">{CONTACT_META.name}</h2>
            <p className="cc-location">{CONTACT_META.location}</p>
          </div>

          {/* ── Right column: actions, tagline, info, form ── */}
          <div className="cc-right-col">
            <div className="cc-actions" role="list">
              {CONTACT_ACTIONS.map(({ label, href }) => {
                const Icon = ActionIcons[label];
                return (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? "_self" : "_blank"}
                    rel="noreferrer"
                    className="cc-action"
                    aria-label={label}
                    role="listitem"
                  >
                    {Icon && <Icon />}
                    <span className="cc-action-label">{label}</span>
                  </a>
                );
              })}
            </div>

            <div className="cc-tagline">
              <Coffee size={14} strokeWidth={1.5} className="cc-tagline-icon" />
              <span>{CONTACT_META.tagline}</span>
            </div>

            <div className="cc-info-list">
              {CONTACT_META.infoRows.map(({ label, value, href, isLink }) => (
                <div key={label} className="cc-info-row">
                  <span className="cc-info-label">{label}</span>
                  {isLink ? (
                    <a href={href} className="cc-info-value cc-info-link">{value}</a>
                  ) : (
                    <span className="cc-info-value">{value}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="cc-form-section">
              <form onSubmit={handleSubmit} noValidate>
                <div className="cc-form-group">
                  <div className="cc-form-row">
                    <div>
                      <input
                        id="cc-name"
                        name="name"
                        type="text"
                        className="cc-field"
                        placeholder="Name"
                        value={form.name}
                        onChange={handleChange}
                        autoComplete="name"
                        aria-describedby={fieldErrors.name ? "cc-err-name" : undefined}
                        ref={fieldErrors.name ? firstErrorRef : null}
                      />
                      {fieldErrors.name && (
                        <span id="cc-err-name" className="cc-field-error" role="alert">{fieldErrors.name}</span>
                      )}
                    </div>
                    <div>
                      <input
                        id="cc-email"
                        name="email"
                        type="email"
                        className="cc-field"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        autoComplete="email"
                        spellCheck="false"
                        aria-describedby={fieldErrors.email ? "cc-err-email" : undefined}
                        ref={!fieldErrors.name && fieldErrors.email ? firstErrorRef : null}
                      />
                      {fieldErrors.email && (
                        <span id="cc-err-email" className="cc-field-error" role="alert">{fieldErrors.email}</span>
                      )}
                    </div>
                  </div>

                  <div className="cc-form-row cc-form-row--message">
                    <div>
                      <textarea
                        id="cc-message"
                        name="message"
                        className="cc-field cc-textarea"
                        placeholder="What's on your mind?"
                        value={form.message}
                        onChange={handleChange}
                        rows={1}
                        aria-describedby={fieldErrors.message ? "cc-err-message" : undefined}
                        ref={!fieldErrors.name && !fieldErrors.email && fieldErrors.message ? firstErrorRef : null}
                      />
                      {fieldErrors.message && (
                        <span id="cc-err-message" className="cc-field-error" role="alert">{fieldErrors.message}</span>
                      )}
                    </div>
                    <button type="submit" className="cc-send-btn" disabled={status === SENDING}>
                      {status === SENDING ? "Sending…" : "Send"}
                    </button>
                  </div>
                </div>

                {isOpen && status === SUCCESS && (
                  <p className="cc-feedback cc-feedback--ok" role="status">Message sent! I'll get back to you.</p>
                )}
                {status === ERROR && (
                  <p className="cc-feedback cc-feedback--err" role="alert">Something went wrong. Try emailing directly.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");
export default ContactWindow;
