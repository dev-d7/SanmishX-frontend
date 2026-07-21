"use client";
import { useEffect, useRef, useState } from "react";
import { LOGO_BASE64 } from "@/lib/data";

type Msg = {
  id: number;
  who: "assistant" | "user" | "typing";
  text: string;
  time: string;
  streaming?: boolean;
};

const SUGGESTIONS = ["Find Products", "Become a Seller", "Request Quote", "Marketplace Help", "Track Order", "Latest Offers"];

function nowStamp() {
  return new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

function getBotReply(message: string): string {
  const m = message.toLowerCase();
  if (/\b(hi|hello|hey|namaste|good (morning|evening|afternoon))\b/.test(m)) {
    return "Hello! I'm SANMISH AI. I can help you discover equipment, find verified suppliers, request quotations or track an order. What are you looking for today?";
  }
  if (/product|equipment|catalog|catalogue|browse|find/.test(m)) {
    return "We list thousands of verified products across CNG, CBG and Bio Gas — compressors, dispensers, cascade storage, flow meters, valves and control panels. Tell me the category or spec you need and I'll point you to the right listings.";
  }
  if (/seller|sell|vendor|list my|become a seller|onboard/.test(m)) {
    return "Great — becoming a SANMISH seller takes three steps:\n1. Create your seller account and verify your business documents.\n2. List your products with specs, pricing and lead times.\n3. Start receiving qualified RFQs from buyers across India.\nWould you like the link to begin onboarding?";
  }
  if (/quote|quotation|rfq|price|pricing|cost/.test(m)) {
    return "To request a quotation, share the product, quantity and your delivery location. You can send one RFQ to multiple verified suppliers and compare their offers side by side. Which equipment should I raise a quote for?";
  }
  if (/track|order|shipment|delivery|dispatch/.test(m)) {
    return "I can help track your order — please share your order ID (for example, SM-2026-00123) and I'll pull the latest dispatch and delivery status for you.";
  }
  if (/offer|deal|discount|latest/.test(m)) {
    return "This month's highlights include bundled pricing on packaged compressors and reduced lead times on CBG dispensers from verified manufacturers. Want me to shortlist the best offers for your category?";
  }
  if (/help|support|how|what can you/.test(m)) {
    return "Happy to help! I can:\n• Find products and compare suppliers\n• Guide you through requesting quotations\n• Explain how to become a seller\n• Track orders and share the latest offers\nJust tell me what you need.";
  }
  if (/thank|thanks|great|awesome|nice/.test(m)) {
    return "You're welcome! Anything else I can help you source on SANMISH today?";
  }
  return "Thanks for your message! I can help with finding products, comparing verified suppliers, requesting quotations, tracking orders and seller onboarding. Could you tell me a bit more about what you're looking for?";
}

const MAV_SVG = (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 7l1.1 2.6L15.7 11 13.1 12.1 12 14.7 10.9 12.1 8.3 11l2.6-1.4L12 7z" fill="#fff" />
  </svg>
);

let idCounter = 0;
const nextId = () => ++idCounter;

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [panelMounted, setPanelMounted] = useState(false);
  const [busy, setBusy] = useState(false);
  const [showChips, setShowChips] = useState(true);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [inputValue, setInputValue] = useState("");

  const panelRef = useRef<HTMLElement>(null);
  const fieldRef = useRef<HTMLTextAreaElement>(null);
  const msgsRef = useRef<HTMLDivElement>(null);
  const fabRef = useRef<HTMLButtonElement>(null);
  const lastFocusRef = useRef<HTMLElement | null>(null);

  // welcome message on mount
  useEffect(() => {
    setMessages([
      {
        id: nextId(),
        who: "assistant",
        text: "Welcome to SANMISH AI\n\nI'm your intelligent assistant. I can help you discover products, find suppliers, request quotations, and answer any marketplace questions.",
        time: nowStamp(),
      },
    ]);
  }, []);

  useEffect(() => {
    if (msgsRef.current) msgsRef.current.scrollTop = msgsRef.current.scrollHeight;
  }, [messages]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closePanel();
        return;
      }
      if (e.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), textarea, [tabindex="0"]'
        );
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const openPanel = () => {
    if (isOpen) return;
    lastFocusRef.current = document.activeElement as HTMLElement;
    setPanelMounted(true);
    requestAnimationFrame(() => setIsOpen(true));
    setTimeout(() => fieldRef.current?.focus(), 300);
  };

  const closePanel = () => {
    if (!isOpen) return;
    setIsOpen(false);
    setTimeout(() => setPanelMounted(false), 420);
    if (lastFocusRef.current) lastFocusRef.current.focus();
    else fabRef.current?.focus();
  };

  const newChat = () => {
    setMessages([
      {
        id: nextId(),
        who: "assistant",
        text: "Welcome to SANMISH AI\n\nI'm your intelligent assistant. I can help you discover products, find suppliers, request quotations, and answer any marketplace questions.",
        time: nowStamp(),
      },
    ]);
    setShowChips(true);
    setInputValue("");
    fieldRef.current?.focus();
  };

  const streamInto = (id: number, text: string) =>
    new Promise<void>((resolve) => {
      const words = text.split(/(\s+)/);
      let i = 0;
      let acc = "";
      const tick = () => {
        if (i >= words.length) {
          setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, streaming: false } : m)));
          resolve();
          return;
        }
        acc += words[i];
        i++;
        const snapshot = acc;
        setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, text: snapshot } : m)));
        setTimeout(tick, 25 + Math.random() * 15);
      };
      setTimeout(tick, 40);
    });

  const handleSend = async (raw: string) => {
    const text = raw.trim();
    if (!text || busy) return;

    setShowChips(false);
    setMessages((prev) => [...prev, { id: nextId(), who: "user", text, time: nowStamp() }]);
    setInputValue("");
    setBusy(true);

    const typingId = nextId();
    setMessages((prev) => [...prev, { id: typingId, who: "typing", text: "", time: nowStamp() }]);
    const delay = 800 + Math.random() * 400;

    let replyText: string;
    try {
      const [reply] = await Promise.all([
        Promise.resolve(getBotReply(text)),
        new Promise((r) => setTimeout(r, delay)),
      ]);
      replyText = reply;
    } catch {
      replyText = "Sorry — something went wrong on my side. Please try again in a moment.";
    }

    const assistantId = nextId();
    setMessages((prev) =>
      prev
        .filter((m) => m.id !== typingId)
        .concat({ id: assistantId, who: "assistant", text: "", time: nowStamp(), streaming: true })
    );
    await streamInto(assistantId, replyText);
    setBusy(false);
  };

  const autoGrow = () => {
    const el = fieldRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 120) + "px";
  };

  const sendDisabled = busy || inputValue.trim() === "";

  return (
    <div id="smai-root" className={isOpen ? "smai-open" : ""} aria-live="polite">
      <button
        id="smai-fab"
        ref={fabRef}
        aria-label="Open SANMISH AI assistant"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        onClick={openPanel}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 3a9 9 0 0 0-9 9c0 1.6.42 3.1 1.15 4.4L3 21l4.8-1.1A9 9 0 1 0 12 3z" />
          <path d="M12 8.2l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9.9-2.1z" fill="currentColor" stroke="none" />
        </svg>
      </button>
      <span id="smai-tip" role="tooltip">Ask SANMISH AI</span>

      {panelMounted && (
        <section id="smai-panel" ref={panelRef} role="dialog" aria-modal="false" aria-label="SANMISH AI chat">
          <header className="smai-header">
            <div className="smai-avatar">
              <img id="smai-logo" alt="SANMISH AI" src={LOGO_BASE64} />
              <span className="smai-dot" aria-hidden="true" />
            </div>
            <div className="smai-htext">
              <b>SANMISH AI</b>
              <span>Ready to help</span>
            </div>
            <div className="smai-hactions">
              <button className="smai-icbtn" title="New chat" aria-label="Start a new chat" onClick={newChat}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </button>
              <button className="smai-icbtn" title="Minimize" aria-label="Minimize chat" onClick={closePanel}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14" />
                </svg>
              </button>
              <button className="smai-icbtn" title="Close (Esc)" aria-label="Close chat" onClick={closePanel}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
          </header>

          <div className="smai-msgs" ref={msgsRef} role="log" aria-label="Conversation" tabIndex={0}>
            {messages.map((m) =>
              m.who === "typing" ? (
                <div className="smai-row smai-assistant" key={m.id}>
                  <div className="smai-mav">{MAV_SVG}</div>
                  <div className="smai-bubble smai-typing" aria-label="Assistant is typing">
                    <span /><span /><span />
                  </div>
                </div>
              ) : (
                <div className={`smai-row smai-${m.who}`} key={m.id}>
                  {m.who === "assistant" && <div className="smai-mav">{MAV_SVG}</div>}
                  <div className="smai-wrap">
                    <div className="smai-bubble">
                      {m.text}
                      {m.streaming && <span className="smai-caret" />}
                    </div>
                    <div className="smai-time">{m.time}</div>
                  </div>
                </div>
              )
            )}
            {showChips && !busy && messages.length === 1 && (
              <div className="smai-chips">
                {SUGGESTIONS.map((s, idx) => (
                  <button
                    key={s}
                    className="smai-chip"
                    type="button"
                    style={{ animationDelay: `${idx * 0.05}s` }}
                    onClick={() => handleSend(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="smai-input">
            <div className="smai-inrow">
              <button className="smai-tool" title="Attach file (coming soon)" aria-label="Attach file (coming soon)" disabled>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21.4 11.05 12.25 20.2a5.5 5.5 0 0 1-7.78-7.78l8.49-8.49a3.67 3.67 0 1 1 5.18 5.19l-8.5 8.48a1.83 1.83 0 0 1-2.59-2.59l7.79-7.78" />
                </svg>
              </button>
              <textarea
                className="smai-field"
                ref={fieldRef}
                rows={1}
                placeholder="Ask SANMISH AI..."
                aria-label="Message SANMISH AI"
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                  autoGrow();
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend(inputValue);
                  }
                }}
              />
              <button className="smai-tool" title="Voice input (coming soon)" aria-label="Voice input (coming soon)" disabled>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="9" y="2" width="6" height="12" rx="3" /><path d="M5 10a7 7 0 0 0 14 0M12 19v3" />
                </svg>
              </button>
              <button
                className="smai-send"
                title="Send"
                aria-label="Send message"
                disabled={sendDisabled}
                onClick={() => handleSend(inputValue)}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
            </div>
            <div className="smai-foot">SANMISH AI can make mistakes. Verify important details.</div>
          </div>
        </section>
      )}
    </div>
  );
}
