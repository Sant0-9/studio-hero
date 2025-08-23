"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useReducedMotion, motion } from "framer-motion";
import Lottie from "lottie-react";
import { createPortal } from "react-dom";
import { CheckCircle2 } from "lucide-react";
import { contactSchema, type ContactInput } from "@/lib/validations";

export function ContactForm() {
  const reduce = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const toastTimerRef = useRef<number | null>(null);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactInput & { company?: string }>({
    defaultValues: { name: "", email: "", message: "", company: "" },
    mode: "onBlur",
  });

  const onSubmit = async (values: ContactInput & { company?: string }) => {
    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      parsed.error.issues.forEach((issue) => {
        const path = issue.path[0] as keyof ContactInput | undefined;
        if (path) {
          setError(path as keyof ContactInput, { type: "zod", message: issue.message });
        }
      });
      return;
    }

    // honeypot
    if (values.company && values.company.length > 0) {
      await new Promise((r) => setTimeout(r, 800));
      reset();
      return;
    }

    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    setShowToast(true);
    toastTimerRef.current = window.setTimeout(() => setShowToast(false), 3000);
    reset({ name: "", email: "", message: "", company: "" });
  };

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current);
    };
  }, []);

  return (
    <>
      {!submitted ? (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="max-w-xl space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Name</label>
            <input id="name" type="text" autoComplete="name" className="mt-1 w-full rounded-md border px-3 py-2 focus-ring" {...register("name")} />
            {errors.name && <p role="alert" className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input id="email" type="email" autoComplete="email" className="mt-1 w-full rounded-md border px-3 py-2 focus-ring" {...register("email")} />
            {errors.email && <p role="alert" className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium">Message</label>
            <textarea id="message" rows={6} className="mt-1 w-full rounded-md border px-3 py-2 focus-ring" {...register("message")} />
            {errors.message && <p role="alert" className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
          </div>

          {/* Honeypot (hidden) */}
          <div aria-hidden="true" className="hidden">
            <label htmlFor="company">Company</label>
            <input id="company" type="text" tabIndex={-1} autoComplete="off" {...register("company")} />
          </div>

          <div className="pt-2">
            <button type="submit" disabled={isSubmitting} className="inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-white disabled:opacity-50">
              {isSubmitting ? "Sending…" : "Send message"}
            </button>
          </div>
        </form>
      ) : (
        <SuccessState reduce={!!reduce} />
      )}

      {showToast && typeof window !== "undefined" && document.getElementById("toast-root")
        ? createPortal(<Toast>Message sent successfully</Toast>, document.getElementById("toast-root") as HTMLElement)
        : null}
    </>
  );
}

function Toast({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-md bg-black text-white px-3 py-2 shadow-lg">
      <div className="flex items-center gap-2">
        <CheckCircle2 size={18} className="text-green-400" />
        <span className="text-sm">{children}</span>
      </div>
    </div>
  );
}

function SuccessState({ reduce }: { reduce: boolean }) {
  const lottieData = useMemo(() => import("@/lib/lottie/success.json"), []);
  return (
    <div className="max-w-xl rounded-lg border bg-card p-6">
      <div className="flex items-center gap-3">
        {reduce ? (
          <CheckCircle2 className="text-green-600" size={28} />
        ) : (
          <LottieWrapper dataPromise={lottieData} />
        )}
        <div>
          <h3 className="text-lg font-medium">Thanks! We got your message.</h3>
          <p className="text-sm text-gray-600">We’ll be in touch shortly.</p>
        </div>
      </div>
    </div>
  );
}

function LottieWrapper({ dataPromise }: { dataPromise: Promise<{ default: unknown }> }) {
  const [data, setData] = useState<unknown | null>(null);
  useEffect(() => {
    let mounted = true;
    dataPromise.then((m) => {
      if (mounted) setData(m.default);
    });
    return () => {
      mounted = false;
    };
  }, [dataPromise]);

  if (!data) return (
    <motion.div className="h-7 w-7 rounded-full bg-green-100" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} />
  );

  return (
    <div className="h-10 w-10">
      <Lottie animationData={data as object} loop={false} autoplay style={{ height: "100%", width: "100%" }} />
    </div>
  );
}
