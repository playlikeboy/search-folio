"use client";

import { imagesConfig } from "@/config/portfolio";
import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";

export function ImagesTab() {
    return (
        <div className="space-y-6">
            <p className="text-sm text-muted-foreground mb-4">
                Screenshots and visual portfolio
            </p>

            {imagesConfig.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                    <ImageIcon className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>No images added yet.</p>
                    <p className="text-sm">Add images to <code className="bg-secondary px-1 rounded">src/config/portfolio.ts</code></p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {imagesConfig.map((image, index) => (
                        <motion.div
                            key={image.url}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="aspect-video bg-secondary/50 rounded-lg overflow-hidden border border-border/60 group-hover:border-blue-500/50 transition-colors">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={image.url}
                                    alt={image.alt}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                                    onError={(e) => {
                                        // Fallback for missing images
                                        e.currentTarget.src = `https://placehold.co/400x225/1a1a2e/8ab4f8?text=${encodeURIComponent(image.caption || 'Image')}`;
                                    }}
                                />
                            </div>
                            <p className="text-sm text-muted-foreground mt-2 text-center">
                                {image.caption}
                            </p>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
}
