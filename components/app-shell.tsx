"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, ChevronRight, FileText, LayoutDashboard, LogOut, Menu, Search, Settings, Sparkles, Trophy, UserRound, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { currentUser } from "@/lib/data";

const links = [
  { href: "/", label: "Overview", icon: LayoutDashboard },
  { href: "/meets", label: "All meets", icon: Trophy },
  { href: "/submissions", label: "My submissions", icon: FileText, count: "2" },
  { href: "/leaderboard", label: "Leaderboard", icon: Trophy },
];

export function SideNav({ onClose }: { onClose?: () => void }) {
  const pathname = usePathname();
  return <aside className="sidebar">
    <div className="brand"><div className="brand-mark">M</div><div><div className="brand-title">MEET NOTES</div><div className="brand-subtitle">ARENA <span>v1.0</span></div></div>{onClose && <button className="mobile-close" onClick={onClose}><X size={18} /></button>}</div>
    <div className="nav-section-label">PLAYGROUND</div>
    <nav className="nav-list">{links.map(({ href, label, icon: Icon, count }) => <Link key={href} href={href} onClick={onClose} className={`nav-item ${pathname === href || (href !== "/" && pathname.startsWith(href)) ? "nav-item-active" : ""}`}><Icon size={17} strokeWidth={2.2} />{label}{count && <span className="nav-count">{count}</span>}</Link>)}</nav>
    <div className="nav-section-label nav-admin-label">WORKSPACE</div>
    <nav className="nav-list"><Link href="/settings" onClick={onClose} className={`nav-item ${pathname.startsWith("/settings") ? "nav-item-active" : ""}`}><Settings size={17} />Settings</Link></nav>
    <div className="sidebar-bottom"><div className="season-card"><div className="season-icon"><Sparkles size={16} /></div><div><div className="season-label">CURRENT SEASON</div><div className="season-name">Autumn ’24</div></div><ChevronRight size={15} className="muted-icon" /></div><div className="profile"><div className="avatar avatar-user">{currentUser.initials}</div><div className="profile-text"><strong>{currentUser.name}</strong><span>Level {String(currentUser.level).padStart(2, "0")} · {currentUser.title}</span></div><ChevronRight size={17} className="muted-icon" /></div></div>
  </aside>;
}

export function AppShell({ children, eyebrow = "OVERVIEW" }: { children: React.ReactNode; eyebrow?: string }) {
  const [mobileNav, setMobileNav] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  return <main className="app-shell"><AnimatePresence>{mobileNav && <motion.div className="mobile-nav-wrap" initial={{ x: -320 }} animate={{ x: 0 }} exit={{ x: -320 }}><SideNav onClose={() => setMobileNav(false)} /></motion.div>}</AnimatePresence><SideNav /><section className="main-content"><header className="topbar"><button className="mobile-menu" onClick={() => setMobileNav(true)}><Menu size={21} /></button><div className="breadcrumbs"><span>ARENA</span><ChevronRight size={13} /><strong>{eyebrow}</strong></div><div className="topbar-actions"><button className="icon-button"><Search size={18} /></button><button className="icon-button notification"><Bell size={18} /><i /></button><div className="profile-menu-wrap"><button className="top-avatar" onClick={() => setProfileOpen(!profileOpen)}>{currentUser.initials}</button>{profileOpen && <div className="profile-menu"><div className="profile-menu-user"><strong>{currentUser.name}</strong><span>{currentUser.role} account</span></div><Link href="/settings"><UserRound size={15} /> Profile settings</Link><button onClick={() => window.location.href = "/login"}><LogOut size={15} /> Sign out</button></div>}</div></div></header><div className="page-container">{children}</div></section></main>;
}

export function PageHeading({ kicker, title, highlight, description, action }: { kicker: string; title: string; highlight?: string; description: string; action?: React.ReactNode }) {
  return <div className="page-heading"><div><div className="eyebrow"><span className="eyebrow-line" /> {kicker}</div><h1>{title}{highlight && <><br /><em>{highlight}</em></>}</h1><p>{description}</p></div>{action}</div>;
}
