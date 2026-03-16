import { useState, useEffect, useRef } from "react";

const CHAPTERS = [
  {
    id: 0,
    phase: "DAY 0",
    title: "The Invisible Builder",
    emoji: "👻",
    color: "#FF3B3B",
    tagline: "10 years of work. Zero online presence.",
    story: "Dhiraj Sarwade has built luxury farmhouses, premium interiors, and residential projects across PCMC. But search 'contractor Hinjewadi' on Google — DNS Builders doesn't exist. Every day, 50+ families search for exactly what he builds. They find his competitors.",
    stats: [
      { label: "Google Results", value: "0", sub: "for DNS Builders" },
      { label: "Online Leads", value: "0", sub: "per month" },
      { label: "Cash Visibility", value: "diary", sub: "& memory" },
      { label: "Digital Reviews", value: "0", sub: "anywhere" },
    ],
    pain: ["Leads call once, never followed up, gone forever", "₹1–2L leaking monthly — untracked across 2 firms", "Smaller builders with worse work rank above DNS", "Celebrity farmhouse built — but no one knows"],
    cta: null,
  },
  {
    id: 1,
    phase: "WEEK 1–2",
    title: "The Foundation Goes In",
    emoji: "🏗️",
    color: "#E8651A",
    tagline: "Before the world sees DNS Builders, the infrastructure is built.",
    story: "ads4you sets up the complete digital backbone. Google Business Profile verified for both DNS Builders and Radhika Enterprises. JustDial, IndiaMart, Sulekha profiles live. DhanaTrack app deployed — both firms, offline-ready. WhatsApp AI bot configured with Dhiraj's voice and portfolio.",
    stats: [
      { label: "Platforms Live", value: "5", sub: "listing sites" },
      { label: "Bot Response", value: "30sec", sub: "auto-reply" },
      { label: "App Setup", value: "2 firms", sub: "dual ledgers" },
      { label: "Content Ready", value: "8 posts", sub: "scheduled" },
    ],
    progress: [
      { task: "Google Business Profile", done: true },
      { task: "JustDial + IndiaMart + Sulekha", done: true },
      { task: "WhatsApp AI Bot", done: true },
      { task: "DhanaTrack Android App", done: true },
      { task: "Portfolio Website", done: true },
      { task: "AI Avatar Recording", done: false },
    ],
    cta: null,
  },
  {
    id: 2,
    phase: "MONTH 1–2",
    title: "DNS Builders Appears on Google",
    emoji: "🌱",
    color: "#C9A84C",
    tagline: "For the first time — people can find Dhiraj.",
    story: "The GBP listing starts showing up in local searches. 500–1,000 views per month. The WhatsApp bot catches every enquiry — day or night — and sends Dhiraj's portfolio automatically. DhanaTrack reveals ₹40–70K in forgotten receivables in the first week.",
    stats: [
      { label: "GBP Views", value: "800+", sub: "per month" },
      { label: "Leads Captured", value: "100%", sub: "bot catches all" },
      { label: "Cash Found", value: "₹55K", sub: "avg forgotten" },
      { label: "Response Time", value: "30sec", sub: "vs 6hrs before" },
    ],
    before_after: [
      { before: "Lead calls, no answer → gone", after: "Bot replies in 30 seconds, sends portfolio" },
      { before: "₹40K receivable forgotten", after: "DhanaTrack alerts: client owes ₹40K since Aug" },
      { before: "Google: zero results", after: "Google: DNS Builders, Hinjewadi — Page 2" },
    ],
    cta: null,
  },
  {
    id: 3,
    phase: "MONTH 3–4",
    title: "First Digital Leads Arrive",
    emoji: "📈",
    color: "#00C896",
    tagline: "Real enquiries from people who searched and found DNS.",
    story: "2–4 genuine project enquiries per month — people who found DNS Builders on Google, read the reviews, saw the portfolio, and reached out. The 60-day reactivation sequence fires — old leads who went cold start responding. JustDial generating 3–5 extra calls per month.",
    stats: [
      { label: "Digital Enquiries", value: "2–4", sub: "per month" },
      { label: "Leads Reactivated", value: "1–2", sub: "from cold list" },
      { label: "JustDial Calls", value: "3–5", sub: "extra/month" },
      { label: "AI Video Views", value: "500+", sub: "first video" },
    ],
    timeline: [
      { day: "Day 1", event: "Lead finds DNS on Google, fills form" },
      { day: "Day 1", event: "Bot responds in 30sec, sends portfolio PDF" },
      { day: "Day 3", event: "Auto follow-up: 'Did you get a chance to review?'" },
      { day: "Day 7", event: "Bot sends project gallery + testimonial" },
      { day: "Day 15", event: "Dhiraj gets alert: hot lead, 3 touchpoints done" },
      { day: "Day 20", event: "Lead books site visit — project confirmed" },
    ],
    cta: null,
  },
  {
    id: 4,
    phase: "MONTH 5–6",
    title: "System Running Itself",
    emoji: "🔥",
    color: "#C9A84C",
    tagline: "Dhiraj focuses on building. Systems handle everything else.",
    story: "DNS Builders hits Page 1 for 'contractor Hinjewadi'. Cash leak reduced by ₹60–80K per month through DhanaTrack. 5–8 qualified enquiries per month. The AI avatar is posting videos — Dhiraj's face and voice, built by AI, running on autopilot. YouTube crosses 200 subscribers.",
    stats: [
      { label: "Search Ranking", value: "Page 1", sub: "Hinjewadi contractor" },
      { label: "Monthly Savings", value: "₹70K", sub: "cash leak stopped" },
      { label: "Enquiries", value: "5–8", sub: "qualified/month" },
      { label: "YouTube Subs", value: "200+", sub: "organic growth" },
    ],
    systems: [
      { name: "WhatsApp Bot", status: "Fully Autonomous", icon: "🤖" },
      { name: "Content Posts", status: "12/month auto-published", icon: "📱" },
      { name: "DhanaTrack", status: "Both firms synced", icon: "💰" },
      { name: "AI Avatar Videos", status: "2 videos/month live", icon: "🎬" },
      { name: "Lead Follow-up", status: "30-day sequence running", icon: "📨" },
      { name: "Google Rankings", status: "Climbing weekly", icon: "📈" },
    ],
    cta: null,
  },
  {
    id: 5,
    phase: "MONTH 7–12",
    title: "DNS Builders — PCMC's Most Visible Contractor",
    emoji: "🏆",
    color: "#C9A84C",
    tagline: "Premium clients approach Dhiraj. He chooses his projects.",
    story: "1–2 new projects per month from digital alone. 5+ verified Google reviews building compounding trust. GST invoicing automated. Latur project pre-marketed — investors finding DNS Builders online. Every post, every video, every review makes the next client easier to close. The system compounds.",
    stats: [
      { label: "Digital Projects", value: "1–2", sub: "new/month" },
      { label: "Google Reviews", value: "5+", sub: "verified" },
      { label: "Est. Extra Revenue", value: "₹50L+", sub: "Year 1" },
      { label: "ROI", value: "17–35x", sub: "on investment" },
    ],
    comparison: [
      { metric: "Google Visibility", before: "Zero", after: "Page 1, 5+ terms" },
      { metric: "Monthly Leads", before: "2–3 WhatsApp", after: "12+ qualified digital" },
      { metric: "Cash Tracking", before: "Diary + memory", after: "Real-time, both firms" },
      { metric: "Lead Response", before: "Hours or never", after: "30 seconds, 24/7" },
      { metric: "Online Portfolio", before: "WhatsApp album", after: "Professional website" },
      { metric: "Dhiraj's time", before: "All admin + sales", after: "100% on building" },
    ],
    cta: "Start This Journey — ₹45,000",
  },
];

