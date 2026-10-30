import { useState } from "react";
import { requestDownload } from "../lib/download";

const checklist = [
  "ADROVER / INTERIOR SCREEN CREATIVE CHECKLIST",
  "",
  "Business and contact: [add details]",
  "Campaign objective: [add objective]",
  "Preferred dates: [add dates]",
  "Formats: screens INSIDE cabs / INSIDE buses / both",
  "Vehicle count and budget: [to discuss]",
  "",
  "Bring: logo, key message, approved offer, brand guidelines,",
  "existing video/image draft and rights to the supplied content.",
  "",
  "CONFIRM BEFORE PRODUCTION:",
  "- Supported file type, codec, file size and frame rate.",
  "- Screen resolution, orientation and safe areas.",
  "- Maximum ad duration and playback rules.",
  "- Audio policy and any restrictions.",
  "- Creative approval, file handover and submission deadline.",
  "- Revision window, quotation and campaign confirmation.",
  "",
  "Screen positions shown in the design are conceptual.",
  "Do not assume a universal 30-second rule or a final rate.",
].join("\n");

export function ChecklistDownload() {
  const [status, setStatus] = useState("");
  return (
    <>
      <button
        className="button dark"
        id="download-checklist"
        type="button"
        onClick={() => {
          requestDownload("Adrover-creative-checklist.txt", checklist);
          setStatus("Checklist download requested.");
        }}
      >
        Save Creative Checklist
      </button>
      <p className="status" id="checklist-status" role="status">
        {status}
      </p>
    </>
  );
}
