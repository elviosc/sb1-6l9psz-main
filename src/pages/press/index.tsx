import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PressHero } from "@/components/press/press-hero";
import { PressGrid } from "@/components/press/press-grid";

const pressItems = [
  {
    id: 1,
    title: "Entrevista Revista Saúde",
    description: "Dra. Luciana Maluf fala sobre os avanços na medicina estética e os cuidados necessários com a pele.",
    image: "/images/press/entrevista1.jpg",
    link: "#",
    date: "Dezembro 2023"
  },
  {
    id: 2,
    title: "Portal Bem Estar",
    description: "Especialista explica os benefícios dos tratamentos não invasivos para rejuvenescimento facial.",
    image: "/images/press/entrevista2.jpg",
    link: "#",
    date: "Novembro 2023"
  },
  // Adicione mais itens conforme necessário
];

export default function PressPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <PressHero />
      <PressGrid />
    </main>
  );
}
