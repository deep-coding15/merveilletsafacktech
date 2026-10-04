import { useCallback, useEffect, useRef, useState } from "react";
import { Client } from "@gradio/client";

// ---- Configuration : seul bloc à adapter ----
const CONFIG = {
  URL: import.meta.env.VITE_AVATAR_URL ?? "https://avatar.merveilletsafack.dev",
  ENDPOINT: "/chat", // nom d'API visible via « Use via API » en bas de ta page Gradio
  NAME: "Lydivine Merveille MAGNE TSAFACK",
  INITIALS: "LM", // initiales affichées dans le cercle du chat
  GREETING:
      "Bonjour, je suis l'assistant de Lydivine Merveille MAGNE TSAFACK, élève ingénieure en double diplome en M2 QUASSI à Polytech Angers et en 5e année d'ingénieurie en génie informatique à l'ENSA de Tétouan. Je peux répondre à vos questions sur mon parcours, mes projets et mes compétences.",
  MIN_SHOW_MS: 900, // évite un flash si le serveur est déjà actif
  TIMEOUT_MS: 120_000, // abandon après 2 minutes
};

const CIRC = 2 * Math.PI * 70;
const CAPS = [0.55, 0.92, 1]; // plafond de progression par étape
const STEPS = ["Démarrage du serveur", "Vérification de la connexion", "Assistant disponible"];
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

type Phase = "loading" | "ready" | "failed";
type Msg = { id: number; role: "user" | "bot"; text: string; error?: boolean; pending?: boolean };

