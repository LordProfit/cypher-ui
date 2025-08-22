import React from "react";
import GlassCard from "@/registry/new-york-v4/ui/glass-card";
import GlassButton from "@/registry/new-york-v4/ui/glass-button"
import { LayeredButton } from "@/registry/new-york-v4/ui/layered-button"

export default function GlassCardTest() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center p-10">
      <GlassCard title="Cypher Glass Card">
        This is a preview of the iOS-style frosted glass card.
      </GlassCard>
      <GlassButton>
        Button
      </GlassButton>
      <LayeredButton>
        Layered Button
      </LayeredButton>
    </div>

  );
}