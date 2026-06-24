import React from "react";
import { Sparkles } from "lucide-react";

export default function Toast({ message }) {
  return message ? (
    <div className="toast">
      <Sparkles size={18} />
      {message}
    </div>
  ) : null;
}
