// Single source of content for every design option. Plain JS, no build step:
// each design loads this file and renders window.SITE.
// Sources: LinkedIn (read 2026-11-07) and the old WordPress site (2015–2019).
window.SITE = {
  name: "Chase Doelling",
  headline: "Co-Founder & GTM Principal at Sandcastle Labs",
  location: "Denver, Colorado",
  email: "hey@chasedoelling.com",
  linkedin: "https://www.linkedin.com/in/chasedoelling",
  portrait: "assets/img/chase-full-long.png",
  // About section plays this clip (same one as the LinkedIn post); poster is its first frame.
  aboutVideo: { src: "assets/video/chase-about.mp4", poster: "assets/video/chase-about-poster.jpg" },
  logo: "assets/img/logo-cd1.png",

  // Hero: AI video goes here later. Until then designs show the poster.
  hero: {
    video: "", // e.g. "assets/video/hero.mp4"
    poster: "assets/img/grey-denver.jpg",
    kicker: "Hi, I'm Chase",
    line: "You look great today."
  },

  nav: [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "graveyard", label: "Killed" },
    { id: "contact", label: "Contact" }
  ],

  about: [
    "Go-to-market operator across B2B SaaS: identity, security, integrations, DevOps and agile. Three venture-backed startups with a Fortune 500 exit squeezed in the middle.",
    "I started in field marketing, ran alliances and channel, evangelized on stages from Stockholm to Google NEXT, and most recently led JumpCloud's global product marketing team. Now I'm building Sandcastle Labs with Brian Wones and Nick Bair.",
    "Colorado native. Certified beer judge, occasional triathlete, reliable purveyor of doughnuts."
  ],

  stats: [
    { value: "15+", label: "Years in go-to-market" },
    { value: "10x", label: "JumpCloud revenue while I was there" },
    { value: "20+", label: "Conferences worked or spoken at" },
    { value: "3", label: "Hack4CO awards for Craft Boom, including Best in Show" }
  ],

  experience: [
    {
      company: "Sandcastle Labs",
      years: "2026 – now",
      roles: [
        {
          title: "Co-Founder & GTM Principal",
          dates: "Sep 2026 – Present",
          summary: "An agency of senior GTM operators who embed with your team across marketing, automations, RevOps, BI and AI search. We build professional-grade agents to do the work, and everything we build stays yours when we leave. Collimer, our AI-visibility agent, is the first."
        }
      ]
    },
    {
      company: "JumpCloud",
      years: "2019 – 2026",
      note: "Joined at ~100 people, left at ~1,000 with revenue up more than 10x.",
      roles: [
        { title: "Director of Product Marketing", dates: "Apr 2025 – Sep 2026", summary: "Led the global product marketing team across GTM strategy, analyst relations, roadmap planning, strategic partnerships and M&A integration." },
        { title: "Principal Strategist", dates: "Nov 2021 – Apr 2025", summary: "The company's first Principal Strategist: platform evangelist across webinars, conferences, blogs and video, plus channel GTM for global alliances, MSPs, VARs and distributors." },
        { title: "Director, Strategic & Technology Alliances", dates: "Nov 2020 – Nov 2021", summary: "GTM for the AWS, GCP, CrowdStrike and Atlassian partnerships, with business and corporate development behind them." },
        { title: "Director, MSP Partners", dates: "Mar 2020 – Nov 2020", summary: "Built a product-led growth model for the MSP market and a structured program to grow the partner base." },
        { title: "Director, Strategic Alliances", dates: "Jul 2019 – Mar 2020", summary: "Joint go-to-market with AWS, G Suite, Duo, Juniper Networks, BambooHR and more." }
      ],
      highlights: ["Google NEXT", "AWS Startup Showcase", "CRN TV", "Cloudflare MDM integration", "Workato partnership"]
    },
    {
      company: "Cloud Elements",
      years: "2017 – 2020",
      roles: [
        { title: "Director of Product & Alliances Marketing", dates: "Jan 2019 – Mar 2020", summary: "Sales enablement, the Cloud Elements rebrand, competitive battle cards and analyst relations." },
        { title: "Director of Alliances Marketing", dates: "Apr 2018 – Mar 2020", summary: "Joint marketing and enablement for OEM customers including SAP, Sage and Axway." },
        { title: "Product Marketing Manager", dates: "Jun 2017 – Apr 2018", summary: "Customer GTM lead across three business lines, competitive intelligence and analyst briefings." }
      ],
      highlights: ["Nordic APIs Stockholm", "Nordic APIs Austin", "API World", "DevWeek", "DZone RESTful RefCard"]
    },
    {
      company: "CA Technologies",
      years: "2015 – 2017",
      roles: [
        { title: "Global Developer Marketing", dates: "May 2016 – Jun 2017", summary: "Shaped the developer brand for API management, containers and mobile, and helped launch developer.ca.com." },
        { title: "Sr. Reference Marketing Analyst", dates: "Jul 2015 – May 2016", summary: "Case studies, customer panels and references with top financial services and insurance accounts." }
      ],
      highlights: ["DockerCon", "GitHub Universe", "SXSW", "NDC London", "WebExpo Prague"]
    },
    {
      company: "Rally Software",
      years: "2009 – 2015",
      note: "Grew from 120 people through rounds D & E, an IPO and the CA acquisition.",
      roles: [
        { title: "Growth Hacker", dates: "Apr 2014 – Jul 2015", summary: "Customer advocacy and hackathons that extended the platform at Fortune 500 customers." },
        { title: "Field Marketing Manager", dates: "Jul 2012 – Apr 2014", summary: "End-to-end customer events, webinars and regional programs with sales." },
        { title: "Product Owner", dates: "Aug 2009 – Aug 2012", summary: "Ran 70+ national training courses for 1,100+ attendees; a $750K+ a year line of business." }
      ],
      highlights: ["Denver Startup Week", "Hackathon at Intel", "Code for America"]
    }
  ],

  projects: [
    {
      name: "Hey Babe, What Sounds Good?",
      kind: "Recipe collector",
      year: "2026",
      url: "https://heybabewhatsoundsgood.com",
      image: "assets/img/shot-heybabe.jpg",
      blurb: "Our family recipe library that plans the week around the weather. Photograph a cookbook page and it transcribes, titles and fact-checks the recipe. The starter kit is open source."
    },
    {
      name: "Nice Rice",
      kind: "Colorado food nonprofit",
      year: "Ongoing",
      url: "https://www.nicerice.org",
      image: "assets/img/shot-nicerice.jpg",
      blurb: "Rice rolls made in a commissary kitchen in Lafayette and delivered frozen in bulk to Community Food Share. Nice people, practical good."
    },
    {
      name: "Collimer",
      kind: "AI-visibility agent, Sandcastle Labs",
      year: "2026",
      url: "https://collimer.com",
      image: "assets/img/shot-collimer.jpg",
      blurb: "Scans what ChatGPT, Claude, Gemini and Perplexity say about a brand, then hands back the specific changes to make. Free scan, 90 seconds."
    }
  ],

  graveyard: [
    {
      name: "Craft Boom / CraftedHere",
      born: "2013",
      died: "2015",
      image: "assets/img/screen-shot-2015-08-20-at-12.29.27-pm.png",
      gallery: ["assets/img/screen-shot-2015-08-20-at-1.21.16-pm.png", "assets/img/caddy2.jpg"],
      epitaph: "Mobile apps for finding local craft coffee, beer, wine, spirits and dispensaries. Best in Show, Best Tourism App and Best Use of Esri API at Hack4CO, then 2nd at the first Cannabis Tech Competition. I was co-founder and CEO of the S corp with four partners and two interns. Shut it down in 2015."
    },
    {
      name: "PKWY Chile",
      born: "2015",
      died: "—",
      image: "assets/img/screen-shot-2015-08-20-at-12.15.46-pm.png",
      epitaph: "Website design for a small-batch green chile sauce. Local ingredients, local preparation."
    },
    {
      name: "Denver Voice",
      born: "2015",
      died: "—",
      image: "assets/img/gd-trailer-color.jpg",
      gallery: ["assets/img/gd-can-reflection-bw.jpg", "assets/img/taxi2-corner-color.jpg"],
      epitaph: "Photography for Denver's street newspaper."
    }
  ],

  // Shown as a project card in Projects (no longer its own section).
  century: {
    name: "The Century List",
    kind: "Personal project",
    year: "Since 2005",
    intro: "If you had a hundred years to live, what hundred things would you do? I started this list a long time ago. Here's where it stands.",
    progress: [
      { label: "Visit 30 countries", pct: 73 },
      { label: "50 states + DC", pct: 60 },
      { label: "Read 1,000 books", pct: 16 }
    ],
    items: [
      { title: "Live in another country", when: "2008 · Perugia, Italy", img: "assets/img/perugia.jpg" },
      { title: "Oktoberfest in Germany", when: "2014", img: "assets/img/oktoberfest.jpg" },
      { title: "Brew with a master brewer", when: "2011", img: "assets/img/strange.jpg" },
      { title: "Certified beer judge", when: "2012" },
      { title: "Finish a triathlon", when: "2013", img: "assets/img/triathlon.jpg" },
      { title: "Half marathon", when: "2015", img: "assets/img/colfax-half.jpg" },
      { title: "Visit the Hagia Sophia", when: "2008 · Istanbul", img: "assets/img/sofia.jpg" },
      { title: "Drive a Porsche", when: "2008", img: "assets/img/porsche.jpg" },
      { title: "Ride in a helicopter", when: "2005", img: "assets/img/helicopter.jpg" },
      { title: "See the Grand Canyon", when: "2006", img: "assets/img/canyon.jpg" },
      { title: "Visit the Redwood Forest", when: "2005", img: "assets/img/redwoods.jpg" },
      { title: "Go inside the NYSE", when: "2013", img: "assets/img/nyse.jpg" },
      { title: "Visit Times Square", when: "2005", img: "assets/img/nyc.jpg" },
      { title: "Land a 360 snowboarding", when: "2008", img: "assets/img/360.jpg" },
      { title: "Eat octopus, eel, alligator and whale", when: "2014", img: "assets/img/whale.jpg" },
      { title: "Get married", when: "2012", img: "assets/img/marry.jpg" },
      { title: "Own a home", when: "2014 · Denver", img: "assets/img/house.jpg" },
      { title: "Have a dog", when: "2010", img: "assets/img/gavin.jpg" },
      { title: "Graduate college", when: "2009", img: "assets/img/college.jpg" },
      { title: "Take a yoga class", when: "2013", img: "assets/img/yoga.jpg" },
      { title: "Start a business", when: "2013 · Craft Boom" },
      { title: "Start another one", when: "2026 · Sandcastle Labs" },
      { title: "Learn to meditate", when: "Not yet" }
    ]
  }
};
