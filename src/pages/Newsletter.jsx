import React, { useEffect, useId, useRef, useState } from "react";
import "./Newsletter.css";

// The newest issue, shown first. Earlier issues sit in the archive with their existing labels.
const LATEST = "October 2026";
const ARCHIVE = [
    { id: "Spring", label: "Term 251" },
    { id: "Summer", label: "Term 252" },
    { id: "Fall", label: "Last Year" },
];
const STATS = [
    { number: "15+", label: "Events" },
    { number: "3", label: "Semesters" },
    { number: "100+", label: "Members" },
];
const YEARBOOK_URL = "https://online.fliphtml5.com/kslxc/zrfq/";
const articleCount = (n) => (n === 1 ? "1 article" : `${n} articles`);

function Newsletter() {
    const [archiveTab, setArchiveTab] = useState("Spring");
    const [reader, setReader] = useState(null);

    const monthsData = [
        {
            month: "KFUPM AIChE – October 2026 Highlights",
            semester: "October 2026",
            newsletters: [
                {
                    date: "October 8",
                    title: "Beyond Horizons",
                    description: "In collaboration with the Aerospace Engineering Club, KFUPM AIChE hosted Beyond Horizons, an engaging event that explored the world of space through interactive experiments and highlighted how Chemical Engineering extends far beyond Earth.",
                    fullText: "In collaboration with the Aerospace Engineering Club, KFUPM AIChE hosted Beyond Horizons, an engaging event that explored the world of space through interactive experiments and highlighted how Chemical Engineering extends far beyond Earth.\n\nOver 100 visitors engaged with our booth throughout the event.",
                    image: "beyond_horizons.png",
                },
                {
                    date: "October 18",
                    title: "KFUPM AIChE Opening Ceremony",
                    description: "KFUPM AIChE officially welcomed its new members for the 2026–2027 academic year through an opening ceremony filled with interactive activities, inspiring remarks, and opportunities for members to connect and engage.",
                    fullText: "KFUPM AIChE officially welcomed its new members for the 2026–2027 academic year through an opening ceremony filled with interactive activities, inspiring remarks, and opportunities for members to connect and engage.",
                    image: "opening_ceremony.png",
                },
                {
                    date: "",
                    title: "Global Sustainability Challenge 2026–2027",
                    description: "The KFUPM AIChE Competition Team invited students from all KFUPM majors to participate in the Global Sustainability Challenge, featuring two tracks:",
                    fullText: "The KFUPM AIChE Competition Team invited students from all KFUPM majors to participate in the Global Sustainability Challenge, featuring two tracks:\n\n• Sustainable Energy\n• Adaptation & Resilience\n\nWith a prize pool exceeding 35,000 SAR, the competition offers students an opportunity to develop innovative solutions to global sustainability challenges, with the global finals scheduled for May 2027.",
                    image: "global_sustainability_challenge.png",
                    // Posters are shown whole, not cropped.
                    imageFit: "contain",
                },
                {
                    date: "",
                    title: "CHEMATHON 2026",
                    description: "KFUPM AIChE initiated efforts to support students interested in participating in CHEMATHON 2026, offering guidance and exploring the possibility of organizing a research poster workshop.",
                    fullText: "KFUPM AIChE initiated efforts to support students interested in participating in CHEMATHON 2026, offering guidance and exploring the possibility of organizing a research poster workshop.\n\nAn interest form was launched to identify potential participants and provide them with the necessary guidance and support throughout their preparation.",
                    image: "chemathon.png",
                    // Posters are shown whole, not cropped.
                    imageFit: "contain",
                },
                {
                    date: "",
                    title: "Aspen HYSYS & Plus Exam Registration & Online Sessions",
                    description: "KFUPM AIChE opened registration for the Aspen HYSYS and Aspen Plus Certification Exams (Aspen ACADEMIC and USER), providing junior-level students and above with an opportunity to demonstrate their proficiency in two widely used process simulation tools.",
                    fullText: "KFUPM AIChE opened registration for the Aspen HYSYS and Aspen Plus Certification Exams (Aspen ACADEMIC and USER), providing junior-level students and above with an opportunity to demonstrate their proficiency in two widely used process simulation tools.\n\nTo support students in their preparation, two online sessions were successfully conducted on October 29 and November 5, 2026, led by KFUPM AIChE Senior Consultant Eng. Mohammed Almahasnah.\n\nThe sessions covered essential concepts and exam-related topics, attracting over 70 student attendees.",
                    image: "aspen_registration.png",
                    // Posters are shown whole, not cropped.
                    imageFit: "contain",
                },
            ]
        },
        {
            month: "Social Events",
            semester: "Spring",
            newsletters: [
                {
                    date: "september 16, 2025",
                    title: "Kick-off Meeting",
                    description: "Kick-Off Meeting to launch the chapter's upcoming activities.",
                    fullText: "We successfully conducted a Kick-Off Meeting to mark the beginning of the chapter's activities and initiatives for the upcoming period. The meeting aimed to align members on the chapter's vision, objectives, and planned events, while clarifying roles and expectations to ensure effective collaboration",
                    image: "kick_off_meeting.JPG",
                },
                {
                    date: "september 23, 2025",
                    title: "National Day Celebration",
                    description: "Celebrating Saudi National Day through an engaging campus booth.",
                    fullText: "Our chapter organized a booth in celebration of Saudi National Day, aiming to engage students and commemorate this significant national occasion. The booth featured interactive activities that fostered national pride and encouraged student participation within a vibrant campus atmosphere. This initiative reflected our appreciation for national values and cultural heritage.",
                    image: "national_day_celebration.jpg",
                },
                {
                    date: "November 18, 2025",
                    title: "Sporting Event",
                    description: "An interactive padel activity promoting student engagement and well-being.",
                    fullText: "We were pleased to organize a Padel Activity aimed at enhancing student engagement and promoting physical well-being in an enjoyable and interactive setting. The event provided participants with an opportunity to connect outside the academic environment while encouraging teamwork, sportsmanship, and a healthy lifestyle.",
                    image: "the_sporting_event.jpg",
                },
                {
                    date: "November 09, 2025",
                    title: "Football Match",
                    description: "Participating in a football tournament to promote teamwork and sportsmanship.",
                    fullText: "Our chapter participated in a Football Tournament, which provided an excellent opportunity to promote teamwork, sportsmanship, and active student engagement beyond the academic setting. The event encouraged collaboration and healthy competition, fostering a positive and energetic atmosphere among participants.pursue their career goals in the competitive chemical engineering field.",
                    image: "football_match.jpg",
                },
                {
                    date: "October 05, 2025",
                    title: "Teachers Day Booth",
                    description: "Collaborating to celebrate Teachers' Day and show appreciation.",
                    fullText: "In collaboration with the Chemical Engineering Female Club and the Chemical Engineering Club, we organized a booth in celebration of Teachers' Day, aiming to express appreciation for faculty members and educators for their continuous support and dedication. The collaborative effort strengthened inter-club engagement and promoted a culture of respect within the academic community.",
                    image: "teachers_day_booth.jpg",
                },
                {
                    date: "september 18, 2025",
                    title: "Green Guardians Hackathon Winners Meeting.",
                    description: "Celebrating the winners and their innovative sustainability solutions.",
                    fullText: "We were honored to hold a celebratory event for the winners of the GWECCC Hackathon, recognizing their outstanding achievements and innovative solutions to sustainability challenges. The celebration was attended by distinguished faculty, including Dr. Saad F. Al-Afnan, Acting Chairman of the Department of Chemical Engineering at KFUPM, and Dr. Basim Abussaud.",
                    image: "hackathon_meeting.jpg",
                },
            ]
        },
        {
            month: "Seminars and Workshops",
            semester: "Spring",
            newsletters: [
                {
                    date: "september 29, 2025",
                    title: "Machine Learning for Chemical Engineers",
                    description: "An introductory session on machine learning applications for chemical engineers.",
                    fullText: "Our team invited Engineer Ahmed Alolaywi to share his expertise in artificial intelligence and share insights about how it is a skill that adds value to chemical engineers. The session agenda included: . Introduction to Python . Supervised Learning . Hybrid Modelling . Data-Driven Optimization . Reinforcement Learning . Unsupervised Learning",
                    image: "ml.jpg",
                },
                {
                    date: "October 07, 2025",
                    title: "From Campus to Career",
                    description: "A session sharing career journeys from university to the professional world.",
                    fullText: "We hosted Engineer Hanan Al-Quraish and Engineer Hussain Al-Hassan, who shared their amazing stories from why they chose their university majors to how they entered the world of employment. The engineers also shared their insights about what a chemical engineer needs in order to become successful.",
                    image: "from_campus_to_career.JPG",
                },
                {
                    date: "December 09, 2025",
                    title: "English 101 Help session:",
                    description: "A workshop supporting students in preparing for the English 101 final exam.",
                    fullText: "We successfully concluded the English 101 Final Exam Workshop, which demonstrated strong student engagement and active participation. The workshop aimed to support students in their exam preparation by providing practical guidance and effective strategies.",
                    image: "eng101.JPG",
                },
                {
                    date: "December 01, 2025",
                    title: "Process Safety Seminar",
                    description: "An insightful seminar on process safety principles in chemical engineering.",
                    fullText: "Our chapter was honored to host Dr. Christos D. Argyropoulos, who delivered an insightful seminar highlighting the fundamental principles of process safety and its critical role in preventing industrial incidents. The session provided attendees with a comprehensive introduction to key safety concepts essential to chemical engineering practice.",
                    image: "procces.jpg",
                },
            ]
        },
        {
            month: "Industrial Visits, Conferences and Competitions:",
            semester: "Spring",
            newsletters: [
                {
                    date: "October 16, 2025",
                    title: "BHIG Visit",
                    description: "An industrial visit offering real-world engineering exposure.",
                    fullText: "We were delighted to organize an industrial visit to Blue Hydrogen Industrial Gases Co. (BHIG) – Jubail, which marked a truly impactful and enriching experience for our members. The visit provi",
                    image: "bhig.png",
                },
                {
                    date: "september 11, 2025",
                    title: "Green Guardians Hackathon",
                    description: "First place among universities at the Green Guardians Hackathon.",
                    fullText: "Our team secured first place out of 15 universities across GC in the Green Guardians Hackathon, held during the Energy and Climate Conference in Bahrain. This outstanding accomplishment reflects the creativity, dedication, and problem-solving excellence of our students as they tackled real-world sustainability challenges.",
                    image: "green_guardians_hackathon_winners_meeting.jpeg",
                },
                {
                    date: "October 21, 2025",
                    title: "Clubs Fusion",
                    description: "A collaborative competition bringing student clubs together.",
                    fullText: "Our chapter organized Clubs Fusion, a collaborative competition that brought together a diverse group of student clubs across the university. The event provided an engaging platform for participants to unite toward a shared objective, exchange ideas, and showcase their club's strengths. Clubs Fusion not only strengthened inter-club relationships but also enriched the overall student experience through meaningful cooperation and renewed motivation.",
                    image: "clubs.JPG",
                },
                {
                    date: "November 26, 2025",
                    title: "The Shark Tank",
                    description: "A sustainability-focused competition aligned with Saudi Vision 2030.",
                    fullText: "We were proud to conclude the Sustainable Shark Tank Competition, organized in collaboration with the KFUPM Chemical Engineering Club and the KFUPM Energy Club. The competition highlighted innovative student-driven solutions centered on the Net-Zero Waste Circular Economy, in alignment with Saudi Vision 2030. The event featured strong participation, with several teams advancing to the final stage and presenting their outstanding ideas.",
                    image: "shark.JPG",
                },
                {
                    date: "December 03, 2025",
                    title: "The Research Competition",
                    description: "A competition promoting undergraduate research and innovation.",
                    fullText: "We were pleased to organize the Research Competition in collaboration with the KFUPM Chemical Engineering Club and the KFUPM Female Chemical Engineering Club. The competition was designed to strengthen students' engagement in research activities, promote innovative thinking, and foster a collaborative academic environment.",
                    image: "res.JPG",
                },
            ]
        },
    ];

    const latest = monthsData.filter((group) => group.semester === LATEST);
    const archiveGroups = monthsData.filter((group) => group.semester === archiveTab);
    const openReader = (articles, index, opener) => setReader({ articles, index, opener });

    return (
        <div className="nl-page">
            <div className="nl-shell">
                <header className="nl-hero">
                    <div>
                        <p className="nl-hero__badge">✦ AIChE KFUPM Chapter</p>
                        <h1 className="nl-hero__title">Newsletter</h1>
                        <p className="nl-hero__lead">
                            Stay updated with our latest news, events, and exclusive insights
                            from the world of chemical engineering.
                        </p>
                    </div>
                    <dl className="nl-stats">
                        {STATS.map((stat) => (
                            <div key={stat.label}>
                                <dt>{stat.label}</dt>
                                <dd>{stat.number}</dd>
                            </div>
                        ))}
                    </dl>
                </header>

                {latest.map((group) => (
                    <section key={group.month} className="nl-section" aria-labelledby="nl-latest-title">
                        <div className="nl-section__head">
                            <div>
                                <p className="nl-section__label">Latest issue</p>
                                <h2 id="nl-latest-title" className="nl-section__title">{group.month}</h2>
                            </div>
                            <p className="nl-section__meta">{articleCount(group.newsletters.length)}</p>
                        </div>
                        <ArticleGrid articles={group.newsletters} headingLevel={3} onRead={openReader} />
                    </section>
                ))}

                <section className="nl-section" aria-labelledby="nl-archive-title">
                    <div className="nl-section__head">
                        <div>
                            <h2 id="nl-archive-title" className="nl-section__title">Newsletter archive</h2>
                            <p className="nl-archive__intro">Earlier newsletters and the year booklet.</p>
                        </div>
                    </div>

                    <div className="nl-tabs" role="group" aria-label="Choose an archive">
                        {ARCHIVE.map((tab) => (
                            <button key={tab.id} type="button" aria-pressed={archiveTab === tab.id} onClick={() => setArchiveTab(tab.id)}>
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <div className="nl-archive__panel" key={archiveTab}>
                        {archiveTab === "Summer" && (
                            <div className="nl-soon">
                                <p className="nl-soon__icon" aria-hidden="true">⏳</p>
                                <h3 className="nl-soon__title">Coming Soon</h3>
                                <p className="nl-soon__text">
                                    Term 252 content is on its way. Stay tuned for upcoming events, seminars, and highlights!
                                </p>
                            </div>
                        )}

                        {archiveTab === "Fall" && (
                            <div className="nl-group">
                                <div className="nl-group__head">
                                    <h3 className="nl-group__title">Year Booklet</h3>
                                </div>
                                <div className="nl-yearbook">
                                    <iframe src={YEARBOOK_URL} title="Year Booklet" loading="lazy" allowFullScreen />
                                </div>
                            </div>
                        )}

                        {archiveGroups.map((group) => (
                            <div key={group.month} className="nl-group">
                                <div className="nl-group__head">
                                    <h3 className="nl-group__title">{group.month}</h3>
                                    <p className="nl-group__count">{articleCount(group.newsletters.length)}</p>
                                </div>
                                <ArticleGrid articles={group.newsletters} headingLevel={4} onRead={openReader} />
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <Reader reader={reader} setReader={setReader} />
        </div>
    );
}

function ArticleGrid({ articles, headingLevel, onRead }) {
    return (
        <ul className="nl-grid">
            {articles.map((article, index) => (
                <li key={article.title}>
                    <ArticleCard
                        article={article}
                        headingLevel={headingLevel}
                        onRead={(event) => onRead(articles, index, event.currentTarget)}
                    />
                </li>
            ))}
        </ul>
    );
}

// Photos fill the frame. Posters are shown whole over a blurred copy of themselves.
function Media({ article, alt }) {
    if (!article.image) return <div className="nl-media" aria-hidden="true" />;
    const isPoster = article.imageFit === "contain";
    return (
        <div className={`nl-media${isPoster ? " nl-media--poster" : ""}`}>
            {isPoster && <img className="nl-media__backdrop" src={article.image} alt="" aria-hidden="true" />}
            <img className="nl-media__img" src={article.image} alt={alt} loading="lazy" decoding="async" />
        </div>
    );
}

function ArticleCard({ article, headingLevel, onRead }) {
    const Heading = `h${headingLevel}`;
    const titleId = useId();
    return (
        <article className="nl-card" aria-labelledby={titleId}>
            <Media article={article} alt="" />
            <div className="nl-card__body">
                {article.date && <p className="nl-card__date">{article.date}</p>}
                <Heading id={titleId} className="nl-card__title">{article.title}</Heading>
                <p className="nl-card__desc">{article.description}</p>
                <button type="button" className="nl-card__read" onClick={onRead} aria-describedby={titleId}>
                    Read article<span aria-hidden="true">→</span>
                </button>
            </div>
        </article>
    );
}

// The full article in a modal dialog: focus stays inside, Escape closes it,
// and focus returns to the button that opened it.
function Reader({ reader, setReader }) {
    const dialog = useRef(null);
    const textPanel = useRef(null);
    const article = reader ? reader.articles[reader.index] : null;
    const total = reader ? reader.articles.length : 0;
    const isOpen = !!reader;

    const close = () => {
        const opener = reader?.opener;
        setReader(null);
        opener?.focus();
    };
    const step = (delta) => setReader((r) => ({ ...r, index: (r.index + delta + r.articles.length) % r.articles.length }));

    useEffect(() => {
        const el = dialog.current;
        if (isOpen && !el.open) el.showModal();
        if (!isOpen && el.open) el.close();
    }, [isOpen]);

    // Each article starts at the top of its text.
    useEffect(() => {
        if (textPanel.current) textPanel.current.scrollTop = 0;
    }, [reader?.index]);

    // Arrow keys move between articles wherever focus is while the view is open.
    useEffect(() => {
        if (!isOpen || total < 2) return undefined;
        const onKey = (event) => {
            if (event.key === "ArrowRight") step(1);
            if (event.key === "ArrowLeft") step(-1);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    });

    return (
        <dialog
            ref={dialog}
            className="nl-reader"
            aria-labelledby="nl-reader-title"
            onCancel={(event) => { event.preventDefault(); close(); }}
            onClick={(event) => { if (event.target === dialog.current) close(); }}
        >
            {article && (
                <div className="nl-reader__layout">
                    <Media article={{ ...article, imageFit: "contain" }} alt={article.title} />
                    <div className="nl-reader__text" ref={textPanel}>
                        <div className="nl-reader__bar">
                            <span className="nl-reader__count">{reader.index + 1} of {total}</span>
                            <button type="button" className="nl-reader__close" onClick={close} aria-label="Close article">×</button>
                        </div>
                        {article.date && <p className="nl-reader__date">{article.date}</p>}
                        <h2 id="nl-reader-title" className="nl-reader__title">{article.title}</h2>
                        <p className="nl-reader__body">{article.fullText}</p>
                        {total > 1 && (
                            <div className="nl-reader__nav">
                                <button type="button" onClick={() => step(-1)}>← Previous article</button>
                                <button type="button" onClick={() => step(1)}>Next article →</button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </dialog>
    );
}

export default Newsletter;
