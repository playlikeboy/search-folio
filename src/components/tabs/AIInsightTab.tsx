"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { aiInsightConfig, siteConfig, projectsConfig, experienceConfig, contactConfig } from "@/config/portfolio";
import { motion } from "framer-motion";
import { Sparkles, Send } from "lucide-react";
import { useState } from "react";

export function AIInsightTab() {
    const [question, setQuestion] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [answer, setAnswer] = useState<string | null>(null);

    // Placeholder responses (replace with real AI integration)
    const mockResponses: Record<string, string> = {
        "What is he best at?": `${siteConfig.name} specializes in building high-performance web applications with React, Next.js, and modern cloud infrastructure. His key strengths include: clean UI/UX design, scalable architecture, and rapid prototyping.`,
        "Show his best project": `SearchFolio is ${siteConfig.name}'s most innovative project - a portfolio builder that mimics Google Search. It demonstrates his creativity in UI design and deep understanding of web technologies.`,
        "Why should I hire him?": `${siteConfig.name} brings a unique combination of technical expertise and entrepreneurial thinking. With 5+ years of experience and multiple successful products, he can contribute immediately to your team while bringing fresh perspectives on product development.`,
        "default": `I don't have a specific answer for that yet, but ${siteConfig.name} is always open to discussing new opportunities and technologies. Feel free to reach out via the Contact tab!`,
    };

    const handleAsk = async () => {
        if (!aiInsightConfig.enabled) return;
        if (!question.trim()) return;

        setIsLoading(true);
        setAnswer(null);

        try {
            // Construct detailed system prompt with full context
            const contextData = {
                profile: siteConfig,
                projects: projectsConfig,
                experience: experienceConfig,
                contact: contactConfig
            };

            const systemPrompt = `You are an AI assistant for ${siteConfig.name}'s portfolio website. 
            
            Here is the COMPLETE context about ${siteConfig.name}:
            ${JSON.stringify(contextData, null, 2)}
            
            INSTRUCTIONS:
            - Answer questions acting as a helpful, knowledgeable assistant for ${siteConfig.name}.
            - Use the provided context (Projects, Experience, Bio) to answer specific questions.
            - If asked about "best project", mention specific details from the projects list.
            - Keep answers concise (under 60 words) and professional yet friendly.
            - If the answer isn't in the context, use your general knowledge but mention you are an AI.`;

            const encodedPrompt = encodeURIComponent(question);
            const encodedSystem = encodeURIComponent(systemPrompt);

            // Using OpenAI model via Pollinations
            const response = await fetch(`https://text.pollinations.ai/${encodedPrompt}?model=openai&system=${encodedSystem}`);

            if (!response.ok) throw new Error("Failed to fetch answer");

            const data = await response.text();
            setAnswer(data);
        } catch (error) {
            console.error("AI Error:", error);
            setAnswer("I'm having trouble connecting to my brain right now. Please try again later!");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="space-y-6 max-w-2xl">
            <p className="text-sm text-muted-foreground mb-4">
                Ask AI about {siteConfig.name}
            </p>

            {!aiInsightConfig.enabled ? (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-12 bg-secondary/30 rounded-xl border border-border/60"
                >
                    <Sparkles className="h-12 w-12 mx-auto mb-4 text-yellow-500 opacity-50" />
                    <h3 className="text-lg font-medium mb-2">AI Insights Coming Soon</h3>
                    <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                        This feature is not enabled yet. Enable it in{" "}
                        <code className="bg-secondary px-1 rounded">src/config/portfolio.ts</code>{" "}
                        to let visitors ask AI about you.
                    </p>
                </motion.div>
            ) : (
                <>
                    {/* Search box for AI */}
                    <div className="relative">
                        <Input
                            type="text"
                            placeholder={`Ask about ${siteConfig.name}...`}
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleAsk()}
                            className="pr-12 h-12 rounded-full bg-secondary/50"
                        />
                        <Button
                            size="icon"
                            className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full h-10 w-10"
                            onClick={handleAsk}
                            disabled={isLoading}
                        >
                            <Send className="h-4 w-4" />
                        </Button>
                    </div>

                    {/* Suggested questions */}
                    <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">Try asking:</p>
                        <div className="flex flex-wrap gap-2">
                            {aiInsightConfig.questions.map((q) => (
                                <Button
                                    key={q}
                                    variant="outline"
                                    size="sm"
                                    onClick={() => setQuestion(q)}
                                    className="text-xs"
                                >
                                    {q}
                                </Button>
                            ))}
                        </div>
                    </div>

                    {/* Loading State */}
                    {isLoading && (
                        <div className="flex items-center gap-2 text-muted-foreground text-sm py-4">
                            <Sparkles className="h-4 w-4 animate-pulse" />
                            <span>Thinking...</span>
                        </div>
                    )}

                    {/* Mock response display */}
                    {answer && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4"
                        >
                            <div className="flex items-center gap-2 text-blue-500 text-sm font-medium mb-2">
                                <Sparkles className="h-4 w-4" />
                                <AI_Featured_Snippet />
                            </div>
                            <p className="text-sm leading-relaxed text-[#202124] dark:text-[#e8eaed]">{answer}</p>
                        </motion.div>
                    )}
                </>
            )}
        </div>
    );
}

function AI_Featured_Snippet() {
    return (
        <span>AI Featured Snippet</span>
    )
}
