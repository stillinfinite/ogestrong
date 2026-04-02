# KOGS Competitive Gap Analysis
**Date:** March 31, 2026
**Compared against:** Ashford Park SAP Coalition (ashfordparkparents.com) and Evansdale United (evansdaleunited.com)

---

## Scorecard: Feature & Information Parity

| Capability | Ashford Park | Evansdale | KOGS | Gap |
|---|:---:|:---:|:---:|---|
| Single-page narrative | Yes | Yes | **Yes** | Parity |
| Visual design quality | Good | Weak (Wix) | **Strong** | KOGS leads |
| Embedded data charts | Full suite | Basic | **None** | Critical gap |
| Interactive cost model | Side-by-side with math | No | **No** | Critical gap |
| Enrollment trend visualization | Multi-year Recharts | Bar chart | **Numbers only** | Major gap |
| Receiving school capacity analysis | Detailed (seats, overflow) | No | **No** | Major gap |
| Birth/pipeline data | Census tracts, projections | No | **No** | Gap (if data exists) |
| Building condition/expansion feasibility | FCA scores, acreage, renovation $ | No | **No** | Gap (if applicable) |
| Demographic/census data | Tract-level income, education, poverty | No | **No** | Nice-to-have |
| FAQ rebutting specific claims | Accordion w/ sourced answers | Accordion (basic) | **Accordion (3 items)** | Needs expansion |
| Source registry | 42 sources listed | No | **5 sources cited** | Major gap |
| Dedicated data subsite | **Yes** (expansion.*) | No | **No** | Biggest gap |
| Comparison table (claims vs. data) | Myths vs. Facts | No | **Yes** | Parity |
| Timeline of SAP process | Dedicated page | No | **No** | Gap |
| Email/board contact with addresses | Full list, all 7 members | No | **Email template only** | Gap |
| Yard sign / physical merch | No | **Yes** | **No** | Minor gap |
| Live event stream links | No | **Yes** | **No** | Minor (event-dependent) |
| Video content | No | No | **Yes (Vimeo)** | KOGS leads |
| Petition integration | No | No | **Yes (Change.org)** | KOGS leads |
| Photos/gallery link | No | No | **Yes (Google Photos)** | KOGS leads |

### Overall Rating
- **Ashford Park:** 9/10 (the data site is a policy-grade document)
- **KOGS:** 6/10 (strong narrative, strong design, weak on data depth)
- **Evansdale:** 5/10 (functional but Wix-limited, decent data)

---

## Recommended Build-Out Plan

### Phase 1: Expand the main site (low effort, high impact)

**1. Expand the FAQ/accordion section**
- Currently 3 items. Should be 8-10, each rebutting a specific district claim with sourced data.
- Add: "Can nearby schools absorb Oak Grove students?", "What does closure actually save?", "Is enrollment really declining?", "What about the special ed students?", "Who is HPM and what's their track record?"
- Source: existing research documents and flyers

**2. Add a SAP process timeline**
- A simple vertical timeline showing key dates: when SAP started, Round 1 feedback, Round 2 survey, upcoming board meetings, election date.
- Can be pure HTML/CSS on the existing site. No React needed.

**3. Add board member contact info**
- List all 7 board members with email addresses directly on the Take Action section.
- Ashford Park does this and it removes friction. Currently KOGS links to an email template doc but doesn't list the actual contacts.

**4. Source registry**
- A simple section at the bottom of the page listing every document and data source cited. Should be 15-20+.
- Builds credibility. Journalists and board members look for this.

### Phase 2: Build the data site (medium effort, highest impact)

A dedicated subdomain (e.g., `data.keepoakgrovestrong.com` or `data.ogestrong.vercel.app`) modeled on Ashford Park's expansion site. Single scrolling page, editorial feel, chart-heavy.

**Sections to build (based on data already available):**

| Section | Data Available? | Source |
|---|---|---|
| Enrollment trend (388 to 447, 15.2% growth) | Yes | Flyers/site |
| CCRPI + reading scores vs. county | Yes | Site has the numbers |
| Chronic absenteeism comparison | Yes | 3.6% vs. 21.2% |
| Cost-per-student trajectory (falling) | Yes, claimed | Need the year-by-year data |
| Closure savings vs. replacement cost | Yes | $800K-$1M vs. $76.7M |
| Admin spending growth vs. instruction | Yes | 116% vs. 23%, $50.5M to $109.1M |
| District reserves analysis | Yes | $520.8M, $231M revenue growth |
| Special ed services (25% vs. district avg) | Yes | Need the district average number |
| Receiving school capacity | **Unknown** | Need to research: can Briar Vista, Fernbank, etc. absorb 447 students? |
| Clifton Corridor development pipeline | Partial | Have $4B figure, need specifics |
| Birth/pipeline data for zone | **Unknown** | Census data, would need to pull |
| Building condition / FCA scores | **Unknown** | Would need DCSD facilities data |
| HPM track record in other districts | **Unknown** | Samuel Howe quote suggests this exists |

**Tech recommendation:** React + Vite + Tailwind + Recharts, deployed as a separate Vercel project. Same stack as Ashford Park. Recharts handles the bar/area/line charts. Source Serif or similar editorial font for the report feel.

### Phase 3: Nice-to-haves

- Yard sign order form (Google Form or Shopify link)
- Board meeting livestream embed when meetings happen
- Email signup connected to an actual service (Mailchimp, Resend, etc.) - currently the signup link goes to #
- Social sharing meta tags with custom OG image

---

## Data Collection Gaps

Before building the data site, these gaps need to be filled:

1. **Year-by-year cost-per-student** for Oak Grove (not just "falling" - need the actual numbers for a chart)
2. **Receiving school enrollment and capacity** - which schools would absorb OGE students? What's their current utilization?
3. **District special ed average** - to contrast with Oak Grove's ~25%
4. **Clifton Corridor housing permits/units** - specific numbers if you want to use them
5. **Census tract data** for the Oak Grove zone (births, income, education levels)
6. **HPM's track record** - other districts where they consulted, outcomes
7. **Historical enrollment data** going back further than 2023 if available

Existing flyers likely have some of this. The Thomas Brown research document (March 2026) may have more. Every chart needs a source, and every claim needs a number behind it.

---

## Current KOGS Data Inventory

Everything currently on the site:

### Academic Performance
- #1 in DeKalb County, 3rd grade reading: 78.1% vs. 33.4%
- CCRPI Score: 87.6 (top 15% of all DeKalb schools)
- Chronic Absenteeism: 3.6% vs. county average 21.2%
- IZA Institute citation: consolidation reduced test scores by 5.9% of a standard deviation

### Enrollment
- +15.2% growth: 388 to 447 students (2023-2025)
- Zero portable classrooms (only Lakeside cluster school)
- 2,500+ new homes in Clifton Corridor

### Financial
- $520.8M in district reserves (3-4x national best practice)
- Cost-per-student falling, projected below county average by 2026
- Closure savings: ~$800K-$1M/year vs. replacement cost ~$76.7M (77-96 year payback)
- Revenue grew $231M since 2020
- District admin costs grew 116% ($50.5M to $109.1M) vs. instruction at 23%
- $4B economic corridor

### Special Education
- ~25% of students receive special ed services (far above district average)

### Process Criticism
- HPM "looking at the map" quote (March 23, 2026, audio exists)
- HPM has no educational expertise
- 27 schools affected by SAP

### Sources Cited
1. DeKalb History Center
2. IZA Institute of Labor Economics
3. HPM consultant (public meeting, March 23, 2026)
4. DeKalb County Schools data (CCRPI, reading, absenteeism, enrollment)
5. District financial records
