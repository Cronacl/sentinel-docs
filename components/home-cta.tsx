import { PrimaryButton } from "@/components/landing/buttons";

export default function HomeCTA() {
  return (
    <section className="mx-auto max-w-[1200px] px-5 py-28 text-center sm:px-8 sm:py-40">
      <h2 className="text-[2rem] leading-[1.2] font-normal tracking-[-0.015em] sm:text-[2.5rem]">
        Try Sentinel now.
      </h2>
      <div className="mt-7 flex justify-center">
        <PrimaryButton href="/download">Download for free</PrimaryButton>
      </div>
    </section>
  );
}
