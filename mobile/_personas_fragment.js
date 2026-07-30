  const personas = {
    associate: {
      label: 'Sales Associate',
      initials: 'SA',
      recentsHtml: `
        <div class="list-row" onclick="showToast('Opening session with Juan Gonzalez…')">
          <div class="row-badge blue">Sa</div>
          <div class="row-text"><div class="row-title">Juan Gonzalez</div><div class="row-sub">In Showroom &middot; Step 4 of 7 (Test Drive) &middot; live</div></div>
          <div class="row-dot"></div>
        </div>
        <div class="list-row" onclick="showToast('Opening test drive with Maria Hernandez…')">
          <div class="row-badge blue">Sa</div>
          <div class="row-text"><div class="row-title">10:00 AM Test Drive</div><div class="row-sub">Maria Hernandez &middot; 2025 CR-V</div></div>
          <div class="row-dot"></div>
        </div>
        <div class="list-row" onclick="showToast('Opening lead: David Kim…')">
          <div class="row-badge blue">Sa</div>
          <div class="row-text"><div class="row-title">Internet Lead: David Kim</div><div class="row-sub">2m ago &middot; Telluride SX-P &middot; Cars.com</div></div>
          <div class="row-dot"></div>
        </div>
        <div class="list-row" onclick="showToast('Opening follow-up: Marcus Hill…')">
          <div class="row-badge blue">Sa</div>
          <div class="row-text"><div class="row-title">Follow-up overdue: Marcus Hill</div><div class="row-sub">45 min &middot; Silverado LTZ</div></div>
          <div class="row-dot"></div>
        </div>
        <div class="list-row" onclick="showToast('Opening drafted reply for Diana Reyes…')">
          <div class="row-badge blue">Sa</div>
          <div class="row-text"><div class="row-title">AIVA-drafted reply: Diana Reyes</div><div class="row-sub">Silverado lease comparison</div></div>
          <div class="row-dot"></div>
        </div>`,
      workflowsHtml: `
        <div class="section-label left icon" style="margin-top:0;"><span class="sec-badge" style="background:#2f7bf0;">MR</span>Modern Retail</div>
        <div class="list-row" onclick="showScreen('screen-myday')"><div class="row-text"><div class="row-title">My Day</div></div><div class="row-chev">›</div></div>
        <div class="list-row" onclick="showToast('Opening Hot Leads…')"><div class="row-text"><div class="row-title">Hot Leads</div></div><div class="row-chev">›</div></div>
        <div class="list-row" onclick="showToast('Opening Test Drive…')"><div class="row-text"><div class="row-title">Test Drive</div></div><div class="row-chev">›</div></div>
        <div class="list-row" onclick="showToast('Opening AIVA Session…')"><div class="row-text"><div class="row-title">AIVA Session</div></div><div class="row-chev">›</div></div>
        <div class="list-row" onclick="showToast('Opening Smart Scan…')"><div class="row-text"><div class="row-title">Smart Scan</div></div><div class="row-chev">›</div></div>
        <div class="list-row" onclick="showToast('Opening Walk-around…')"><div class="row-text"><div class="row-title">Walk-around</div></div><div class="row-chev">›</div></div>
        <div class="list-row" onclick="showToast('Opening Quick Quote…')"><div class="row-text"><div class="row-title">Quick Quote</div></div><div class="row-chev">›</div></div>

        <div class="section-label left">Resources</div>
        <div class="list-row" onclick="showToast('Opening CDK University…')"><div class="row-text"><div class="row-title">CDK University</div></div><div class="row-chev">›</div></div>
        <div class="list-row" onclick="showToast('Opening a support ticket…')"><div class="row-text"><div class="row-title">Open a Support Ticket</div></div><div class="row-chev">›</div></div>
        <div class="list-row" onclick="showToast('Starting a chat with support…')"><div class="row-text"><div class="row-title">Chat with Support</div></div><div class="row-chev">›</div></div>
        <div class="list-row" onclick="showToast('Opening Online Help…')"><div class="row-text"><div class="row-title">Online Help</div></div><div class="row-chev">›</div></div>
        <div class="list-row" onclick="showToast('Opening Documents…')"><div class="row-text"><div class="row-title">Documents</div></div><div class="row-chev">›</div></div>`,
      kpiHtml: `
        <div class="kpi-card">
          <div class="kpi-head">My Units MTD<span class="arrow">→</span></div>
          <div class="kpi-big">12</div>
          <div class="kpi-pill up">↑ +3</div>
          <div class="kpi-sub">14-day trend</div>
          <svg class="sparkline" viewBox="0 0 172 32" preserveAspectRatio="none">
            <defs>
              <linearGradient id="sparkFillAssoc1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#1f9d55" stop-opacity="0.35"/>
                <stop offset="100%" stop-color="#1f9d55" stop-opacity="0"/>
              </linearGradient>
            </defs>
            <polyline points="0,32 0,26 20,24 40,20 60,18 80,14 100,16 120,10 140,8 160,6 172,4 172,32" fill="url(#sparkFillAssoc1)" stroke="none"/>
            <polyline points="0,26 20,24 40,20 60,18 80,14 100,16 120,10 140,8 160,6 172,4" fill="none" stroke="#1f9d55" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>

        <div class="kpi-card">
          <div class="kpi-head">My Goal Pace<span class="arrow">→</span></div>
          <div class="donut-wrap">
            <div class="donut" style="background:conic-gradient(#2f6fea 0% 80%, var(--page) 80% 100%);">
              <div class="donut-center"><div class="donut-num">80%</div><div class="donut-lbl">TO GOAL</div></div>
            </div>
            <div class="kpi-legend">
              <div class="legend-row"><span class="legend-lbl">Units MTD</span><span class="legend-val">12 of 15</span></div>
              <div class="legend-row"><span class="legend-lbl">vs. Plan</span><span class="legend-val">+1</span></div>
            </div>
          </div>
        </div>

        <div class="kpi-card">
          <div class="kpi-head">My Response Time<span class="arrow">→</span></div>
          <div class="kpi-big">4.2 min</div>
          <div class="kpi-pill down">↓ -38%</div>
          <div class="kpi-sub">7-day trend, faster is better</div>
        </div>

        <div class="kpi-card">
          <div class="kpi-head">My Pipeline<span class="arrow">→</span></div>
          <div class="kpi-line-list">
            <div class="kpi-line"><span class="kpi-line-lbl">In Showroom</span><span class="kpi-line-val">1</span></div>
            <div class="kpi-line"><span class="kpi-line-lbl">Test Drive</span><span class="kpi-line-val">1</span></div>
            <div class="kpi-line"><span class="kpi-line-lbl">Quote Sent</span><span class="kpi-line-val">1</span></div>
            <div class="kpi-line"><span class="kpi-line-lbl">Working</span><span class="kpi-line-val">2</span></div>
            <div class="kpi-line"><span class="kpi-line-lbl">New</span><span class="kpi-line-val">4</span></div>
          </div>
        </div>`,
      agendaLabel: "Today's Agenda",
      agendaHtml: `
        <div class="appt-card condensed accent">
          <div class="appt-info">
            <div class="appt-time">In Showroom <span class="badge">Step 4 of 7</span></div>
            <div class="appt-name">Juan Gonzalez</div>
            <div class="appt-veh">Live session</div>
          </div>
          <button class="btn-writeup" onclick="showToast('Continuing session with Juan Gonzalez…')">Continue Session</button>
        </div>
        <div class="appt-card condensed">
          <div class="appt-info">
            <div class="appt-time">10:00 AM</div>
            <div class="appt-name">Maria Hernandez</div>
            <div class="appt-veh">2025 Honda CR-V</div>
          </div>
          <button class="btn-writeup" onclick="showToast('Starting test drive with Maria Hernandez…')">Start Test Drive</button>
        </div>
        <div class="appt-card condensed">
          <div class="appt-info">
            <div class="appt-time">2 min ago <span class="badge" style="background:var(--blue);">New Lead</span></div>
            <div class="appt-name">David Kim</div>
            <div class="appt-veh">Telluride SX-P &middot; Cars.com</div>
          </div>
          <button class="btn-writeup" onclick="showToast('Responding to David Kim…')">Respond Now</button>
        </div>
        <div class="appt-card condensed accent">
          <div class="appt-info">
            <div class="appt-time">45 min <span class="badge" style="background:var(--red);">Overdue</span></div>
            <div class="appt-name">Marcus Hill</div>
            <div class="appt-veh">Silverado LTZ</div>
          </div>
          <button class="btn-writeup" onclick="showToast('Following up with Marcus Hill…')">Follow Up</button>
        </div>
        <div class="appt-card condensed">
          <div class="appt-info">
            <div class="appt-time">AIVA Drafted <span class="badge" style="background:#8b5cf6;">Ready</span></div>
            <div class="appt-name">Diana Reyes</div>
            <div class="appt-veh">Silverado lease comparison</div>
          </div>
          <button class="btn-writeup" onclick="showToast('Opening drafted reply for Diana Reyes…')">Review &amp; Send</button>
        </div>`,
      insightsHtml: `
        <div class="notif-row" onclick="showToast('Responding to David Kim…')">
          <div class="notif-ic" style="background:#a9c2f0;">⚡</div>
          <div class="notif-text">
            <div class="notif-title">David Kim's lead is still unanswered</div>
            <div class="notif-sub">2 min old &middot; Telluride SX-P from Cars.com — fast replies convert better</div>
          </div>
        </div>
        <div class="notif-row" onclick="showToast('Following up with Marcus Hill…')">
          <div class="notif-ic" style="background:#f3b98c;">⚠️</div>
          <div class="notif-text">
            <div class="notif-title">Marcus Hill's follow-up is overdue</div>
            <div class="notif-sub">45 min &middot; Silverado LTZ — worth a call before he cools off</div>
          </div>
        </div>
        <div class="notif-row" onclick="showToast('Opening My Goal Pace…')">
          <div class="notif-ic" style="background:var(--page);">🎯</div>
          <div class="notif-text">
            <div class="notif-title">You're at 80% pace to goal</div>
            <div class="notif-sub">12 of 15 units MTD &middot; +1 vs. plan, keep the momentum</div>
          </div>
        </div>
        <div class="notif-row" onclick="showToast('Opening drafted reply for Diana Reyes…')">
          <div class="notif-ic" style="background:#eaf1ff;">✦</div>
          <div class="notif-text">
            <div class="notif-title">AIVA drafted a reply for Diana Reyes</div>
            <div class="notif-sub">Silverado lease comparison &middot; ready for your review</div>
          </div>
        </div>
        <div class="notif-row" onclick="showToast('Opening My Response Time…')">
          <div class="notif-ic" style="background:#a8e0b8;">📈</div>
          <div class="notif-text">
            <div class="notif-title">Response time trending well</div>
            <div class="notif-sub">4.2 min avg &middot; down 38% over the last 7 days</div>
          </div>
        </div>`,
      aivaWelcomeHtml: `
              Hello [Name]!<br><br>
              I'm AIVA, your AI assistant.<br><br>
              I can help with leads, appointments, and deal prep.<br><br>
              How can I help you today?`,
      aivaSuggestionsHtml: `
              <div class="aiva-suggest" onclick="askAiva('Prepare me for my next test drive')">Prepare me for my next test drive</div>
              <div class="aiva-suggest" onclick="askAiva('Which leads need my attention?')">Which leads need my attention?</div>
              <div class="aiva-suggest" onclick="askAiva('What&#39;s my pace to goal this month?')">What's my pace to goal this month?</div>`,
      messagesHtml: `
        <div class="conv-row" onclick="openThread('Sales Manager')">
          <div class="conv-avatar" style="background:#2f7bf0;">SM</div>
          <div class="conv-text">
            <div class="conv-top"><span class="conv-name">Sales Manager</span><span class="conv-time">9:12 AM</span></div>
            <div class="conv-sub">Desk approval needed on a deal in progress.</div>
          </div>
          <div class="conv-unread"></div>
        </div>
        <div class="conv-row" onclick="showToast('Opening conversation with F&amp;I Manager…')">
          <div class="conv-avatar" style="background:#8b5cf6;">FI</div>
          <div class="conv-text">
            <div class="conv-top"><span class="conv-name">F&amp;I Manager</span><span class="conv-time">8:50 AM</span></div>
            <div class="conv-sub">Handoff ready on a completed deal.</div>
          </div>
          <div class="conv-unread"></div>
        </div>
        <div class="conv-row" onclick="showToast('Opening conversation with Internet/BDC…')">
          <div class="conv-avatar" style="background:#f5a623;">BD</div>
          <div class="conv-text">
            <div class="conv-top"><span class="conv-name">Internet/BDC</span><span class="conv-time">Yesterday</span></div>
            <div class="conv-sub">Lead handoff context for a new internet lead.</div>
          </div>
        </div>
        <div class="conv-row" onclick="showToast('Opening conversation with Tom Chen…')">
          <div class="conv-avatar" style="background:#8a93a3;">TC</div>
          <div class="conv-text">
            <div class="conv-top"><span class="conv-name">Tom Chen</span><span class="conv-time">Yesterday</span></div>
            <div class="conv-sub">Salesperson &middot; Can you cover my 2pm? Running behind.</div>
          </div>
          <div class="conv-unread"></div>
        </div>`
    },

    manager: {
      label: 'Sales Manager',
      initials: 'SM',
      recentsHtml: `
        <div class="list-row" onclick="showToast('Opening Sales Leaderboard…')">
          <div class="row-badge blue">Sa</div>
          <div class="row-text"><div class="row-title">Sales Leaderboard</div><div class="row-sub">MTD &middot; 12 reps tracked</div></div>
          <div class="row-dot"></div>
        </div>
        <div class="list-row" onclick="showToast('Opening Contracts in Transit…')">
          <div class="row-badge blue">Sa</div>
          <div class="row-text"><div class="row-title">CIT (Contracts in Transit)</div><div class="row-sub">8 open &middot; $312k pending bank</div></div>
          <div class="row-dot"></div>
        </div>
        <div class="list-row" onclick="showToast('Opening Variable Operations Overview…')">
          <div class="row-badge blue">Sa</div>
          <div class="row-text"><div class="row-title">Variable Operations Overview</div><div class="row-sub">August 2026</div></div>
          <div class="row-dot"></div>
        </div>
        <div class="list-row" onclick="showToast('Opening Deal #129520…')">
          <div class="row-badge blue">Sa</div>
          <div class="row-text"><div class="row-title">Deal #129520 &middot; Awaiting Bank</div><div class="row-sub">C. Strick &middot; J. Reyes</div></div>
          <div class="row-dot"></div>
        </div>
        <div class="list-row" onclick="showToast('Opening Daily Sales Recap…')">
          <div class="row-badge blue">Sa</div>
          <div class="row-text"><div class="row-title">Daily Sales Recap</div><div class="row-sub">Yesterday &middot; 4 booked &middot; 2 lost</div></div>
          <div class="row-dot"></div>
        </div>`,
      workflowsHtml: `
        <div class="section-label left icon" style="margin-top:0;"><span class="sec-badge" style="background:#8b5cf6;">IS</span>Intelligence Suite</div>
        <div class="list-row" onclick="showToast('Opening Sales Leaderboard…')"><div class="row-text"><div class="row-title">Sales Leaderboard</div></div><div class="row-chev">›</div></div>
        <div class="list-row" onclick="showToast('Opening Sales Goals…')"><div class="row-text"><div class="row-title">Sales Goals</div></div><div class="row-chev">›</div></div>
        <div class="list-row" onclick="showToast('Opening Lost Deal Analysis…')"><div class="row-text"><div class="row-title">Lost Deal Analysis</div></div><div class="row-chev">›</div></div>

        <div class="section-label left icon"><span class="sec-badge" style="background:#2f7bf0;">MR</span>Modern Retail</div>
        <div class="list-row" onclick="showToast('Opening Sales Pipeline…')"><div class="row-text"><div class="row-title">Sales Pipeline</div></div><div class="row-chev">›</div></div>
        <div class="list-row" onclick="showToast('Opening CIT Report…')"><div class="row-text"><div class="row-title">CIT Report</div></div><div class="row-chev">›</div></div>
        <div class="list-row" onclick="showToast('Opening Desk Manager…')"><div class="row-text"><div class="row-title">Desk Manager</div></div><div class="row-chev">›</div></div>
        <div class="list-row" onclick="showToast('Opening Trade Appraisal…')"><div class="row-text"><div class="row-title">Trade Appraisal</div></div><div class="row-chev">›</div></div>
        <div class="list-row" onclick="showToast('Opening Inventory Aging…')"><div class="row-text"><div class="row-title">Inventory Aging</div></div><div class="row-chev">›</div></div>

        <div class="section-label left">Resources</div>
        <div class="list-row" onclick="showToast('Opening CDK University…')"><div class="row-text"><div class="row-title">CDK University</div></div><div class="row-chev">›</div></div>
        <div class="list-row" onclick="showToast('Opening a support ticket…')"><div class="row-text"><div class="row-title">Open a Support Ticket</div></div><div class="row-chev">›</div></div>
        <div class="list-row" onclick="showToast('Starting a chat with support…')"><div class="row-text"><div class="row-title">Chat with Support</div></div><div class="row-chev">›</div></div>
        <div class="list-row" onclick="showToast('Opening Online Help…')"><div class="row-text"><div class="row-title">Online Help</div></div><div class="row-chev">›</div></div>
        <div class="list-row" onclick="showToast('Opening Documents…')"><div class="row-text"><div class="row-title">Documents</div></div><div class="row-chev">›</div></div>`,
      kpiHtml: `
        <div class="kpi-card">
          <div class="kpi-head">New + Used Sold MTD<span class="arrow">→</span></div>
          <div class="kpi-big">47</div>
          <div class="kpi-pill up">↑ +8</div>
          <div class="kpi-sub">last 7 days</div>
        </div>

        <div class="kpi-card">
          <div class="kpi-head">Front Gross MTD<span class="arrow">→</span></div>
          <div class="donut-wrap">
            <div class="donut" style="background:conic-gradient(#1f9d55 0% 68%, var(--page) 68% 100%);">
              <div class="donut-center"><div class="donut-num">68%</div><div class="donut-lbl">OF GOAL</div></div>
            </div>
            <div class="kpi-legend">
              <div class="legend-row"><span class="legend-lbl">Front Gross</span><span class="legend-val">$152.4k</span></div>
              <div class="legend-row"><span class="legend-lbl">Goal</span><span class="legend-val">$225k</span></div>
              <div class="legend-row"><span class="legend-lbl">YoY</span><span class="legend-val">+12.4%</span></div>
            </div>
          </div>
        </div>

        <div class="kpi-card">
          <div class="kpi-head">Top Salespeople (MTD)<span class="arrow">→</span></div>
          <div class="kpi-line-list">
            <div class="kpi-line"><span class="kpi-line-lbl">Jamie Reyes</span><span class="kpi-line-val">14</span></div>
            <div class="kpi-line"><span class="kpi-line-lbl">Tom Chen</span><span class="kpi-line-val">12</span></div>
            <div class="kpi-line"><span class="kpi-line-lbl">Lisa Park</span><span class="kpi-line-val">11</span></div>
            <div class="kpi-line"><span class="kpi-line-lbl">Carlos Diaz</span><span class="kpi-line-val">8</span></div>
            <div class="kpi-line"><span class="kpi-line-lbl">Sarah Webb</span><span class="kpi-line-val">4</span></div>
          </div>
        </div>

        <div class="kpi-card">
          <div class="kpi-head">Sales Mix MTD<span class="arrow">→</span></div>
          <div class="donut-wrap">
            <div class="donut" style="background:conic-gradient(#2f6fea 0% 60%, #1f9d55 60% 90%, #f5a623 90% 100%);">
              <div class="donut-center"><div class="donut-num">47</div><div class="donut-lbl">UNITS</div></div>
            </div>
            <div class="kpi-legend">
              <div class="legend-row"><span class="legend-dot" style="background:#2f6fea;"></span><span class="legend-lbl">New</span><span class="legend-val">28 (60%)</span></div>
              <div class="legend-row"><span class="legend-dot" style="background:#1f9d55;"></span><span class="legend-lbl">Used</span><span class="legend-val">14 (30%)</span></div>
              <div class="legend-row"><span class="legend-dot" style="background:#f5a623;"></span><span class="legend-lbl">Lease</span><span class="legend-val">5 (10%)</span></div>
            </div>
          </div>
        </div>`,
      agendaLabel: 'My Agenda',
      agendaHtml: `
        <div class="appt-card condensed">
          <div class="appt-info">
            <div class="appt-time">Deal #129520 <span class="badge" style="background:var(--blue);">Awaiting Bank</span></div>
            <div class="appt-name">C. Strick</div>
            <div class="appt-veh">Salesperson: J. Reyes</div>
          </div>
          <button class="btn-writeup" onclick="showToast('Checking CIT status for Deal #129520…')">Check CIT Status</button>
        </div>
        <div class="appt-card condensed accent">
          <div class="appt-info">
            <div class="appt-time">CIT Aging <span class="badge" style="background:var(--red);">8 Open</span></div>
            <div class="appt-name">Contracts in Transit</div>
            <div class="appt-veh">$312k pending bank</div>
          </div>
          <button class="btn-writeup" onclick="showToast('Reviewing Contracts in Transit…')">Review Contracts in Transit</button>
        </div>
        <div class="appt-card condensed">
          <div class="appt-info">
            <div class="appt-time">Pacing Behind Goal</div>
            <div class="appt-name">Sarah Webb</div>
            <div class="appt-veh">4 units MTD</div>
          </div>
          <button class="btn-writeup" onclick="showToast('Opening coaching notes for Sarah Webb…')">Coach / Check In</button>
        </div>
        <div class="appt-card condensed">
          <div class="appt-info">
            <div class="appt-time">Ready</div>
            <div class="appt-name">Daily Sales Recap</div>
            <div class="appt-veh">Yesterday: 4 booked, 2 lost</div>
          </div>
          <button class="btn-writeup" onclick="showToast('Opening Daily Sales Recap…')">Review Recap</button>
        </div>`,
      insightsHtml: `
        <div class="notif-row" onclick="showToast('Reviewing Contracts in Transit…')">
          <div class="notif-ic" style="background:#f3b98c;">⚠️</div>
          <div class="notif-text">
            <div class="notif-title">CIT is aging — 8 deals, $312k pending bank</div>
            <div class="notif-sub">Worth a check-in with the bank if any are past normal turnaround</div>
          </div>
        </div>
        <div class="notif-row" onclick="showToast('Opening coaching notes for Sarah Webb…')">
          <div class="notif-ic" style="background:var(--page);">🎯</div>
          <div class="notif-text">
            <div class="notif-title">Sarah Webb is pacing behind goal</div>
            <div class="notif-sub">4 units MTD vs. Jamie Reyes' team-leading 14</div>
          </div>
        </div>
        <div class="notif-row" onclick="showToast('Opening Front Gross MTD…')">
          <div class="notif-ic" style="background:#a8e0b8;">📈</div>
          <div class="notif-text">
            <div class="notif-title">Front gross is trending well</div>
            <div class="notif-sub">68% of goal &middot; up 12.4% YoY</div>
          </div>
        </div>
        <div class="notif-row" onclick="showToast('Opening Sales Mix MTD…')">
          <div class="notif-ic" style="background:#a9c2f0;">🚗</div>
          <div class="notif-text">
            <div class="notif-title">Sales mix is skewing new</div>
            <div class="notif-sub">New 60% &middot; Used 30% &middot; Lease 10% — used may be worth a push</div>
          </div>
        </div>
        <div class="notif-row" onclick="showToast('Opening Daily Sales Recap…')">
          <div class="notif-ic" style="background:#eaf1ff;">📋</div>
          <div class="notif-text">
            <div class="notif-title">Yesterday's recap is ready</div>
            <div class="notif-sub">4 booked, 2 lost &middot; worth a look at why the 2 were lost</div>
          </div>
        </div>`,
      aivaWelcomeHtml: `
              Hello [Name]!<br><br>
              I'm AIVA. I can help with pipeline, contracts in transit, and team performance.<br><br>
              How can I help you today?`,
      aivaSuggestionsHtml: `
              <div class="aiva-suggest" onclick="askAiva('Which deals are stuck awaiting bank approval?')">Which deals are stuck awaiting bank approval?</div>
              <div class="aiva-suggest" onclick="askAiva('How is my team pacing to goal?')">How is my team pacing to goal?</div>
              <div class="aiva-suggest" onclick="askAiva('Why did we lose our most recent deal?')">Why did we lose our most recent deal?</div>`,
      messagesHtml: `
        <div class="conv-row" onclick="openThread('Jamie Reyes')">
          <div class="conv-avatar" style="background:#2f7bf0;">JR</div>
          <div class="conv-text">
            <div class="conv-top"><span class="conv-name">Jamie Reyes</span><span class="conv-time">9:30 AM</span></div>
            <div class="conv-sub">Requesting pricing approval on a trade-in.</div>
          </div>
          <div class="conv-unread"></div>
        </div>
        <div class="conv-row" onclick="showToast('Opening conversation with Sarah Webb…')">
          <div class="conv-avatar" style="background:#f5a623;">SW</div>
          <div class="conv-text">
            <div class="conv-top"><span class="conv-name">Sarah Webb</span><span class="conv-time">9:05 AM</span></div>
            <div class="conv-sub">Question about a coaching note from yesterday.</div>
          </div>
          <div class="conv-unread"></div>
        </div>
        <div class="conv-row" onclick="showToast('Opening conversation with F&amp;I Manager…')">
          <div class="conv-avatar" style="background:#8b5cf6;">FI</div>
          <div class="conv-text">
            <div class="conv-top"><span class="conv-name">F&amp;I Manager</span><span class="conv-time">Yesterday</span></div>
            <div class="conv-sub">Financing status coordination on Deal #129520.</div>
          </div>
        </div>
        <div class="conv-row" onclick="showToast('Opening conversation with General Manager…')">
          <div class="conv-avatar" style="background:#8a93a3;">GM</div>
          <div class="conv-text">
            <div class="conv-top"><span class="conv-name">General Manager</span><span class="conv-time">Yesterday</span></div>
            <div class="conv-sub">Asked for the daily recap and lost-deal notes.</div>
          </div>
        </div>`
    },

    fi: {
      label: 'F&I Manager',
      initials: 'FM',
      recentsHtml: `
        <div class="list-row" onclick="showToast('Opening Deal #129520…')">
          <div class="row-badge" style="background:#8b5cf6;">FI</div>
          <div class="row-text"><div class="row-title">Deal #129520</div><div class="row-sub">Strick, C. &middot; Pending &middot; with bank</div></div>
          <div class="row-dot"></div>
        </div>
        <div class="list-row" onclick="showToast('Opening Smart Deal Packet…')">
          <div class="row-badge" style="background:#8b5cf6;">FI</div>
          <div class="row-text"><div class="row-title">Smart Deal Packet</div><div class="row-sub">Strick, C. &middot; May 3, 2026</div></div>
          <div class="row-dot"></div>
        </div>
        <div class="list-row" onclick="showToast('Opening Signing Room…')">
          <div class="row-badge" style="background:#8b5cf6;">FI</div>
          <div class="row-text"><div class="row-title">Signing Room</div><div class="row-sub">Deal #129518 &middot; 4 of 6 signed</div></div>
          <div class="row-dot"></div>
        </div>
        <div class="list-row" onclick="showToast('Opening Credit App…')">
          <div class="row-badge" style="background:#8b5cf6;">FI</div>
          <div class="row-text"><div class="row-title">Credit App</div><div class="row-sub">Deal #129521 &middot; awaiting decision</div></div>
          <div class="row-dot"></div>
        </div>
        <div class="list-row" onclick="showToast('Opening Contract Validation…')">
          <div class="row-badge" style="background:#8b5cf6;">FI</div>
          <div class="row-text"><div class="row-title">Contract Validation</div><div class="row-sub">Deal #129522 &middot; kicked back</div></div>
          <div class="row-dot"></div>
        </div>`,
      workflowsHtml: `
        <div class="section-label left icon" style="margin-top:0;"><span class="sec-badge" style="background:#8b5cf6;">FI</span>F&amp;I</div>
        <div class="list-row" onclick="showToast('Opening Deal Jacket…')"><div class="row-text"><div class="row-title">Deal Jacket</div></div><div class="row-chev">›</div></div>
        <div class="list-row" onclick="showToast('Opening Smart Deal Packet…')"><div class="row-text"><div class="row-title">Smart Deal Packet</div></div><div class="row-chev">›</div></div>
        <div class="list-row" onclick="showToast('Opening Credit App…')"><div class="row-text"><div class="row-title">Credit App</div></div><div class="row-chev">›</div></div>
        <div class="list-row" onclick="showToast('Opening Contract Validation…')"><div class="row-text"><div class="row-title">Contract Validation</div></div><div class="row-chev">›</div></div>
        <div class="list-row" onclick="showToast('Opening Signing Room…')"><div class="row-text"><div class="row-title">Signing Room</div></div><div class="row-chev">›</div></div>
        <div class="list-row" onclick="showToast('Opening Vantage Menu…')"><div class="row-text"><div class="row-title">Vantage Menu</div></div><div class="row-chev">›</div></div>

        <div class="section-label left icon"><span class="sec-badge" style="background:#8a93a3;">DM</span>Document Mgmt</div>
        <div class="list-row" onclick="showToast('Opening Forms Library…')"><div class="row-text"><div class="row-title">Forms Library</div></div><div class="row-chev">›</div></div>

        <div class="section-label left">Resources</div>
        <div class="list-row" onclick="showToast('Opening CDK University…')"><div class="row-text"><div class="row-title">CDK University</div></div><div class="row-chev">›</div></div>
        <div class="list-row" onclick="showToast('Opening a support ticket…')"><div class="row-text"><div class="row-title">Open a Support Ticket</div></div><div class="row-chev">›</div></div>
        <div class="list-row" onclick="showToast('Starting a chat with support…')"><div class="row-text"><div class="row-title">Chat with Support</div></div><div class="row-chev">›</div></div>
        <div class="list-row" onclick="showToast('Opening Online Help…')"><div class="row-text"><div class="row-title">Online Help</div></div><div class="row-chev">›</div></div>
        <div class="list-row" onclick="showToast('Opening Documents…')"><div class="row-text"><div class="row-title">Documents</div></div><div class="row-chev">›</div></div>`,
      kpiHtml: `
        <div class="kpi-card">
          <div class="kpi-head">Deals in Flight<span class="arrow">→</span></div>
          <div class="kpi-big">12</div>
          <div class="kpi-pill up">↑ +3</div>
          <div class="kpi-sub">last 7 days</div>
        </div>

        <div class="kpi-card">
          <div class="kpi-head">F&amp;I PVR<span class="arrow">→</span></div>
          <div class="donut-wrap">
            <div class="donut" style="background:conic-gradient(#1f9d55 0% 97%, var(--page) 97% 100%);">
              <div class="donut-center"><div class="donut-num">97%</div><div class="donut-lbl">OF GOAL</div></div>
            </div>
            <div class="kpi-legend">
              <div class="legend-row"><span class="legend-lbl">Current</span><span class="legend-val">$1,847</span></div>
              <div class="legend-row"><span class="legend-lbl">Goal</span><span class="legend-val">$1,900</span></div>
              <div class="legend-row"><span class="legend-lbl">YoY</span><span class="legend-val">+8.4%</span></div>
            </div>
          </div>
        </div>

        <div class="kpi-card">
          <div class="kpi-head">Product Penetration<span class="arrow">→</span></div>
          <div class="kpi-line-list">
            <div class="kpi-line"><span class="kpi-line-lbl">VSC</span><span class="kpi-line-val">64%</span></div>
            <div class="kpi-line"><span class="kpi-line-lbl">GAP</span><span class="kpi-line-val">52%</span></div>
            <div class="kpi-line"><span class="kpi-line-lbl">Maintenance</span><span class="kpi-line-val">38%</span></div>
            <div class="kpi-line"><span class="kpi-line-lbl">Tire &amp; Wheel</span><span class="kpi-line-val">24%</span></div>
          </div>
        </div>

        <div class="kpi-card">
          <div class="kpi-head">Deal Status<span class="arrow">→</span></div>
          <div class="donut-wrap">
            <div class="donut" style="background:conic-gradient(#f5a623 0% 41.7%, #2f6fea 41.7% 75%, #1f9d55 75% 100%);">
              <div class="donut-center"><div class="donut-num">12</div><div class="donut-lbl">DEALS</div></div>
            </div>
            <div class="kpi-legend">
              <div class="legend-row"><span class="legend-dot" style="background:#f5a623;"></span><span class="legend-lbl">Awaiting Bank</span><span class="legend-val">5</span></div>
              <div class="legend-row"><span class="legend-dot" style="background:#2f6fea;"></span><span class="legend-lbl">Ready to Sign</span><span class="legend-val">4</span></div>
              <div class="legend-row"><span class="legend-dot" style="background:#1f9d55;"></span><span class="legend-lbl">Booked Today</span><span class="legend-val">3</span></div>
            </div>
          </div>
        </div>`,
      agendaLabel: 'My Agenda',
      agendaHtml: `
        <div class="appt-card condensed accent">
          <div class="appt-info">
            <div class="appt-time">Deal #129522 <span class="badge" style="background:var(--red);">Kicked Back</span></div>
            <div class="appt-name">Contract Validation</div>
            <div class="appt-veh">Exception needs resolution</div>
          </div>
          <button class="btn-writeup" onclick="showToast('Resolving exception on Deal #129522…')">Resolve Exception</button>
        </div>
        <div class="appt-card condensed">
          <div class="appt-info">
            <div class="appt-time">Deal #129521 <span class="badge" style="background:var(--blue);">Awaiting Decision</span></div>
            <div class="appt-name">Credit App</div>
            <div class="appt-veh">Awaiting lender decision</div>
          </div>
          <button class="btn-writeup" onclick="showToast('Checking lender status on Deal #129521…')">Check Lender Status</button>
        </div>
        <div class="appt-card condensed">
          <div class="appt-info">
            <div class="appt-time">Deal #129518 <span class="badge">4 of 6 Signed</span></div>
            <div class="appt-name">Signing Room</div>
            <div class="appt-veh">In progress</div>
          </div>
          <button class="btn-writeup" onclick="showToast('Continuing signing on Deal #129518…')">Continue Signing</button>
        </div>
        <div class="appt-card condensed">
          <div class="appt-info">
            <div class="appt-time">Deal #129520 <span class="badge" style="background:#8b5cf6;">Ready</span></div>
            <div class="appt-name">Smart Deal Packet</div>
            <div class="appt-veh">Ready for review</div>
          </div>
          <button class="btn-writeup" onclick="showToast('Opening Smart Deal Packet for Deal #129520…')">Review Packet</button>
        </div>`,
      insightsHtml: `
        <div class="notif-row" onclick="showToast('Resolving exception on Deal #129522…')">
          <div class="notif-ic" style="background:#f3b98c;">⚠️</div>
          <div class="notif-text">
            <div class="notif-title">Deal #129522 was kicked back</div>
            <div class="notif-sub">Contract Validation exception needs resolution before it can move forward</div>
          </div>
        </div>
        <div class="notif-row" onclick="showToast('Checking lender status on Deal #129521…')">
          <div class="notif-ic" style="background:#a9c2f0;">🏦</div>
          <div class="notif-text">
            <div class="notif-title">Deal #129521 still awaiting a lender decision</div>
            <div class="notif-sub">Credit App submitted &middot; worth a follow-up call to the bank</div>
          </div>
        </div>
        <div class="notif-row" onclick="showToast('Opening Product Penetration…')">
          <div class="notif-ic" style="background:var(--page);">🛞</div>
          <div class="notif-text">
            <div class="notif-title">Tire &amp; Wheel penetration is lowest</div>
            <div class="notif-sub">24% this month &middot; an easy product to pitch more consistently</div>
          </div>
        </div>
        <div class="notif-row" onclick="showToast('Opening F&amp;I PVR…')">
          <div class="notif-ic" style="background:#a8e0b8;">📈</div>
          <div class="notif-text">
            <div class="notif-title">F&amp;I PVR is close to goal</div>
            <div class="notif-sub">97% of goal &middot; up 8.4% YoY</div>
          </div>
        </div>
        <div class="notif-row" onclick="showToast('Opening Deal Status…')">
          <div class="notif-ic" style="background:#eaf1ff;">✅</div>
          <div class="notif-text">
            <div class="notif-title">Strong finish today</div>
            <div class="notif-sub">3 booked, 4 more ready to sign</div>
          </div>
        </div>`,
      aivaWelcomeHtml: `
              Hello [Name]!<br><br>
              I'm AIVA. I can help with deal jackets, contract validation, and lender status.<br><br>
              How can I help you today?`,
      aivaSuggestionsHtml: `
              <div class="aiva-suggest" onclick="askAiva('Which deals have a kicked-back exception?')">Which deals have a kicked-back exception?</div>
              <div class="aiva-suggest" onclick="askAiva('What&#39;s my product penetration this month?')">What's my product penetration this month?</div>
              <div class="aiva-suggest" onclick="askAiva('Which deals are still awaiting bank approval?')">Which deals are still awaiting bank approval?</div>`,
      messagesHtml: `
        <div class="conv-row" onclick="openThread('Jamie Reyes')">
          <div class="conv-avatar" style="background:#2f7bf0;">JR</div>
          <div class="conv-text">
            <div class="conv-top"><span class="conv-name">Jamie Reyes</span><span class="conv-time">9:18 AM</span></div>
            <div class="conv-sub">Salesperson &middot; Deal handoff details, missing a signed trade title.</div>
          </div>
          <div class="conv-unread"></div>
        </div>
        <div class="conv-row" onclick="showToast('Opening conversation with Sales Manager…')">
          <div class="conv-avatar" style="background:#8a93a3;">SM</div>
          <div class="conv-text">
            <div class="conv-top"><span class="conv-name">Sales Manager</span><span class="conv-time">8:55 AM</span></div>
            <div class="conv-sub">Pricing/structure coordination on Deal #129520.</div>
          </div>
          <div class="conv-unread"></div>
        </div>
        <div class="conv-row" onclick="showToast('Opening conversation with Title Clerk…')">
          <div class="conv-avatar" style="background:#f5a623;">TC</div>
          <div class="conv-text">
            <div class="conv-top"><span class="conv-name">Title Clerk</span><span class="conv-time">Yesterday</span></div>
            <div class="conv-sub">Title and registration handoff on a booked deal.</div>
          </div>
        </div>`
    }
  };
