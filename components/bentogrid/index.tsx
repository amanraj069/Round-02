"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { FeatureReports } from "./FeatureReports";
import { FeatureMilestones } from "./FeatureMilestones";
import { FeatureEnrichment } from "./FeatureEnrichment";
import { FeatureCRM } from "./FeatureCRM";
import { FloatingBadges } from "./FloatingBadges";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger effect to let them pop up sequentially
    },
  },
};

export const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export function FeatureBentoGrid() {
  return (
    <section className="relative w-full mx-auto max-w-6xl py-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-visible"
      >
        {/* Full-width top row: Reports — overflow-visible so activation card bleeds down */}
        <motion.div variants={itemVariants} className="col-span-1 md:col-span-3 flex flex-col overflow-visible">
          <FeatureReports />
        </motion.div>

        {/* Bottom row: Milestones (2 cols) + right column (Enrichment + CRM stacked) */}
        <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 flex flex-col">
          <FeatureMilestones />
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col gap-6 col-span-1">
          <FeatureEnrichment />
          <FeatureCRM />
        </motion.div>
      </motion.div>

      {/* Floating Elements (e.g. arrows, badges pointing to things) */}
      <FloatingBadges />
    </section>
  );
}
