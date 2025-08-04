import CourseCard from "./CourseCard";

export default function Courses() {
  const courses = [
    {
      title:
        "Building Production-Ready React Apps: Setup to Deployment with Firebase",
      author: "Sandy Ludosky",
      date: "Mar 2023",
      skills: ["React.js", "Single Page Applications"],
      certificateLink:
        "https://www.linkedin.com/learning/certificates/d651f5148b2fc66211bbe56f83609276d17ab7468e71857ace179f7f5701d805?trk=share_certificate",
    },
    {
      title: "Scrum Essential Training",
      author: "Carlos Solís",
      date: "Jun 2022",
      skills: ["Scrum"],
      certificateLink:
        "https://www.linkedin.com/learning/certificates/53ce1cd453ec22b1e8b2e84337502f95017ecbff5af310f002fa6f2ced0ca5e8?trk=share_certificate",
    },
    {
      title: "Windows Server 2016: Installation and Configuration",
      author: "Santi Rofes",
      date: "Feb 2018",
      skills: ["Windows Server"],
      certificateLink:
        "https://www.linkedin.com/learning/certificates/3ee907f84f0e4217c827d54f8df749bbf8f2081d681510508abbc738ed2b1547?trk=share_certificate",
    },
    {
      title: "Python GUI Development with Tkinter",
      author: "Barron Stone",
      date: "Feb 2024",
      skills: ["Python (Programming Language)", "Tkinter"],
      certificateLink:
        "https://www.linkedin.com/learning/certificates/1bbfe54c337716e2d313fea91dbfde3a64fc2db2501f41b833500bdb3fee2336?trk=share_certificate",
    },
    {
      title: "Programming Foundations: Databases",
      author: "Scott Simpson",
      date: "Dec 2024",
      skills: ["Databases", "Database Development"],
      certificateLink:
        "https://www.linkedin.com/learning/certificates/617014b6f626f799ff0129a51e02c2dc992aa59e790d9a27e1a7586259994929?trk=share_certificate",
    },
    {
      title: "SQL Practice: Intermediate Queries",
      author: "Scott Simpson",
      date: "Sep 2023",
      skills: ["Database Queries", "SQL"],
      certificateLink:
        "https://www.linkedin.com/learning/certificates/c1a5f77e25b35d8beb3642c163ed12f2bb56c5d1ef0682e910d10206544fa442?trk=share_certificate",
    },
    {
      title: "Learning MySQL Development",
      instructor: "Brad Wheeler",
      date: "Jul 2023",
      skills: ["MySQL"],
      certificateLink:
        "https://www.linkedin.com/learning/certificates/0dadfb8f3d6a95e1b36754378a09d45c2538b80d98b7590132b8359ad93624a5?trk=share_certificate",
    },
    {
      title: "Quick Start Guide to SQL",
      instructor: "Deepa Maddala",
      date: "Sep 2024",
      skills: ["SQL"],
      certificateLink:
        "https://www.linkedin.com/learning/certificates/dfeb9447b063984a036548013e178778b0dfbb6d3913eb1c4f84b7a11f666b1f?trk=share_certificate",
    },
    {
      title: "Learning SQL Programming",
      instructor: "Scott Simpson",
      date: "Dec 2023",
      skills: ["SQL"],
      certificateLink:
        "https://www.linkedin.com/learning/certificates/1dffb937c2afb989e4a60e669a154070644ee00a223b46477d7d24b537114b33?trk=share_certificate",
    },
    {
      title:
        "Cisco Networking Foundations: Wireless Networks, Services, Security, and Virtualization",
      author: "Kevin Wallace",
      date: "Jan 2025",
      skills: ["Cisco Networking", "Network Administration"],
      certificateLink:
        "https://www.linkedin.com/learning/certificates/b372e8f8e5d6e40c5238ed3cb907392a0771c4052562aee80f4231c1c23f3d2e?trk=share_certificate",
    },
    {
      title: "Python Essential Training",
      instructor: "Ana María Pinto",
      date: "Feb 2022",
      skills: ["Python (Programming Language)"],
      certificateLink:
        "https://www.linkedin.com/learning/certificates/c5634550b6a23d4b8b414705e503b6e1164048af55a4dfa8c41943bf8ef246f6?trk=share_certificate",
    },
    {
      title: "Python Advanced",
      author: "Ana María Pinto",
      date: "Jul 2022",
      skills: ["Python (Programming Language)"],
      certificateLink:
        "https://www.linkedin.com/learning/certificates/ee0c9053c1cf9084c2281a544a0f034fbf8d50b99596258406d922b1dc754b54?trk=share_certificate",
    },
    {
      title: "Python Object-Oriented Programming",
      author: "Joe Marini",
      date: "Jan 2025",
      skills: [
        "Python (Programming Language)",
        "Object-Oriented Programming (OOP)",
      ],
      certificateLink:
        "https://www.linkedin.com/learning/certificates/55ed2d5798e1e87860961bc69aeed9d0c4ba86f1c92e19436353f7e626c7ef2f?trk=share_certificate",
    },
    {
      title: "Code Challenge: Python",
      author: "Ana María Pinto",
      date: "Nov 2022",
      skills: ["Python (Programming Language)"],
      certificateLink:
        "https://www.linkedin.com/learning/certificates/ff536644e5b41af06c3f69b3e142bfa1d6ad750c75b7ecb6180a386ffa510c29?trk=share_certificate",
    },
    {
      title: "Programming Foundations: Beyond the Fundamentals",
      author: "Sasha Vodnik and Natalia Corea",
      date: "Jun 2023",
      skills: ["Python (Programming Language)", "Programming Languages"],
      certificateLink:
        "https://www.linkedin.com/learning/certificates/5318c6cd17df7b52853ea63fe7d2f410fa26f24918cb79cfe542bffcaddb4e4a?trk=share_certificate",
    },
    {
      title: "Programming Foundations: Fundamentals",
      author: "Gabriela García",
      date: "Mar 2021",
      skills: ["Coding Standards"],
      certificateLink:
        "https://www.linkedin.com/learning/certificates/9e1bd0040ef6ff6333427517e23a89aad5045d0def8e6916a29cbeaf6659d076?trk=share_certificate",
    },
    {
      title: "Excel Essential Training (Microsoft 365) (2022)",
      author: "Dennis Taylor",
      date: "Jul 2023",
      skills: ["Microsoft Excel"],
      certificateLink:
        "https://www.linkedin.com/learning/certificates/df0c2e6954c4e50f4c2d5789460d7d6b7804005f41fa9e2f6ec5684956fb4a74?trk=share_certificate",
    },
    {
      title: "Agile Software Development: Scrum for Developers",
      author: "Shashi Shekhar",
      date: "Feb 2023",
      skills: ["Agile Software Development", "Scrum"],
      certificateLink:
        "https://www.linkedin.com/learning/certificates/ff536644e5b41af06c3f69b3e142bfa1d6ad750c75b7ecb6180a386ffa510c29?trk=share_certificate",
    },
  ];

  return (
    <div className="relative group bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 shadow-xl transition-all duration-300 hover:scale-102 hover:shadow-2xl hover:bg-white/20 animate-pulse-slow hover:animate-none">
      <div className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-pink-500/30 via-white/20 to-indigo-500/30 blur-md"></div>

      <div className="relative z-10 space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-semibold text-white">Cursos</h3>
          <a
            href="https://www.linkedin.com/in/h%C3%A9ctor-iv%C3%A1n-cruz-alayola-39149b290/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 underline text-sm transition-all duration-300 hover:text-blue-400 hover:underline hover:translate-y-[-2px]"
          >
            Ver perfil en LinkedIn
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </div>
  );
}
