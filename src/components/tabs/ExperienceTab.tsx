"use client";

import { Badge } from "@/components/ui/badge";
import { experienceConfig } from "@/config/portfolio";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export function ExperienceTab() {
    return (
        <div className="space-y-6 max-w-2xl">
            <p className="text-sm text-muted-foreground mb-4">
                Career journey and work experience
            </p>

            <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />

                <div className="space-y-8">
                    {experienceConfig.map((job, index) => (
                        <motion.div
                            key={`${job.company}-${job.period}`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.15 }}
                            className="relative pl-10"
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-2 top-1 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                                <Briefcase className="h-3 w-3 text-white" />
                            </div>

                            <div className="bg-card border border-border/60 rounded-lg p-4 hover:bg-secondary/20 transition-colors">
                                <div className="flex flex-wrap items-center gap-2 mb-1">
                                    <Badge variant="outline" className="font-normal text-muted-foreground text-xs">
                                        {job.period}
                                    </Badge>
                                </div>

                                <h3 className="font-medium text-foreground">
                                    {job.role}
                                </h3>
                                <p className="text-sm text-blue-500 mb-2">
                                    @ {job.company}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    {job.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
