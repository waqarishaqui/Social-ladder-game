// questions.js
// Morally-grey, adult choice pack for: Worker -> Committee Head -> Manager -> CEO -> Capitalist
// Variables used: money, morale, family, health
// Two options per question. Keep effects intentionally costly and ambiguous.

// ---------------- LEVEL 1: WORKER ----------------
const level1Questions = [
  {
    question: "Factory orders an emergency 16-hour shift starting tonight.",
    options: ["Agree quietly", "Refuse"],
    effects: [
      { money: 15, morale: -10, family: -10, health: -15 }, // Agree quietly: money now, heavy health/family cost
      { money: -10, morale: 5, family: 10, health: 10 }     // Refuse: lose pay, keep health and family, coworkers resent you slightly
    ]
  },
  {
    question: "You see a coworker stealing materials to resell, out of desperation.",
    options: ["Report them", "Stay silent"],
    effects: [
      { money: 10, morale: -8, family: -5, health: 5 },   // Report: small reward/protection, guilt up
      { money: -5, morale: 8, family: 5, health: -5 }     // Silent: solidarity and social gain, risk if discovered
    ]
  },
  {
    question: "Security found political flyers near your locker and suspects you.",
    options: ["Deny and shift blame", "Admit sympathy"],
    effects: [
      { money: 5, morale: -10, family: -8, health: 5 },   // Deny: short-term safety, long-term moral hit
      { money: -10, morale: 10, family: 8, health: -10 }  // Admit: moral boost but surveillance/harassment risk
    ]
  },
  {
    question: "A machine is failing and could injure someone if not shut down.",
    options: ["Report and halt line", "Keep quiet to avoid delay"],
    effects: [
      { money: -10, morale: 10, family: 5, health: -5 },  // Report: safety prioritized, production hit
      { money: 10, morale: -8, family: -5, health: -10 }  // Quiet: short-term money/protection, safety risk
    ]
  },
  {
    question: "Child needs urgent school supplies but you can't cover it this month.",
    options: ["Buy supplies now", "Delay purchase"],
    effects: [
      { money: -12, morale: 6, family: 12, health: 0 },   // Buy: family + morale at money cost
      { money: 8, morale: -6, family: -12, health: 0 }    // Delay: save money, family morale suffers
    ]
  }
];

// ---------------- LEVEL 2: COMMITTEE HEAD ----------------
const level2Questions = [
  {
    question: "During wage protests the CEO's child is injured; the press asks for your stance.",
    options: ["Publicly condemn the workers", "Defend the workers and blame police"],
    effects: [
      { money: 15, morale: -12, family: -8, health: -5 }, // Condemn: political protection, social/ethical cost
      { money: -12, morale: 12, family: 8, health: -6 }   // Defend: moral/growth, hits paycheck/personal safety
    ]
  },
  {
    question: "You obtain recordings proving management plans to delay promised wage hikes.",
    options: ["Leak recordings anonymously", "Stay loyal — take CEO's promise"],
    effects: [
      { money: -18, morale: 14, family: 6, health: -6 },  // Leak: dignity + trust, but risk of losing job/pay
      { money: 12, morale: -10, family: -6, health: 6 }   // Stay loyal: financial/protection gain, moral/family slump
    ]
  },
  {
    question: "Police raid uncovers undocumented workers. Management expects you to stay quiet.",
    options: ["Hide the workers and falsify records", "Cooperate and hand over lists"],
    effects: [
      { money: -12, morale: 10, family: 8, health: -12 }, // Hide: moral high, legal risk & fines
      { money: 12, morale: -12, family: -8, health: 8 }   // Cooperate: safety + money, social/guilt cost
    ]
  },
  {
    question: "Safety upgrade funds arrive but senior execs hint at 'reallocation'.",
    options: ["Use funds for real safety", "Divert funds and file fake reports"],
    effects: [
      { money: -8, morale: 12, family: 6, health: -6 },   // Use properly: moral/relationship gain, fewer bonuses
      { money: 18, morale: -14, family: -6, health: 6 }   // Divert: big money & short-term protection, guilt + risk
    ]
  },
  {
    question: "A local politician demands workers attend his unpaid rally as a show of loyalty.",
    options: ["Force workers to attend", "Refuse the politician and risk backlash"],
    effects: [
      { money: 15, morale: -10, family: -8, health: 6 },  // Force: political favor and protection, morale/family hit
      { money: -12, morale: 10, family: 8, health: -10 }  // Refuse: moral standing and family goodwill, financial risk
    ]
  }
];

// ---------------- LEVEL 3: MANAGER ----------------
const level3Questions = [
  {
    question: "HQ orders layoffs; HR suggests targeting vocal union members.",
    options: ["Approve layoffs targeting activists", "Challenge HR and protect vocal staff"],
    effects: [
      { money: 18, morale: -14, family: 0, health: -6 },  // Approve: money & short-term stability, moral hit
      { money: -14, morale: 10, family: 0, health: -8 }   // Challenge: respect + morale, risk career & money
    ]
  },
  {
    question: "An ESG audit looms; bribery or honesty are on the table.",
    options: ["Bribe the auditor to look away", "Provide real data and accept penalties"],
    effects: [
      { money: 12, morale: -12, family: -4, health: 6 },  // Bribe: money & calm, ethical cost
      { money: -12, morale: 12, family: 6, health: -6 }   // Honest: reputation up, financial/health risk
    ]
  },
  {
    question: "A top performer is accused of harassment but drives profits.",
    options: ["Protect the performer quietly", "Fire them and face short-term losses"],
    effects: [
      { money: 15, morale: -16, family: 0, health: 0 },   // Protect: profit maintained, big morale hit
      { money: -10, morale: 12, family: 0, health: -6 }   // Fire: ethics upheld, money hit & stress
    ]
  },
  {
    question: "Supplier offers a kickback in exchange for preferred contracts.",
    options: ["Accept kickback", "Refuse and report supplier"],
    effects: [
      { money: 14, morale: -10, family: -4, health: 4 },  // Accept: cash gain, shame & risk
      { money: -10, morale: 10, family: 6, health: -6 }   // Refuse: moral win, financial pain & potential supplier retaliation
    ]
  },
  {
    question: "A worker dies on shift; PR asks you to call it 'personal negligence'.",
    options: ["Support PR line", "Admit company responsibility"],
    effects: [
      { money: 12, morale: -14, family: -6, health: 0 },  // PR: avoid crash, long-term moral/public cost
      { money: -12, morale: 12, family: 8, health: -8 }   // Admit: moral & family respect, financial/legal pain
    ]
  }
];

