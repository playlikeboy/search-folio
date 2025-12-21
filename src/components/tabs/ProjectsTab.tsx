"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, GitFork, ExternalLink } from "lucide-react";
import { projectsConfig } from "@/config/portfolio";
import { motion } from "framer-motion";
import Link from "next/link";

export function ProjectsTab() {
    return (
        <div className="space-y-6">
            <p className="text-sm text-muted-foreground mb-4">
                About {projectsConfig.length} projects found
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projectsConfig.map((project, index) => (
                    <motion.div
                        key={project.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card className="group hover:shadow-lg transition-all border-border/60 bg-card hover:bg-secondary/20">
                            <CardContent className="p-5">
                                <div className="flex items-start justify-between mb-2">
                                    <Link
                                        href={project.url}
                                        target="_blank"
                                        className="text-lg font-medium text-blue-500 hover:underline flex items-center gap-2 group-hover:text-blue-600"
                                    >
                                        {project.name}
                                        <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                </div>

                                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-1 mb-3">
                                    {project.techStack.map((tech) => (
                                        <Badge key={tech} variant="secondary" className="text-xs font-normal">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>

                                <div className="flex gap-3 text-xs text-muted-foreground">
                                    {project.stars > 0 && (
                                        <div className="flex items-center gap-1">
                                            <Star className="h-3 w-3" /> {project.stars}
                                        </div>
                                    )}
                                    {project.forks > 0 && (
                                        <div className="flex items-center gap-1">
                                            <GitFork className="h-3 w-3" /> {project.forks}
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
