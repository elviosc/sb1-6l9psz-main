import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface TreatmentCardProps {
  title: string;
  description: string;
  badge: string;
  icon: string;
  link: string;
  index: number;
}

export function TreatmentCard({ title, description, badge, icon, link, index }: TreatmentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group hover:shadow-lg transition-all duration-300 border-none bg-white/50 backdrop-blur-sm h-full flex flex-col">
        <CardHeader>
          <div className="flex justify-between items-start mb-4">
            <Badge variant="secondary" className="bg-[#6f0d44]/10 text-[#6f0d44] hover:bg-[#6f0d44]/20">
              {badge}
            </Badge>
            <span className="text-2xl">{icon}</span>
          </div>
          <h3 className="text-xl font-semibold text-[#6f0d44] group-hover:text-[#8b1155] transition-colors mb-3">
            {title}
          </h3>
          <div className="text-gray-600 leading-relaxed">
            {description}
          </div>
        </CardHeader>
        <CardContent className="pt-0 mt-auto">
          <Button 
            variant="ghost" 
            className="text-[#6f0d44] hover:text-[#8b1155] p-0 group flex items-center"
            asChild
          >
            <a href={link}>
              <span className="group-hover:mr-2 transition-all">Saiba mais</span>
              <span className="group-hover:translate-x-1 transition-transform inline-block ml-1">→</span>
            </a>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}