// ---------------- LEVEL 4: CEO ----------------
const level4Questions = [
  {
    question: "Shareholders want bigger returns; employees demand raises.",
    options: ["Prioritize shareholder profits", "Increase wages for workers"],
    effects: [
      { money: 25, morale: -15, family: 0, health: -8 },  // Prioritize profits: financial win, human cost
      { money: -20, morale: 15, family: 0, health: -10 }  // Increase wages: moral win, financial pain
    ]
  },
  {
    question: "A government official hints donations will secure regulatory favor.",
    options: ["Donate to secure favor", "Refuse and risk regulatory pressure"],
    effects: [
      { money: -18, morale: -8, family: 0, health: 6 },   // Donate: money out, political protection
      { money: -6, morale: 8, family: 0, health: -12 }    // Refuse: moral + public perception, regulatory risk
    ]
  },
  {
    question: "A whistleblower threatens exposure of systemic abuse.",
    options: ["Crush them legally and quietly", "Let truth come out and face consequences"],
    effects: [
      { money: 20, morale: -18, family: -8, health: 0 },  // Crush: maintain empire, huge moral & social cost
      { money: -18, morale: 18, family: 10, health: -10 } // Let truth: moral high ground, big financial/personal risk
    ]
  },
  {
    question: "Reporters demand transparency on environmental damage.",
    options: ["Run greenwash campaign", "Admit damage & remediate"],
    effects: [
      { money: 22, morale: -14, family: 0, health: -2 },  // Greenwash: short-term protection, ethical cost
      { money: -16, morale: 14, family: 6, health: -8 }   // Admit: reputation + moral, major hit to finances & stress
    ]
  },
  {
    question: "Your partner files for divorce after years of neglect.",
    options: ["Work to save the marriage", "Prioritize the company / empire"],
    effects: [
      { money: -12, morale: 12, family: 18, health: 6 },  // Save marriage: family & morale up, money hit
      { money: 20, morale: -10, family: -18, health: -6 } // Prioritize empire: money up, family & health suffer
    ]
  }
];

// ---------------- LEVEL 5: CAPITALIST ----------------
const level5Questions = [
  {
    question: "A dictatorship offers you a monopoly in return for funding their regime.",
    options: ["Fund them and secure monopoly", "Refuse and stay public"],
    effects: [
      { money: 40, morale: -20, family: -10, health: 0 }, // Fund: massive profit, major moral & social cost
      { money: -25, morale: 20, family: 10, health: -10 } // Refuse: moral win, financial/operational retaliation risk
    ]
  },
  {
    question: "War breaks out; your company can supply both sides covertly.",
    options: ["Sell to both sides", "Support peace & aid"],
    effects: [
      { money: 45, morale: -25, family: -10, health: -5 }, // Sell: huge money, moral catastrophe & personal risk
      { money: -30, morale: 25, family: 12, health: -15 }  // Aid: moral high, big financial + safety risk
    ]
  },
  {
    question: "You can influence an election via algorithmic bias for a friendly candidate.",
    options: ["Tilt the platform", "Keep platform neutral"],
    effects: [
      { money: 35, morale: -22, family: -8, health: 0 },   // Tilt: influence secured, democracy cost
      { money: -20, morale: 22, family: 8, health: -8 }    // Neutral: moral/long-term reputation, short-term competitive loss
    ]
  },
  {
    question: "You control vaccine distribution; wealthy nations buy exclusivity.",
    options: ["Sell primarily to rich nations", "Share globally at cost"],
    effects: [
      { money: 50, morale: -30, family: -10, health: 0 },  // Sell to rich: maximal profit, public health cost
      { money: -35, morale: 30, family: 12, health: -20 }  // Share at cost: moral + global goodwill, heavy financial hit
    ]
  },
  {
    question: "You can privatize major water sources and set prices.",
    options: ["Privatize and hike prices", "Keep water affordable"],
    effects: [
      { money: 40, morale: -28, family: -12, health: -5 }, // Privatize: huge money, widespread moral/health cost
      { money: -30, morale: 28, family: 12, health: 0 }  // Keep affordable: moral win, heavy financial burden & security risk
    ]
  }
];

// Master questions list (concatenate levels in order)
const questions = [
  ...level1Questions,
  ...level2Questions,
  ...level3Questions,
  ...level4Questions,
  ...level5Questions
];

// Export for CommonJS or window global (depends on your setup)
// If using Node bundler / module system, export:
// module.exports = { level1Questions, level2Questions, level3Questions, level4Questions, level5Questions, questions };

// Otherwise in a browser, simply include this file and `questions` will be available globally.
