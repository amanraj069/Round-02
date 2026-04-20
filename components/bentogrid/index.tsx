"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { FeatureReports } from "./FeatureReports";
import { FeatureMilestones } from "./FeatureMilestones";
import { FeatureEnrichment } from "./FeatureEnrichment";
import { FeatureCRM } from "./FeatureCRM";
import { FloatingBadges } from "./FloatingBadges";

/** Stagger children sequentially as they enter the viewport. */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

/** Spring-based reveal animation for each grid item. */
export const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

/** Main bento-style grid showcasing product features. */
export function FeatureBentoGrid() {
  return (
    <section
      className="relative w-full mx-auto max-w-6xl py-16 px-4 md:px-0"
      aria-label="Product features"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6 overflow-visible"
      >
        {/* Row 1 — Reports (spans full width) */}
        <motion.div variants={itemVariants} className="col-span-1 md:col-span-4 flex flex-col overflow-visible">
          <FeatureReports />
        </motion.div>

        {/* Row 2, Left — Milestones */}
        <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 flex flex-col">
          <FeatureMilestones />
        </motion.div>

        {/* Row 2, Right — Enrichment + CRM stacked */}
        <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 flex flex-col gap-6">
          <FeatureEnrichment />
          <FeatureCRM />
        </motion.div>
      </motion.div>

      <FloatingBadges />
    </section>
  );
}
