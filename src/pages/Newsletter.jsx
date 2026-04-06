import React, { useState } from "react";

function Newsletter() {
    const [searchSemester, setSearchSemester] = useState("");
    const [flippedCards, setFlippedCards] = useState({});

    const monthsData = [
        {
            month: "Social Events",
            semester: "Spring",
            newsletters: [
                {
                    date: "september 16, 2025",
                    title: "Kick-off Meeting",
                    description: "Kick-Off Meeting to launch the chapter’s upcoming activities.",
                    fullText: "We successfully conducted a Kick-Off Meeting to mark the beginning of the chapter’s activities and initiatives for the upcoming period. The meeting aimed to align members on the chapter’s vision, objectives, and planned events, while clarifying roles and expectations to ensure effective collaboration",
                    image: "/239.jpg",
                },
                {
                    date: "september 23, 2025",
                    title: "National Day Celebration",
                    description: "Celebrating Saudi National Day through an engaging campus booth.",
                    fullText: "Our chapter organized a booth in celebration of Saudi National Day, aiming to engage students and commemorate this significant national occasion. The booth featured interactive activities that fostered national pride and encouraged student participation within a vibrant campus atmosphere. This initiative reflected our appreciation for national values and cultural heritage.",
                    image: "/299.jpg",
                },
                {
                    date: "November 18, 2025",
                    title: "Sporting Event",
                    description: "An interactive padel activity promoting student engagement and well-being.",
                    fullText: "We were pleased to organize a Padel Activity aimed at enhancing student engagement and promoting physical well-being in an enjoyable and interactive setting. The event provided participants with an opportunity to connect outside the academic environment while encouraging teamwork, sportsmanship, and a healthy lifestyle.",
                    image: "/1510.jpg",
                },
                {
                    date: "November 09, 2025",
                    title: "Football Match",
                    description: "Participating in a football tournament to promote teamwork and sportsmanship.",
                    fullText: "Our chapter participated in a Football Tournament, which provided an excellent opportunity to promote teamwork, sportsmanship, and active student engagement beyond the academic setting. The event encouraged collaboration and healthy competition, fostering a positive and energetic atmosphere among participants.pursue their career goals in the competitive chemical engineering field.",
                    image: "/239.jpg",
                },
                {
                    date: "October 05, 2025",
                    title: "Teachers Day Booth",
                    description: "Collaborating to celebrate Teachers’ Day and show appreciation.",
                    fullText: "In collaboration with the Chemical Engineering Female Club and the Chemical Engineering Club, we organized a booth in celebration of Teachers’ Day, aiming to express appreciation for faculty members and educators for their continuous support and dedication. The collaborative effort strengthened inter-club engagement and promoted a culture of respect within the academic community.",
                    image: "/299.jpg",
                },
                {
                    date: "september 18, 2025",
                    title: "Green Guardians Hackathon Winners Meeting.",
                    description: "Celebrating the winners and their innovative sustainability solutions.",
                    fullText: "We were honored to hold a celebratory event for the winners of the GWECCC Hackathon, recognizing their outstanding achievements and innovative solutions to sustainability challenges. The celebration was attended by distinguished faculty, including Dr. Saad F. Al-Afnan, Acting Chairman of the Department of Chemical Engineering at KFUPM, and Dr. Basim Abussaud.",
                    image: "/1510.jpg",
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
                    image: "/239.jpg",
                },
                {
                    date: "October 07, 2025",
                    title: "From Campus to Career",
                    description: "A session sharing career journeys from university to the professional world.",
                    fullText: "We hosted Engineer Hanan Al-Quraish and Engineer Hussain Al-Hassan, who shared their amazing stories from why they chose their university majors to how they entered the world of employment. The engineers also shared their insights about what a chemical engineer needs in order to become successful.",
                    image: "/299.jpg",
                },
                {
                    date: "December 09, 2025",
                    title: "English 101 Help session:",
                    description: "A workshop supporting students in preparing for the English 101 final exam.",
                    fullText: "We successfully concluded the English 101 Final Exam Workshop, which demonstrated strong student engagement and active participation. The workshop aimed to support students in their exam preparation by providing practical guidance and effective strategies.",
                    image: "/1510.jpg",
                },
                {
                    date: "December 01, 2025",
                    title: "Process Safety Seminar",
                    description: "An insightful seminar on process safety principles in chemical engineering.",
                    fullText: "Our chapter was honored to host Dr. Christos D. Argyropoulos, who delivered an insightful seminar highlighting the fundamental principles of process safety and its critical role in preventing industrial incidents. The session provided attendees with a comprehensive introduction to key safety concepts essential to chemical engineering practice.",
                    image: "/239.jpg",
                },
            ]
        },
        {
            month: "Industrial Visits,Conferences and competetions:",
            semester: "Spring",
            newsletters: [
                {
                    date: "October 16, 2025",
                    title: "BHIG Visit",
                    description: "An industrial visit offering real-world engineering exposure.",
                    fullText: "We were delighted to organize an industrial visit to Blue Hydrogen Industrial Gases Co. (BHIG) – Jubail, which marked a truly impactful and enriching experience for our members. The visit provi",
                    image: "/299.jpg",
                },
                {
                    date: "september 11, 2025",
                    title: "Green Guardians Hackathon",
                    description: "First place among universities at the Green Guardians Hackathon.",
                    fullText: "Our team secured first place out of 15 universities across GC in the Green Guardians Hackathon, held during the Energy and Climate Conference in Bahrain. This outstanding accomplishment reflects the creativity, dedication, and problem-solving excellence of our students as they tackled real-world sustainability challenges.",
                    image: "/1510.jpg",
                },
                {
                    date: "October 21, 2025",
                    title: "Clubs Fusion",
                    description: "A collaborative competition bringing student clubs together.",
                    fullText: "Our chapter organized Clubs Fusion, a collaborative competition that brought together a diverse group of student clubs across the university. The event provided an engaging platform for participants to unite toward a shared objective, exchange ideas, and showcase their club’s strengths. Clubs Fusion not only strengthened inter-club relationships but also enriched the overall student experience through meaningful cooperation and renewed motivation.",
                    image: "/239.jpg",
                },
                {
                    date: "November 26, 2025",
                    title: "The Shark Tank",
                    description: "A sustainability-focused competition aligned with Saudi Vision 2030.",
                    fullText: "We were proud to conclude the Sustainable Shark Tank Competition, organized in collaboration with the KFUPM Chemical Engineering Club and the KFUPM Energy Club. The competition highlighted innovative student-driven solutions centered on the Net-Zero Waste Circular Economy, in alignment with Saudi Vision 2030. The event featured strong participation, with several teams advancing to the final stage and presenting their outstanding ideas.",
                    image: "/299.jpg",
                },
                {
                    date: "December 03, 2025",
                    title: "The Research Competition",
                    description: "A competition promoting undergraduate research and innovation.",
                    fullText: "We were pleased to organize the Research Competition in collaboration with the KFUPM Chemical Engineering Club and the KFUPM Female Chemical Engineering Club. The competition was designed to strengthen students’ engagement in research activities, promote innovative thinking, and foster a collaborative academic environment.",
                    image: "/1510.jpg",
                },
            ]
        },
        {
            month: "April",
            semester: "Spring",
            newsletters: [
                
                
                
            ]
        },
        {
            month: "May",
            semester: "Spring",
            newsletters: [
                
            ]
        },
    ];

    const handleCardFlip = (monthIndex, cardIndex) => {
        const key = `${monthIndex}-${cardIndex}`;
        setFlippedCards(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    const filteredMonths = searchSemester && searchSemester !== "Fall"
        ? monthsData.filter(month =>
            month.semester.toLowerCase() === searchSemester.toLowerCase()
        )
        : searchSemester === "Fall"
            ? [] // hide cards when "last year" is selected
            : monthsData;

    const styles = {
        container: {
            backgroundColor: "#FFA837",
            color: "#fff",
            minHeight: "100vh",
            padding: "80px 20px",
        },
        hero: {
            textAlign: "center",
            marginBottom: "80px",
            padding: "60px 20px",
            background: "linear-gradient(135deg, #1a1a1a 0%, #494949 100%)",
            borderRadius: "15px",
            maxWidth: "1000px",
            margin: "0 auto 80px",
            position: "relative",
            transition: "all 0.4s ease",
            boxShadow:
                "0 0 0 1px rgba(255,255,255,0.12), 0 0 25px rgba(0,0,0,0.6)",
        },

        title: {
            fontSize: "3.5rem",
            fontWeight: "700",
            marginBottom: "20px",
        },
        subtitle: {
            fontSize: "1.3rem",
            color: "#ccc",
            maxWidth: "700px",
            margin: "0 auto 40px",
            lineHeight: "1.8",
        },
        subscribeForm: {
            display: "flex",
            gap: "15px",
            maxWidth: "600px",
            margin: "0 auto",
            justifyContent: "center",
            flexWrap: "wrap",
        },
        select: {
            flex: 1,
            minWidth: "300px",
            maxWidth: "400px",
            padding: "18px 25px",
            fontSize: "1.1rem",
            fontWeight: "500",
            border: "2px solid #2a2a2a",
            borderRadius: "12px",
            backgroundColor: "#1a1a1a",
            color: "#fff",
            outline: "none",
            transition: "all 0.3s ease",
            cursor: "pointer",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
        },
        monthTitle: {
            fontSize: "5rem",
            fontWeight: "700",
            marginBottom: "40px",
            marginTop: "60px",
            color: "#fff",
            textAlign: "left",
            borderBottom: "3px solid #e87d24",
            paddingBottom: "50px",
            maxWidth: "1200px",
            margin: "60px 0 40px 0",
            paddingLeft: "0px",
        },
        newslettersGrid: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
            gap: "60px",
            marginBottom: "100px",
        },
        newsletterCard: {
            backgroundColor: "transparent",
            borderRadius: "15px",
            overflow: "visible",
            cursor: "pointer",
            perspective: "1000px",
            height: "550px",
        },
        cardInner: {
            position: "relative",
            width: "100%",
            height: "100%",
            transition: "transform 0.6s",
            transformStyle: "preserve-3d",
        },
        cardInnerFlipped: {
            transform: "rotateY(180deg)",
        },
        cardFace: {
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            backgroundColor: "#1a1a1a",
            borderRadius: "15px",
            border: "2px solid #2a2a2a",
            transition: "all 0.3s ease",
        },
        cardBack: {
            transform: "rotateY(180deg)",
            padding: "30px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
        },
        newsletterImage: {
            width: "100%",
            height: "250px",
            objectFit: "cover",
            borderRadius: "15px 15px 0 0",
        },
        newsletterContent: {
            padding: "30px",
        },
        newsletterDate: {
            color: "#e87d24",
            fontSize: "0.95rem",
            fontWeight: "600",
            marginBottom: "10px",
        },
        newsletterTitle: {
            fontSize: "1.8rem",
            fontWeight: "700",
            marginBottom: "15px",
            lineHeight: "1.3",
        },
        newsletterDescription: {
            fontSize: "1rem",
            color: "#ccc",
            lineHeight: "1.7",
            marginBottom: "20px",
        },
        readMoreBtn: {
            color: "#e87d24",
            fontSize: "1rem",
            fontWeight: "600",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            transition: "gap 0.3s ease",
            cursor: "pointer",
            backgroundColor: "transparent",
            border: "none",
            padding: "0",
        },
        backContent: {
            flex: 1,
            overflowY: "auto",
            marginBottom: "20px",
        },
        backText: {
            fontSize: "1rem",
            color: "#ccc",
            lineHeight: "1.8",
            marginBottom: "20px",
        },
        flipBackBtn: {
            backgroundColor: "#e87d24",
            color: "#000",
            padding: "12px 30px",
            fontSize: "1rem",
            fontWeight: "600",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            width: "100%",
        },
        yearbookContainer: {
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 20px",
            backgroundColor: "#1a1a1a",
            borderRadius: "15px",
            overflow: "hidden",
            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.5)",
        },
        yearbookIframe: {
            width: "100%",
            height: "800px",
            border: "none",
            display: "block",
        },
    };

    return (
        <div style={styles.container}>
            {/* Hero Section */}
            <div style={{
                maxWidth: "100%",
                margin: "0 0 80px 0",
                padding: "80px 40px",
                background: "linear-gradient(135deg, #e87d24 0%, #ff6b00 40%, #cc5500 100%)",
                borderRadius: "24px",
                position: "relative",
                overflow: "hidden",
            }}>
                {/* Decorative background circles */}
                <div style={{
                    position: "absolute", top: "-60px", right: "-60px",
                    width: "300px", height: "300px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.08)",
                    pointerEvents: "none",
                }} />
                <div style={{
                    position: "absolute", bottom: "-80px", left: "-40px",
                    width: "250px", height: "250px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.06)",
                    pointerEvents: "none",
                }} />
                <div style={{
                    position: "absolute", top: "30px", left: "200px",
                    width: "120px", height: "120px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.05)",
                    pointerEvents: "none",
                }} />

                {/* Content */}
                <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
                    {/* Badge */}
                    <div style={{
                        display: "inline-block",
                        backgroundColor: "rgba(255,255,255,0.15)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255,255,255,0.3)",
                        borderRadius: "50px",
                        padding: "8px 22px",
                        fontSize: "0.85rem",
                        fontWeight: "600",
                        letterSpacing: "1.5px",
                        textTransform: "uppercase",
                        color: "#fff",
                        marginBottom: "28px",
                    }}>
                        ✦ AIChE KFUPM Chapter
                    </div>

                    <h1 style={{
                        fontSize: "4rem",
                        fontWeight: "800",
                        marginBottom: "20px",
                        color: "#fff",
                        letterSpacing: "-1px",
                        lineHeight: "1.1",
                        textShadow: "0 2px 20px rgba(0,0,0,0.15)",
                    }}>
                        Newsletter
                    </h1>

                    <p style={{
                        fontSize: "1.15rem",
                        color: "rgba(255,255,255,0.85)",
                        maxWidth: "600px",
                        margin: "0 auto 48px",
                        lineHeight: "1.8",
                        fontWeight: "400",
                    }}>
                        Stay updated with our latest news, events, and exclusive insights
                        from the world of chemical engineering.
                    </p>

                    {/* Dropdown */}
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "16px",
                        flexWrap: "wrap",
                    }}>
                        <div style={{ position: "relative" }}>
                            <select
                                value={searchSemester}
                                onChange={(e) => setSearchSemester(e.target.value)}
                                style={{
                                    appearance: "none",
                                    padding: "16px 50px 16px 24px",
                                    fontSize: "1rem",
                                    fontWeight: "600",
                                    border: "2px solid rgba(255,255,255,0.4)",
                                    borderRadius: "50px",
                                    backgroundColor: "rgba(255,255,255,0.12)",
                                    backdropFilter: "blur(10px)",
                                    color: "#fff",
                                    outline: "none",
                                    cursor: "pointer",
                                    minWidth: "220px",
                                    transition: "all 0.3s ease",
                                    boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                                }}
                                onFocus={(e) => {
                                    e.target.style.backgroundColor = "rgba(255,255,255,0.22)";
                                    e.target.style.borderColor = "rgba(255,255,255,0.8)";
                                }}
                                onBlur={(e) => {
                                    e.target.style.backgroundColor = "rgba(255,255,255,0.12)";
                                    e.target.style.borderColor = "rgba(255,255,255,0.4)";
                                }}
                            >
                                <option value="" style={{ backgroundColor: "#e87d24", color: "#fff" }}>All Semesters</option>
                                <option value="Spring" style={{ backgroundColor: "#e87d24", color: "#fff" }}>Term 251</option>
                                <option value="Summer" style={{ backgroundColor: "#e87d24", color: "#fff" }}>Term 252</option>
                                <option value="Fall" style={{ backgroundColor: "#e87d24", color: "#fff" }}>Last Year</option>
                            </select>
                            {/* Custom dropdown arrow */}
                            <div style={{
                                position: "absolute", right: "18px", top: "50%",
                                transform: "translateY(-50%)",
                                pointerEvents: "none",
                                color: "#fff", fontSize: "0.8rem",
                            }}>▼</div>
                        </div>
                    </div>

                    {/* Stats row */}
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "48px",
                        marginTop: "52px",
                        flexWrap: "wrap",
                    }}>
                        {[
                            { number: "15+", label: "Events" },
                            { number: "3", label: "Semesters" },
                            { number: "100+", label: "Members" },
                        ].map((stat, i) => (
                            <div key={i} style={{ textAlign: "center" }}>
                                <div style={{
                                    fontSize: "2rem", fontWeight: "800",
                                    color: "#fff", lineHeight: "1",
                                    textShadow: "0 2px 10px rgba(0,0,0,0.2)",
                                }}>{stat.number}</div>
                                <div style={{
                                    fontSize: "0.85rem", color: "rgba(255,255,255,0.7)",
                                    marginTop: "6px", fontWeight: "500",
                                    textTransform: "uppercase", letterSpacing: "1px",
                                }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            {/* ✅ NEW: Show YearBooklet iframe when "last year" is selected */}
            {searchSemester === "Fall" && (
                <div style={{ padding: "0 30px" }}>
                    <h2 style={{ ...styles.monthTitle, fontSize: "3rem" }}>Year Booklet</h2>
                    <div style={styles.yearbookContainer}>
                        <iframe
                            src="https://online.fliphtml5.com/kslxc/zrfq/"
                            style={styles.yearbookIframe}
                            title="Year Booklet"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}

            {/* Newsletter cards — hidden when "last year" is selected */}
            {searchSemester !== "Fall" && (
                <div style={{ maxWidth: "100%", margin: "0", padding: "0 30px" }}>
                    {filteredMonths.map((monthData, monthIndex) => (
                        <div key={monthIndex}>
                            <h2 style={styles.monthTitle}>{monthData.month}</h2>
                            <div style={styles.newslettersGrid}>
                                {monthData.newsletters.map((newsletter, index) => {
                                    const cardKey = `${monthIndex}-${index}`;
                                    const isFlipped = flippedCards[cardKey];
                                    return (
                                        <div
                                            key={index}
                                            style={styles.newsletterCard}
                                        >
                                            <div
                                                style={{
                                                    ...styles.cardInner,
                                                    ...(isFlipped ? styles.cardInnerFlipped : {})
                                                }}
                                            >
                                                {/* Front of Card */}
                                                <div
                                                    style={styles.cardFace}
                                                    onMouseEnter={(e) => {
                                                        if (!isFlipped) {
                                                            e.currentTarget.style.transform = "translateY(-10px)";
                                                            e.currentTarget.style.boxShadow = "0 15px 40px rgba(232, 125, 36, 0.3)";
                                                            e.currentTarget.style.borderColor = "#e87d24";
                                                        }
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        if (!isFlipped) {
                                                            e.currentTarget.style.transform = "translateY(0)";
                                                            e.currentTarget.style.boxShadow = "none";
                                                            e.currentTarget.style.borderColor = "#2a2a2a";
                                                        }
                                                    }}
                                                >
                                                    <img
                                                        src={newsletter.image}
                                                        alt={newsletter.title}
                                                        style={styles.newsletterImage}
                                                    />
                                                    <div style={styles.newsletterContent}>
                                                        <div style={styles.newsletterDate}>{newsletter.date}</div>
                                                        <h3 style={styles.newsletterTitle}>{newsletter.title}</h3>
                                                        <p style={styles.newsletterDescription}>{newsletter.description}</p>
                                                        <button
                                                            onClick={() => handleCardFlip(monthIndex, index)}
                                                            style={styles.readMoreBtn}
                                                            onMouseEnter={(e) => {
                                                                e.target.style.gap = "12px";
                                                            }}
                                                            onMouseLeave={(e) => {
                                                                e.target.style.gap = "8px";
                                                            }}
                                                        >
                                                            Read More →
                                                        </button>
                                                    </div>
                                                </div>

                                                {/* Back of Card */}
                                                <div style={{ ...styles.cardFace, ...styles.cardBack }}>
                                                    <div style={styles.backContent}>
                                                        <div style={styles.newsletterDate}>{newsletter.date}</div>
                                                        <h3 style={styles.newsletterTitle}>{newsletter.title}</h3>
                                                        <p style={styles.backText}>{newsletter.fullText}</p>
                                                    </div>
                                                    <button
                                                        onClick={() => handleCardFlip(monthIndex, index)}
                                                        style={styles.flipBackBtn}
                                                        onMouseEnter={(e) => {
                                                            e.target.style.transform = "translateY(-2px)";
                                                            e.target.style.boxShadow = "0 5px 15px rgba(232, 125, 36, 0.4)";
                                                        }}
                                                        onMouseLeave={(e) => {
                                                            e.target.style.transform = "translateY(0)";
                                                            e.target.style.boxShadow = "none";
                                                        }}
                                                    >
                                                        ← Back to Overview
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Newsletter;