function StatCard({ label, value, sub, color }) {
  const [counted, setCounted] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const t = setTimeout(() => setCounted(true), 300);
    return () => clearTimeout(t);
  }, []);
  return (
    <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,168,76,0.1)", padding: "16px 14px", textAlign: "center" }}>
      <div style={{ fontSize: "1.6rem", fontWeight: 900, color: color || "#C9A84C", letterSpacing: "-1px", lineHeight: 1, transition: "all 0.5s" }}>
        {counted ? value : "—"}
      </div>
      <div style={{ fontSize: "0.62rem", color: "#EDE8DF", fontWeight: 600, marginTop: 4 }}>{label}</div>
      <div style={{ fontSize: "0.55rem", color: "#4A6280", marginTop: 2 }}>{sub}</div>
    </div>
  );
}

function ProgressBar({ percent, color, animated }) {
  const [w, setW] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setW(percent), 400);
    return () => clearTimeout(t);
  }, [percent]);
  return (
    <div style={{ height: 3, background: "rgba(255,255,255,0.06)", borderRadius: 2, overflow: "hidden", marginTop: 6 }}>
      <div style={{ height: "100%", width: w + "%", background: color, borderRadius: 2, transition: "width 1.2s cubic-bezier(0.4,0,0.2,1)" }} />
    </div>
  );
}

