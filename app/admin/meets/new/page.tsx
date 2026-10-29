"use client";

import { CalendarDays, Plus, Save } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { AppShell, PageHeading } from "@/components/app-shell";

export default function NewMeetPage() {
  const [created, setCreated] = useState(false);
  return <AppShell eyebrow="CREATE MEET"><Link href="/admin" className="back-link">← Admin control room</Link><PageHeading kicker="ADMIN CONTROL ROOM" title="Set the" highlight="next challenge." description="Create a focused space for the team to turn meeting noise into shared memory." /><section className="create-meet-card content-card"><div className="card-kicker">MEET DETAILS</div><div className="form-grid"><label>Meet title<input placeholder="e.g. Q4 Product Kickoff" /></label><label>Category<select defaultValue="product"><option value="product">Product</option><option value="design">Design</option><option value="engineering">Engineering</option></select></label><label>Meet date<input type="date" /></label><label>Submission deadline<input type="datetime-local" /></label><label className="wide">Agenda points<textarea placeholder={"One point per line\\nWhat are we solving?\\nWhat did we decide?"} /></label></div><div className="create-meet-actions"><button className="primary-button" onClick={() => setCreated(true)}><Save size={16} /> {created ? "Meet created" : "Create meet & branch"}</button>{created && <span className="created-note"><CalendarDays size={14} /> Branch meet/q4-product-kickoff created</span>}</div></section></AppShell>;
}
