import React, { useState } from "react";

function Newsletter() {
    const [searchSemester, setSearchSemester] = useState("");
    const [flippedCards, setFlippedCards] = useState({});

    const monthsData = [
        {
            month: "January",
            semester: "Spring",
            newsletters: [
                {
                    date: "January 15, 2024",
                    title: "New Year, New Innovations",
                    description: "Kicking off the year with exciting projects and research initiatives.",
                    fullText: "This edition explores the innovative projects launching in the new year. Our members are tackling challenges in sustainable chemistry, process optimization, and green energy solutions. We highlight three major research initiatives that promise to make significant impacts in the field. From novel catalyst development to advanced polymer synthesis, our teams are pushing the boundaries of what's possible in chemical engineering.",
                    image: "/239.jpg",
                },
                {
                    date: "January 22, 2024",
                    title: "Winter Research Symposium",
                    description: "Highlighting breakthrough discoveries from our research teams.",
                    fullText: "The Winter Research Symposium brought together students, faculty, and industry professionals to share groundbreaking findings. This year's presentations covered topics ranging from bio-based materials to advanced separation techniques. We're proud to showcase the dedication and brilliance of our research community as they work to solve real-world problems through innovative chemical engineering solutions.",
                    image: "/299.jpg",
                },
                {
                    date: "January 29, 2024",
                    title: "Industry Partnership Announcements",
                    description: "New collaborations with leading chemical companies.",
                    fullText: "We're thrilled to announce new partnerships with several Fortune 500 chemical companies. These collaborations will provide our members with exclusive internship opportunities, mentorship programs, and access to cutting-edge research facilities. The partnerships represent a significant step forward in bridging the gap between academic learning and industry practice, ensuring our members are well-prepared for successful careers.",
                    image: "/1510.jpg",
                },
            ]
        },
        {
            month: "February",
            semester: "Spring",
            newsletters: [
                {
                    date: "February 5, 2024",
                    title: "Career Development Workshop",
                    description: "Professional skills and networking event highlights.",
                    fullText: "Our Career Development Workshop series continued with sessions on resume building, interview techniques, and professional networking. Industry experts shared invaluable insights on navigating the job market and building meaningful professional relationships. Attendees gained practical skills and confidence to pursue their career goals in the competitive chemical engineering field.",
                    image: "/239.jpg",
                },
                {
                    date: "February 12, 2024",
                    title: "Student Innovation Challenge",
                    description: "Showcasing creative solutions to real-world problems.",
                    fullText: "The Student Innovation Challenge pushed our members to think creatively about solving pressing industry challenges. Teams presented innovative solutions ranging from waste reduction strategies to energy-efficient production methods. The winning team developed a novel approach to carbon capture that has attracted interest from major industry players.",
                    image: "/299.jpg",
                },
                {
                    date: "February 26, 2024",
                    title: "Alumni Success Stories",
                    description: "Where are they now? Catching up with our graduates.",
                    fullText: "We reconnected with several distinguished alumni who shared their career journeys and offered advice to current members. From startup founders to research directors at Fortune 500 companies, our alumni demonstrate the diverse and impactful careers available in chemical engineering. Their stories inspire and guide the next generation of engineers.",
                    image: "/1510.jpg",
                },
            ]
        },
        {
            month: "March",
            semester: "Spring",
            newsletters: [
                {
                    date: "March 4, 2024",
                    title: "Spring Break Projects",
                    description: "Members working on exciting research during the break.",
                    fullText: "While many students took a well-deserved break, several dedicated members continued their research projects. This edition highlights their work on everything from renewable energy systems to advanced materials development. Their commitment to scientific excellence, even during breaks, exemplifies the passion and dedication that defines our organization.",
                    image: "/239.jpg",
                },
                {
                    date: "March 18, 2024",
                    title: "Sustainability Initiatives",
                    description: "Our commitment to green chemistry and environmental impact.",
                    fullText: "Environmental sustainability is at the core of modern chemical engineering. This month, we launched several green chemistry initiatives focused on reducing waste, improving energy efficiency, and developing eco-friendly processes. Our members are learning to balance industrial needs with environmental responsibility, preparing them to be leaders in sustainable chemical engineering.",
                    image: "/299.jpg",
                },
                {
                    date: "March 25, 2024",
                    title: "Conference Preparations",
                    description: "Getting ready for the national chemical engineering conference.",
                    fullText: "Teams are finalizing their presentations for the upcoming national conference. This year, our members will present on topics including process simulation, reaction kinetics, and sustainable manufacturing. The conference offers a valuable opportunity to network with professionals, learn about cutting-edge research, and represent our organization on a national stage.",
                    image: "/1510.jpg",
                },
            ]
        },
        {
            month: "April",
            semester: "Spring",
            newsletters: [
                {
                    date: "April 8, 2024",
                    title: "Spring Competition Results",
                    description: "Celebrating our award-winning teams and their innovative solutions.",
                    fullText: "Our teams excelled at this year's spring competitions, bringing home multiple awards and recognition. From design competitions to research presentations, our members demonstrated exceptional technical skills and creativity. We're incredibly proud of their achievements and the dedication they showed throughout the preparation process. These victories showcase the caliber of talent in our organization.",
                    image: "/239.jpg",
                },
                {
                    date: "April 15, 2024",
                    title: "Guest Speaker Series",
                    description: "Insights from industry leaders and pioneering researchers.",
                    fullText: "This month's speaker series featured renowned experts who shared their experiences and insights on the future of chemical engineering. Topics ranged from pharmaceutical manufacturing to sustainable plastics development. These sessions provide invaluable exposure to real-world applications and inspire our members to pursue ambitious career goals.",
                    image: "/299.jpg",
                },
                {
                    date: "April 29, 2024",
                    title: "End of Semester Celebration",
                    description: "Recognizing achievements and looking ahead to summer.",
                    fullText: "As the semester concludes, we celebrated our collective accomplishments at our annual spring banquet. Award ceremonies recognized outstanding members, successful projects, and academic excellence. Looking ahead to summer, we're excited about upcoming internships, research opportunities, and the chance to apply classroom knowledge in real-world settings.",
                    image: "/1510.jpg",
                },
            ]
        },
        {
            month: "May",
            semester: "Spring",
            newsletters: [
                {
                    date: "May 6, 2024",
                    title: "Graduation Spotlight",
                    description: "Honoring our graduates and their remarkable journeys.",
                    fullText: "We proudly celebrate our graduating members who are moving on to exciting careers and graduate programs. Their achievements during their time with us have been remarkable, from research publications to competition victories. As they embark on new adventures, they carry with them the skills, knowledge, and connections developed through our organization. We wish them tremendous success!",
                    image: "/239.jpg",
                },
                {
                    date: "May 13, 2024",
                    title: "Summer Internship Preview",
                    description: "Where our members will be working this summer.",
                    fullText: "Our members have secured internships at some of the most prestigious companies in the industry. From oil and gas giants to pharmaceutical innovators, they'll gain hands-on experience in diverse sectors of chemical engineering. This edition features interviews with several interns discussing their expectations, goals, and what they hope to learn during their placements.",
                    image: "/299.jpg",
                },
                {
                    date: "May 27, 2024",
                    title: "Research Grants Awarded",
                    description: "Funding secured for exciting summer research projects.",
                    fullText: "Several members have been awarded competitive research grants to pursue independent projects over the summer. These grants support investigations into topics like advanced catalysis, bioprocessing, and materials science. The funding enables our members to conduct meaningful research that contributes to their fields while developing valuable research skills.",
                    image: "/1510.jpg",
                },
            ]
        },
        {
            month: "June",
            semester: "Summer",
            newsletters: [
                {
                    date: "June 3, 2024",
                    title: "Summer Kickoff",
                    description: "Updates on summer programs and research opportunities.",
                    fullText: "Summer is in full swing with members engaged in internships, research projects, and professional development activities. This edition provides an overview of summer initiatives and highlights opportunities for involvement. Whether gaining industry experience or conducting research, our members are making the most of their summer to advance their careers and knowledge.",
                    image: "/239.jpg",
                },
                {
                    date: "June 17, 2024",
                    title: "Internship Diaries",
                    description: "First-hand experiences from members at top companies.",
                    fullText: "Members share their internship experiences, offering insights into day-to-day work at leading chemical companies. From process engineering at refineries to quality control in pharmaceutical manufacturing, these stories provide a window into the diverse career paths available in chemical engineering. Learn what it's really like to work in the industry!",
                    image: "/299.jpg",
                },
                {
                    date: "June 24, 2024",
                    title: "Lab Safety Workshop",
                    description: "Essential training for summer research participants.",
                    fullText: "Safety is paramount in chemical engineering. Our comprehensive lab safety workshop covered everything from proper handling of hazardous materials to emergency response procedures. Members engaged in hands-on training to ensure they can conduct research safely and responsibly. This training is essential preparation for both academic and industrial laboratory work.",
                    image: "/1510.jpg",
                },
            ]
        },
        {
            month: "July",
            semester: "Summer",
            newsletters: [
                {
                    date: "July 8, 2024",
                    title: "Mid-Summer Research Update",
                    description: "Progress reports from ongoing summer projects.",
                    fullText: "Halfway through summer, our researchers share updates on their projects. Preliminary results are promising across a range of topics, from process optimization to materials development. This edition highlights the innovative approaches our members are taking to solve complex engineering challenges and the skills they're developing through hands-on research experience.",
                    image: "/239.jpg",
                },
                {
                    date: "July 15, 2024",
                    title: "Industry Trends Report",
                    description: "Latest developments in petrochemical innovations.",
                    fullText: "The chemical industry continues to evolve rapidly. This special report examines emerging trends in petrochemical processing, including advances in catalytic cracking, sustainable feedstocks, and digital process control. Understanding these trends helps our members stay current with industry developments and prepare for future career opportunities in this dynamic sector.",
                    image: "/299.jpg",
                },
                {
                    date: "July 29, 2024",
                    title: "Fall Semester Preview",
                    description: "What to expect in the upcoming academic year.",
                    fullText: "As summer winds down, we're already planning for an exciting fall semester. This preview outlines upcoming events, new initiatives, and opportunities for involvement. From guest lectures to hands-on workshops, we have a full calendar designed to enhance technical skills, build professional networks, and create memorable experiences for our members.",
                    image: "/1510.jpg",
                },
            ]
        },
        {
            month: "August",
            semester: "Summer",
            newsletters: [
                {
                    date: "August 5, 2024",
                    title: "Welcome Back Edition",
                    description: "Preparing for the fall semester with events and opportunities.",
                    fullText: "Welcome back! As the new academic year approaches, we're excited to reconnect with returning members and welcome newcomers. This edition provides essential information about fall activities, membership opportunities, and how to get involved. Whether you're a seasoned member or considering joining, there's a place for you in our vibrant community.",
                    image: "/239.jpg",
                },
                {
                    date: "August 12, 2024",
                    title: "New Member Recruitment",
                    description: "Join us! Information about becoming part of our community.",
                    fullText: "Interested in joining our organization? This guide covers everything prospective members need to know, from our mission and values to the benefits of membership. Learn about leadership opportunities, networking events, and technical workshops that will enhance your chemical engineering education. We're looking forward to meeting enthusiastic new members!",
                    image: "/299.jpg",
                },
                {
                    date: "August 26, 2024",
                    title: "Summer Research Showcase",
                    description: "Final presentations from summer research teams.",
                    fullText: "Our summer researchers presented their final results at a special showcase event. Projects spanned diverse areas of chemical engineering, with impressive findings that demonstrate the talent and dedication of our members. Several projects are being prepared for publication or presentation at national conferences, representing significant contributions to their respective fields.",
                    image: "/1510.jpg",
                },
            ]
        },
        {
            month: "September",
            semester: "Fall",
            newsletters: [
                {
                    date: "September 2, 2024",
                    title: "Fall Semester Kickoff",
                    description: "New member orientation and exciting projects ahead.",
                    fullText: "The fall semester is off to an energetic start! Our kickoff event welcomed new members and reunited returning ones. We outlined plans for the semester, including technical workshops, industry visits, and competition preparations. The enthusiasm and talent in the room promise an outstanding semester ahead as we work together on ambitious projects and initiatives.",
                    image: "/239.jpg",
                },
                {
                    date: "September 16, 2024",
                    title: "Team Building Events",
                    description: "Building connections through collaborative activities.",
                    fullText: "Strong teams are built on trust and collaboration. Our team-building events combined fun activities with practical exercises that develop communication and problem-solving skills. These events help members form lasting friendships while learning to work effectively in groups—an essential skill for successful chemical engineers in academic and professional settings.",
                    image: "/299.jpg",
                },
                {
                    date: "September 30, 2024",
                    title: "Industry Night Preview",
                    description: "Upcoming networking opportunities with top employers.",
                    fullText: "Industry Night is one of our signature events, bringing together students and representatives from leading chemical companies. This preview highlights participating companies and offers tips for making the most of networking opportunities. Whether seeking internships, full-time positions, or simply learning about career options, Industry Night is an invaluable experience for all members.",
                    image: "/1510.jpg",
                },
            ]
        },
        {
            month: "October",
            semester: "Fall",
            newsletters: [
                {
                    date: "October 7, 2024",
                    title: "Student Spotlight",
                    description: "Celebrating achievements in research and competitions.",
                    fullText: "This month we spotlight exceptional members who have made outstanding contributions to research, academics, and our organization. Their achievements range from published papers to competition victories, demonstrating the high caliber of talent in our community. These success stories inspire all members to pursue excellence in their own endeavors.",
                    image: "/239.jpg",
                },
                {
                    date: "October 14, 2024",
                    title: "Halloween Lab Social",
                    description: "Mixing fun and science at our annual themed event.",
                    fullText: "Who says chemical engineers can't have fun? Our Halloween Lab Social combined spooky decorations with fascinating science demonstrations. Members enjoyed themed experiments, costumes, and camaraderie in a relaxed social setting. Events like these remind us that while we're serious about engineering, we also value community and enjoyment in everything we do.",
                    image: "/299.jpg",
                },
                {
                    date: "October 28, 2024",
                    title: "Graduate School Guidance",
                    description: "Tips and insights for pursuing advanced degrees.",
                    fullText: "Considering graduate school? This comprehensive guide covers the application process, choosing programs, securing funding, and succeeding in graduate studies. Current graduate students and faculty members shared their experiences and advice. Whether pursuing a master's degree or PhD, this resource provides valuable information to help members make informed decisions about their educational futures.",
                    image: "/1510.jpg",
                },
            ]
        },
        {
            month: "November",
            semester: "Fall",
            newsletters: [
                {
                    date: "November 4, 2024",
                    title: "Industry Insights",
                    description: "Exclusive interviews with leading professionals.",
                    fullText: "We conducted in-depth interviews with industry leaders who shared insights into current challenges and opportunities in chemical engineering. Topics included digital transformation in manufacturing, sustainability initiatives, and emerging career paths. These perspectives from experienced professionals provide valuable context for understanding where the industry is headed and how to prepare for future opportunities.",
                    image: "/239.jpg",
                },
                {
                    date: "November 18, 2024",
                    title: "Thanksgiving Reflections",
                    description: "Gratitude and achievements from our community.",
                    fullText: "As we approach Thanksgiving, we reflect on the achievements and growth of our organization this year. From successful events to individual accomplishments, there's much to be grateful for. Members share what they're thankful for and how our community has impacted their education and personal development. This spirit of gratitude strengthens the bonds that make our organization special.",
                    image: "/299.jpg",
                },
                {
                    date: "November 25, 2024",
                    title: "Year-End Projects Launch",
                    description: "Ambitious initiatives for the final semester push.",
                    fullText: "The semester's final stretch sees the launch of several ambitious projects. Teams are tackling complex design challenges, conducting research experiments, and preparing presentations for upcoming conferences. This edition highlights these initiatives and the dedicated members driving them forward. Their hard work will culminate in impressive results that showcase our organization's technical capabilities.",
                    image: "/1510.jpg",
                },
            ]
        },
        {
            month: "December",
            semester: "Fall",
            newsletters: [
                {
                    date: "December 2, 2024",
                    title: "Finals Week Support",
                    description: "Resources and encouragement for exam season.",
                    fullText: "Finals week can be stressful, but you're not alone! We're offering study groups, tutoring sessions, and stress-relief activities to help members succeed. This edition includes study tips, time management strategies, and reminders to take care of your mental and physical health. Remember, your well-being matters just as much as your grades. Good luck to everyone!",
                    image: "/239.jpg",
                },
                {
                    date: "December 9, 2024",
                    title: "Holiday Celebration",
                    description: "End of semester festivities and award ceremonies.",
                    fullText: "Our annual holiday celebration brought the semester to a joyful close. Awards recognized outstanding members, successful projects, and significant contributions to our organization. Between the festivities, we reflected on the semester's accomplishments and looked forward to the opportunities ahead. Thank you to everyone who made this semester memorable and successful!",
                    image: "/299.jpg",
                },
                {
                    date: "December 16, 2024",
                    title: "Year in Review",
                    description: "Reflecting on an incredible year of achievements.",
                    fullText: "What a year it has been! From groundbreaking research to memorable social events, we've achieved remarkable things together. This comprehensive review highlights major milestones, successful initiatives, and the growth of our organization. As we close out the year, we're filled with pride for what we've accomplished and excitement for the future. Here's to an even better year ahead!",
                    image: "/1510.jpg",
                },
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

    const filteredMonths = searchSemester
        ? monthsData.filter(month =>
            month.semester.toLowerCase() === searchSemester.toLowerCase()
        )
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
    };

    return (
        <div style={styles.container}>
            {/* Hero Section */}
            <div
                style={{
                    ...styles.hero,
                    maxWidth: "100%",
                    margin: "0 0 80px 0",
                }}
            >
                <h1 style={styles.title}>Newsletter</h1>
                <p style={styles.subtitle}>
                    Stay updated with our latest news, events, and exclusive insights from the world
                    of chemical engineering. Filter by semester to find what you're looking for!
                </p>
                <div style={styles.subscribeForm}>
                    <select
                        value={searchSemester}
                        onChange={(e) => setSearchSemester(e.target.value)}
                        style={styles.select}
                        onFocus={(e) => {
                            e.target.style.borderColor = "#e87d24";
                            e.target.style.boxShadow = "0 4px 20px rgba(232, 125, 36, 0.4)";
                        }}
                        onBlur={(e) => {
                            e.target.style.borderColor = "#2a2a2a";
                            e.target.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.3)";
                        }}
                    >
                        <option value="">all semester</option>
                        <option value="Spring">term 251</option>
                        <option value="Summer">term 252</option>
                        <option value="Fall">last year</option>
                    </select>
                </div>
            </div>

            {/* Past Newsletters by Month */}
            <div
                style={{
                    maxWidth: "100%",
                    margin: "0",
                    padding: "0 30px",
                }}
            >
                <h2
                    style={{
                        fontSize: "2.5rem",
                        fontWeight: "700",
                        textAlign: "center",
                        marginBottom: "50px",
                    }}
                >          
                </h2>

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
        </div>
    );
}

export default Newsletter;