export default function App() {
  const [active, setActive] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);
  const timerRef = useRef();
  const ch = CHAPTERS[active];

  useEffect(() => {
    setAnimKey(k => k + 1);
  }, [active]);

  useEffect(() => {
    if (autoPlay) {
      timerRef.current = setInterval(() => {
        setActive(a => {
          if (a >= CHAPTERS.length - 1) { setAutoPlay(false); return a; }
          return a + 1;
        });
      }, 4000);
    }
    return () => clearInterval(timerRef.current);
  }, [autoPlay]);

  const go = (dir) => {
    setAutoPlay(false);
    setActive(a => Math.max(0, Math.min(CHAPTERS.length - 1, a + dir)));
  };

  const overallProgress = (active / (CHAPTERS.length - 1)) * 100;

  return (
    <div style={{ background: "#050709", color: "#EDE8DF", fontFamily: "'DM Sans', 'Segoe UI', sans-serif", minHeight: "100vh", userSelect: "none" }}>
      
      {/* TOP NAV */}
      <div style={{ background: "#07111E", borderBottom: "1px solid rgba(201,168,76,0.12)", padding: "12px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
        <div>
          <div style={{ fontSize: "0.48rem", color: "#C9A84C", letterSpacing: "3px", textTransform: "uppercase" }}>ads4you × DNS Builders</div>
          <div style={{ fontSize: "0.9rem", fontWeight: 800, letterSpacing: "-0.3px" }}>Business Transformation Walkthrough</div>
        </div>
        <button
          onClick={() => setAutoPlay(p => !p)}
          style={{ background: autoPlay ? "rgba(201,168,76,0.15)" : "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.3)", color: "#C9A84C", padding: "7px 16px", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "1px", cursor: "pointer", textTransform: "uppercase" }}>
          {autoPlay ? "⏸ Pause" : "▶ Auto Play"}
        </button>
      </div>

      {/* CHAPTER DOTS */}
      <div style={{ padding: "14px 20px 0", display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
        {CHAPTERS.map((c, i) => (
          <button key={i} onClick={() => { setAutoPlay(false); setActive(i); }}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, background: "none", border: "none", cursor: "pointer", padding: "4px 6px" }}>
            <div style={{ width: i === active ? 28 : 10, height: 3, borderRadius: 2, background: i === active ? c.color : i < active ? "rgba(201,168,76,0.4)" : "rgba(255,255,255,0.1)", transition: "all 0.3s" }} />
            {i === active && <div style={{ fontSize: "0.42rem", color: c.color, letterSpacing: "1.5px", textTransform: "uppercase", whiteSpace: "nowrap" }}>{c.phase}</div>}
          </button>
        ))}
        <div style={{ marginLeft: "auto", fontSize: "0.55rem", color: "#4A6280" }}>{active + 1} / {CHAPTERS.length}</div>
      </div>

      {/* OVERALL PROGRESS */}
      <div style={{ padding: "8px 20px 0" }}>
        <ProgressBar percent={overallProgress} color={ch.color} />
      </div>

      {/* MAIN CONTENT */}
      <div key={animKey} style={{ padding: "24px 20px 100px", maxWidth: 720, margin: "0 auto" }}>
        
        {/* CHAPTER HEADER */}
        <div style={{ marginBottom: 24, animation: "fadeUp 0.5s ease forwards" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
            <div style={{ fontSize: "2.4rem", lineHeight: 1 }}>{ch.emoji}</div>
            <div>
              <div style={{ fontSize: "0.48rem", color: ch.color, letterSpacing: "3px", textTransform: "uppercase", fontWeight: 700 }}>{ch.phase}</div>
              <h2 style={{ fontSize: "clamp(1.3rem, 4vw, 2rem)", fontWeight: 900, letterSpacing: "-0.5px", lineHeight: 1.1, margin: 0, color: "#EDE8DF" }}>{ch.title}</h2>
            </div>
          </div>
          <div style={{ fontSize: "0.78rem", color: ch.color, fontWeight: 600, marginBottom: 8 }}>{ch.tagline}</div>
          <p style={{ fontSize: "0.72rem", color: "#4A6280", lineHeight: 1.75, margin: 0 }}>{ch.story}</p>
        </div>

        {/* STATS GRID */}
        {ch.stats && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8, marginBottom: 24 }}>
            {ch.stats.map((s, i) => <StatCard key={i} {...s} color={ch.color} />)}
          </div>
        )}

        {/* PAIN POINTS (Chapter 0) */}
        {ch.pain && (
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontSize: "0.48rem", color: "#FF3B3B", letterSpacing: "3px", textTransform: "uppercase", marginBottom: 10, fontWeight: 700 }}>The Real Problems</div>
            {ch.pain.map((p, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "10px 12px", background: "rgba(255,59,59,0.04)", border: "1px solid rgba(255,59,59,0.1)", borderLeft: "3px solid #FF3B3B", marginBottom: 6 }}>
                <span style={{ color: "#FF3B3B", fontSize: "0.7rem", flexShrink: 0, marginTop: 1 }}>✗</span>
                <span style={{ fontSize: "0.7rem", color: "#EDE8DF", lineHeight: 1.5 }}>{p}</span>
              </div>
            ))}
          </div>
        )}

        {/* PROGRESS CHECKLIST (Chapter 1) */}
        {ch.progress && (
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontSize: "0.48rem", color: "#E8651A", letterSpacing: "3px", textTransform: "uppercase", marginBottom: 10, fontWeight: 700 }}>Setup Progress</div>
            {ch.progress.map((p, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", background: p.done ? "rgba(0,200,150,0.04)" : "rgba(255,255,255,0.02)", border: `1px solid ${p.done ? "rgba(0,200,150,0.15)" : "rgba(255,255,255,0.05)"}`, marginBottom: 5 }}>
                <div style={{ width: 18, height: 18, borderRadius: "50%", background: p.done ? "#00C896" : "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.6rem", flexShrink: 0 }}>
                  {p.done ? "✓" : "○"}
                </div>
                <span style={{ fontSize: "0.7rem", color: p.done ? "#EDE8DF" : "#4A6280" }}>{p.task}</span>
                {p.done && <span style={{ marginLeft: "auto", fontSize: "0.5rem", color: "#00C896", letterSpacing: "1px" }}>DONE</span>}
              </div>
            ))}
          </div>
        )}

        {/* BEFORE/AFTER (Chapter 2) */}
        {ch.before_after && (
          <div style={{ marginBottom: 24 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, marginBottom: 8 }}>
              <div style={{ fontSize: "0.48rem", color: "#FF3B3B", letterSpacing: "3px", textTransform: "uppercase", fontWeight: 700, padding: "6px 10px", background: "rgba(255,59,59,0.06)" }}>BEFORE</div>
              <div style={{ fontSize: "0.48rem", color: "#00C896", letterSpacing: "3px", textTransform: "uppercase", fontWeight: 700, padding: "6px 10px", background: "rgba(0,200,150,0.06)" }}>AFTER</div>
            </div>
            {ch.before_after.map((ba, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, marginBottom: 2 }}>
                <div style={{ fontSize: "0.65rem", color: "#4A6280", padding: "10px 12px", background: "rgba(255,59,59,0.02)", lineHeight: 1.5 }}>{ba.before}</div>
                <div style={{ fontSize: "0.65rem", color: "#EDE8DF", padding: "10px 12px", background: "rgba(0,200,150,0.03)", lineHeight: 1.5 }}>{ba.after}</div>
              </div>
            ))}
          </div>
        )}

        {/* LEAD TIMELINE (Chapter 3) */}
        {ch.timeline && (
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontSize: "0.48rem", color: "#00C896", letterSpacing: "3px", textTransform: "uppercase", marginBottom: 10, fontWeight: 700 }}>How a Lead Becomes a Project</div>
            {ch.timeline.map((t, i) => (
              <div key={i} style={{ display: "flex", gap: 12, marginBottom: 8 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: i === ch.timeline.length - 1 ? "#00C896" : "#C9A84C", flexShrink: 0, marginTop: 4 }} />
                  {i < ch.timeline.length - 1 && <div style={{ width: 1, flex: 1, background: "rgba(201,168,76,0.15)", minHeight: 16 }} />}
                </div>
                <div style={{ paddingBottom: 8 }}>
                  <div style={{ fontSize: "0.48rem", color: "#C9A84C", letterSpacing: "2px", textTransform: "uppercase", marginBottom: 2 }}>{t.day}</div>
                  <div style={{ fontSize: "0.68rem", color: "#EDE8DF", lineHeight: 1.5 }}>{t.event}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* SYSTEMS STATUS (Chapter 4) */}
        {ch.systems && (
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontSize: "0.48rem", color: "#C9A84C", letterSpacing: "3px", textTransform: "uppercase", marginBottom: 10, fontWeight: 700 }}>All Systems Running</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 8 }}>
              {ch.systems.map((s, i) => (
                <div key={i} style={{ padding: "12px 14px", background: "rgba(0,200,150,0.04)", border: "1px solid rgba(0,200,150,0.12)", display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <span style={{ fontSize: "1.3rem", lineHeight: 1 }}>{s.icon}</span>
                  <div>
                    <div style={{ fontSize: "0.65rem", fontWeight: 700, color: "#EDE8DF" }}>{s.name}</div>
                    <div style={{ fontSize: "0.58rem", color: "#00C896", marginTop: 2 }}>{s.status}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FINAL COMPARISON (Chapter 5) */}
        {ch.comparison && (
          <div style={{ marginBottom: 24 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 2, marginBottom: 6 }}>
              <div style={{ fontSize: "0.46rem", color: "#4A6280", letterSpacing: "2px", textTransform: "uppercase", padding: "6px 8px", background: "rgba(255,255,255,0.02)" }}></div>
              <div style={{ fontSize: "0.46rem", color: "#FF3B3B", letterSpacing: "2px", textTransform: "uppercase", padding: "6px 8px", background: "rgba(255,59,59,0.06)", textAlign: "center" }}>BEFORE</div>
              <div style={{ fontSize: "0.46rem", color: "#00C896", letterSpacing: "2px", textTransform: "uppercase", padding: "6px 8px", background: "rgba(0,200,150,0.06)", textAlign: "center" }}>AFTER</div>
            </div>
            {ch.comparison.map((row, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 2, marginBottom: 2 }}>
                <div style={{ fontSize: "0.62rem", color: "#C9A84C", padding: "10px 10px", background: "rgba(201,168,76,0.03)", fontWeight: 600 }}>{row.metric}</div>
                <div style={{ fontSize: "0.62rem", color: "#4A6280", padding: "10px 10px", background: "rgba(255,59,59,0.02)", textAlign: "center" }}>{row.before}</div>
                <div style={{ fontSize: "0.62rem", color: "#EDE8DF", padding: "10px 10px", background: "rgba(0,200,150,0.03)", textAlign: "center", fontWeight: 600 }}>{row.after}</div>
              </div>
            ))}
          </div>
        )}

        {/* FINAL CTA */}
        {ch.cta && (
          <a href="https://wa.me/919767066941?text=Dhiraj here. I want to start the Full Digital System." style={{ display: "block", background: "linear-gradient(135deg,#C9A84C,#E8651A)", color: "#050709", textAlign: "center", padding: "18px 24px", fontSize: "0.72rem", fontWeight: 900, letterSpacing: "1px", textDecoration: "none", textTransform: "uppercase", marginTop: 16 }}>
            💬 {ch.cta} — WhatsApp Prashant
          </a>
        )}
      </div>

      {/* BOTTOM NAV */}
      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, background: "#07111E", borderTop: "1px solid rgba(201,168,76,0.1)", padding: "12px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
        <button onClick={() => go(-1)} disabled={active === 0}
          style={{ background: active === 0 ? "rgba(255,255,255,0.03)" : "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)", color: active === 0 ? "#4A6280" : "#C9A84C", padding: "10px 20px", fontSize: "0.62rem", fontWeight: 700, cursor: active === 0 ? "not-allowed" : "pointer", letterSpacing: "1px" }}>
          ← PREV
        </button>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "0.65rem", fontWeight: 700, color: ch.color }}>{ch.phase}</div>
          <div style={{ fontSize: "0.55rem", color: "#4A6280" }}>{ch.title}</div>
        </div>
        <button onClick={() => go(1)} disabled={active === CHAPTERS.length - 1}
          style={{ background: active === CHAPTERS.length - 1 ? "rgba(255,255,255,0.03)" : `rgba(${ch.id === 0 ? "255,59,59" : "201,168,76"},0.1)`, border: `1px solid ${active === CHAPTERS.length - 1 ? "rgba(255,255,255,0.05)" : ch.color + "44"}`, color: active === CHAPTERS.length - 1 ? "#4A6280" : ch.color, padding: "10px 20px", fontSize: "0.62rem", fontWeight: 700, cursor: active === CHAPTERS.length - 1 ? "not-allowed" : "pointer", letterSpacing: "1px" }}>
          NEXT →
        </button>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
