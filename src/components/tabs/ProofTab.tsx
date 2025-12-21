"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { proofConfig } from "@/config/portfolio";
import { motion } from "framer-motion";
import { Award, Trophy, Github, CheckCircle } from "lucide-react";

export function ProofTab() {
    return (
        <div className="space-y-8 max-w-3xl">
            <p className="text-sm text-muted-foreground mb-4">
                Certificates, achievements, and social proof
            </p>

            {/* GitHub Stats */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                    <Github className="h-5 w-5" /> GitHub Stats
                </h3>
                <div className="grid grid-cols-3 gap-4">
                    <Card className="bg-secondary/30 border-border/60">
                        <CardContent className="p-4 text-center">
                            <div className="text-2xl font-bold text-blue-500">
                                {proofConfig.githubStats.contributions}
                            </div>
                            <div className="text-xs text-muted-foreground">Contributions</div>
                        </CardContent>
                    </Card>
                    <Card className="bg-secondary/30 border-border/60">
                        <CardContent className="p-4 text-center">
                            <div className="text-2xl font-bold text-green-500">
                                {proofConfig.githubStats.repositories}
                            </div>
                            <div className="text-xs text-muted-foreground">Repositories</div>
                        </CardContent>
                    </Card>
                    <Card className="bg-secondary/30 border-border/60">
                        <CardContent className="p-4 text-center">
                            <div className="text-2xl font-bold text-yellow-500">
                                {proofConfig.githubStats.followers}
                            </div>
                            <div className="text-xs text-muted-foreground">Followers</div>
                        </CardContent>
                    </Card>
                </div>
            </motion.div>

            {/* Certificates */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                    <Award className="h-5 w-5" /> Certificates
                </h3>
                <div className="space-y-2">
                    {proofConfig.certificates.map((cert, index) => (
                        <div
                            key={cert.name}
                            className="flex items-center gap-3 p-3 bg-card border border-border/60 rounded-lg"
                        >
                            <CheckCircle className="h-5 w-5 text-green-500" />
                            <div>
                                <div className="font-medium">{cert.name}</div>
                                <div className="text-xs text-muted-foreground">
                                    {cert.issuer} • {cert.year}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                    <Trophy className="h-5 w-5" /> Achievements
                </h3>
                <div className="flex flex-wrap gap-2">
                    {proofConfig.achievements.map((achievement) => (
                        <Badge
                            key={achievement}
                            variant="secondary"
                            className="py-2 px-3 text-sm font-normal"
                        >
                            🏆 {achievement}
                        </Badge>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
