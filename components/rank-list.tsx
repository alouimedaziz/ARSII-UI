import { Crown, ChevronRight } from "lucide-react";
import { rankings } from "@/lib/data";

export function RankList({ compact = false }: { compact?: boolean }) {
  return <div className="rank-card">{rankings.slice(0, compact ? 4 : rankings.length).map((rank) => <div key={rank.name} className={`rank-row ${rank.name === "ARSII" ? "rank-you" : ""}`}><div className={`rank-place place-${rank.place}`}>{rank.place === 1 ? <Crown size={15} /> : `0${rank.place}`}</div><div className={`avatar ${rank.color}`}>{rank.initials}</div><div className="rank-name">{rank.name}{rank.name === "ARSII" && <span>that&apos;s you</span>}</div><div className={`rank-delta ${rank.delta.startsWith("+") ? "up" : "down"}`}>{rank.delta}</div><strong className="rank-score">{rank.score}<small>pts</small></strong></div>)}{compact && <button className="rank-footer">See full ranking <ChevronRight size={15} /></button>}</div>;
}
