import { AestheticHero } from "@/components/aesthetic/aesthetic-hero";
import { AestheticIntro } from "@/components/aesthetic/aesthetic-intro";
import { AestheticConditions } from "@/components/aesthetic/aesthetic-conditions";
import { AestheticProcedures } from "@/components/aesthetic/aesthetic-procedures";
import { AestheticInfo } from "@/components/aesthetic/aesthetic-info";
import { AestheticRelated } from "@/components/aesthetic/aesthetic-related";

export function AestheticPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AestheticHero />
      
      <div className="bg-gradient-to-b from-white to-[#fff5f8]">
        <div className="container mx-auto px-4 py-24">
          <AestheticIntro />
          <AestheticConditions />
          <AestheticProcedures />
          <AestheticInfo />
          <AestheticRelated />
        </div>
      </div>
    </div>
  );
}