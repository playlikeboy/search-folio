"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { contactConfig, siteConfig } from "@/config/portfolio";
import { motion } from "framer-motion";
import { Mail, Calendar, Twitter, Github, Linkedin, ExternalLink } from "lucide-react";
import Link from "next/link";

export function ContactTab() {
    return (
        <div className="space-y-8 max-w-2xl">
            <p className="text-sm text-muted-foreground mb-4">
                Get in touch or schedule a call
            </p>

            {/* Main CTA Card (styled like a Google Ad) */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <Card className="border-2 border-blue-500/30 bg-blue-500/5">
                    <CardContent className="p-6">
                        <div className="flex items-center gap-1 text-sm mb-2">
                            <span className="font-bold text-foreground">Sponsored</span>
                            <span className="text-muted-foreground text-xs mx-1">•</span>
                            <span className="text-muted-foreground text-xs">{siteConfig.websiteUrl}/contact</span>
                        </div>

                        <h2 className="text-xl font-medium text-blue-500 mb-2">
                            {contactConfig.ctaTitle}
                        </h2>

                        <p className="text-sm text-muted-foreground mb-4">
                            {contactConfig.ctaDescription}
                        </p>

                        <div className="flex flex-wrap gap-3">
                            <Button asChild className="bg-blue-600 hover:bg-blue-700">
                                <Link href={contactConfig.primaryButton.url} target="_blank">
                                    <Calendar className="h-4 w-4 mr-2" />
                                    {contactConfig.primaryButton.text}
                                </Link>
                            </Button>
                            <Button variant="outline" asChild className="border-blue-500/50 text-blue-500 hover:bg-blue-500/10">
                                <Link href={contactConfig.secondaryButton.url}>
                                    <Mail className="h-4 w-4 mr-2" />
                                    {contactConfig.secondaryButton.text}
                                </Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>

            {/* Social Links */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                <h3 className="text-lg font-medium mb-4">Connect on Social</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <Link
                        href={siteConfig.socials.twitter}
                        target="_blank"
                        className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border/60 hover:bg-secondary/30 hover:border-blue-500/50 transition-all group"
                    >
                        <Twitter className="h-5 w-5 text-blue-400" />
                        <span className="font-medium">Twitter</span>
                        <ExternalLink className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground" />
                    </Link>

                    <Link
                        href={siteConfig.socials.github}
                        target="_blank"
                        className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border/60 hover:bg-secondary/30 hover:border-blue-500/50 transition-all group"
                    >
                        <Github className="h-5 w-5" />
                        <span className="font-medium">GitHub</span>
                        <ExternalLink className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground" />
                    </Link>

                    <Link
                        href={siteConfig.socials.linkedin}
                        target="_blank"
                        className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border/60 hover:bg-secondary/30 hover:border-blue-500/50 transition-all group"
                    >
                        <Linkedin className="h-5 w-5 text-blue-600" />
                        <span className="font-medium">LinkedIn</span>
                        <ExternalLink className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground" />
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
