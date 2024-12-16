import { Hero } from "@/components/hero";
import { TreatmentsList } from "@/components/treatments/treatments-list";
import { Workshop } from "@/components/workshop";
import { Materials } from "@/components/materials";
import { DoctorProfile } from "@/components/doctor-profile";

export function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <DoctorProfile />
      <TreatmentsList />
      <Workshop />
      <Materials />
    </main>
  );
}