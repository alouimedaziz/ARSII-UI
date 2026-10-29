"use client";
import { Plus } from "lucide-react";
import { useState } from "react";
import { AppShell, PageHeading } from "@/components/app-shell";
import { MeetCard } from "@/components/meet-card";
import { meets } from "@/lib/data";
import { UploadModal } from "@/components/upload-modal";

export default function MeetsPage() { const [open, setOpen] = useState(false); return <AppShell eyebrow="ALL MEETS"><PageHeading kicker="THE PLAYGROUND" title="Pick your" highlight="next challenge." description="Every meeting is a chance to leave the team with something useful." action={<button className="primary-button" onClick={() => setOpen(true)}><Plus size={17} /> New submission</button>} /><div className="meet-page-tabs"><button className="active">All meets <span>03</span></button><button>Live now <span>01</span></button><button>Closed <span>01</span></button></div><div className="all-meets-grid">{meets.map((meet) => <MeetCard key={meet.id} meet={meet} />)}</div><UploadModal open={open} onClose={() => setOpen(false)} /></AppShell>; }