export default function AvatarChat() {
  const [phase, setPhase] = useState<Phase>("loading");
  const [step, setStep] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [attempt, setAttempt] = useState(0);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [queue, setQueue] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const client = useRef<Client | null>(null);
  const arc = useRef<SVGCircleElement>(null);
  const progress = useRef(0);
  const cap = useRef(CAPS[0]);
  const nextId = useRef(1);
  const bottom = useRef<HTMLDivElement>(null);

  // 1. Réveil réel du serveur Gradio, puis connexion du client
  useEffect(() => {
    let cancelled = false;
    const t0 = performance.now();
    setPhase("loading");
    setStep(0);
    setElapsed(0);
    progress.current = 0;
    cap.current = CAPS[0];
    const timer = setInterval(() => setElapsed(Math.floor((performance.now() - t0) / 1000)), 1000);

    const alive = async () => {
      const ctrl = new AbortController();
      const to = setTimeout(() => ctrl.abort(), 8000);
      try {
        const r = await fetch(`${CONFIG.URL}/config`, { signal: ctrl.signal, cache: "no-store" });
        return r.ok;
      } catch {
        return false;
      } finally {
        clearTimeout(to);
      }
    };

    (async () => {
      let delay = 1500;
      while (!cancelled && performance.now() - t0 < CONFIG.TIMEOUT_MS) {
        if (await alive()) {
          setStep(1);
          cap.current = CAPS[1];
          try {
            client.current = await Client.connect(CONFIG.URL);
            await sleep(Math.max(0, CONFIG.MIN_SHOW_MS - (performance.now() - t0)));
            if (cancelled) return;
            setStep(2);
            cap.current = 1;
            return;
          } catch {
            setStep(0);
            cap.current = CAPS[0];
          }
        }
        await sleep(delay);
        delay = Math.min(delay * 1.25, 4000);
      }
      if (!cancelled) setPhase("failed");
    })();

    return () => {
      cancelled = true;
      clearInterval(timer);
    };
  }, [attempt]);

  // 2. Progression lissée : ne recule jamais, finit au signal réel de disponibilité
  useEffect(() => {
    if (phase !== "loading") return;
    let raf = 0;
    let revealTimer: ReturnType<typeof setTimeout>;
    let last = performance.now();
    const loop = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      const rate = cap.current === 1 ? 5 : 0.08;
      progress.current += (cap.current - progress.current) * (1 - Math.exp(-rate * dt));
      arc.current?.setAttribute("stroke-dashoffset", String(CIRC * (1 - progress.current)));
      if (cap.current === 1 && progress.current > 0.995) {
        revealTimer = setTimeout(() => setPhase("ready"), 650);
        return;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(revealTimer);
    };
  }, [phase, attempt]);

  const send = useCallback(async (text: string) => {
    const userId = nextId.current;
    const botId = userId + 1;
    nextId.current += 2;
    setMsgs((m) => [...m, { id: userId, role: "user", text }, { id: botId, role: "bot", text: "…", pending: true }]);
    try {
      const res = await client.current!.predict(CONFIG.ENDPOINT, { message: text });
      const raw = (res.data as any[])[0];
      const reply = typeof raw === "string" ? raw : (raw?.content ?? JSON.stringify(raw));
      setMsgs((m) => m.map((x) => (x.id === botId ? { ...x, text: reply, pending: false } : x)));
    } catch {
      setMsgs((m) =>
        m.map((x) =>
          x.id === botId
            ? { ...x, text: "La réponse n'a pas pu être obtenue. Veuillez réessayer.", pending: false, error: true }
            : x,
        ),
      );
    }
  }, []);

  // 3. À l'ouverture du chat : message d'accueil, puis envoi des messages mis en file
  useEffect(() => {
    if (phase !== "ready") return;
    setMsgs([{ id: 0, role: "bot", text: CONFIG.GREETING }]);
    const q = queue;
    setQueue([]);
    (async () => {
      for (const t of q) await send(t);
    })();
  }, [phase]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    bottom.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [msgs]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    setInput("");
    if (phase === "ready") send(text);
    else setQueue((q) => [...q, text]);
  };

  const failed = phase === "failed";
  const status = failed ? "Hors ligne" : step === 2 ? "En ligne" : "Démarrage en cours";
  const dot = failed ? "bg-red-400" : step === 2 ? "bg-emerald-400" : "bg-purple-400";
  const title = failed ? "Connexion impossible" : step === 2 ? "Assistant disponible" : "Initialisation de l'assistant";
  const hint = failed
    ? "Le serveur ne répond pas. Vérifiez votre connexion puis réessayez."
    : step === 2
      ? "Vous pouvez commencer."
      : elapsed < 8
        ? "Démarrage en cours. Cela ne prend que quelques instants."
        : elapsed < 25
          ? "Le serveur sort de veille, ce qui peut prendre jusqu'à une minute."
          : "Plus que quelques instants. Vous pouvez déjà saisir votre question, elle sera envoyée automatiquement.";

  return (
    <section
      aria-label={`Assistant de ${CONFIG.NAME}`}
      className="mx-auto flex h-[640px] max-h-[85dvh] w-full max-w-xl flex-col overflow-hidden rounded-2xl border border-purple-500/20 bg-white/[0.03] text-slate-100 shadow-2xl shadow-purple-950/30 backdrop-blur-xl"
    >
      <header className="flex items-center gap-3 border-b border-purple-500/15 px-5 py-3.5">
        <span className="grid size-9 place-items-center rounded-full bg-purple-500/15 text-sm font-semibold text-purple-300 ring-1 ring-purple-400/30">
          {CONFIG.INITIALS}
        </span>
        <div>
          <p className="text-[15px] font-medium leading-tight">Assistant de {CONFIG.NAME}</p>
          <p className="flex items-center gap-1.5 text-[13px] text-slate-400">
            <span className={`size-1.5 rounded-full transition-colors ${dot}`} />
            {status}
          </p>
        </div>
      </header>

      {phase !== "ready" ? (
        <div role="status" aria-live="polite" className="flex flex-1 flex-col items-center justify-center gap-5 overflow-auto px-7 py-8 text-center">
          <div className="relative grid size-[168px] place-items-center">
            <svg viewBox="0 0 160 160" aria-hidden className="absolute inset-0 -rotate-90 fill-none">
              <circle cx="80" cy="80" r="76" className="stroke-white/10" strokeWidth="1" />
              <circle cx="80" cy="80" r="70" className="stroke-white/10" strokeWidth="7" strokeDasharray="1.2 6.13" />
              <circle
                ref={arc}
                cx="80"
                cy="80"
                r="70"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray={CIRC}
                strokeDashoffset={CIRC}
                className={failed ? "stroke-red-400" : "stroke-purple-400"}
              />
            </svg>
            <span className={`text-5xl font-light text-purple-300 transition-opacity duration-300 ${step === 2 ? "opacity-0" : ""}`}>
              {CONFIG.INITIALS}
            </span>
            <svg
              viewBox="0 0 24 24"
              aria-hidden
              className={`absolute size-11 fill-none stroke-purple-300 transition-opacity duration-300 ${step === 2 ? "opacity-100" : "opacity-0"}`}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12.5l4.5 4.5L19 7.5" />
            </svg>
          </div>

          <h2 className={`text-2xl font-medium ${failed ? "text-red-300" : ""}`}>{title}</h2>
          <p className="min-h-[3.2em] max-w-[40ch] text-[15px] text-slate-400">{hint}</p>

          {!failed && (
            <ol className="flex w-full max-w-md gap-1.5 text-[13px]">
              {STEPS.map((label, i) => (
                <li key={label} className={`flex flex-1 flex-col items-center gap-2 transition-colors ${i <= step ? "text-slate-100" : "text-slate-500"}`}>
                  <span className={`h-0.5 w-full rounded-full transition-colors duration-500 ${i < step || step === 2 ? "bg-purple-400" : i === step ? "bg-purple-400/50" : "bg-white/10"}`} />
                  {label}
                </li>
              ))}
            </ol>
          )}

          {queue.length > 0 && (
            <p className="max-w-full border-l-2 border-purple-400 bg-white/5 px-3.5 py-2.5 text-left text-sm">
              <span className="text-slate-400">
                {queue.length > 1 ? `${queue.length} messages en attente d'envoi : ` : "Message en attente d'envoi : "}
              </span>
              « {queue[queue.length - 1]} »
            </p>
          )}

          {failed && (
            <button
              onClick={() => setAttempt((a) => a + 1)}
              className="rounded-xl bg-purple-600 px-5 py-2.5 text-[15px] font-medium text-white transition-colors hover:bg-purple-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400"
            >
              Réessayer
            </button>
          )}
        </div>
      ) : (
        <div aria-live="polite" className="flex flex-1 flex-col gap-3 overflow-auto p-5">
          {msgs.map((m) => (
            <div
              key={m.id}
              className={`max-w-[86%] whitespace-pre-wrap break-words rounded-2xl px-4 py-2.5 text-[15px] animate-in fade-in slide-in-from-bottom-1 duration-300 motion-reduce:animate-none ${
                m.role === "user"
                  ? "self-end rounded-br-sm bg-purple-600 text-white"
                  : `self-start rounded-bl-sm border border-white/5 bg-white/[0.06] ${m.error ? "text-red-300" : m.pending ? "text-slate-400" : "text-slate-100"}`
              }`}
            >
              {m.text}
            </div>
          ))}
          <div ref={bottom} />
        </div>
      )}

      <form onSubmit={submit} className="flex gap-2 border-t border-purple-500/15 p-3">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              e.currentTarget.form?.requestSubmit();
            }
          }}
          rows={1}
          aria-label="Votre message"
          placeholder={phase === "ready" ? "Votre message" : "Saisissez votre question, elle sera envoyée dès que l'assistant sera prêt"}
          className="max-h-32 min-h-11 flex-1 resize-none rounded-xl border border-purple-500/20 bg-white/5 px-3 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus-visible:outline-2 focus-visible:outline-purple-400"
        />
        <button
          type="submit"
          className="rounded-xl bg-purple-600 px-5 text-sm font-medium text-white transition-colors hover:bg-purple-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400"
        >
          Envoyer
        </button>
      </form>
    </section>
  );
}