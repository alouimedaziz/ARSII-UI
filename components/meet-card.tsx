"use client";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, ChevronRight, Clock3 } from "lucide-react";
import { motion } from "framer-motion";
import type { Meet } from "@/lib/data";

export function StatusPill({ status }: { status: Meet["status"] }) {
  return <span className={`status-pill status-${status}`}><span className="status-dot" />{status === "live" ? "LIVE NOW" : status}</span>;
}

export function MeetCard({ meet }: { meet: Meet }) {
  return <motion.div whileHover={{ y: -4 }} className={`meet-card card-${meet.color}`}><Link href={`/meets/${meet.id}`} className="meet-card-link"><div className="meet-card-top"><span className={`meet-tag tag-${meet.color}`}>{meet.tag}</span><StatusPill status={meet.status} /></div><div className="meet-card-title">{meet.title}</div><div className="meet-card-date"><CalendarDays size={14} /> {meet.date}</div><div className="meet-card-divider" /><div className="meet-card-bottom"><span className={meet.status === "live" ? "deadline-hot" : ""}><Clock3 size={14} /> {meet.deadline}</span><span>{meet.entries} entries <ChevronRight size={15} /></span></div>{meet.status === "live" && <div className="card-scribble">GO!</div>}</Link></motion.div>;
}

export function ScoreBadge({ score }: { score: number }) {
  return <div className="score-badge"><strong>{score}</strong><span>/ 100 pts</span><ArrowUpRight size={14} /></div>;
}
