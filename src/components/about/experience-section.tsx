"use client";
import { motion } from "framer-motion";
import { Calendar, Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Freelance",
    period: "2023 - Hiện tại",
    description: "Xây dựng các ứng dụng web hiện đại với Next.js và React. Tối ưu hóa trải nghiệm người dùng.",
  },
  {
    title: "Frontend Developer",
    company: "Tech Corp",
    period: "2021 - 2023",
    description: "Phát triển giao diện người dùng responsive, làm việc chặt chẽ với đội ngũ thiết kế.",
  },
   {
    title: "Học vấn",
    company: "Đại học Công nghệ",
    period: "2017 - 2021",
    description: "Chuyên ngành Khoa học máy tính. Tốt nghiệp loại Giỏi.",
  },
];

export function ExperienceSection() {
  return (
    <div className="py-20 w-full overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-12">Hành trình</h2>
        <div className="max-w-4xl mx-auto px-4">
            {experiences.map((exp, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="flex gap-4 mb-8 relative"
                >
                    <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center z-10">
                             <Briefcase className="w-5 h-5 text-primary-foreground" />
                        </div>
                        {index !== experiences.length - 1 && <div className="w-0.5 h-full bg-border absolute top-10 left-5 -translate-x-1/2" />}
                    </div>
                    <div className="pb-8">
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <p className="text-sm text-muted-foreground flex items-center gap-2 mb-2">
                             <span className="font-semibold text-primary">{exp.company}</span>
                             <span>•</span>
                             <span className="flex items-center gap-1"><Calendar className="w-3 h-3"/> {exp.period}</span>
                        </p>
                        <p className="text-muted-foreground">{exp.description}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
  );
}
