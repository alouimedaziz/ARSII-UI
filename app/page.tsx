"use client";

import Link from "next/link";
import { ArrowUpRight, BarChart3, BookOpen, ChevronRight, FolderGit2, Plus, Sparkles, Trophy } from "lucide-react";
import { useState } from "react";
import { AppShell, PageHeading } from "@/components/app-shell";
import { MeetCard } from "@/components/meet-card";
import { RankList } from "@/components/rank-list";
import { meets } from "@/lib/data";
import { UploadModal } from "@/components/upload-modal";

export default function Home() {
  const [modal, setModal] = useState(false);
  return <AppShell><PageHeading kicker="WELCOME BACK, ARSII" title="Make notes." highlight="Make history." description="Turn your sharpest thoughts into team folklore." action={<button className="primary-button" onClick={() => setModal(true)}><Plus size={17} /> New submission</button>} /><div className="overview-grid"><section className="section-block meets-section"><div className="section-heading"><div><h2>Live meets <span className="section-number">03</span></h2><p>Choose your next challenge.</p></div><Link href="/meets" className="text-button">View all <ArrowUpRight size={14} /></Link></div><div className="meet-grid">{meets.map((meet) => <MeetCard key={meet.id} meet={meet} />)}</div></section><section className="section-block rank-section"><div className="section-heading"><div><h2>Top of the board <Trophy size={18} className="heading-icon" /></h2><p>Q4 Product Kickoff · Live</p></div><Link href="/leaderboard" className="text-button">Full board <ArrowUpRight size={14} /></Link></div><RankList compact /></section><section className="insight-card"><div className="insight-pattern">✳</div><div><div className="eyebrow light"><span className="eyebrow-line" /> YOUR NEXT LEVEL</div><h2>One more great<br /><em>note</em> to level up.</h2><p>You&apos;re 12 points away from <strong>Note Samurai.</strong></p><div className="xp-track"><span style={{ width: "72%" }} /></div><div className="xp-meta"><span>LEVEL 08</span><span>720 / 1000 XP</span></div></div><div className="insight-badge"><Sparkles size={17} /> 72%</div></section><section className="stats-card"><div className="stat-label">YOUR SEASON</div><div className="stat-value">#02 <span>of 28 players</span></div><div className="stat-change"><BarChart3 size={15} /> +3 places this month</div><div className="stat-footer"><FolderGit2 size={15} /> 7 notes submitted <span>·</span> <BookOpen size={15} /> 4 scored</div></section></div><UploadModal open={modal} onClose={() => setModal(false)} /></AppShell>;
}
