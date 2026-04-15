"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookingSchema, type BookingInput } from "@/lib/validations";
import { CheckCircle } from "lucide-react";

// const services = [
//   'Leadership Development',
//   'Performance Management',
//   'Change Management',
//   'Cross-Cultural Intelligence',
//   'Coaching & Capacity Building',
// ]

const serviceGroups = [
  {
    label: "Training & Development",
    options: [
      "Building High-Performance Global Teams",
      "Equipping Diplomats & Executives: Cross-Cultural Awareness for China",
      "Coaching for Growth: Developing Talent & Driving Performance",
      "Developing Strategic Leadership",
      "Leading Through Change: Managing Performance & Transforming Effectively",
      "Transforming L&D into a Strategic Business Partner",
    ],
  },
  {
    label: "Business Consulting",
    options: ["Business Setup in Nigeria"],
  },
];

const teamSizes = ["1-10", "11-50", "51-200", "200+"];

const inputClass = (hasError: boolean) =>
  `w-full px-4 py-2.5 rounded-lg border bg-[#FAF7F0] text-sm outline-none transition-colors focus:border-[#D4A017] ${
    hasError ? "border-red-300" : "border-gray-200"
  }`;

export default function BookingForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [serverMessage, setServerMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingInput>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data: BookingInput) => {
    setStatus("loading");
    setServerMessage("");

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(result.error ?? "Failed to submit booking");
      }

      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setServerMessage(
        "Something went wrong. Please try again or WhatsApp us directly."
      );
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white rounded-2xl border border-[#D4A017]/30 p-10 text-center min-h-[400px] flex flex-col items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-[#2A6B2A]/10 flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8 text-[#2A6B2A]" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-[#1A3320] mb-3">
          Your Request is Submitted!
        </h3>
        <p className="text-gray-500 max-w-sm mb-6">
          Check your email for a confirmation. Our team will reach out within 24
          hours to confirm your discovery call time.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-[#D4A017] font-semibold text-sm hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        {/* Name + Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-1.5">
              Full Name *
            </label>
            <input
              {...register("full_name")}
              placeholder="John Doe"
              className={inputClass(!!errors.full_name)}
            />
            {errors.full_name && (
              <p className="text-red-500 text-xs mt-1">
                {errors.full_name.message}
              </p>
            )}
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-1.5">
              Email *
            </label>
            <input
              {...register("email")}
              type="email"
              placeholder="john@company.com"
              className={inputClass(!!errors.email)}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        {/* Phone + Organization */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-1.5">
              Phone
            </label>
            <input
              {...register("phone")}
              placeholder="+234..."
              className={inputClass(false)}
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-1.5">
              Organization *
            </label>
            <input
              {...register("organization")}
              placeholder="Company name"
              className={inputClass(!!errors.organization)}
            />
            {errors.organization && (
              <p className="text-red-500 text-xs mt-1">
                {errors.organization.message}
              </p>
            )}
          </div>
        </div>

        {/* Role + Service Interest */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-1.5">
              Role / Title *
            </label>
            <input
              {...register("role")}
              placeholder="HR Director"
              className={inputClass(!!errors.role)}
            />
            {errors.role && (
              <p className="text-red-500 text-xs mt-1">{errors.role.message}</p>
            )}
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-1.5">
              Service Interest *
            </label>
            <select
              {...register("service_interest")}
              className={inputClass(!!errors.service_interest)}
            >
              <option value="">Select a service</option>
              {serviceGroups.map((group) => (
                <optgroup key={group.label} label={group.label}>
                  {group.options.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>

            {errors.service_interest && (
              <p className="text-red-500 text-xs mt-1">
                {errors.service_interest.message}
              </p>
            )}
          </div>
        </div>

        {/* Team Size + Country */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-1.5">
              Team Size
            </label>
            <select {...register("team_size")} className={inputClass(false)}>
              <option value="">Select</option>
              {teamSizes.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-1.5">
              Country
            </label>
            <input
              {...register("country")}
              placeholder="Nigeria"
              className={inputClass(false)}
            />
          </div>
        </div>

        {/* Challenge */}
        <div>
          <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-1.5">
            What challenge are you trying to solve? *
          </label>
          <textarea
            {...register("challenge")}
            rows={4}
            placeholder="Tell us about your leadership or organizational challenge..."
            className={`${inputClass(!!errors.challenge)} resize-none`}
          />
          {errors.challenge && (
            <p className="text-red-500 text-xs mt-1">
              {errors.challenge.message}
            </p>
          )}
        </div>

        {/* Server error */}
        {status === "error" && serverMessage && (
          <p className="text-red-500 text-sm bg-red-50 px-4 py-2 rounded-lg">
            {serverMessage}
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-[#D4A017] text-[#1A3320] font-semibold uppercase tracking-wider py-3 px-8 rounded-full w-full hover:bg-[#b8880f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Submitting..." : "Submit & Book Your Call"}
        </button>
      </form>
    </div>
  );
}
